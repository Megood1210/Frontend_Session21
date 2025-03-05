let number =+prompt("Nhap mot so nguyen");
document.write(` Cac uoc cua ${number} la `);
for (let i = 0; i < number; i++) {
    if (number % i === 0 ){
        document.write("<br>");
        document.write(`${i}`);
    } else {
        document.write(" ")
    }
}