alert('js start')
//1
// var n=5;
// n=7.5;
// var m='ali';//"ali"
// let c=3;
// alert(n*3)
// alert(m)
// alert(c/2);

//2
// var n = 5;
// let m = 8;
// {
//     var n = 8;
//     let m = 12;

//     alert(m);
// }

// alert(n);
// alert(m);

//3
// let number = 12;
// if(number%2==0){
//     alert('زوج');
// }
// else{
//     alert('فرد');
// }

//4
function OddEven(input) {
    if (input % 2 == 0)
        alert('even')
}

//5
function Sum() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);

    //console.log(num1+num2);

    let output = document.getElementById('result');
    output.innerHTML = num1 + num2;

    //set style
    output.style.backgroundColor = '#edc563';
    output.style.color = 'yellow';
    output.style.borderRadius = '10px 10px 0 0';
    output.style.display = 'inline-block';
}

//6
function ShowNames() {
    let names = [];
    console.log(names);

    names.push('ali');
    names = names.concat(['sara', 'amir', 'maryam'])
    // delete names[2];
    names.pop()

    console.log(names)
    console.log(names.length)

    let itemsBox = document.getElementById('items');

    //1 inner HTML
    // for (var i = 0; i < names.length; i++) {
    //     itemsBox.innerHTML += names[i] + ' ';
    // }

    //2 forEach
    names.forEach(item => {
        //itemsBox.innerHTML += item + ' ';

        let btn = document.createElement('button');
        btn.innerHTML = item;
        btn.classList.add('dynamic-btn');

        //event
        btn.addEventListener('click', () => {
            alert(btn.innerHTML);
        });

        itemsBox.appendChild(btn);

    })
}

let count = 0;
let counterInterval = window.setInterval(() => {
    count += 1;
    document.getElementById('counter').innerHTML = count;

    if (count == 100)
        window.clearInterval(counterInterval);
}, 150)