var theme = 0
document.getElementById("theme").addEventListener("click", function() {
    if (theme == 0) {
        document.body.style.backgroundImage = "linear-gradient(50deg, #FFC2D3, #c2fbffa1)"
        theme = 1
    }
    else {
        document.body.style.backgroundImage = "linear-gradient(50deg, #acb6ff52, #fd98ca62, #d3a66646)";
        theme = 0
    }
    // document.body.style.backgroundColor = "black";
  });