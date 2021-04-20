const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/practice', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

const User = mongoose.model('User', {
  name: {
    type: String,
  }, 
  age: {
    type: Number,
    validate(value){
      if (value < 0){
        throw new Error('under 0')
      }
    }
  }
})

const ariel = new User({
  name: 'ariel',
  age: 23
})

ariel.save().then(() => {
  console.log(ariel);
}).catch(e => console.log(e))