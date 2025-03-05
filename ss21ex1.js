let a = +prompt("Nhap so nguyen thu nhat");
let b = +prompt("Nhap so nguyen thu hai");
let c = +prompt("Nhap so nguyen thu ba");
let d = +prompt("Nhap so nguyen thu bon");
let e = +prompt("Nhap so nguyen thu nam");
let total = 0;
if(a % 2 !== 0){
    total += a;
}
if (b % 2 !== 0) {
    total += b;
}
if (c % 2 !== 0) {
    total += c;
}
if (d % 2 !== 0) {
    total += d;
}
if (e % 2 !== 0){
    total += e;
}
document.write(total)