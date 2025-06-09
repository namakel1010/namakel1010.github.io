# Namakel サイト プロジェクト記録

## プロジェクト概要

「Namakel」という名前のポートフォリオサイトを作成しました。このサイトは以下のページで構成されています：

1. **ホームページ (index.html)**
   - ヒーロービデオ背景
   - キャッチコピー「あなたの毎日に彩りを」

2. **アバウトページ (about.html)**
   - プロフィール情報
   - 自己紹介文（プレースホルダーテキスト）

3. **作品ページ (works.html)**
   - カルーセルで表示される4つの作品
   - 左右の矢印でナビゲーション

4. **キャラクターページ (characters.html)**
   - 4つのオリジナルキャラクター
   - 各キャラクターの画像と説明

5. **受賞歴ページ (awards.html)**
   - 時系列順の受賞歴リスト

6. **コンタクトページ (contact.html)**
   - ソーシャルメディアリンク

## ファイル構造

```
namakel-site/
├─ index.html
├─ about.html
├─ works.html
├─ characters.html
├─ awards.html
├─ contact.html
└─ assets/
   ├─ css/
   │   └─ style.css
   ├─ js/
   │   └─ main.js
   ├─ video/
   │   └─ hero.mp4
   └─ img/
       ├─ profile.jpg
       ├─ work-maiikka.jpg
       ├─ work-oro.jpg
       ├─ work-bloomup.jpg
       ├─ work-bitheluck.jpg
       ├─ char-luna.png
       ├─ char-orochi.png
       ├─ char-otochan.png
       └─ char-janomechan.png
```

## 実装機能

1. **レスポンシブデザイン**
   - モバイルからデスクトップまで対応

2. **ナビゲーション**
   - ハンバーガーメニュー（モバイル対応）
   - スムーズなアニメーション

3. **アニメーション効果**
   - スクロールでのフェードイン
   - ホバーエフェクト

4. **カルーセル（スライダー）**
   - タッチスワイプ対応
   - 自動ループ機能

5. **UI要素**
   - スクロールトップボタン
   - ヘッダーのスクロール効果

## 使用技術

- **HTML5**
- **CSS3**
  - 変数を使用したテーマカラー管理
  - Flexboxレイアウト
  - アニメーション
- **JavaScript**
  - イベントリスナー
  - Intersection Observer API
  - タッチイベント処理

## 注意点

1. **プレースホルダーコンテンツ**
   - 現在、テキストの多くはプレースホルダー（「...」で終わるテキストなど）
   - 実際のコンテンツに置き換える必要あり

2. **メディアファイル**
   - 画像とビデオファイルは現在空のダミーファイル
   - 実際のメディアファイルを追加する必要あり

## ローカル開発

サイトをローカルで確認するには：

```bash
cd /Users/usuitatsuya/CascadeProjects/namakel-site
python3 -m http.server 8000
```

その後、ブラウザで http://localhost:8000 にアクセス

## 今後の改善点

1. 実際のコンテンツ（テキスト、画像、ビデオ）の追加
2. SEO対策（メタタグの最適化）
3. パフォーマンス最適化（画像の圧縮など）
4. アクセシビリティの向上
