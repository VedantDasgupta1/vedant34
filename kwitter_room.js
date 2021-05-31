
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBoT_Pj7gDZl3hxvxpe3VVBPldOLH_VKUc",
      authDomain: "kwitter-app-3de07.firebaseapp.com",
      databaseURL: "https://kwitter-app-3de07-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-3de07",
      storageBucket: "kwitter-app-3de07.appspot.com",
      messagingSenderId: "961337406870",
      appId: "1:961337406870:web:7a9f19923145b87fb759b7",
      measurementId: "G-QK5BT20CMR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
