var res = Math.floor(Math.random()*6)+1;
var res2 = Math.floor(Math.random()*6)+1;
if (res > res2)
{
    document.querySelector("h1").innerHTML = "<em>Player 1 wins!</em>";
    document.querySelector(".image1").setAttribute("src","dice"+res+".png");
    document.querySelector(".image2").setAttribute("src","dice"+res2+".png");
}
else if (res2 > res) {
    document.querySelector("h1").innerHTML = "<em>Player 2 wins!</em>";
    document.querySelector(".image2").setAttribute("src","dice"+res2+".png");
    document.querySelector(".image1").setAttribute("src","dice"+res+".png");
}
else{
    document.querySelector("h1").innerHTML = "<em>Match Draw Tie!</em>";
    document.querySelector(".image1").setAttribute("src","dice"+res+".png");
    document.querySelector(".image2").setAttribute("src","dice"+res2+".png");
}
