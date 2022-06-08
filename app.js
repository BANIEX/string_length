document.getElementsByClassName("calculate")[0].addEventListener("click", function(){
    let userInput = document.getElementById("data").value.trim();
    let userInputLength = userInput.length;
    document.getElementsByClassName("answer")[0].innerHTML = userInputLength
})