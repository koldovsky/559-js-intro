// alert('Hello'); 

const message = 'Hello JavaScript!';
alert(message);

const name = prompt('Enter your name');
alert(name);

let age = Number(prompt('Enter you age'));
alert('Your age is ' + age);

age = add(age, 1); // - / * % 
alert('Next year you will be ' + age);

if (age >= 18 && age < 90) { // > < !== != === == || && 
    alert('You are adult!');
} else {
    alert('You are underaged!');
}

function add(a, b) {
    const result = a + b;
    return result;
}


