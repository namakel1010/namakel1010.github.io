// 全てのアニメーションをリセットするスクリプト
document.addEventListener('DOMContentLoaded', function() {
  console.log('リセットスクリプト実行');
  
  // ヒーローセクションのテキスト改行問題を修正
  const heroTitle = document.querySelector('.hero-inner h1');
  if (heroTitle) {
    heroTitle.style.whiteSpace = 'nowrap';
    console.log('ヒーロータイトルのスタイルを修正しました');
  }
  
  // 全てのアニメーションクラスを削除
  const allElements = document.querySelectorAll('*');
  const animationClasses = ['in-view', 'scroll-animated', 'touch-active', 'preserve-animation'];
  
  allElements.forEach(element => {
    // アニメーションクラスを削除
    animationClasses.forEach(className => {
      if (element.classList.contains(className)) {
        element.classList.remove(className);
      }
    });
    
    // インラインスタイルで変な枠や効果を削除
    if (element.tagName.toLowerCase() === 'div' || 
        element.tagName.toLowerCase() === 'img' || 
        element.tagName.toLowerCase() === 'li') {
      element.style.boxShadow = 'none';
      element.style.transform = 'none';
      element.style.transition = 'none';
      element.style.animation = 'none';
      element.style.filter = 'none';
      element.style.border = 'none';
      element.style.outline = 'none';
    }
  });
  
  // 音楽アイコンの表示だけは維持（モバイル用）
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    document.querySelectorAll('.sound-icon').forEach(icon => {
      icon.style.opacity = '0.8';
      icon.style.visibility = 'visible';
    });
  }
  
  // 既存のアニメーション関連のスクリプトを無効化
  window.addEventListener('scroll', function(e) {
    // スクロールイベントを監視し、他のスクリプトが追加したアニメーションクラスを削除
    document.querySelectorAll('.in-view, .scroll-animated, .touch-active').forEach(el => {
      el.classList.remove('in-view');
      el.classList.remove('scroll-animated');
      el.classList.remove('touch-active');
    });
  });
  
  // 強制的にスタイルをリセットするCSSを追加
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    /* 全てのアニメーションと枠を強制的に削除 */
    .character-item,
    .work-item,
    .profile-image-container,
    .character-image-container,
    .work-image img {
      box-shadow: none !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
      filter: none !important;
      border: none !important;
      outline: none !important;
    }
    
    /* ヒーローセクションのテキスト修正だけ維持 */
    .hero-inner h1 {
      white-space: nowrap !important;
    }
  `;
  document.head.appendChild(styleEl);
});
