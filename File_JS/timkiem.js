var i = 1;
function timkiem() {
    i++;
    var phandau = document.getElementById("dau");
    var tim = document.querySelector(".thanhtimkiem");
    if (i % 2 == 0) {
        tim.setAttribute("style", "display: block;");
        phandau.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('D:/Mon_HTML5_CSS3/thongnvps23491_WEB302_Assignment1/PS23491_Nguyen_Van_Thong/Images/dulich3.jpg')";
        phandau.style.backgroundSize = "100%";
    }
    else {
        tim.setAttribute("style", "display: none;");
        phandau.style.background = "url('D:/Mon_HTML5_CSS3/thongnvps23491_WEB302_Assignment1/PS23491_Nguyen_Van_Thong/Images/dulich3.jpg')";
        phandau.style.backgroundSize = "100%";
    }
}

function checkform1() {
    var ten = document.getElementById("name");
    var diachi = document.getElementById("address");
    var dt = document.getElementById("phone");
    var mail = document.getElementById("email");
    var tieude = document.getElementById("title");
    var noidung = document.getElementById("text");

    if (ten.value == "" || diachi.value == "" || dt.value == ""
        || mail.value == "" || tieude.value == "" || noidung.value == "") {
        alert("Vui lòng điền đầy đủ nội dung trước khi gửi \n xin cảm ơn");
    }
    else if (!checkNumberPhone(dt.value)) {
        alert("Số điện thoại không hợp lệ");
    }
    else if (!checkEmail(mail.value)) {
        alert("Email không hợp lệ");
    }
    else {
        alert("Cám ơn bạn đã liên hệ với chúng tôi");
        xoa();
    }
}

function checkNumberPhone(phone) {
    var phonemau = /((09|03|07|08|05)+([0-9]{8}))/;
    return phonemau.test(phone);
}

function checkEmail(mail) {
    var mau = /\w(@)([\w]+)((\.)([a-zA-Z]))+/;
    return mau.test(mail);
}

function xoa() {
    var ten = document.getElementById("name");
    var diachi = document.getElementById("address");
    var dt = document.getElementById("phone");
    var mail = document.getElementById("email");
    var tieude = document.getElementById("title");
    var noidung = document.getElementById("text");

    ten.value = "";
    diachi.value = "";
    dt.value = "";
    mail.value = "";
    tieude.value = "";
    noidung.value = "";
}

function loi() {
    alert("Không có kết quả");
    document.getElementById("tk").value = "";
}

function oke() {

    alert("Cám ơn bạn \n Chúng tôi sẽ gửi thông báo cho bạn sớm");
    document.getElementById("mailcuoi").value = "";
    document.getElementById("mailcuoi").style.display = "none";
    document.getElementById("gui").style.display = "none";

}


var i = 0;
function next() {
    i++;
    if (i > 5) i = 1;
    var element = document.getElementById('dau');
    element.style.background = "url('D:/Mon_HTML5_CSS3/thongnvps23491_WEB302_Assignment1/PS23491_Nguyen_Van_Thong/Images/img"+ i +".jpg')";
    element.style.backgroundRepeat = "no-repeat"
    element.style.backgroundSize = "100%"
}

function tudong()
{
    var t = setInterval(next ,5000);
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "darkblue";
ctx.lineWidth = 1;
ctx.arc(150, 80, 50, 0, 2 * Math.PI);
ctx.stroke();    
ctx.fillStyle = "blue";  
ctx.fill();

ctx.font = "55px Arial";
ctx.strokeStyle = "white";
ctx.strokeText("T", 125, 90);
ctx.font = "50px Arial";
ctx.strokeStyle = "yellow";
ctx.strokeText("V",140, 100);

ctx.font = "30px Verdana";