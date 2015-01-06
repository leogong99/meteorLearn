// on the server
Meteor.publish('posts', function(title) {
return Posts.find();
});