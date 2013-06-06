document.getElementById("btn_mudar_cor").addEventListener("click", function() {
    var cor = document.getElementById('cor').value;
    chrome.tabs.executeScript(null,{code:"document.body.bgColor='" + cor + "'"});
    // salva no HTML Storage
    localStorage["cor"] = cor;
}, false);

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage["cor"] != undefined) {
    document.getElementById('cor').value = localStorage["cor"];
  }
});