let currentDate=document.getElementById('currentDate')
let years=document.getElementsByClassName('years')
let months=document.getElementsByClassName('months')
let days=document.getElementsByClassName('days')
let btn =document.getElementById('btn')

btn.onclick=function calcBirthDate(){
   let birthDate=new Date(currentDate.value)

   let y1= birthDate.getFullYear();
   let m1= birthDate.getMonth()+1;
   let d1= birthDate.getDate();

  let today= new Date()
  let y2= today.getFullYear();
   let m2= today.getMonth()+1;
   let d2= today.getDate();
}
