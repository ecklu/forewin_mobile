//import jwt_decode from 'jwt-decode';       
        console.log("hello")

       
function login(){
   // e.preventDefault()
    var email = document.getElementById('email').value;
    console.log(email)
    var password = document.getElementById('password').value;
    console.log(password)
    
    //var token = 'eyJ0eXAiO.../// jwt token';

    const data = { 
        email: email,
        password:password
    };
    var token = 'secret'

fetch('https://fair-erin-vulture-fez.cyclic.app/api/login/connect_users_login',
//fetch('http://localhost:3000/api/login/connect_users_login',
{
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: "JWT"+ token
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        console.log(parseJwt(data.token));
        var sample =  parseJwt(data.token)
        console.log(sample.email)
        
     if(data.message == 'login Successful'){
        console.log('login')
        //console.log(data.token.userId)
        //alert(sample.userId)
       // window.open('./pages/dashboard.html','_blank', 'location=yes')
       window.location = './pages/startday.html';
       localStorage.setItem("storageName",sample.userId);
       
        
     }else{
        console.log('not login')
        
      }
     //console.log('login')
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}