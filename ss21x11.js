let birthDay = +prompt("Nhap ngay sinh");
let birthMonth = +prompt("Nhap thang sinh");
if (!isNaN(birthDay) && !isNaN(birthMonth) && birthMonth >= 1 && birthMonth <= 12 && birthDay >= 1 && birthDay <= 31) {
    let zodiac = "";
    if ((birthMonth === 1 && birthDay >= 20) || (birthMonth === 2 && birthDay <= 18)) zodiac = "Bảo Bình";
    else if ((birthMonth === 2 && birthDay >= 19) || (birthMonth === 3 && birthDay <= 20)) zodiac = "Song Ngư";
    else if ((birthMonth === 3 && birthDay >= 21) || (birthMonth === 4 && birthDay <= 20)) zodiac = "Bạch Dương";
    else if ((birthMonth === 4 && birthDay >= 21) || (birthMonth === 5 && birthDay <= 20)) zodiac = "Kim Ngưu";
    else if ((birthMonth === 5 && birthDay >= 21) || (birthMonth === 6 && birthDay <= 21)) zodiac = "Song Tử";
    else if ((birthMonth === 6 && birthDay >= 22) || (birthMonth === 7 && birthDay <= 22)) zodiac = "Cự Giải";
    else if ((birthMonth === 7 && birthDay >= 23) || (birthMonth === 8 && birthDay <= 22)) zodiac = "Sư Tử";
    else if ((birthMonth === 8 && birthDay >= 23) || (birthMonth === 9 && birthDay <= 22)) zodiac = "Xử Nữ";
    else if ((birthMonth === 9 && birthDay >= 23) || (birthMonth === 10 && birthDay <= 23)) zodiac = "Thiên Bình";
    else if ((birthMonth === 10 && birthDay >= 24) || (birthMonth === 11 && birthDay <= 22)) zodiac = "Bọ Cạp";
    else if ((birthMonth === 11 && birthDay >= 23) || (birthMonth === 12 && birthDay <= 21)) zodiac = "Nhân Mã";
    else if ((birthMonth === 12 && birthDay >= 22) || (birthMonth === 1 && birthDay <= 19)) zodiac = "Ma Kết";
    document.write(`${zodiac}`);
    }else {
    document.write("Khong hop le");
}
