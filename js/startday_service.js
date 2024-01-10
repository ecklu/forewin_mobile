/*var id = localStorage.getItem("storageName")
console.log(id)

var agentName = document.getElementById('name');
var agentEmail = document.getElementById('email');
var agentLocation = document.getElementById('location');

//http://localhost:3000

fetch(`https://forewin.onrender.com/api/users/user/${id}`)
//fetch(`http://localhost:3000/api/users/user/${id}`)
  .then((response) => response.json())
  .then((data) =>{
    console.log(data)
    console.log(data.answers[0].username)

    agentName.value = data.answers[0].username;
    agentEmail.value = data.answers[0].email;
    agentLocation.value = data.answers[0].surveyLocation;

  })*/



  var id = localStorage.getItem("storageName");
  console.log(id);


  var agentName = document.getElementById('name');
  var agentEmail = document.getElementById('email');
  var agentLocation = document.getElementById('location');


  // Use the correct API endpoint
  fetch(`https://forewin.onrender.com/api/users/user/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.answers[0].username);

      agentName.value = data.answers[0].username;
      agentEmail.value = data.answers[0].email;
      agentLocation.value = data.answers[0].surveyLocation;
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });

//setInterval("sample()",1000)


  const data = {

   isActive:true

};


  function startday(){

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
          window.location = 'dashboard.html';

        })
        .catch((error) => {
          console.error('Error:', error);
        });


    }


