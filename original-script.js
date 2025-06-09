// 元の状態に戻すスクリプト
document.addEventListener('DOMContentLoaded', function() {
  console.log('元の状態に戻すスクリプト実行');
  
  // ヒーローセクションのテキスト改行問題を修正
  const heroTitle = document.querySelector('.hero-inner h1');
  if (heroTitle) {
    heroTitle.style.whiteSpace = 'nowrap';
    console.log('ヒーロータイトルのスタイルを修正しました');
  }
  
  // 全てのアニメーションクラスを削除
  const allElements = document.querySelectorAll('*');
  const animationClasses = ['in-view', 'scroll-animated', 'touch-active', 'preserve-animation', 'icon-visible'];
  
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
  
  // 音楽アイコンを元の状態に戻す（非表示）
  document.querySelectorAll('.sound-icon').forEach(icon => {
    icon.style.opacity = '0';
    icon.style.visibility = 'hidden';
    
    // モバイルでのタッチイベント対応だけ残す
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      // タッチイベントを明示的に追加
      icon.addEventListener('touchstart', function(e) {
        console.log('音楽アイコンがタッチされました');
        e.stopPropagation(); // タッチイベントの伝播を停止
      });
    }
  });
  
  // 既存のアニメーション関連のスクリプトを無効化
  window.addEventListener('scroll', function(e) {
    // スクロールイベントを監視し、他のスクリプトが追加したアニメーションクラスを削除
    document.querySelectorAll('.in-view, .scroll-animated, .touch-active').forEach(el => {
      el.classList.remove('in-view');
      el.classList.remove('scroll-animated');
      el.classList.remove('touch-active');
    });
  });
});
