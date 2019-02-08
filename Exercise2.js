//created 1st button to be enabled when the page is displayed; then the second button is disabled
$("#b1").click(function() {
    console.log("Hello");
    document.getElementById("b1").setAttribute("disabled","");

    document.getElementById("b2").removeAttribute("disabled", "");
});

//created second button to alternate between enabled and disabled
$("#b2").click(function() {
    console.log("Hello");
    document.getElementById("b2").setAttribute("disabled","");

    document.getElementById("b1").removeAttribute("disabled", "");
});