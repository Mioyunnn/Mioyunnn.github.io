
// 获取图标元素
const angleIcon = document.getElementById('angle');

// 添加点击事件监听器
angleIcon.addEventListener('click', function() {
    // 获取要滚动到的目标元素（这里假设目标元素的 ID 是 'main'）
    const mainSection = document.getElementById('main');

    // 使用 scrollIntoView() 方法将目标元素滚动到可视区域
    mainSection.scrollIntoView({ behavior: 'smooth' });
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
// 获取 canvas 元素和其上下文
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

// 设置 canvas 的宽度和高度
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 创建一个空数组来存储烟花粒子
let particles = [];

// 创建粒子类
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.gravity = 0.05;
    this.alpha = 1;
    this.color = `hsla(${Math.random() * 360}, 100%, 50%, ${this.alpha})`;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.alpha -= 0.01;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
  }
}

// 创建烟花效果
function createFirework(x, y) {
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(x, y));
  }
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();

    if (particle.alpha <= 0) {
      particles.splice(index, 1);
    }
  });
}

// 监听页面的点击事件
window.addEventListener("click", (e) => {
  createFirework(e.clientX, e.clientY);
});

// 开始动画循环
animate();