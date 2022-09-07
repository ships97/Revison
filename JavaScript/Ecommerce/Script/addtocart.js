console.log('hello')

var cartdata=JSON.parse(localStorage.getItem("cartdata"))
console.log(cartdata)
cartdata.map(function (elem, inde) {
    var div = document.createElement("div");
  
    var img = document.createElement("img");
    img.src = elem.image;
    var txt = document.createElement("p");
    txt.innerText = elem.name;
    var price = document.createElement("p");
    price.innerText = "Rs  " + elem.price;
    var btn = document.createElement("button");
    btn.innerText = "+";
    
    div.append(img, txt, price, btn);
  
    document.querySelector("#container").append(div);
  });