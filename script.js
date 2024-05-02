
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
document.addEventListener('click', function(event) {
    // 获取点击位置的坐标
    const x = event.clientX;
    const y = event.clientY;

    // 创建粒子效果
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 100, // 粒子数量
          density: {
            enable: true,
            value_area: 800 // 粒子密度
          }
        },
        color: {
          value: '#000000' // 粒子颜色
        },
        shape: {
          type: 'circle', // 粒子形状
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5, // 粒子透明度
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3, // 粒子大小
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150, // 粒子连接线的距离
          color: '#000000',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6, // 粒子移动速度
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push' // 点击时触发粒子推动效果
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4 // 点击时添加的粒子数量
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  });