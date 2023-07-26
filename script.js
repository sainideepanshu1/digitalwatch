function showtime(){
const time= new Date();
function addzero(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}
let hour=addzero(time.getHours());
let min=addzero(time.getMinutes());
let sec=addzero(time.getSeconds());

let final=hour+":"+min+":"+sec;
document.getElementById("clock").innerHTML=final;
}
setInterval(showtime,1000);