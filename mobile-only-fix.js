// スマホ専用修正スクリプト
document.addEventListener('DOMContentLoaded', function() {
  // モバイルデバイス検出 - より厳密な判定
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  console.log('モバイルデバイス検出:', isMobile);
  
  // スマホの場合のみ実行
  if (isMobile) {
    console.log('スマホ専用修正を適用します');
    
    // ヒーローセクションのテキスト改行問題を修正
    const heroTitle = document.querySelector('.hero-inner h1');
    if (heroTitle) {
      heroTitle.style.whiteSpace = 'nowrap';
      console.log('ヒーロータイトルのスタイルを修正しました');
    }
    
    // 変な枠を強制的に削除
    const elementsToFix = document.querySelectorAll('.character-item, .work-item, .profile-image-container, .character-image-container, .work-image img');
    elementsToFix.forEach(el => {
      el.style.boxShadow = 'none';
      el.style.transform = 'none';
      el.style.transition = 'none';
      el.style.animation = 'none';
      el.style.filter = 'none';
      el.style.border = 'none';
      el.style.outline = 'none';
      console.log('要素のスタイルをリセットしました:', el);
    });
    
    // 音楽アイコンの動作を修正
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
      const soundIcon = item.querySelector('.sound-icon');
      if (soundIcon) {
        // 初期状態では非表示
        soundIcon.style.opacity = '0';
        soundIcon.style.visibility = 'hidden';
        
        // タップ時の処理を追加
        item.addEventListener('touchstart', function() {
          // 一時的に表示
          soundIcon.style.opacity = '1';
          soundIcon.style.visibility = 'visible';
          
          // 3秒後に非表示に戻す
          setTimeout(function() {
            soundIcon.style.opacity = '0';
            soundIcon.style.visibility = 'hidden';
          }, 3000);
        });
        
        // タッチイベントを明示的に追加
        soundIcon.addEventListener('touchstart', function(e) {
          e.stopPropagation(); // タッチイベントの伝播を停止
        });
      }
    });
    
    // モバイル専用スタイルを直接注入
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      /* モバイル専用スタイル */
      @media screen and (max-width: 767px) {
        /* ヒーローセクションのテキスト */
        .hero-inner h1 {
          white-space: nowrap !important;
        }
        
        /* 変な枠と不要なアニメーションを強制削除 */
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
        
        /* 音楽アイコンは初期状態で非表示 */
        .sound-icon {
          opacity: 0 !important;
          visibility: hidden !important;
        }
        
        /* タップされた要素の音楽アイコンは表示 */
        .work-item.tapped .sound-icon {
          opacity: 1 !important;
          visibility: visible !important;
        }
      }
    `;
    document.head.appendChild(styleEl);
    console.log('モバイル専用スタイルを注入しました');
  }
});
