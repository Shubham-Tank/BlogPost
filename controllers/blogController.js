const Blog = require('../models/blog')

const index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { data: result })
        })
        .catch((err) => {
            console.log(err)
        })
}

const singleBlog = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then((result) => {
            res.render('blog', { result })
        })
        .catch((err) => { console.log(err) })
}

const createPost_get = (req, res) => {
    res.render('createPost')
}

const createPost_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err)
        })
}

const about = (req, res) => {
    res.render('about')
}

module.exports = {
    index,
    singleBlog,
    createPost_get,
    createPost_post,
    about
}