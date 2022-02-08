var products = [{
  "id": "100",
  "name": "iPhone 4S",
  "brand": "Apple",
  "os": "iOS"
},
{
  "id": "101",
  "name": "Moto X",
  "brand": "Motorola",
  "os": "Android"	
},
{
  "id": "102",
  "name": "iPhone 6",
  "brand": "Apple",
  "os": "iOS"
},
{
  "id": "103",
  "name": "Samsung Galaxy S",
  "brand": "Samsung",
  "os": "Android"
},
{
  "id": "104",
  "name": "Google Nexus",
  "brand": "ASUS",
  "os": "Android"
},
{
  "id": "105",
  "name": "Surface",
  "brand": "Microsoft",
  "os": "Windows"
}];
$(function(){
  display();
  
});
function display(){
  $("table").html("");
  for(i of products){
    prod=`<tr><td>${i.id}</td><td>${i.name}</td><td>${i.brand}</td><td>${i.os}</td><td><a href='#'>Delete</a></td></tr>`
    $("table").html($("table").html()+prod);
  }
}