
var id = localStorage.getItem("storageName")
console.log(id)

var listSurvey = document.getElementById('list')
var total = document.getElementById('total')
var totalShop = document.getElementById('totalShop')



var show =""
var totals = ""
var viewTotalShop = ""
var shops =[]
var dateShop=[]




//https://africaworks.onrender.com/api/test/connect_test/${id}

//https://africaworks.onrender.com/api/test/connect_test/${id}
fetch(`http://localhost:3000/api/test/connect_total_shop/${id}`)
  .then((response) => response.json())
  .then((data) =>{ 
    console.log("api working sucessfully")
    console.log(data)

    for(let i = 0; i < data.answers.length; i++){
      console.log(data.answers[i].dates)
      dateShop.push(data.answers[i].dates)
     // if(data.answers[i].dates)
      shops.push(data.answers[i].shopName)
    
  
   console.log(shops)
   console.log('dates',dateShop[0])
  
   /* for(let i = 0; i < shops.length; i++){
      console.log('this is new',shops[i])*/
     
        console.log("settime")
        show +=`<div class="d-flex mt-3 py-2 border-bottom">
                          
      <div class="wrapper ml-2">
        <p class="mb-n1 font-weight-semibold">${data.answers[i].shopName}</p>
        <small>${data.answers[i].shopLocation}</small>
      </div>
      <small class="text-muted ml-auto"><i class="fa fa-plus" aria-hidden="true"></i></small>
    </div>`
      

   }

      
    //}
    
    listSurvey.innerHTML = show;
 
  
  
  });


  

 