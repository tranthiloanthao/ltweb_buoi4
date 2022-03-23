function KiemTra()
{
	var hvt=f.HoVaTen.value;
	var dc=f.DiaChi.value;
	var eml=f.Email.value;
	var dt=f.DienThoai.value;
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	
	if(hvt == '')
	{
		alert('Họ và tên ko đc bỏ trống');
		return false;
	}
	
	if(dc == '')
	{
		alert('Địa chỉ ko đc bỏ trống');
		return false;
	}
	
	if(eml == '')
	{
		alert('Email ko đc bỏ trống');
		return false;
	}
	
	if(dt == '')
	{
		alert('Điện thoại ko đc bỏ trống');
		return false;
	}
	
	if(!emailPattern.test(eml))
	{
		alert('Địa chỉ email ko hợp lệ');
		return false;
	}
	
	return true;
}
	