const mongoose = require('mongoose')
const db = 'mongodb://localhost/shop'
//引入Schema
const glob = require('glob')
const path = require('path')
exports.initShemas = () =>{
    //当前项目绝对地址, 全部引入
    glob.sync(path.resolve(__dirname,'./model','*.js')).forEach(require);
}

exports.connect = () =>{
    //连接数据库
    mongoose.connect(db,{useNewUrlParser: true});
    //监听连接错误
    mongoose.connection.on('disconnected', ()=>{
        mongoose.connect(db);
    });
    //链接错误
    mongoose.connection.on('error', err=>{
        console.log(err);
        mongoose.connect(db);
        
    });
    //连接成功
    mongoose.connection.on('open',()=>{
        console.log('mongodb connected success');
        
    })

}