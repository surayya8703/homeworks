// Your JS code is here
var body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

var nickname = document.getElementById("nickname")
nickname.innerHTML = "x40x40x40";

var favorites = document.getElementById("favorites")
favorites.innerHTML = "WebDev";

var hometown = document.getElementById("hometown")
hometown.innerHTML = "Brooklyn";

var li = document.getElementsByTagName("li");

for (var i = 0; i<li.length; i++)
{
    li[i].setAttribute("class", "listitem");
}

var listitem = document.getElementsByClassName("listitem");
for (var k = 0; k<li.length; k++)
{

listitem[k].style.color = "red";
}