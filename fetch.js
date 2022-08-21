const fruits= document.getElementById("fruList");
const products=document.getElementById("products");
const vegetables= document.getElementById("vegList");
async function myProducts(item,element){
  const response= await fetch("http://localhost:5000"+item).then((response)=>{
    return response.json();

 }) .then((data) => {
    data.forEach ((myProducts) =>{
      const myFruits=document.createElement("juices")
       myFruits.innerHTML=myProducts["name"].concat("<br/>").concat(myProducts["category"]);
       element.appendChild(myFruits)
    }); 
}) 
}
myProducts("products",products)
myProducts("products/fruits",fruits)
myProducts("products/vegatables",vegetables)

