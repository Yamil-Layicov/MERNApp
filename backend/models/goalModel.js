const mongoose = require('mongoose')

const goalShema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    text:{
        type:String,
        required:[true,'bir seyler eleve et']
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Goal',goalShema)
