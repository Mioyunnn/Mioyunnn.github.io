
// 获取图标元素
const angleIcon = document.getElementById('angle');

// 添加点击事件监听器
angleIcon.addEventListener('click', function() {
    // 获取要滚动到的目标元素（这里假设目标元素的 ID 是 'main'）
    const mainSection = document.getElementById('main');

    // 使用 scrollIntoView() 方法将目标元素滚动到可视区域
    mainSection.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    var translateY = Math.min(0, -2 * Math.floor(scrollPercentage / 2));
    document.getElementById('imgs').style.transform = 'translate3d(0, ' + translateY + 'vh, 0)';
});

// 获取导航栏和主内容区域的元素
const nav = document.getElementById('nav');
const main = document.getElementById('main');

// 获取导航栏的高度
const navHeight = nav.offsetHeight;

// 添加滚动事件监听器
window.addEventListener('scroll', function() {
    // 获取导航栏和主内容区域的位置信息
    const navRect = nav.getBoundingClientRect();
    const mainRect = main.getBoundingClientRect();

    // 计算导航栏和主内容区域之间的距离
    const distance = mainRect.top - navRect.bottom;

    // 设置阈值，当导航栏触碰到主内容区域时隐藏导航栏
    const threshold = 0;

    if (distance <= threshold) {
        // 导航栏触碰到主内容区域，隐藏导航栏
        nav.style.transform = `translateY(-${navHeight}px)`;
    } else {
        // 导航栏未触碰到主内容区域，显示导航栏
        nav.style.transform = 'translateY(0)';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 设置垂直方向滑动
        loop: true, // 循环滑动
        autoplay: {
            delay: 4000, // 自动播放间隔时间
        },
    });
});