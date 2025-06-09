// スムーズなアニメーション - PC・スマホ共通対応版
document.addEventListener('DOMContentLoaded', function() {
  // デバイス検出
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log('モバイルデバイス検出:', isMobile);
  
  // ヒーローセクションのテキスト改行問題を修正
  const heroTitle = document.querySelector('.hero-inner h1');
  if (heroTitle) {
    heroTitle.style.whiteSpace = 'nowrap';
  }
  
  // 既存のホバーアニメーションを保持
  function preserveExistingAnimations() {
    // 既存のスタイルを維持
    document.querySelectorAll('.character-item, .work-item, .profile-image-container').forEach(item => {
      item.classList.add('preserve-animation');
    });
  }
  
  // スクロールアニメーションの設定
  function setupScrollAnimations() {
    // アニメーション対象要素を取得
    const animElements = document.querySelectorAll('.character-item, .work-item, .profile-image-container, .sound-icon');
    
    // Intersection Observerの設定
    const observerOptions = {
      root: null, // ビューポート基準
      rootMargin: '0px', // マージンなし
      threshold: 0.2 // 20%表示されたらトリガー
    };
    
    // 要素が表示されたときの処理
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 要素が表示されたらアニメーションクラスを追加
          entry.target.classList.add('in-view');
          
          // 音楽アイコンの場合
          if (entry.target.classList.contains('sound-icon')) {
            entry.target.style.opacity = '0.8';
            entry.target.style.visibility = 'visible';
          }
        } else {
          // 画面外に出たら状態をリセット（オプション）
          // entry.target.classList.remove('in-view');
        }
      });
    };
    
    // Observerを作成して各要素に適用
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    animElements.forEach(el => observer.observe(el));
  }
  
  // 音楽再生機能の強化
  function enhanceMusicPlayback() {
    document.querySelectorAll('.sound-icon').forEach(icon => {
      // タッチイベントの追加（モバイル用）
      if (isMobile) {
        icon.addEventListener('touchstart', function(e) {
          // タッチイベントの処理（クリックイベントは既存コードで処理）
          e.stopPropagation();
        });
      }
    });
  }
  
  // スタイルの適用
  function applyStyles() {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      /* 共通アニメーション */
      .character-item, .work-item, .profile-image-container {
        transition: transform 0.4s ease, box-shadow 0.4s ease;
      }
      
      /* スクロールで表示されたときのアニメーション */
      .character-item.in-view {
        transform: translateY(-5px);
      }
      
      .work-item.in-view .work-image img {
        transform: scale(1.03);
        filter: brightness(0.95);
      }
      
      .profile-image-container.in-view {
        transform: scale(1.03);
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      }
      
      /* 音楽アイコン */
      .sound-icon.in-view {
        opacity: 0.8;
        visibility: visible;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }
      
      /* ヒーローセクションのテキスト */
      .hero-inner h1 {
        white-space: nowrap;
      }
      
      /* モバイル向け調整 */
      @media screen and (max-width: 767px) {
        .sound-icon.in-view {
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }
  
  // 初期化
  preserveExistingAnimations();
  setupScrollAnimations();
  enhanceMusicPlayback();
  applyStyles();
});
