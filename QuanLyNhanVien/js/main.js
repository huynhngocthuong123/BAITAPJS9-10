

// tạo một thể hiện DanhSachNhanVien
const dsnv = new DanhsachNhanVien();


function GETELE(id) {
    return document.getElementById(id)
    
}

GETELE("btnThemNV").onclick = function themNhanVien() {
var taikhoan = GETELE("tknv").value;
var ten = GETELE("name").value;
var email = GETELE("email").value;
var matkhau = GETELE("password").value;
var ngay = GETELE("datepicker").value;
var luong = Number(GETELE("luongCB").value);
var chucvu = GETELE("chucvu").value;
var giolam = GETELE("gioLam").value;
// console.log(taikhoan,ten,email,matkhau,ngay,luong,chucvu,giolam);
// tao ra một thể hiện của lớp NhanVien
var nv = new NhanVien(taikhoan,ten,email,matkhau,ngay,luong,chucvu,giolam);
    // console.table(nv);
    nv.tinhLuong();



    dsnv.themNV(nv);
    // console.log(dsnv.mangNV);
}
// function hienThiNhanVien() {
//     var content = "";
//     dsnv.mangNV.map(function (nv, index) {
//         var trELE = `<tr>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
        
//         </tr>`
        
//     })
// }
