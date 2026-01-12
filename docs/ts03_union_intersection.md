# TypeScript Union & Intersection Types

## 1. Union Types (共用体型)
Union Types は、値が複数の型のうちのいずれかであることを表します。パイプ記号 (`|`) を使って型を繋ぎます。

- **TypeScript:** `let result: string | number;`

### Go との比較
Go には直接的な Union Types はありませんが、`interface{}` (any) を使って複数の型を受け入れ、`type switch` で判定するパターンに似ています。TypeScript ではこれをコンパイル時に安全に扱えます。

---

## 2. Intersection Types (交差型)
Intersection Types は、複数の型をすべて合わせた型を作成します。アンパサンド記号 (`&`) を使います。主に既存の型を組み合わせて新しい型を作る（ミックスインのような使い方）に利用されます。

- **TypeScript:** `type AdminUser = User & Permissions;`

### Go との比較
Go の `struct embedding` (構造体の埋め込み) に非常に近いです。

- **Go:**
```go
type AdminUser struct {
    User
    Permissions
}
```

---

## 3. Type Guards & Narrowing (型絞り込み)
Union Types を扱う際、特定の型であることを保証するために型絞り込みを行います。

- `typeof` : プリミティブ型の判定。
- `instanceof` : クラスのインスタンス判定。
- `in` : プロパティの存在確認。

### User-Defined Type Guards
`arg is Type` という戻り値の型を持つ関数を定義することで、独自の絞り込みロジックを作成できます。

---

## 4. Discriminated Unions (タグ付き共用体)
各型に共通のリテラル型のプロパティ（`kind` や `type`）を持たせることで、安全かつ確実な型絞り込みを行うパターンです。

```typescript
interface Circle { kind: "circle"; radius: number; }
interface Square { kind: "square"; sideLength: number; }

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.sideLength ** 2;
  }
}
```
これは Go で `type` フィールドを持つ構造体を `switch` で扱うパターンを、型安全にしたものです。
