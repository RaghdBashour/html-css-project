
const infoBox = document.querySelectorAll(".boxes");

const showInfo =()=>{
    infoBox.forEach(ele=>{
        ele.addEventListener("click", ()=>info(ele));
    });
}
const info = (ele)=>{
alert(`${info_array[ele.id.split("").slice(-1).join("") - 1]}`);
}
let info_array = [
  "online game \n 49.99$",
  "1 v 1 online game \n 59.99$",
  "offlineonline \n 39.99$",
  "online \n free",
  "online \n free",
  "offline co-op \n 29.99$",
  "offline singleplayer \n 19.99$",
  "offline  \n 29.99$"
];
showInfo()