var teller = 0   //click teller

function click(){
    document.getElementById("teller").innerHTML = "lemons: " + teller++;
    // ^ zegt dat de text moet veranderen naar "lemons: (nummer + 1)"
}