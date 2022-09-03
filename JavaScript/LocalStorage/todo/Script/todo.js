var todoList = JSON.parse(localStorage.getItem("todoLocal"));
console.log(todoList);
var compltedList = JSON.parse(localStorage.getItem("compltedList")) || [];
todoList.map(function (elem, index) {
  var row = document.createElement("tr");

  var col1 = document.createElement("td");
  col1.innerText = elem.name;

  var col2 = document.createElement("td");
  col2.innerText = elem.qty;

  var col3 = document.createElement("td");
  col3.innerText = elem.priority;

  // var col4=document.createElement("td")
  // col4.innerHTML= "check";
  // col4.addEventListener("click",function()
  // {
  //     console.log("clicked me")
  // })
  // var col4=document.createElement("td")
  // col4.innerHTML= "<button>Mark as Completed</button>"

  var col4 = document.createElement("button");
  col4.innerHTML = "Mark as Completed";
  col4.addEventListener("click", function () {
    markascomplted(elem);
  });

  row.append(col1, col2, col3, col4);
  document.querySelector("#body").append(row);
});

function markascomplted(elem) {
  compltedList.push(elem);
  localStorage.setItem("compltedList", JSON.stringify(compltedList));
}
