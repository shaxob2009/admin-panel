// main.js

document.getElementById('menu-icon_iccId').addEventListener('click', function() {
    document.getElementById('sidebarId').classList.toggle('hidden');
  });
  
// dark mode
let modeBtn = document.getElementById("menu-itemId");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "menu-itemId";
  } else {
    this.firstElementChild.src = "menu-itemId";
  }
  document.body.classList.toggle("dark");
});