// Requiring the module
const mongoose = require('mongoose')

// Creating the connection and the db
mongoose.connect('mongodb://localhost:27017/suhastest',{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{console.log("Connected sucessfully...")}).catch((err)=>{
    console.log(err)
})

// Schema
// A mongoose schema defines the structure of the document
// defines values , validators etc,
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

// A Mongoose Model is a wrapper on the mongoose mongoose Schema.
// A mongoose schema defines the structure of the document
// defines values , validators etc,whereas a mongoose model provider an interface to the database for creating quering updating deleting record etc.

// collection creations
const Playlist = new mongoose.model("playlist",playlistSchema)
