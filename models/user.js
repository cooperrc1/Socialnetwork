const { Schema, model } = require('mongoose');
let userSchema = new Schema (
    {   
    }
);
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});
let User = model('User', userSchema);
module.exports = User;
