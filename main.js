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
        name:name,
        role:role,
        startDate:startDate,
        rate:rate
      })
  })

})
function add_data(somedata){ 

  var name = somedata.name
  var role = somedata.role
  var start_date = somedata.startDate
  var months_worked = somedata.months_worked
  var monthly_R = somedata.rate
  var total_B = somedata.total_B
  var id = somedata.key;
  
         var a = $('<div>')
         a.append( ` <div class="row form-group employeerow">
         <div class="col col-sm-2">
               <div id="e_name" class="title_text">${name}</div>         
       </div>
         <div class="col col-sm-2">
           <div  id="e_role" class="title_text">${role}</div>  
         </div>
         <div class="col col-sm-2">
           <div id="e_sdate" class="title_text">${start_date}</div>  
         </div>
         <div class="col col-sm-2">
              <div  id="e_mworked" class="title_text">${months_worked}</div>  
             </div>
       <div class="col col-sm-2">
                   <div id="e_mrate" class="title_text">${monthly_R}</div>  
                 </div>
       <div class="col col-sm-2">
                      <div id="e_total" class="title_text">${total_B}</div>  
       </div>
       <div class="buttons" id="${id}">
          <button class="btn btn-primary ml-3" id="editdeletebtn">edit</button>
          <button class="btn btn-primary ml-3" id="deletebtn">delete</button>
       </div>
   
    </div>`);
    $(a.children()[0]).hover(function (event) {
      console.log($(this))
      $(this).children(".buttons").css("display","initial");
    }, function(){
      $(this).children(".buttons").css("display","none");
    })

    $("#row_id").append(a)
  }
  


function convertDate(date){
  // console.clear();
  var now = moment(new Date()); //todays date
  var end = moment(date); // another date
  var duration = moment.duration(now.diff(end));
  var months = duration.asMonths();
  console.log(parseInt(months));
  return parseInt(months);
}


$(document).on('click','#editdeletebtn', function(){
  console.log($(this).parent().attr("id"));
})

$(document).on('click','#deletebtn', function(){
  console.log($(this).parent().attr("id"));
})