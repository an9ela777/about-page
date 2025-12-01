// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 漢堡選單切換
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 點擊連結後自動收合選單（手機版優化）
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. 滾動出現動畫 (Scroll Reveal)
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const progressBars = document.querySelectorAll('.progress');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150; // 元素進入視窗多少 px 後觸發

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
        
        // 特殊處理：技能進度條的動畫
        progressBars.forEach((bar) => {
            const barTop = bar.getBoundingClientRect().top;
            if (barTop < windowHeight - 50) {
                // 讀取 style 裡的 width 值並重新賦值觸發 CSS transition/animation
                // 由於我們在 CSS animation 設定了 forwards，這裡只要確保父層 visible 即可
                // 如果想用 JS 控制寬度動畫：
                // bar.style.width = bar.getAttribute('style').split(':')[1];
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // 初始化檢查一次，以免重新整理時內容看不見
    revealOnScroll();
});