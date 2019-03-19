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
  
  
         var a = $('<div>')
         a.append( ` <div class="row form-group">
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
   
    </div>`);
    
    $("#row_id").append(a)
    
  }
  
