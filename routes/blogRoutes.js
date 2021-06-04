const express = require('express')
const controller = require('../controllers/blogController.js')
const router = express.Router()

router.get('/', controller.index)

router.get('/blog/:id', controller.singleBlog)

router.get('/createPost', controller.createPost_get)

router.post('/createPost', controller.createPost_post)

router.get('/about', controller.about)

module.exports = router