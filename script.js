let modelBox = document.getElementById("modelBox");

document.onmousemove = function () {
  modelBox.style.display = "block";
};

function closeModel() {
  modelBox.style.display = "none";
}
