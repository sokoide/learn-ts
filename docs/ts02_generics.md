# TypeScript Generics

## 1. Generics の基本
Generics（ジェネリクス）は、型を引数として受け取ることで、再利用性が高く、かつ型安全なコンポーネントを作成するための機能です。

### なぜ必要なのか？
`any` 型を使用すると、どのような型でも受け取ることができますが、情報の型が失われてしまいます。Generics を使うと、受け取った型をそのまま戻り値の型として保持できます。

### Go との比較
Go 1.18 から導入された Generics と非常に概念が似ています。

- **Go:** `func Identity[T any](val T) T { return val }`
- **TypeScript:** `function identity<T>(val: T): T { return val; }`

TypeScript では慣習的に `T`, `U`, `V` などの一文字の英大文字が使われます。

---

## 2. Generic Constraints (型制約)
特定のプロパティを持つ型のみを受け取りたい場合、`extends` キーワードを使って制約をかけることができます。

### Go との比較
Go では `interface` を使って制約（Constraints）を定義しますが、TypeScript も同様です。

- **Go:** `func Log[T fmt.Stringer](val T)`
- **TypeScript:**
```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): number {
  return arg.length;
}
```

---

## 3. Generic Interfaces & Types
関数だけでなく、`interface` や `type` にも型引数を持たせることができます。

```typescript
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Hello" };
```
これは Go の `type Box[T any] struct { Content T }` に相当します。
