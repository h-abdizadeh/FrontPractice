//1
// function btnClick(){
//     alert('click')
// }

//2
// function btnClick(){
//     let _input=document.getElementById('input-text')
//     alert(_input.value)
// }

//3
// function btnClick(){
//     let _input=document.getElementById('input-text').value
//     let _result=document.getElementById('h-result')

//     if(_input % 2 == 0){
//         _result.innerHTML='even'
//         _result.style.color='red'
//     }
//     else{
//         _result.innerHTML='odd'
//         _result.style.color='green'
//     }

// }

//4
// let count=0;
// function Counter(){
//     if (count==30)
//         return

//     count++
//     let _counterDiv=document.getElementById('counter-div')

//     _counterDiv.innerHTML=count

//     if(count<10){
//         _counterDiv.style.backgroundColor='green'
//     }
//     else if(count<20){
//         _counterDiv.style.backgroundColor='orange'
//     }
//     else if(count<30){
//         _counterDiv.style.backgroundColor='red'
//     }
// }

//5
// function ProgressLine(_input){
//     let _progress=document.getElementById('progress-line')
//     let _progressValue=_progress.value

//     if(_input=='+'){
//         _progressValue++
//     }

//     if(_input=='-'){
//         _progressValue--
//     }

//     //console.log(_progressValue)
//     _progress.value=_progressValue
// }

//6
// function h3Class(){
//     var _h3=document.getElementById('base')
//     //console.log(_h3)

//     // if(_h3.classList.length>1){
//     if(_h3.classList.contains('circle')){
//         _h3.classList.remove('circle')
//     }
//     else{
//         _h3.classList.add('circle')
//     }
// }

//7
// Menu()
// function Menu(){
//     var _aTags=document.querySelectorAll('.menu')
//     console.log(_aTags)

//     _aTags.forEach(_a=>{
//         _a.style.background='yellow'
//         _a.style.color='red'
//         _a.style.borderRadius='10px'
//         _a.style.margin='1px'
//         _a.style.padding='5px 10px'
//     })
// }

//8

// var _timer=window.setInterval(function(){
// var _timer=window.setInterval(()=>{
//     //alert('click')
//     var _counter=document.getElementById('counter').innerHTML
//     //alert(_counter++)
//     _counter++
//     document.getElementById('counter').innerHTML=_counter
// },1000)

//9
// let _m = 0;//minute
// let _s = 0;//second
// let _time = window.setInterval(() => {
//     _s++
//     if (_s == 59) {
//         _s = 0;
//         _m++;
//     }

//     let _t = 
//     (_m < 10 ? '0' + _m : _m )+ ':' + (_s < 10 ? '0' + _s : _s)
//     document.getElementById("time").innerHTML = _t

//     if(_m==1){
//         window.clearInterval(_time)
//     }

// }, 1000)

// 10
// function BtnClick() {
//     let _input = document.getElementById('input-text').value;
//     let _output = document.getElementById('output-text');
//     let _charList = Array.from(_input)//text to array
//     let _index = 0;

//     _output.innerHTML = "";
//     var _timer = window.setInterval(() => {
//         _output.innerHTML += _charList[_index]

//         if (_index < _charList.length-1)
//             _index++
//         else
//             window.clearInterval(_timer)
//     }, 200)
// }

//11
function CreateTag() {
    let _aTag = document.createElement('a')//span, div, input, img, h1,...
    _aTag.setAttribute('href','https://google.com')
    _aTag.innerHTML='GOOGLE'
    _aTag.style.color='yellow'
    _aTag.addEventListener('click',()=>{
        alert('click')
    }) 
    document.getElementById('main-div').appendChild(_aTag)
}


