
    const openpg1=()=>{
    document.getElementById('sec2').style.display="block";
    document.getElementById('sec1').style.display="none";
    var pg1=document.getElementById('pg1');
    var txt="";
    const shuffle=(array)=> {
      array.sort(() => Math.random() - 0.5);
    }
 
    let arr = [1,2,3,4,5,6,7,8];
    shuffle(arr);

    for(let i=0;i<8;i++){
    txt+=`<img id="${i}" src="https://i.pinimg.com/originals/b4/ff/30/b4ff30eaa2d64022f350f6bca64ee6db.png" alt="Open Gift" onclick="openGift(${arr[i]})">`; }
    pg1.innerHTML=txt;
  }
const openGift=(val)=>{
  switch (val) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:showAlert();break;
  case 8:openGiftpage();
    
}
}
const showAlert=()=>{
  Swal.fire({
  imageUrl:"https://gifimage.net/wp-content/uploads/2018/06/try-again-animated-gif-5.gif",
  imageHeight: 200,
  imageAlt: 'Custom image',
  imageWidth: 200,
})
} 
const openGiftpage=()=>{
    document.getElementById('sec3').style.display="block";
    document.getElementById('sec2').style.display="none";
    var a=document.getElementById("audio");
    if(a.paused){
        a.play();
        navigator.vibrate([10010,100,10,1010,10101,1020,10100,10100,1100,101010,101001,10101010100,101001,1001,10101.100100]);
}
}
  
 