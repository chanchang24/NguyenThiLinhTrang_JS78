

var soNguyen = document.querySelector('#soNguyen');
var hienThiSN = document.querySelector('#hienThiSN');
var arrLength = 0;
var arrNum = [];
var btnTinh = document.querySelector('#btnTinh');
btnTinh.style.display = 'none';
document.querySelector('#btnLuu').addEventListener('click', function () {
    soNguyen = document.querySelector('#soNguyen').value;
    if (soNguyen == parseInt(soNguyen)) {
        for (var i = 0; i < 1; i++) {
            arrNum.push(parseInt(soNguyen));
            hienThiSN.innerHTML = " " + arrNum + " ";
        }
    } else {
        alert('Vui lòng nhập số nguyên  ')
    }
    btnTinh.style.display = 'inline-block';
    arrLength = arrNum.length;
    console.log(arrNum);

    return arrNum;
})
//Bai 1
var bai = function (bai1) {
    bai1.onclick = function (bai1) {
        bai1.checked = true;
    }
}
var sum = function () {
    var tongSoNguyenDuong = 0;
    for (var i = 0; i < arrLength; i++) {
        if (arrNum[i] > 0) {
            tongSoNguyenDuong += parseInt(arrNum[i]);
        }

    }
    alert('Tong so nguyen duong ' + tongSoNguyenDuong)
    return tongSoNguyenDuong;

}
//Bai 2
bai(bai2);
var demSo = function () {
    var dem = 0;
    for (var i = 0; i < arrLength; i++) {
        if (arrNum[i] > 0) {
            dem++;
        }

    }
    alert('Có ' + dem + ' số nguyên dương');
}
//bai3
bai(bai3)
var timMin = function () {
    var min = arrNum[0];

    for (var i = 1; i < arrLength; i++) {
        if (arrNum[i] < min) {
            min = arrNum[i]
        }
    }
    alert('Số nhỏ nhất trong mảng ' + min)
}
//bai4
bai(bai4)
var timSoDuongMin = function () {
    var min = arrNum[0];

    for (var i = 1; i < arrLength; i++) {
        if (arrNum[i] > 0) {
            if (arrNum[i] < min) {
                min = arrNum[i]
            }
        }

    }
    alert('Số nguyên dương nhỏ nhất trong mảng ' + min)


}
//bai 5
bai(bai5);
var timSoChanCuoi = function () {
    var soChan = true;
    for (var i = 0; i < arrLength - 1; i++) {
        if (arrNum[i] % 2 == 0) {
            soChan = arrNum[i];
        } else {
            soChan = false;
            break;
        }

    }
    if (soChan == false) {
        soChan = -1;
    }
    alert('Số chẵn cuối cùng trong mảng  ' + soChan)
}
//bai 6
bai(bai6)
var kq = document.querySelector('#kq');
var doiCho2So = document.querySelector('.doiCho2So');
doiCho2So.style.display = 'none';
var doiChoSoNguyen = function () {
    var viTri1 = document.querySelector('#viTri1').value;
    var viTri2 = document.querySelector('#viTri2').value;
    for (var i = 0; i <= arrLength; i++) {
        if (i === parseInt(viTri1)) {
            for (var j = 0; j <= arrLength; j++) {
                if (j === parseInt(viTri2)) {
                    var temp = arrNum[i - 1];
                    arrNum[i - 1] = arrNum[j - 1];
                    arrNum[j - 1] = temp;
                }

            }
        }
        kq.innerHTML = " " + arrNum + " ";
    }
}
//bai 7
bai(bai7);
var sapXep = function () {
    for (var i = 0; i < arrLength; i++) {
        for (var j = 0; j <= i; j++) {
            if (arrNum[j] > arrNum[i]) {
                var temp = arrNum[i];
                arrNum[i] = arrNum[j];
                arrNum[j] = temp;
            }
        }

    }
    alert('' + arrNum + '')
}
//bai 8
bai(bai8);
var timSoNguyenTo = function () {
    var soNguyenTo = 0;
    
    for (var i = 0; i < arrLength; i++) {
        var demSo = 0;
        for (var j = 1; j <= arrNum[i] ; j++) {
            if(arrNum[i]% j == 0){          
                demSo++         
            }            
        } 
        if (demSo>0 && demSo < 3) {
            soNguyenTo = arrNum[i];
            break;
        }
    }
    if(soNguyenTo === 0){
        soNguyenTo =-1;
    }
    alert('Số nguyên tố đầu tiên ' + soNguyenTo)
}
//bai 9
bai(bai9);
var nhapSoThuc =document.querySelector('#nhapSoThuc');
var  nhapMangMoi =document.querySelector('.nhapMangMoi')
var arrSoThuc = []
nhapMangMoi.style.display='none';
btnLuuSoThuc.style.display='none';
var luuMangSoThuc = function(){
    document.querySelector('#btnLuuSoThuc').addEventListener('click', function () {
        nhapSoThuc =document.querySelector('#nhapSoThuc').value;
        if (nhapSoThuc != parseInt(nhapSoThuc)) {
            for (var i = 0; i < 1; i++) {
                arrSoThuc.push(parseFloat(nhapSoThuc));
                hienThiST.innerHTML = " " + arrSoThuc + " ";
                
            }
        } else {
            alert('Vui lòng nhập số thực  ')
        }
        btnDemSoNguyen.style.display='inline';
        console.log(arrSoThuc)
    })   
}

var demSoNguyen =function(){
    arrNum.push(arrSoThuc);
    console.log(arrNum);
    var dem = 0;
    for (var i = 0; i < arrLength; i++) {
        if (arrNum[i] == parseInt(arrNum[i])) {
            dem++;
        }

    }
    alert('Có ' + dem + ' số nguyên ');
}
btnDemSoNguyen.style.display='none'
//bai 10
bai(bai10);
var soSanh= function () {
    var demSoDuong = 0;
    var demSoAm = 0;
    for(var i = 0; i < arrLength; i++){
        if (arrNum[i] >0){
            demSoDuong++;
        }else if (arrNum[i]<0){
            demSoAm++;
        }else{
            break;
        }
    }
    if(demSoDuong > demSoAm){
        alert('Số dương nhiều hơn')
    }else if(demSoDuong < demSoAm){
        alert('Số âm nhiều hơn')
    }else{
        alert('Số dương bằng số âm')
    }
}
document.querySelector('#btnTinh').addEventListener('click', function () {
    if (bai1.checked) {
        sum();
    } else if (bai2.checked) {
        demSo();
    } else if (bai3.checked) {
        timMin();
    } else if (bai4.checked) {
        timSoDuongMin();
    } else if (bai5.checked) {
        timSoChanCuoi();
    } else if (bai6.checked) {
        doiCho2So.style.display = 'block';
        doiChoSoNguyen();
    } else if (bai7.checked) {
        sapXep();
    } else if (bai8.checked) {
        timSoNguyenTo();
    }else if (bai9.checked) {

        btnLuu.style.display ='none';
        btnLuuSoThuc.style.display = 'inline'
        nhapMangMoi.style.display='block';
        luuMangSoThuc();    
    }else if (bai10.checked) {
        soSanh();
    }
    else {
        alert('vui lòng check')
    }
    
})


