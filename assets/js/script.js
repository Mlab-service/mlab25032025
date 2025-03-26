/**
 * Mlab Technical Website JavaScript
 * 实现网站交互功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 响应式导航菜单
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Product cards display
    const productCards = document.querySelectorAll('.product-card');
    
    if (productCards.length > 0) {
        productCards.forEach(card => {
            card.style.display = 'block';
        });
    }
    
    // 返回顶部按钮
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 滚动时显示/隐藏返回顶部按钮
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.opacity = '0';
            }
        });
    }
    
    // 表单提交事件
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // 如果使用formspree.io，则不需要阻止默认提交行为
            // 这里可以添加表单验证逻辑
            console.log('表单提交');
        });
    }
    
    // 添加页面滚动动画效果
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.8) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    // 初始检查
    animateOnScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', animateOnScroll);
});