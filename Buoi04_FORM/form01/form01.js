function KiemTra()
{
	var tdn=f.TenDangNhap.value;
	var mk=f.MatKhau.value;
	
	if(tdn == '')
	{
		alert('Tên đăng nhập ko đc bỏ trống');
		return false;
	}
	
	if(mk == '')
	{
		alert('Mật khẩu ko đc bỏ trống');
		return false;
	}
	return true;
}