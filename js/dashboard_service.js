
var id = localStorage.getItem("storageName")
console.log(id)
var shopName=[] ;
function checkingpunchIn(){
var listSurvey = document.getElementById('list')
var total = document.getElementById('total')
var totalShop = document.getElementById('totalShop')



var show =""
var totals = ""
var viewTotalShop = ""
var shop =[]
var mycords=[]


//set time for outlets
/*const d = new Date();
    let textDate = d.toString();
    console.log(textDate)*/



fetch(`https://forewin.onrender.com/api/test/connect`)
//fetch(`http://localhost:3000/api/test/connect`)
  .then((response) => response.json())
  .then((data) =>{ 
     var onSuccess = function(position){

console.log("Your location is not on!!!!!")

const radius = 100;
 let coordinatesWithinRadius = false;

   for(let i = 0; i < data.answers.length; i++){
   console.log("the data logs",data.answers[i])
        console.log("my phone cords",position.coords.latitude)
        console.log("my phone cords",position.coords.longitude)
       
      console.log("this is my lat",data.answers[i].lat)
      console.log("this is my long",data.answers[i].long)
      mycords.push(data.answers[i].dates)
     // if(data.answers[i].dates)
      //shop.push(data.answers[i].shopName)

      const withinRadius = isWithinRadius(position.coords.latitude, position.coords.longitude, data.answers[i].lat, data.answers[i].long, radius);
      if (withinRadius) {
        console.log('The coordinates are within the 100-meter radius.');
        console.log("this is my shop name",data.answers[i].shopName)
        shopName.push(data.answers[i].shopName)
        localStorage.setItem("storageId",data.answers[i].shopName);
            coordinatesWithinRadius = true;
            break;
      } else {
        console.log('The coordinates are outside the 100-meter radius.');
      }



          }


           if (coordinatesWithinRadius) {
                                 // Do something here if coordinates are within the radius
                                 viewTotalShop +=`
                                                <h5 class="mb-0 font-weight-medium text-primary">Welcome to ${shopName[0]} Outlet</h5>

                                                 `
                                                 totalShop.innerHTML = viewTotalShop;


                                 console.log('perfect')
                                 console.log("second log",shopName)
                               }

                               else{
                                viewTotalShop +=`
                                                  <h5 class="mb-0 font-weight-medium text-primary">Not at the right Outlet</h5>

                                                                                `

                                                                               totalShop.innerHTML = viewTotalShop;


                               }
 }




    function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
      const earthRadius = 6371; // Earth's radius in kilometers
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = earthRadius * c * 1000; // Distance in meters
      return distance;
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }

    function isWithinRadius(lat1, lon1, lat2, lon2, radius) {
      const distance = getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2);
      return distance <= radius;
    }

  
 
  function onError(error) {
        console.log("not working connect to the internet")
         viewTotalShop +=`
                                                          <h5 class="mb-0 font-weight-medium text-primary">Not connected to the internet</h5>

                                                                                        `

                                                                                        totalShop.innerHTML = viewTotalShop;
        console.log('code: '    + error.code    + '\n' +
                   'message: ' + error.message + '\n');
    }
   navigator.geolocation.getCurrentPosition(onSuccess, onError);

  
  });


  }

  setInterval("checkingpunchIn()",3000)

const date = new Date();
//const timestamp = currentDate.getTime();
var punchInTime = date.getHours() + ":" + date.getMinutes() +":"+date. getSeconds();


//inserting into daily activities
function punchIn(){
var userId = id
console.log("insert shop name",shopName[0])
  const data = {
       outlet: shopName[0],
       punchInTime:punchInTime ,
       punchOutTime: null,
       user_id:userId,

    };
     fetch('https://forewin.onrender.com/api/test/daily_activity',
    //fetch('http://localhost:3000/api/test/daily_activity',
    {

          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);

            window.location = 'dashboard.html'
          })
          .catch((error) => {
            console.error('Error:', error);
          });




}


var idss = []

var  shop = localStorage.getItem("storageId")
     console.log("The new shope",shop)
    fetch(`https://forewin.onrender.com/api/test/activities`)
     //fetch(`http://localhost:3000/api/test/activities`)
         .then((response) => response.json())
         .then((data) =>{
             console.log(data)
               for(let i = 0; i < data.answers.length; i++){
               console.log("punchOut details",data.answers[i].shopName)
               if( data.answers[i].shopName == shop ){
                           console.log("this is my pinned")
                           console.log("this is my pinned id",data.answers[i]._id)
                          // idss.push(data.answers[i]._id)
                          localStorage.setItem("shopId",data.answers[i]._id);
                         }
               }





         })




         fetch(`https://forewin.onrender.com/api/test/activities_details`)
        //fetch(`http://localhost:3000/api/test/activities_details`)
                  .then((response) => response.json())
                  .then((data) =>{
                      console.log(data)
                        for(let i = 0; i < data.answers.length; i++){
                        console.log("punchOut details",data.answers[i].shopName)
                        if( data.answers[i].shopName == shop ){
                                    console.log("this is my pinned")
                                    console.log("this is my pinned id",data.answers[i]._id)
                                   // idss.push(data.answers[i]._id)
                                   localStorage.setItem("shopDetailsId",data.answers[i]._id);
                                  }
                        }





                  })

//punchout function
function punchOut(){






/*var pid = localStorage.getItem("storageId")
console.log("my ids for punchout", pid)
console.log("punchout time",punchInTime)*/

console.log("ids for punch",idss[0])
const data = {

    punchOutTime:punchInTime

 };

 var  shopid = localStorage.getItem("shopId")
 console.log("this is my hhhhh",shopid)
 fetch(`https://forewin.onrender.com/api/test/punchout/${shopid}`,
 //fetch(`http://localhost:3000/api/test/punchout/${shopid}`,
 {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
         //window.location = 'dashboard.html';

        })
        .catch((error) => {
          console.error('Error:', error);
        });


   //activity details punchout

   const data_details = {

       punchOutTime:punchInTime

    };
    console.log("Punch details id",shopid)

    var  shopDetailsIdid = localStorage.getItem("shopDetailsId")
     console.log("this is my hhhhh",shopDetailsIdid)
    fetch(`https://forewin.onrender.com/api/test/punchout_details/${shopDetailsIdid}`,
   //fetch(`http://localhost:3000/api/test/punchout_details/${shopDetailsIdid}`,
    {
           method: 'POST', // or 'PUT'
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(data_details),
         })
           .then((response) => response.json())
           .then((data_details) => {
            console.log("Punchout timming working...")
             console.log('Success:', data_details);
            //window.location = 'dashboard.html';

           })
           .catch((error) => {
             console.error('Error:', error);
           });





}






//https://africaworks.onrender.com/api/test/connect_test/${id}

//https://africaworks.onrender.com/api/test/connect_summary/${id}
/*fetch(`http://localhost:3000/api/test/connect_summary/${id}`)
  .then((response) => response.json())
  .then((data) =>{ 
    
    console.log(data)

    
    for(let i = 0; i < data.answers.length; i++){
      console.log('this is news',data.answers[i].shopName)
      console.log('this is location',data.answers[i].shopLocation)
     
        show +=`
        
        <div class="d-flex mt-3 py-2 border-bottom">
                          
      <div class="wrapper ml-2">
        <p class="mb-n1 font-weight-semibold">${data.answers[i].shopName}</p>
        <small>${data.answers[i].shopLocation}</small>
      </div>
      <small class="text-muted ml-auto"><i class="fa fa-plus" aria-hidden="true"></i></small>
    </div>`
      



      
    }
   
    listSurvey.innerHTML = show;
 
  
  
  });*/


  const data = { 
    
    isActive:false
 
 };


  function endDay(){

      fetch(`https://forewin.onrender.com/api/users/useractive/${id}`,
     //fetch(`http://localhost:3000/api/users/useractive/${id}`,
      {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          window.location = 'startday.html';
         
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }



//maps




 