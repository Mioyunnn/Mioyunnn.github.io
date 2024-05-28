
// 获取图标元素
const angleIcon = document.getElementById('angle');

// 添加点击事件监听器
angleIcon.addEventListener('click', function() {
    // 获取要滚动到的目标元素（这里假设目标元素的 ID 是 'main'）
    const mainSection = document.getElementById('main');

    // 使用 scrollIntoView() 方法将目标元素滚动到可视区域
    mainSection.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    var translateY = Math.max(-20, Math.min(0, -0.3 * Math.floor(scrollPercentage / 1)));
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
document.addEventListener("DOMContentLoaded", function() {
    var main = document.getElementById("main");
    var tool = document.getElementById("tool");

    // 定義一個函數來檢查 tool 和 main 之間的位置關係
    function checkPosition() {
        var mainRect = main.getBoundingClientRect();
        var toolRect = tool.getBoundingClientRect();

        // 檢查 tool 是否碰觸到 main
        if (toolRect.bottom > mainRect.top && toolRect.top) {
            tool.classList.add("affix");
        } else {
            tool.classList.remove("affix");
        }
    }

    // 綁定 scroll 事件，並在頁面加載時檢查一次
    window.addEventListener("scroll", checkPosition);
    checkPosition();
});

document.addEventListener("DOMContentLoaded", function() {
    // 监听滚动事件
    window.addEventListener("scroll", function() {
        // 获取页面总高度
        var totalHeight = document.body.scrollHeight - window.innerHeight;
        
        // 获取当前滚动位置
        var scrollPosition = window.pageYOffset;
        
        // 计算滚动进度
        var scrollProgress = (scrollPosition / totalHeight) * 100;
        
        // 可以将滚动进度四舍五入到整数
        scrollProgress = Math.round(scrollProgress);
        document.getElementById("progress").textContent = + scrollProgress + "%";
        // 在控制台输出滚动进度
        
        
        // 或者您可以将滚动进度显示在页面的某个元素上
        // 例如，如果有一个元素具有 id="progress"，您可以使用以下代码将进度显示在该元素上：
        // document.getElementById("progress").textContent = "滚动进度：" + scrollProgress + "%";
    });
});