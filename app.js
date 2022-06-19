const watch=document.getElementById('watch');
let ms=0;
let timer;

const startWatch=()=>{
    clearInterval(timer);
    timer=setInterval(()=>{
        ms+=10;
        let dateT=new Date(ms);
        watch.innerHTML=('0'+dateT.getUTCHours()).slice(-2)+':'+
        ('0'+dateT.getUTCMinutes()).slice(-2)+':'+
        ('0'+dateT.getUTCSeconds()).slice(-2)+':'+
        ('0'+dateT.getUTCMilliseconds()).slice(-3,-1);
    },10);

}
const pauseWatch=()=>{
    clearInterval(timer);   
};
const resetWatch=()=>{
    clearInterval(timer);
    ms=0;
    watch.innerHTML='00:00:00:00';
}
const light=()=>{
        document.body.style.background='white';
        document.body.style.color='black';
}
const dark=()=>{
    
        document.body.style.background='black';
        document.body.style.color='white';
}
document.addEventListener('click',(element)=>{
    const e=element.target;
    if(e.id==='start'){
        startWatch();
    }if(e.id==='pause'){
        pauseWatch();
    }
    if(e.id==='reset'){
        resetWatch();
    }if(e.id==='light'){
        light();
    }if(e.id==='dark'){
        dark();
    }
})