function checkpassword(){
    var password1=signup.pass.value;
    var password2=signup.passch.value;
if(password1!=password2)
{
    alert(" Passwords Do not match ");
}
}
function checkdate()
{
	var date=signup.day.value;
	var month=signup.month.value;
	var year=signup.year.value;
	if(date>29 && month==2)
	alert("Select a valid date ");
	else if (date==31&&(month==6||month==11||month==4||month==9))
	alert("Select a valid date ");
	else if(date==29&&month==2&&(year%4!=0))
	alert("Select a valid date ");
	else if(date==29&&month==2&&(year%4==0&&year%100==0&&year%400!=0))
	alert("Select a valid date ");
}