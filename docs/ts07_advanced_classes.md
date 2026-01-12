# TypeScript Advanced Classes

## 1. Abstract Classes (抽象クラス)

抽象クラスは、他のクラスのベースとなるクラスで、直接インスタンス化することはできません。

```typescript
abstract class Shape {
  abstract getArea(): number;
  printArea() {
    console.log(`Area: ${this.getArea()}`);
  }
}
```

### Go との比較

Go には継承や抽象クラスはありませんが、`interface` と構造体の埋め込みを組み合わせて同様のパターンを実現します。TypeScript では、共通のロジックをベースクラスに持たせつつ、特定の実装をサブクラスに強制する標準的なオブジェクト指向のアプローチが可能です。

---

## 2. Access Modifiers (アクセス修飾子)

TypeScript には 3 つのアクセス修飾子があります。

- `public`: どこからでもアクセス可能（デフォルト）。
- `protected`: そのクラス自身と、そのサブクラスからアクセス可能。
- `private`: そのクラス自身からのみアクセス可能。

### Parameter Properties

コンストラクタの引数に修飾子をつけることで、フィールド宣言と初期化を同時に行えます。

```typescript
class User {
  constructor(
    public name: string,
    private id: number,
  ) {}
}
```

---

## 3. Decorators (デコレータ)

クラス、メソッド、プロパティなどにメタデータを付与したり、挙動を書き換えたりする機能です。C# の Attributes に非常に近いです。

> **Note:** デコレータを使用するには `tsconfig.json` で `"experimentalDecorators": true` が必要です。

```typescript
function Logger(target: any) {
  console.log("Class created!");
}

@Logger
class Database {}
```

Clean Architecture において、DI コンテナやバリデーション、ルーティングの定義などで多用されます。

---

## 4. Type Erasure (型の消去)

ここがエキスパートが最も注意すべきランタイムの挙動です。TypeScript の型（interface, type, generics）は**コンパイル後にすべて消去されます**。

### 残るもの vs 消えるもの

- **残る**: `class`, `function` の実体, オブジェクトの値, 変数
- **消える**: `interface`, `type` の定義, 型注釈, ジェネリクスの型引数

### なぜ重要か？

Go のようにランタイムで `reflect` を使って interface の種類を判定することはできません。

```typescript
interface User { name: string }
const data: any = { name: "Alice" };

// if (data instanceof User) { ... } // ERROR: User はランタイムに存在しない
if ("name" in data) { ... } // OK: プロパティの存在チェックはランタイムで可能
```

一方、`class` は JavaScript のコンストラクタ関数として残るため、`instanceof` が機能します。これが、「実装には class、境界には interface/type」という使い分け指針の背景にあります。
