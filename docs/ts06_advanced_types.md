# TypeScript Advanced Types

## 1. Mapped Types (マップ型)
既存の型の各プロパティを変換して新しい型を作成します。Utility Types (`Partial` など) の多くはこれを利用して実装されています。

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

### Go との比較
Go には動的に構造体のフィールドをイテレートして新しい型を生成するような、コンパイル時のメタプログラミング機能はありません。TypeScript では `keyof` と組み合わせることで、極めて柔軟な型変換が可能です。

---

## 2. Conditional Types (条件付き型)
型の関係に基づいて、条件分岐を行う型です。`T extends U ? X : Y` という三項演算子のような構文を使います。

```typescript
type IsString<T> = T extends string ? true : false;
```

### Infer キーワード
Conditional Types 内で `infer` を使うと、パターンマッチングのように型を抽出できます。
```typescript
type UnpackArray<T> = T extends (infer U)[] ? U : T;
```

---

## 3. Template Literal Types
文字列リテラル型を組み合わせて、新しい文字列リテラル型を作成します。

```typescript
type World = "world";
type Greeting = `hello ${World}`; // "hello world" 型
```

これを使うと、例えば CSS のプロパティ名や、イベント名の組み合わせなどを型安全に定義できます。
