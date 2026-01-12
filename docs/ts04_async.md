# TypeScript Asynchronous Programming

## 1. Promise の基本
JavaScript/TypeScript における非同期処理の中核は `Promise` です。Promise は「将来的に完了する処理の結果」を表現するオブジェクトです。

- `pending`: 初期状態（実行中）
- `fulfilled`: 処理が成功して完了した状態
- `rejected`: 処理が失敗して終了した状態

### Go との比較
Go の `chan` (channel) を使ってデータを受け取るパターンに近いですが、`Promise` は一度きりの結果を返すことに特化しています。

---

## 2. Async / Await
`async` と `await` キーワードを使うことで、非同期処理を同期処理のように直感的に記述できます。

```typescript
async function fetchData(): Promise<string> {
  const result = await someAsyncOperation();
  return result;
}
```

### Go との比較
Go では `go` キーワードでゴルーチンを起動し、チャネルで同期を取りますが、TypeScript はシングルスレッド（Event Loop）で動作するため、`await` は「処理を一時停止して、結果が返ってきたら再開する」という協調的な動作をします。

---

## 3. Event Loop (イベントループ)
TypeScript (Node.js/Browser) はシングルスレッドで動作します。重い計算をメインスレッドで行うと、全体の動作が止まってしまいます。

- **Call Stack**: 現在実行中の関数
- **Task Queue / Microtask Queue**: 非同期処理の完了後に実行されるコールバックが並ぶ場所

`await` 中にメインスレッドは解放され、他の処理（I/O やタイマーなど）が進むことができます。
