const express = require('express')
const {Router} = require('express')
const route = Router();
const controller = require('../controller/controller')
const path = require('path')
const uploadPath = path.join(__dirname, '../uploads')  
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath)       
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,uniqueSuffix + '-' + file.fieldname + file.originalname )
    }
  })
const upload = multer({
    storage
})

route.get('/', controller.home)

route.post('/signup', controller.signup_post)

route.post('/login', controller.login_post)

route.post('/createpage', upload.single('image'), controller.create_page)

route.get('/page/:page', controller.page)

route.get('/tag/:tag', controller.tag)

route.get('/getUser/:token', controller.getUser)

module.exports = route





