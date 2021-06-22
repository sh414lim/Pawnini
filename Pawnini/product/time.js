const clockcontainer=document.querySelector(".js-clock"),
clockTitle=clockcontainer.querySelector(".clock");


const getTime=()=>{
    const D_day=new Date("2021-12-01:00:00:00+0900");

    const data=new Date();

    const Dday=D_day.getTime()-data.getTimel


    const currentDay=Math.floor(Dday/(1000*60*60*24));
    const currnetHours=Math.floor(( Dday % (1000*60*60*24))/(1000*60*60))
    const currentMinutes=Math.floor((Dday % (1000*60*60))/(1000*60))
    const currentSecond=Math.floor((Dday % (1000*60)/1000))

    colckTitle.innerText=`${currentDay} Day ${currnetHours < 10 ? `0${currnetHours}` :currnetHours}h ${currentMinutes < 10 ? `0${currentMinutes}` :currentMinutes}m ${currentSecond < 10 ? `0${currentSecond}` : currentSecond}s  `;

}
  function init(){
      getTime();
      setInterval(getTime,1000);
  }

  init();

