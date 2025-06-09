// モバイルデバイス向けのタッチインタラクション強化
document.addEventListener('DOMContentLoaded', function() {
  // モバイルデバイスかどうかを検出
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    console.log('モバイルデバイスを検出しました - タッチインタラクションを強化します');
    
    // 音楽アイコンの表示を強制
    const soundIcons = document.querySelectorAll('.sound-icon');
    soundIcons.forEach(icon => {
      icon.style.opacity = '0.8';
      icon.style.visibility = 'visible';
      icon.style.display = 'flex';
    });
    
    // キャラクターアイテムのアニメーション効果を追加
    const characterItems = document.querySelectorAll('.character-item');
    characterItems.forEach(item => {
      item.classList.add('mobile-animated');
    });
    
    // 作品画像のアニメーション効果を追加
    const workImages = document.querySelectorAll('.work-image img');
    workImages.forEach(img => {
      img.classList.add('mobile-animated');
    });
    
    // タッチイベントをすべてのインタラクティブ要素に追加
    document.querySelectorAll('.character-item, .work-item, .sound-icon').forEach(element => {
      element.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
      });
      
      element.addEventListener('touchend', function() {
        this.classList.remove('touch-active');
      });
    });
  }
});
