let currentDate=document.getElementById('currentDate')
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


   // store the difference of years moths and date
   let y3, m3, d3;
   y3= y2-y1;

   // create if stament to find the difference between birthDate and todayDate
   if(m2 >= m1){
      m3 = m2 - m1;
   }else{
      y3--;
      m3 = 12 + m2 - m1;
   }
   // day difference
   if(d2 >= d1){
      d3 = d2 - d1;
   }else{
      m3--;
   }
}
