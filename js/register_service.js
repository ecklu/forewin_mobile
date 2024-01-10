
var id = localStorage.getItem("storageName")
console.log(id)

//start
let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ 
       video:true,
       video:{
        facingMode: {
          exact: 'environment'
        }
       } ,
       audio: false,
        });
	video.srcObject = stream;
});

let image_data_url; 
click_button.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	image_data_url = canvas.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
    // samss = "hello";
});
//end






function register(){
  console.log(image_data_url)
  
    var shop_name = document.getElementById('shop_name').value
    var contact_number = document.getElementById('contact_number').value
    var email = document.getElementById('email').value
    var location = document.getElementById('location').value
    var shop_type = document.getElementById('shop_type').value
    var connect_user_id = id

    const d = new Date();
    let textDate = d.toString();
    console.log(textDate)
    
    var onSuccess = function(position){  
      console.log(image_data_url)
      const data = { 
        shop_name: shop_name,
        contact_number:contact_number,
        email:email,
        location:location,
        lat:position.coords.latitude,
        long:position.coords.longitude,
        file:image_data_url,
        shop_type:shop_type,
        dates:textDate,
        user_id:connect_user_id,
       
    
    };
    
    //location
    //https://africaworks.onrender.com/api/test/connect_test

    https://africaworks.onrender.com/api/test/connect_test
    //fetch('http://localhost:3000/api/test/connect_test', {
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
  // When any error is encountered, onError Callback receives a PositionError object  
  function onError(error) {  
      console.log('code: '    + error.code    + '\n' +  
                 'message: ' + error.message + '\n');  
  }  
  navigator.geolocation.getCurrentPosition(onSuccess, onError);





}


