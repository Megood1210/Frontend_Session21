let a = +prompt("Nhap so nguyen thu nhat");
let b = +prompt("Nhap so nguyen thu hai");
let c = +prompt("Nhap so nguyen thu ba");
let d = +prompt("Nhap so nguyen thu bon");
let e = +prompt("Nhap so nguyen thu nam");
let even = 0;
let odd =0;
if (a % 2 === 0) {
    even++;
} else {
    odd++;
}
if (b % 2 === 0) {
    even++;
} else {
    odd++;
}
if (c % 2 === 0) {
    even++;
} else {
    odd++;
}
if (d % 2 === 0) {
    even++;
} else {
    odd++;
}
if (e % 2 === 0) {
    even++;
} else {
    odd++;
}
document.write(`Tong so chan: ${even}`);
document.write("<br>");
document.write(`Tong so le: ${odd}`);
