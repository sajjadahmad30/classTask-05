let currentDate=document.getElementById('currentDate')
let btn =document.getElementById('btn')

btn.onclick=function calcBirthDate(){
   let year= document.getElementById('year')
   let month= document.getElementById('month')
   let day= document.getElementById('day')
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
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
   }
   
    if(m3 < 0){
      m3 = 11;
      y3--;
    }
    year.textContent=y3
    month.textContent=m3
    day.textContent=d3

   // create function this return the last day of month
   function getDaysInMonth(year, month){
      return new Date(year,month, 0).getDate();
   }
}
