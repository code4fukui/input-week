# input-week

日本語の曜日を選択するためのチェックボックス群を提供する、依存関係のないシンプルなWebコンポーネントです。

## デモ

https://code4fukui.github.io/input-week/

## 機能

- 日本語の曜日（月, 火, 水, 木, 金, 土, 日）のチェックボックス群としてレンダリングされます。
- プログラムから選択された曜日を取得・設定するための `.value` プロパティを提供します。
- 選択が変更された際に、標準の `change` イベントを送出します。
- ビルドステップ不要で、CDNから直接使用可能です。

## 使い方

```html
<!-- 1. コンポーネントをインポート -->
<script type="module" src="https://code4fukui.github.io/input-week/input-week.js"></script>

<!-- 2. HTMLに要素を追加 -->
<input-week id="week-selector"></input-week>

<!-- 3. JavaScriptで操作 -->
<script type="module">
  const selector = document.getElementById('week-selector');

  // 変更を監視
  selector.addEventListener('change', () => {
    // "月水金" のような文字列を出力
    console.log(selector.value);
  });

  // プログラムから選択された曜日を設定
  selector.value = "土日";
</script>
```

## API

### プロパティ

- **`.value`**
    - **型**: `string`
    - **説明**: 選択された曜日を取得または設定します。
    - **Getter**: 選択された曜日の文字を連結した文字列（例: `"月水金"`）を返します。何も選択されていない場合は空文字列（`""`）を返します。
    - **Setter**: 曜日文字の文字列を受け取り、対応するチェックボックスをプログラムから選択状態にします（例: `element.value = "火木";`）。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
