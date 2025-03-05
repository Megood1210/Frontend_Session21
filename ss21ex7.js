let bankMoney = +prompt("Nhap tien gui ngan hang");
let interestRate = +prompt("Nhap lai xuat");
let months = +prompt("Nhap so thang gui");
let interest = bankMoney*(1 + interestRate/100)**months;
document.write(`Tiền lãi: ${interest}`);
document.write("<br>")
document.write("Tiền nhận được: " + interest + 1000);