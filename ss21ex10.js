let number = +prompt("Nhap mot so");
if (isNaN(number) || number <= 0) {
    document.write("Khong hop le");
} else {
    let count = 0; 
    let number = 2;   
    document.write(`${number} so nguyen to đau tien:<br>`);
    while (count < n) {
        let isPrime = true; 
        if (number < 2) {
            isPrime = false;
        } else {
            for (let i = 2; i * i <= number; i++) {
                if (number % i === 0) {
                    isPrime = false; 
                    break;
                }
            }
        }
        if (isPrime) {
            document.write(number + " ");
            count++;
        }
        number++; 
    }
}
