const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs');



router.get('/getTypes', async (ctx) => {
    const Type = mongoose.model('Type');
    await Type.find({}).exec().then(res => {
        ctx.body = res;
    })
});

module.exports = router;