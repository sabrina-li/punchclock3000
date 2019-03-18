var config = {
  apiKey: "AIzaSyCQBL6g30QmHMO_Wblv4Pa15GlYGkk-JIQ",
  authDomain: "gtc-inclass.firebaseapp.com",
  databaseURL: "https://gtc-inclass.firebaseio.com",
  projectId: "gtc-inclass",
  storageBucket: "gtc-inclass.appspot.com",
  messagingSenderId: "299297782426"
};
firebase.initializeApp(config);


$(document).ready(function (){
  var database = firebase.database();
  
  $("#submitbtn").on('click',function(event){
      event.preventDefault();
      let name = "";
      let role = "";
      let startDate = "";
      let rate = "";
      //read from form and submit to FB

      name = $("#employeeName").val().trim();
      role = $("#role").val().trim();
      startDate = $("#startDate").val().trim();
      rate = $("#monthlyRate").val().trim();

      database.ref().push({
        name:"name",
        role:"role",
        startDate:"startDate",
        rate:"rate"
      })



  })
})