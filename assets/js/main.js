document.addEventListener('DOMContentLoaded', () => {
  /* ===== Burger Menu ===== */
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;
  burger?.addEventListener('click',()=>{
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  /* ===== Nav Link Smooth Scroll ===== */
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
      body.classList.remove('no-scroll');
      
      // 外部リンクの場合はスムーズスクロールを適用しない
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        // サイト内リンクの場合のみスムーズスクロール
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 72, // ヘッダーの高さ分を引く
            behavior: 'smooth'
          });
        }
      }
      // 外部リンクの場合はデフォルトの動作を許可（リンク先に移動）
    });
  });

  /* ===== Brand Logo Smooth Scroll ===== */
  const brandLogo = document.querySelector('.brand');
  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      const href = brandLogo.getAttribute('href');
      if (href.startsWith('#')) {
        // サイト内リンクの場合のみスムーズスクロール
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 72,
            behavior: 'smooth'
          });
        }
      }
      // 外部リンクの場合はデフォルトの動作を許可
    });
  }

  /* ===== Header Shadow ===== */
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ===== Scroll to Top Button ===== */
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });
    
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ===== Hero Video ===== */
  const heroElem = document.querySelector('.hero video');
  if(heroElem){
    heroElem.setAttribute('data-cache',Date.now()); // dummy
  }

  /* ===== Works Section ===== */
  // カルーセル機能を削除し、シンプルな表示に変更

  /* ===== Fade In Animation ===== */
  const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
  const observerOptions = {
    threshold: 0.2
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
});
