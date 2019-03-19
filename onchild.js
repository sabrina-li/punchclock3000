var database = firebase.database();
$(document).ready(function(){
    database.ref().on('child_added',function(childSnapshot){
         // Log everything that's coming out of snapshot
        var obj = childSnapshot.val();
        // console.log(childSnapshot.key);
        // console.log(obj.name);
        // console.log(obj.rate);
        // console.log(obj.role);
        // console.log(obj.startDate);
        obj.months_worked = convertDate(obj.startDate);
        obj.total_B = obj.months_worked * obj.rate;
        obj.key = childSnapshot.key;

     // full list of items to the well
     
     add_data(obj);
    // $("#full-member-list").append();

     // Handle the errors
    })
})