var database = firebase.database();
$(document).ready(function(){
    database.ref().on('child_added',function(childSnapshot){
         // Log everything that's coming out of snapshot
        var obj = childSnapshot.val();
        console.log(childSnapshot.key);
        console.log(obj.name);
        console.log(obj.rate);
        console.log(obj.role);
        console.log(obj.startDate);
        obj.months_worked = 1;
        obj.total_B = 1;

     // full list of items to the well
     
     add_data(obj);
    // $("#full-member-list").append();

     // Handle the errors
    })
})