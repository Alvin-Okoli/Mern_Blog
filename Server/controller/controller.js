const path = require("path")
const {User, Blog} = require('../model/user')
const jwt = require('jsonwebtoken')
const moment = require('moment');


const maxAge = 3*24*60*60;
const createToken = (id)=>{
  const token = jwt.sign(id, 'This blog is awaesome and would tell the african story', {expiresIn: maxAge})
  return token
}


const handleErrors = (err)=>{
  const errors = {email:'', password: ''}

  if(err.message === 'incorrect email'){
    errors.email = 'this email is incorrect'
  }

  if(err.message === 'incorrect password'){
    errors.password = 'wrong password'
  }

  if(err.code === 11000){
    errors.email = 'email already in use'
  }

  if(err.message.includes('user validation failed')){
    Object.values(err.errors).forEach(({properties})=>{
      errors[properties.path] = properties.message
    })
    return errors
  }
}

module.exports.signup_post = async (req, res)=>{
  const {email, password} = req.body
  console.log(email, password)

  try{
    const user = await User.create({email, password})
    const token = createToken(user._id)
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000})
    res.status(200).json(user)
  }
  catch(err){
    console.log(err)
    const errors = handleErrors(err)
    res.status(400).send(errors)
  }
}


module.exports.login_post = async (req, res)=>{
  const {email, password} = req.body
  console,log(email, password)

  try{
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000})
    res.status(200).send({user: user._id})
  }
  catch(err){
    console.log(err)
    const errors = handleErrors(err)
    res.status(400).send(errors)
  }
}

module.exports.logout_get = (req, res)=> {
  res.status(200).send('logged out')
}

module.exports.home = async(req, res)=>{
  const page = req.query.p || 0
  const blogSent = 15
  
  const index = await Blog.find().skip(page * blogSent).limit(blogSent)

  res.status(200).json(index)
}

module.exports.create_page = async (req, res)=>{

  const image = {
  mimeType: req.file.mimetype,
  filename: req.file.filename
}

console.log(req.file)

  const {title, snippet, tag, body} = req.body

  console.log( 'This are the infos: ', title, snippet, tag, body, image)

  try{
    const blogs = await Blog.create({title, snippet, tag, body, image})
    const blog = {
      title: blogs.title,
      snippet: blogs.snippet,
      body: blogs.body,
      tag: blogs.tag,
      image: blogs.image
    }
    res.status(200).json({blog, 'done': 'alright'})
  }

  catch(err){
    console.log(err)
    res.status(400).send(err)
  }
}

module.exports.page = async(req, res)=>{
  const id = req.params.page;
  console.log('its an id ' +id)
  try{
    const index = await Blog.findById(id)
    res.status(200).json(index)
  }
    catch(err){
      console.log(err)
    }
}

module.exports.tag = async (req, res)=>{
  const tag = req.params.tag
  console.log('its a tag ' + tag)

  try{
    const data = await Blog.find({tag})
    res.status(200).json(data)
  }
  catch(err){
    console.log(err)
    res.status(400).send(err)
  }
}


module.exports.tagPost = async (req, res)=>{
  const tag = req.params.culture
  const post = req.params.post
  console.log('its a tag ' + tag + ' and a post ' + post)

  // try{
  //   const data = await Blog.find({tag, _id: post})
  //   res.status(200).json(data)
  // }
  // catch(err){
  //   console.log(err)
  //   res.status(400).send(err)
  // }
}

// {title, snippet, body}
