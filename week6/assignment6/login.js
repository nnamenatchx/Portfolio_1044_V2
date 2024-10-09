window.onload = loginLoad;
function loginLoad(){
	const form = document.getElementById('myLogin');
	form.onsubmit = checkLogin
}

function checkLogin(){
	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	const passwordd = urlParams.get('password')

	const user = document.forms['myLogin']['username'].value;
    const password = document.forms['myLogin']['password'].value;

    if (username != user || password != passwordd) {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        return false;
    }

    alert('เข้าสู่ระบบสำเร็จ!');
    return true;
}


			