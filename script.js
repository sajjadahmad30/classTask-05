let inputDate=document.getElementsByTagName('input')
let years=document.getElementsByClassName('years')
let months=document.getElementsByClassName('months')
let days=document.getElementsByClassName('days')
let span =document.querySelector('span')

span.onclick=function calcBirthDate(){
  let date=inputDate.getFullYear();
  console.log(date)
}
