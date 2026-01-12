# TypeScript TDD Koans: 学習ガイド

このプロジェクトは、Go/C#/C++などを他の言語を知っている人が最短でTypeScriptをマスターするための実習環境です。

## 学習の進め方

1. **ドキュメントを読む**: `docs/` 配下のドキュメントを順番に読みます。
   - `ts01_fundamentals.md`: 基礎
   - `ts02_generics.md`: Generics
   - `ts03_union_intersection.md`: Union/Intersection Types
   - `ts04_async.md`: Async Programming
   - `ts05_utilities.md`: Utility Types
   - `ts06_advanced_types.md`: Advanced Types
   - `ts07_advanced_classes.md`: Advanced Classes
2. **テスト（Koans）を確認する**: `src/koans/` 配下にあるテストファイル（例: `01_variables.test.ts`）を開きます。
3. **テストを修正する**: テストファイル内の `TODO` コメントや、明らかに間違っている期待値（`expect(...).toBe(0)` など）を、ドキュメントの知識を元に修正します。
4. **テストを実行してパスさせる**: 修正後、ターミナルでテストを実行し、すべてのテストがパス（Green）になることを目指します。

## 実行コマンド

### 依存関係のインストール

最初に一度だけ実行してください。

```bash
pnpm install
```

### 全てのテストを実行

```bash
pnpm test
```

### 特定のモジュールのみテストを実行

```bash
# Fundamentalsモジュールのみ実行
pnpm test src/koans/01_fundamentals/
```

### リンター/フォーマッターの実行

```bash
# コードスタイルのチェック
pnpm lint

# 自動整形
pnpm format
```

## 推奨ツール

- **VS Code**: TypeScriptの型推論やエラーチェックをリアルタイムで確認できるため、強く推奨します。
- **Vitest VS Code Extension**: エディタ上でテストの実行結果を視覚的に確認できます。
