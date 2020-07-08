const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.newOrder = functions.database.ref("order/{any}")
.onCreate((snap,ctx)=>{

const order = snap.val();
console.log("order", order);

    

});