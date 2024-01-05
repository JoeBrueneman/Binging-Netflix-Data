function loadComponentFromFile(container) {
    var client = new XMLHttpRequest();
    client.open('GET', './sidebar.html', true);
    client.onreadystatechange = function() {
        if (client.readyState === XMLHttpRequest.DONE && client.status === 200) {
            container.innerHTML = client.responseText;
            setupButton();
        }
    };
    client.send();
}

function setupButton() {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");

    if(btn && sidebar) {
        btn.onclick = function() {
          sidebar.classList.toggle("active");
        };
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var sidebar_container = document.getElementById("sidebar_container");
    loadComponentFromFile(sidebar_container);
});

