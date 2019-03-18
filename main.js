// Initialize Firebase
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
    $("#submitbtn").on('click',function(){
        //read from form and submit to FB
        let name = $("#employeeName").val().trim();
        let role = $("#role").val().trim();
        let startDate = $("#startDate").val().trim();
        let rate = $("#monthlyRate").val().trim();
    })
})