document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const btn = document.getElementById('load-more-btn');
    const hiddenSection = document.getElementById('more-experience');

    // 1. 捲動變色邏輯
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. 展開 Credit 列表
    if (btn && hiddenSection) {
        btn.addEventListener('click', () => {
            hiddenSection.classList.toggle('show');
            if (hiddenSection.classList.contains('show')) {
                btn.textContent = 'Show Less';
            } else {
                btn.textContent = 'View All Credits';
                // 縮回時捲動回頂部，避免視覺突兀
                window.scrollTo({
                    top: document.getElementById('experience').offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
});