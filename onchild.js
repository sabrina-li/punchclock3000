var database = firebase.database();
$(document).ready(function(){
    database.ref().on('child_added',function(childSnapshot){
         // Log everything that's coming out of snapshot
     console.log(childSnapshot.val().name);
     console.log(childSnapshot.val().rate);
     console.log(childSnapshot.val().role);
     console.log(childSnapshot.val().startDate);

     // full list of items to the well
     $("#full-member-list").append();

     // Handle the errors
    })
})