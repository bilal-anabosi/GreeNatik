const mongoose = require('mongoose');
const Types = require('mongoose');
const SinglePostModel = new mongoose.Schema({

contributers :[{

    material: { 
        type: String, 
        required: true
    },
    quantity: { 
        type: Number, 
        required: true 
    },
    condition: { 
        type: String, 
        required: true 
    },
    notes: { 
        type: String, 
        default: '' 
    },
    city: { 
        type: String, 
        required: true 
    },
    street: { 
        type: String, 
        required: true 
    },
    zip: { 
        type: String, 
        required: true 
    },
    date: { 
        type: String, 
        required: true 
    },
    time: { 
        type: String,
        required: true 
        
    }
}],

likes: [{ 
        type: Types.ObjectId,
        ref: 'user',
}],

Form:[{
Requesting: {
    type: String,
    required: true
},

moreDetails: {
    type: String,
    default: '' 
},

Quantity: {
    type: Number,
    required: true
},

progress: {
    type: String,
    required: true
},

postStatus: {
    type: String,
    enum: ['Draft', 'Deactive', 'Active'],
    required: true
},

pickUpLocation: {
    type: String,
    enum: ['Factory', 'Custom Location'],
    required: true
}
}]

},
{ 
    timestamps:true 
}
);

const Post = mongoose.model('Post', SinglePostModel);

module.exports = Post;