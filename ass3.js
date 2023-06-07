//nhap email hieen thong tin
function checkEmail() {
  var email = document.getElementById("email");
  var filter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(email.value)) {
    alert("Hay nhap dia chi email hop le");
    email.focus;
    return false;
  } else {
    document.getElementById("container-infor").style.display = "block";
    document.getElementById("container-btn").style.display = "none";
  }
}
//nhan nut viewmore viewless hien thong tin//

document.getElementById("container-infor").style.display = "none";
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (box) {
  let button = box.querySelector("button");
  let content = box.querySelector(".detail");
  button.addEventListener("click", () => showOrHide(button, content));
});

function showOrHide(button, content) {
  if (!content.classList.contains("hidden")) {
    content.classList.add("hidden");
    button.textContent = "▼ View more";
  } else {
    content.classList.remove("hidden");
    button.textContent = " ▲ View less";
  }
}
