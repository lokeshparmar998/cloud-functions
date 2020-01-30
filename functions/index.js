const functions = require('firebase-functions');
const admin = require('firebase-admin');
const https = require('https');
admin.initializeApp();
var db = admin.database();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/*
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
  const db = admin.database('/child1').ref();
  db.set('val');
 });

 exports.makeUppercase = functions.database.ref('/messages/')
 .onCreate((snapshot, context) => {
   // Grab the current value of what was written to the Realtime Database.
   const original = snapshot.val();
   console.log('Uppercasing', context.params.pushId, original);
   const uppercase = original.toUpperCase();
   // You must return a Promise when performing asynchronous tasks inside a Functions such as
   // writing to the Firebase Realtime Database.
   // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
   return snapshot.ref.parent.child('uppercase').set(uppercase);
 });

*/
 /* exports.myOnUpdate = functions.database.ref('/messages/')
 .onUpdate((snapshot,context) => {
     console.log(snapshot);
     const before_data = snapshot.before.val();
     const updated_value = snapshot.after.val();
     console.log(updated_value);
     console.log(before_data);
     const new_value = "Before: "+before_data+" After: "+updated_value;
     var ref = db.ref("/updated/");
     var usersRef = ref.child("changes");
     return usersRef.set(new_value)
     .catch(function(error){
         console.log(error);
     });
 }) 
 */

 /*
 exports.myOnDelete = functions.database.ref('/messages/')
 .onDelete((snapshot,context)=>{
     console.log(snapshot);
    const delete_value = snapshot.val();
return db.ref('/deleted/').child('value').set(delete_value)
.catch(function(err)
{
    console.log(err);
})
 })
 */
/*
 exports.myOnWrite = functions.database.ref('/messages/')
 .onWrite((snapshot,context)=>{
    if (snapshot.after.exists()) //onUpdate
    {   console.log("onUpdate"+snapshot);
        const before_data = snapshot.before.val();
        const after_data = snapshot.after.val();
        const data_value = "before: "+before_data+"After: "+after_data;
        return db.ref('/onUpdate02/').child('value').set(data_value);    
    }

    if(snapshot.before.exists()) //onDelete
    {   
        console.log("onUpdate"+snapshot);
        const before_data = snapshot.before.val();
        const after_data = snapshot.after.val();
        const data_value = "before: "+before_data+"After: "+after_data;
        return db.ref('/onUpdate01/').child('value').set(data_value);  
    }
 }) 
 */

 // storage triggers
 var storageRef = firebase.storage().ref();
exports.getURL = functions.storage.object().onFinalize(async (object) => {
    const contentType = object.contentType;
   // console.log(object);
   // console.log("something was created with type "+ contentType)
   console.log(object);
   var ref = db.ref("/URL/");
     var usersRef = ref.child("changes");
     return usersRef.set(object.mediaLink);
  });
//   exports.onDelete = functions.storage.object().onDelete(async (object) => {
//     const contentType = object.contentType;
//     return console.log("something was deleted with type "+ contentType);
//   });