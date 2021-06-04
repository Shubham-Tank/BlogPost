const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25
    },
    introduction: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100
    },
    mainbody: {
        type: String,
        required: true,
        minlength: 10
    },
    author: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        minlength: 8
    }
}, { timestamps: true })

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog