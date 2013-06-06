document.getElementById("btn_mudar_cor").addEventListener("click", function() {
    chrome.tabs.executeScript(null,{code:"document.body.bgColor='" + document.getElementById('cor').value + "'"});
}, false);