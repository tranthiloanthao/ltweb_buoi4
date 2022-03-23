function KiemTra()
{
	var ht = f.HoTen.value;
	var e = f.Email.value;
	var dc = f.DiaChi.value;
	var l = f.Loai.value;
	var ch = f.CauHoiCuaBan.value;
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	
	if(ht == '')
	{
		alert('Họ tên ko đc bỏ trống');
		return false;
	}
	
	if(e == '')
	{
		alert('Email ko đc bỏ trống');
		return false;
	}
	
	if(dc == '')
	{
		alert('Địa chỉ không được bỏ trống!');
		return false;
	}
	
	if(l == '')
	{
		alert('Loại không được bỏ trống!');
		return false;
	}
	
	if(ch == '')
	{
		alert('Câu hỏi không được bỏ trống!');
		return false;
	}
	
	if(!emailPattern.test(e))
	{
		alert('Địa chỉ email ko hợp lệ');
		return false;
	}
	
	return true;
}