# TypeScript Utility Types

## 1. よく使う Utility Types

TypeScript には、既存の型を変換して新しい型を作るための便利な Utility Types が標準で用意されています。

### Partial<T> / Required<T>

- `Partial<T>`: T の全てのプロパティを省略可能（Optional）にする。
- `Required<T>`: T の全てのプロパティを必須（Required）にする。

### Pick<T, K> / Omit<T, K>

- `Pick<T, K>`: T から特定のプロパティ K だけを抽出する。
- `Omit<T, K>`: T から特定のプロパティ K を除外する。

### Readonly<T>

- `Readonly<T>`: T の全てのプロパティを読み取り専用にする（再代入不可）。

---

## 2. Go との比較

Go にはこれらに直接相当する機能はありません。構造体を定義し直す必要があります。
TypeScript の Utility Types は、**Single Source of Truth (SSOT)** を維持しつつ、用途に合わせて型を変形させるのに非常に強力です。

例えば、DBモデルの型を定義し、それを元に「更新用DTO（一部フィールド除外）」や「検索条件（全フィールドOptional）」などを自動生成できます。
