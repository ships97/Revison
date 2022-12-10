var arr = ["test"];

function addvalueintodo() {
  var a = document.getElementById("todovalue").value;
  arr.push(a);

  appenddata(arr);
}

appenddata(arr);

function appenddata(arr) {
  document.getElementById("container").innerHTML=null;
  arr.map((elem) => {
    let div = document.createElement("div");
    let text = document.createElement("p");
    text.innerText = elem;

    div.append(text);
    document.querySelector("#container").append(div);
  });
}
