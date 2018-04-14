var admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert({
    "projectId": process.env.PROJECT_ID,
    "clientEmail": process.env.CLIENT_EMAIL,
    "privateKey": process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
  }), 
  databaseURL: 'https://'+process.env.PROJECT_ID+'.firebaseio.com'
});
var fb = {
 updateUserData: function(uid,path,value,success,fail) {
    var userRef = admin.database().ref('/users/' + uid + '/' + path);
    console.log(`Firebase user reference obtained for ${uid}`);
    userRef.update(value)
      .then(function(){success()})
      .catch(function(error) {
        console.log('Failed to update user Firebase:', error);
        fail()
      });
  },
  getUserData: function(uid,path) {
    var userRef = admin.database().ref('/users/'+uid+'/'+path);
    return userRef.once('value');
  },
  subscribeToSensor: function(path,cb) {
    var shareRef = admin.database().ref('/share/'+path);
    return shareRef.on('value',cb);
  }
}

module.exports = fb;