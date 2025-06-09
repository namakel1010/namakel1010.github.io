// スクロールアニメーション - スマホ対応版
document.addEventListener('DOMContentLoaded', function() {
  // モバイルデバイス検出
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log('モバイルデバイス検出:', isMobile);
  
  // ヒーローセクションのテキスト改行問題を修正
  const heroTitle = document.querySelector('.hero-inner h1');
  if (heroTitle) {
    heroTitle.style.whiteSpace = 'nowrap';
    console.log('ヒーロータイトルのスタイルを修正しました');
  }
  
  // アニメーション対象要素
  const animatedElements = {
    characters: document.querySelectorAll('.character-item'),
    works: document.querySelectorAll('.work-item'),
    profile: document.querySelector('.profile-image-container'),
    soundIcons: document.querySelectorAll('.sound-icon')
  };
  
  // スクロールアニメーション関数
  function handleScrollAnimation() {
    // 画面の高さを取得
    const windowHeight = window.innerHeight;
    
    // キャラクターアイテムのアニメーション
    animatedElements.characters.forEach(item => {
      const rect = item.getBoundingClientRect();
      // 要素が画面内に入ったらアニメーション
      if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
        item.classList.add('scroll-animated');
      } else {
        item.classList.remove('scroll-animated');
      }
    });
    
    // 作品アイテムのアニメーション
    animatedElements.works.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
        item.classList.add('scroll-animated');
        // 音楽アイコンも表示
        const soundIcon = item.querySelector('.sound-icon');
        if (soundIcon) {
          soundIcon.classList.add('icon-visible');
        }
      } else {
        item.classList.remove('scroll-animated');
        const soundIcon = item.querySelector('.sound-icon');
        if (soundIcon) {
          soundIcon.classList.remove('icon-visible');
        }
      }
    });
    
    // プロフィール画像のアニメーション
    if (animatedElements.profile) {
      const rect = animatedElements.profile.getBoundingClientRect();
      if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
        animatedElements.profile.classList.add('scroll-animated');
      } else {
        animatedElements.profile.classList.remove('scroll-animated');
      }
    }
  }
  
  // スクロールイベントリスナー
  window.addEventListener('scroll', handleScrollAnimation);
  
  // 初期表示時にもアニメーションを実行
  handleScrollAnimation();
  
  // 音楽再生機能の強化
  document.querySelectorAll('.sound-icon').forEach((soundIcon, index) => {
    // タッチイベントを明示的に追加
    soundIcon.addEventListener('touchstart', function(e) {
      console.log('音楽アイコンがタッチされました');
      e.stopPropagation(); // タッチイベントの伝播を停止
    });
  });
  
  // スタイルの直接注入
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    /* スクロールアニメーション用スタイル */
    .scroll-animated {
      animation: fadeInUp 0.5s ease forwards;
    }
    
    .character-item.scroll-animated {
      transform: translateY(-5px) !important;
      transition: transform 0.5s ease !important;
    }
    
    .work-item.scroll-animated .work-image img {
      transform: scale(1.05) !important;
      transition: transform 0.5s ease !important;
      filter: brightness(0.9) !important;
    }
    
    .profile-image-container.scroll-animated {
      transform: scale(1.05) !important;
      transition: transform 0.5s ease !important;
    }
    
    .sound-icon.icon-visible {
      opacity: 0.8 !important;
      visibility: visible !important;
      display: flex !important;
      transition: opacity 0.3s ease !important;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0.7;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* ヒーローセクションのテキスト修正 */
    .hero-inner h1 {
      white-space: nowrap !important;
    }
  `;
  document.head.appendChild(styleEl);
});
