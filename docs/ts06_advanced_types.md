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

---

## 4. Branded Types (Nominal Typing の模倣)

TypeScript の型システムは構造的部分型（Structural）ですが、時として「ID」と「Email」を区別したい（同じ `string` だが互換性を持たせたくない）場合があります。これを実現するのが **Branded Types** です。

```typescript
type UserId = string & { readonly __brand: "UserId" };
type OrderId = string & { readonly __brand: "OrderId" };

function getOrder(id: OrderId) {
  /* ... */
}

const userId = "user-1" as UserId;
const orderId = "order-1" as OrderId;

// getOrder(userId); // ERROR: UserId は OrderId に代入できない
```

Go の `type UserId string` と同じように、ランタイムのオーバーヘッドなしで「意味的な型」を厳格に区別できます。DDD (Domain Driven Design) において非常に強力です。
