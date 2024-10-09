window.onload = pageLoad;
function pageLoad() {
    const form = document.forms['myRegister'];
    
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });
}

function validateForm() {
    const user = document.forms['myRegister']['username'].value;
    const password = document.forms['myRegister']['password'][0].value;
    const Retype = document.forms['myRegister']['password'][1].value;

    if (user === '' || password === '' || Retype === '') {
        document.getElementById('errormsg').textContent = 'กรุณากรอกข้อมูลให้ครบทุกช่อง';
        return false; 
    }

    if (password !== Retype){
        document.getElementById('errormsg').textContent = 'กรุณากรอกรหัสผ่านให้ตรงกัน';
        return false; 
    }

    alert('ok');
    return true;
}
