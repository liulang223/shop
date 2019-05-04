const mongoose = require('mongoose')
const Schema = mongoose.Schema
//数据表模型
const userSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userName: {unique: true,type:String},
    passWord: String,
    createDate: {type: Date,default: Date.now()}
});
mongoose.model('User',userSchema);