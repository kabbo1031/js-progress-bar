let value = 0;
let timer;

function start(){
  clearInterval(timer);
  value = 0;
  document.getElementById('progress').style.width = '0%';

  timer = setInterval(()=>{
    if(value >= 100){
      clearInterval(timer);
    }else{
      value += 5;
      document.getElementById('progress').style.width = value + '%';
    }
  }, 200);
}
