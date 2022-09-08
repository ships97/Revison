console.log("hello");

var cartdata = JSON.parse(localStorage.getItem("cartdata"));
console.log(cartdata);

function showdata(cartdata) {
  cartdata.map(function (elem, index) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image;
    var txt = document.createElement("p");
    txt.innerText = elem.name;
    var price = document.createElement("p");
    price.innerText = "Rs  " + elem.price + "  -  " + elem.cartQuantity;
    var btn = document.createElement("button");
    btn.innerText = "add +";
    btn.addEventListener("click",function()
    {
      increseqauntity(index)
    })

    div.append(img, txt, price, btn);

    document.querySelector("#container").append(div);
  });
}

showdata(cartdata);


function  increseqauntity(index)
{
   cartdata[index].cartQuantity++;   
   console.log(cartdata) ;
   
   
   
   showdata(cartdata);


}





var total = cartdata.reduce(function (acc, item) {
  // console.log(item.price,acc)
  return acc + item.price;
}, 0);


console.log(total);
document.getElementById("totalprice").innerText =
  "Total Amout : Rs " + total + " only";
