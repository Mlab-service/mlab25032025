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
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 显示加载状态
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // 准备发送到两个邮箱的数据
            const templateParams = {
                name: this.querySelector('#name').value,
                email: this.querySelector('#email').value,
                message: this.querySelector('#message').value,
                to_email1: 'sales@mlab-technical.com.au',
                to_email2: 'wscqdcn@hotmail.com'
            };
            
            // 使用EmailJS发送邮件
            emailjs.send('service_6ykklxa', 'template_dce6ut4', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    formStatus.textContent = 'Your message has been sent successfully!';
                    formStatus.style.color = '#4CAF50';
                    formStatus.style.display = 'block';
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    formStatus.textContent = 'Failed to send message. Please try again later.';
                    formStatus.style.color = '#F44336';
                    formStatus.style.display = 'block';
                })
                .finally(function() {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
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