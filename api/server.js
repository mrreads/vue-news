const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');

var bodyParser = require('koa-bodyparser');

const { encrypt, decrypt } = require('./crypto');
const config = require('./config');

const app = new Koa();
const router = new Router().prefix('/api');

app.use(bodyParser());


const mysql = require('mysql2/promise');

router.get('/', (ctx, next) => {
  ctx.body = 'ok';
});

router.get('/posts', async (ctx, next) => {
    let start = ` LIMIT ${ctx.request.query.s}, 10`;

    let category = ''
    if (ctx.request.query.c)
    {
        category = ` AND posts.id_category = ${ctx.request.query.c} `;
    }
    
    const connection = await mysql.createConnection(config.connection);
    let query = `SELECT 
                    posts.id,
                    posts.created_at,
                    posts.pretext,
                    posts.heading,
                    posts.id_category as 'category_id',
                    posts.id_user as 'user_id',
                    categories.name as 'category_name',
                    users.fullname as 'user_fullname'
                FROM 
                    posts,
                    users, 
                    categories
                WHERE
                    categories.id = posts.id_category
                AND
                    users.id = posts.id_user
                ${category}
                ORDER BY posts.id DESC
                ${start}`;
    const [rows] = await connection.execute(query);
    if (rows)
        ctx.body = rows;
    else
        ctx.body = [];
});

router.get('/posts/:id', async (ctx, next) => {
    const id = ctx.params.id;
    
    const connection = await mysql.createConnection(config.connection);
    let query = `SELECT 
                    posts.id,
                    posts.created_at,
                    posts.pretext,
                    posts.heading,
                    posts.id_category as 'category_id',
                    posts.id_user as 'user_id',
                    categories.name as 'category_name',
                    users.fullname as 'user_fullname',
                    posts.text
                FROM 
                    posts,
                    users, 
                    categories
                WHERE
                    categories.id = posts.id_category
                AND
                    users.id = posts.id_user
                AND
                    posts.id = ${id}`;
    const rows = await connection.execute(query);
    ctx.body = rows[0][0];
});

router.get('/categories', async (ctx) => {
    const connection = await mysql.createConnection(config.connection);
    const [rows] = await connection.execute("SELECT * FROM categories");
    if (rows)
        ctx.body = rows;
    else
        ctx.body = [];
});

router.get('/categories/:id', (ctx, next) => {
    const id = ctx.params.id;
});

router.post('/signup', async (ctx) => {
    const data = ctx.request.body
    const connection = await mysql.createConnection(config.connection);
    
    let body = [];

    let queryEmail = `SELECT COUNT(*) as 'count' FROM users WHERE email = '${data.email}';`;
    const rowsEmail = await connection.execute(queryEmail);
    const emailCount = rowsEmail[0][0]['count'];
    if (emailCount > 0)
    {
        body.push("email error");
    }
    
    let queryLogin = `SELECT COUNT(*) as 'count' FROM users WHERE login = '${data.login}';`;
    const rowsLogin = await connection.execute(queryLogin);
    const loginCount = rowsLogin[0][0]['count'];
    if (loginCount > 0)
    {
        body.push("login error");
    }

    if (emailCount == 0 && loginCount == 0)
    {
        let passwordHash = JSON.stringify(encrypt(data.password));
        
        let queryAdd = `INSERT INTO  users (id, created_at, fullname, login, passsord, email) VALUES (NULL, CURRENT_TIMESTAMP, '${data.fullname}', '${data.login}', '${passwordHash}', '${data.email}');`;
        await connection.execute(queryAdd);

        //body.push(queryAdd);
        body.push("success");
    }

    ctx.body = body;
});

var options = {
    mode: 'no-cors'
};

app.use(cors(options))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000);