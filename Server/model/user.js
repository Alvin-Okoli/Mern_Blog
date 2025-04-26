const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, 'email already exist'],
    required: [true, 'input email'],
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'input password'],
    minlenght: [6, 'passowrd should be atleast 6 chars long']
  },
  name:{
    type: String,
    default: 'user'
  },
  admin: {
    type: Boolean,
    default: false
  }
}, {timestamps: true})

userSchema.pre('save', async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await  bcrypt.hash(this.password, salt);

  next();
})

userSchema.statics.login = async function(email, password){
  const user = await this.findOne({email})
  if(user){
    const auth = await bcrypt.compare(password, user.password)
    if(auth){
      user.password = undefined
      return user
    }
    throw Error ('invalid password')
  }
  throw Error ('invalid email')
}

const User = mongoose.model('user', userSchema);



const blogSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true,
  },
  image: { 
    mimeType: String,
    filename: String  
  }
}, {timestamps: true})


const Blog = mongoose.model('blog', blogSchema)

module.exports  = {User, Blog};