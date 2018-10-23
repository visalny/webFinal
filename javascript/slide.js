var pic = ["computer1.jpg", "phone.jpeg",];
var j = 1;
function change() {
    document.getElementById("ima").src="image/"+pic[j++];
    if (j == 2) { j = 0;}
}
setInterval(change, 1000);
