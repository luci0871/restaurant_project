 fetch("https://kea-alt-del.dk/t5/api/productlist")
     .then(function (response) {
         return response.json()
     }).then(function (data) {
         data.forEach(showDish)
     })

 function showDish(dish) {
     console.log(dish)
     const template = document.querySelector("template").content;
     const copy = template.cloneNode(true);
     copy.querySelector(".data_name").textContent = dish.name;
     copy.querySelector(".data_price").textContent = dish.price;
     if(dish.discount){
         copy.querySelector(".data_price").classList.add("");
     }else {
         copy.querySelector(".data_discount").remove();
    }




     document.querySelector(".productlist").appendChild(copy);
 }

 /*
    //copy.querySelector(".price").textContent=dish.price;
    //copy.querySelector("p").textContent=dish.shortdescription;

   /* if(dish.discount){
        copy.querySelector(".price").classList.add("discount");
        copy.querySelector(".discount").textContent=Math.round(dish.price - dish.discount / 100 * dish.price)
    }else{
        copy.querySelector(".discount").remove();
    }

    if(!dish.soldout){
        copy.querySelector("article").classList.remove("soldout");
    }


    document.querySelector("main").appendChild(copy);
}
*/


 //copy.querySelector("p").textContent=dish.shortdescription;

 //const button = document.querySelector("button");

 //button.addEventListener("click", addCopy);
 /*
 function addCopy() {
     const myTemplate = document.querySelector("template").content;
     const myCopy = myTemplate.cloneNode(true);

     myCopy.querySelector("h4").textContent=".btn";


     const main = document.querySelector("main");
     main.appendChild(myCopy)
 }*/
