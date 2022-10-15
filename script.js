
function zero(n){
  return(parseInt(n,10) < 10 ? '0':'') + n;
}
function showtime (){

  const Greet = document.getElementById('greet')
  const Subh = document.getElementById('subh')

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    //Am PM

    var amPm = (h<12) ? "AM" : "PM";

    if(h < 12){
      document.body.style.backgroundImage = "url('img/mor.jpg')";
      Greet.innerText="Good Morning";
      Subh.textContent = "Sky is very Shiny...."
    }else if(h<18){
      document.body.style.backgroundImage = "url('img/evn.jpg')";
      Greet.innerText="Good Evening"
      Subh.textContent = "Sun is Melting on the Earth..."
    }else{
      document.body.style.backgroundImage = "url('img/nyy.jpg')";
      Greet.innerText="Good Night"
      Subh.textContent = "Stars are Lightning Well...."
    }

    document.getElementById('tym').innerHTML = `${zero(h)}:${zero(m)}:${zero(s)} ${amPm}`;
     setTimeout(showtime,1000);
}
showtime();




