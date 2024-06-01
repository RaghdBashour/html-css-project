const infoBox1 = document.getElementById('box1');
const infoBox2 = document.getElementById("box2");
const infoBox3 = document.getElementById("box3");
const infoBox4 = document.getElementById("box4");
const infoBox5 = document.getElementById("box5");
const infoBox6 = document.getElementById("box6");
const infoBox7 = document.getElementById("box7");
const infoBox8 = document.getElementById("box8");

function pubgInfo() {
    alert("online game \n 49.99$");
}
function eaInfo() {
    alert("1 v 1 online game \n 59.99$");
}
function gtaInfo() {
    alert("offline\online \n 39.99$");
}
function csInfo() {
    alert("online \n free");
}
function fortInfo() {
    alert("online \n free");
}
function cupInfo() {
    alert("offline co-op \n 29.99$");
}
function haloInfo() {
    alert("offline singleplayer \n 19.99$");
}
function sanInfo() {
    alert("offline  \n 29.99$");
}

infoBox1.addEventListener("click", pubgInfo);
infoBox2.addEventListener("click", eaInfo);
infoBox3.addEventListener("click", gtaInfo);
infoBox4.addEventListener("click", csInfo);
infoBox5.addEventListener("click", fortInfo);
infoBox6.addEventListener("click", cupInfo);
infoBox7.addEventListener("click", haloInfo);
infoBox8.addEventListener("click", sanInfo);