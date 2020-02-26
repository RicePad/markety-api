const counter = document.getElementById('counter');
let count = 1000;

const timer = setInterval(() => counter.innerText = ++count, 1000);