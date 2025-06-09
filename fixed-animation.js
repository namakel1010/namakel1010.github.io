// シンプルなアニメーション - 問題修正版
document.addEventListener('DOMContentLoaded', function() {
  // デバイス検出
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log('モバイルデバイス検出:', isMobile);
  
  // ヒーローセクションのテキスト改行問題を修正
  const heroTitle = document.querySelector('.hero-inner h1');
  if (heroTitle) {
    heroTitle.style.whiteSpace = 'nowrap';
  }
  
  // 音楽再生機能の強化
  document.querySelectorAll('.sound-icon').forEach(icon => {
    // タッチイベントの追加（モバイル用）
    if (isMobile) {
      icon.addEventListener('touchstart', function(e) {
        // タッチイベントの処理（クリックイベントは既存コードで処理）
        e.stopPropagation();
      });
    }
  });
  
  // スタイルの適用 - 問題のあるボックスシャドウと余計な変形を削除
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    /* ヒーローセクションのテキスト */
    .hero-inner h1 {
      white-space: nowrap !important;
    }
    
    /* モバイル向け音楽アイコン表示 */
    @media screen and (max-width: 767px) {
      .sound-icon {
        opacity: 0.8 !important;
        visibility: visible !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
});
