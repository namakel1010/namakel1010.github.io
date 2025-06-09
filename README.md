# Namakelポートフォリオサイト

## デプロイ方法

### Netlifyでのデプロイ（推奨）

1. [Netlify](https://app.netlify.com/)にアクセスし、アカウントを作成またはログインします。
2. ダッシュボードから「Sites」セクションに移動します。
3. プロジェクトフォルダ全体をNetlifyのドラッグ＆ドロップエリアにドラッグします。
4. 自動的にデプロイが開始され、完了すると公開URLが提供されます。
5. 「Site settings」から「Change site name」を選択して、好みのサブドメイン名（例：namakel-portfolio）に変更できます。

### カスタムドメインの設定（オプション）

1. 独自ドメインをお持ちの場合、Netlifyの「Domain settings」からカスタムドメインを設定できます。
2. 「Add custom domain」をクリックし、指示に従ってDNS設定を行います。

## ローカル開発

ローカルで開発する場合は、以下のコマンドでサーバーを起動できます：

```bash
python3 -m http.server 8083
```

その後、ブラウザで `http://localhost:8083` にアクセスしてサイトを表示できます。
