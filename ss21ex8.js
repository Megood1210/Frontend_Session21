document.write("Các số Armstrong có 3 chữ số là: <br>");
for (let number = 100; number < 1000; number++) {
    let a = Math.floor(number / 100);  
    let b = Math.floor((number % 100) / 10);  
    let c = number % 10;
    if (number === (a ** 3 + b ** 3 + c ** 3)) {
        document.write(number + "<br>"); 
    }
}
