/*users
-email-string
-password-string
-posts-array of objects ref post
-reviews-array of objects ref reviews
-username-string
*/
const mongoose =require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
email :String,
image :String,
posts:[{
	type:Schema.Types.ObjectId,
	ref:'Post'
}
]
});
UserSchema.plugin(passportLocalMongoose);
module.export =mongoose.model('User',Username);