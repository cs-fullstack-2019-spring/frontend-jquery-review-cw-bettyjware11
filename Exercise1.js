//this function applies the green border from css to p tagged elements and counts all p elements
$("#b1").click(function(){
    $("p").css("color",buttonColorChange[0]);
    buttonColorCounter++;
    if(buttonColorCounter>=buttonColorChange.length)
    {
        buttonColorCounter=0;
    }
});


var buttonChangeVariable = "";
var buttonColorChange = ["green", "red", "blue"];
var buttonColorCounter = 0;


//this function counts all ps in the first div and draws a 3px red border around them
$("#b2").click(function(){
    // KEY: Needed to use a selector that only got <p>s in first DIV: $("div:first>p")
    $("p").css("color",buttonColorChange[1]);
    buttonColorCounter++;
    if(buttonColorCounter>=buttonColorChange.length)
    {
        buttonColorCounter=1;
    }
});

//this function counts all ps in the second div and draws a 3px blue border around them
$("#b3").click(function(){
    // KEY: Needed to use a selector that only got <p>s in last DIV: $("div:last>p")
    $("p").css("color",buttonColorChange[2]);
    buttonColorCounter++;
    if(buttonColorCounter>=buttonColorChange.length)
    {
        buttonColorCounter=2;
    }
});