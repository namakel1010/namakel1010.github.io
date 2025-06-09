// スマホ表示の問題を修正するスクリプト
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
  
  // スマホでの表示とアニメーション問題を修正
  if (isMobile) {
    // 音楽アイコンを表示
    document.querySelectorAll('.sound-icon').forEach(icon => {
      icon.style.opacity = '1';
      icon.style.visibility = 'visible';
      icon.style.display = 'flex';
      console.log('音楽アイコンの表示を修正しました');
    });
    
    // キャラクターアイテムのアニメーション
    document.querySelectorAll('.character-item').forEach(item => {
      item.style.transform = 'translateY(-3px)';
      console.log('キャラクターアイテムのスタイルを適用しました');
    });
    
    // 画像のアニメーション
    document.querySelectorAll('.character-image-container, .profile-image-container, .work-image img').forEach(element => {
      element.style.transform = 'scale(1.02)';
      console.log('画像アニメーションのスタイルを適用しました');
    });
    
    // タッチイベントの追加
    document.querySelectorAll('.character-item, .work-item, .sound-icon').forEach(element => {
      // タッチスタート時
      element.addEventListener('touchstart', function(e) {
        console.log('タッチイベント発生:', e.target);
        this.classList.add('touch-active');
        // 音楽アイコンの場合は伝播を停止しない（クリックイベントを発火させるため）
        if (!this.classList.contains('sound-icon')) {
          e.stopPropagation();
        }
      }, {passive: false});
      
      // タッチ終了時
      element.addEventListener('touchend', function() {
        this.classList.remove('touch-active');
      });
    });
    
    // スタイルの直接注入（確実に適用するため）
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      /* モバイル向けスタイル */
      .sound-icon {
        opacity: 1 !important;
        visibility: visible !important;
        display: flex !important;
      }
      .touch-active {
        transform: scale(1.05) !important;
      }
      .hero-inner h1 {
        white-space: nowrap !important;
      }
    `;
    document.head.appendChild(styleEl);
    console.log('モバイル向けスタイルを注入しました');
  }
  
  // 音楽再生機能の強化
  document.querySelectorAll('.sound-icon').forEach((soundIcon, index) => {
    // タッチイベントを明示的に追加
    soundIcon.addEventListener('touchstart', function(e) {
      console.log('音楽アイコンがタッチされました');
      // タッチイベントでもクリックイベントを発火させるため、デフォルト動作は停止しない
    }, {passive: true});
  });
});
