window.onload = pageLoad;

function pageLoad() {
    document.getElementById('start').addEventListener('click', startGame);
}

function startGame() { //ข้อความแจ้งเตือนตอนเกมเริ่ม
    alert("Start!");
    addBox(); //สร้างกล่อง
    timeStart(); //เริ่มจับเวลา
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timer = null;
    var totalTime = 10; // 30 วินาที
    var remainingTime = totalTime;
    var x = document.getElementById('clock');

    // ตั้งเวลาโดยใช้ setInterval
    timer = setInterval(function() {
        remainingTime--;
        x.innerText = `เวลาที่เหลือ: ${remainingTime} วินาที`;

        if (remainingTime <= 0) {
            clearInterval(timer);
            alert("Game Over.");
            clearScreen(); // เคลียร์กล่องเมื่อหมดเวลา
            x.innerText = ""; // เคลียร์เวลา
			document.getElementById('numbox').value = "";
        } else {
            var allBox = document.querySelectorAll("#layer div");
            if (allBox.length === 0) {
                clearInterval(timer);
                alert("You Win!");
                clearScreen(); // เคลียร์กล่องเมื่อชนะ
                x.innerText = ""; // เคลียร์เวลา
				document.getElementById('numbox').value = "";
            }
        }
    }, TIMER_TICK);
}


function addBox() {
    // สร้างกล่องตามจำนวนที่ผู้ใช้ใส่
    var numbox = parseInt(document.getElementById('numbox').value);
    var gameLayer = document.getElementById('layer');
    var colorDrop = document.getElementById('color').value;

    for (var i = 0; i < numbox; i++) {
        var tempBox = document.createElement('div');
		tempBox.className = "square " + colorDrop
        tempBox.id = "box" + i;
        tempBox.style.left = Math.random() * (500 - 50) + "px"; // ตำแหน่งสุ่ม
        tempBox.style.top = Math.random() * (500 - 50) + "px";

        // เพิ่มกล่องลงใน HTML
        gameLayer.appendChild(tempBox);
        bindBox(tempBox);
    }
}

function bindBox(box) {
    box.onclick = function() {
        this.remove();
    }
}

function clearScreen() {
    var allBox = document.querySelectorAll("#layer div");
    
    // ลบ div ทั้งหมด
    for (var i = 0; i < allBox.length; i++) {
        allBox[i].remove();
    }
}



