const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const blogRoutes = require('./routes/blogRoutes')

mongoose.connect('mongodb://localhost/blogs', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(9000, () => { })
    })
    .catch((err) => {
        console.log(err)
    })

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use(blogRoutes)
