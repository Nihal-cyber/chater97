
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAD4wy5zM6LLIVplInosDV0NF5l1pLq6Ag",
      authDomain: "kwitter-9ad7a.firebaseapp.com",
      databaseURL: "https://kwitter-9ad7a-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ad7a",
      storageBucket: "kwitter-9ad7a.appspot.com",
      messagingSenderId: "538082382769",
      appId: "1:538082382769:web:4d33313d3bde33fc3e6390"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome "+ user_name + "!";
    function add_room()
    {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";    
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname- "+ Room_names);
      row="<div class='room_name' id="+Room_names +"onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
 function log_out()
 {
       localStorage.removeItem("room_name");
       localStorage.removeItem("user_name");
       window.location = "index.html";
 }
