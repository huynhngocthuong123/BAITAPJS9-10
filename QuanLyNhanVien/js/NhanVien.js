function NhanVien(taikhoan, ten, email, matkhau, ngay, luong, chucvu, giolam) {
    this.taiKhoan = taikhoan;
    this.tenNV = ten;
    this.email = email;
    this.matKhau = matkhau;
    this.ngaySinh = ngay;
    this.Luong = luong;
    this.chucVu = chucvu;
    this.gioLam = giolam;
    this.tongLuong = 0;
    console.log(this.chucVu);

    this.tinhLuong = function () {
        if (this.chucVu == "Sếp") {
            this.tongLuong = this.Luong * 3
        } else if (this.chucVu == "Trưởng Phòng") {
            this.tongLuong = this.Luong * 2
        } else {
            this.tongLuong = this.Luong;
        }

    }
    // console.log(this.tongLuong);


}
