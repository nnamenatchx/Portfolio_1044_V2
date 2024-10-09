window.onload = start; /*เรียกใช้ตอนหน้าเว็บโหลดเสร็จ*/
let count = 0; /*เก็บจำนวนครั้งที่มีการโพสต์แต่ละฟอรัม ตัวควบคุมจำนวนครั้ง*/

function start() { /*กำหนดข้อความเริ่มต้นบนหน้าเว็บ*/
    let top = document.getElementById("top"); /*เป็นการดึงh1มา*/
    top.innerHTML = "Welcome to the Forum"; /*ข้อความข้างใน*/
}

function postFunction() { /*ประกาศตัวแปรว่าจะโพสต์ไรบ้าง*/
    let message = document.getElementById("message").value; /*ตัวแมสเซจที่อยู่ข้างใน*/
    let topic = document.getElementById("topic");
    let reply1 = document.getElementById("reply1");
    let reply2 = document.getElementById("reply2");

    switch (count) {
        case 0:
            topic.innerHTML = message;
            topic.classList.add('show'); // เพิ่มคลาส show เพื่อให้มีเอฟเฟกต์การเด้ง
            break;
        case 1:
            reply1.innerHTML = message;
            reply1.classList.add('show'); // เพิ่มคลาส show เพื่อให้มีเอฟเฟกต์การเด้ง
            break;
        case 2:
            reply2.innerHTML = message;
            reply2.classList.add('show'); // เพิ่มคลาส show เพื่อให้มีเอฟเฟกต์การเด้ง
            break;
    }
    document.getElementById("message").value = "";
    count++; /*เพิ่มทีละตัว*/
}

function clearFunction() {
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    count = 0;

    // ลบคลาส show เพื่อซ่อนข้อความ
    document.getElementById("topic").classList.remove('show');
    document.getElementById("reply1").classList.remove('show');
    document.getElementById("reply2").classList.remove('show');
}
