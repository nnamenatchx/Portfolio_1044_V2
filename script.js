document.addEventListener("DOMContentLoaded", function() {
    // สไลด์โชว์สำหรับภาพหลักใน Portfolio
    let portfolioIndex = 0;
    const portfolioImages = document.querySelectorAll('.slideshow img');
    const totalPortfolioImages = portfolioImages.length;
  
    function showPortfolioImage(index) {
        portfolioImages.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }
  
    function nextPortfolioImage() {
        portfolioIndex = (portfolioIndex + 1) % totalPortfolioImages;
        showPortfolioImage(portfolioIndex);
    }
  
    // เปลี่ยนภาพทุก 3 วินาที
    const portfolioAutoSlideInterval = setInterval(nextPortfolioImage, 3000);
  
    // เริ่มแสดงภาพแรกใน Portfolio
    showPortfolioImage(portfolioIndex);
  
    // Smooth scroll เมื่อคลิกลิงก์ที่มี href เป็น anchor link (#)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
  
            const targetSection = document.querySelector(this.getAttribute('href'));
  
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
  
    // เปลี่ยนสี background ของ header เมื่อเลื่อนหน้า
    window.onscroll = function() {
        var header = document.querySelector('header');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.style.backgroundColor = "#ffffff"; // เปลี่ยนสีเมื่อเลื่อน
        } else {
            header.style.backgroundColor = "transparent"; // สีก่อนเลื่อน
        }
    };
  
    // สไลด์โชว์สำหรับ About Me
    let aboutIndex = 0;
    const aboutImages = document.querySelectorAll('.slider-image');
    const totalAboutImages = aboutImages.length;
  
    function showAboutImage(index) {
        aboutImages.forEach((img, i) => {
            img.classList.remove('active'); // ลบคลาส active ออกจากภาพทั้งหมด
            img.style.opacity = '0'; // ซ่อนภาพ
        });
  
        aboutIndex = (index + totalAboutImages) % totalAboutImages; // คำนวณ index ใหม่
        aboutImages[aboutIndex].classList.add('active'); // เพิ่มคลาส active เพื่อจางภาพใหม่
        setTimeout(() => {
            aboutImages[aboutIndex].style.opacity = '1'; // แสดงภาพใหม่หลังจากเพิ่มคลาส active
        }, 10); // ใช้ delay เล็กน้อยเพื่อให้ transition ทำงาน
    }
  
    // เพิ่ม event listeners ให้กับปุ่มเลื่อนใน About Me
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
  
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            clearInterval(portfolioAutoSlideInterval); // หยุดการเลื่อนอัตโนมัติใน Portfolio เมื่อกดปุ่ม
            showAboutImage(aboutIndex - 1);
        });
    }
  
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            clearInterval(portfolioAutoSlideInterval); // หยุดการเลื่อนอัตโนมัติใน Portfolio เมื่อกดปุ่ม
            showAboutImage(aboutIndex + 1);
        });
    }
  
    // เริ่มแสดงภาพแรกใน About Me
    showAboutImage(aboutIndex);
  });
  
  // โหมดสลับกลางคืน/กลางวัน
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    
    // ตรวจสอบสถานะของโหมด
    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('light-icon').style.display = 'none'; // ซ่อนไอคอนดวงอาทิตย์
        document.getElementById('dark-icon').style.display = 'block'; // แสดงไอคอนดวงจันทร์
    } else {
        document.body.classList.add('light-mode');
        document.getElementById('light-icon').style.display = 'block'; // แสดงไอคอนดวงอาทิตย์
        document.getElementById('dark-icon').style.display = 'none'; // ซ่อนไอคอนดวงจันทร์
    }
  
    // สลับโหมดเมื่อคลิกปุ่ม
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
  
        // บันทึกสถานะโหมด
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('mode', 'dark');
            document.getElementById('light-icon').style.display = 'none'; // ซ่อนไอคอนดวงอาทิตย์
            document.getElementById('dark-icon').style.display = 'block'; // แสดงไอคอนดวงจันทร์
        } else {
            localStorage.setItem('mode', 'light');
            document.getElementById('light-icon').style.display = 'block'; // แสดงไอคอนดวงอาทิตย์
            document.getElementById('dark-icon').style.display = 'none'; // ซ่อนไอคอนดวงจันทร์
        }
    });
  });
  