# TypeScript Fundamentals for Polyglot Experts

## 1. Variables & Basic Types

### Let and Const

TypeScript (JavaScript ES6+) では、`var` の代わりに `let` と `const` を使用します。

- `const`: 再代入不可能な変数。Go の `const` と同様ですが、TypeScript ではオブジェクトや配列の内容変更（mutation）は可能です。
- `let`: 再代入可能な変数。Go の `var` や `:=` に相当します。

### Primitive Types

主要なプリミティブ型は以下の通りです。

- `string`: 文字列
- `number`: 数値（整数と浮動小数点の区別はありません。Go の `float64` に相当）
- `boolean`: 真偽値

### Type Inference (型推論)

TypeScript は強力な型推論を持っています。

```typescript
let name = "Serena"; // string と推論される
const age = 25; // 25 (literal type) と推論される
```

これは Go の `:=` による型推論と非常に似ています。

---

## 2. Functions

### Function Definitions

通常の関数定義とアロー関数があります。

```typescript
// Named Function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow Function (匿名関数/ラムダ式に近い)
const multiply = (a: number, b: number): number => a * b;
```

### Optional Parameters

引数の後ろに `?` をつけることで、その引数を省略可能にできます。

```typescript
function greet(name: string, title?: string) {
  return `Hello, ${title ?? ""} ${name}`;
}
```

Go では引数の数は固定ですが、TypeScript では柔軟に定義可能です。

## 3. Interfaces, Types & Classes

### Class: 値であり型でもある

TypeScript の `class` は、JavaScript の実体（値）を持ちつつ、同時にそのインスタンスの「型」も定義します。

```typescript
class Greeter {
  greet() {
    return "Hello";
  }
}

const g: Greeter = new Greeter(); // Greeterは型であり、コンストラクタでもある
```

### Interface vs Type

Go の `struct` のようにデータ構造を定義する場合、TypeScript では `interface` または `type` を使います。

- **interface**: 主にオブジェクトの「形」を定義。継承（`extends`）や、宣言の結合（同名の interface が合体する）が可能。
- **type**: 構造の定義に加え、Union Types (`string | number`) や交差型、Go の `type MyInt int` のような型別名の定義が可能。

### Structural Typing (構造的部分型)

TypeScript では、`class` であっても `interface` であっても、構造が同じなら代入可能です。これは Go の `interface` と同じ考え方です。

```typescript
interface Point {
  x: number;
  y: number;
}

class PhysicsPoint {
  constructor(
    public x: number,
    public y: number,
  ) {}
}

// C#やC++では不可だが、TypeScriptやGoではOK
const p: Point = new PhysicsPoint(10, 20);
```

### エキスパート向けの使い分け指針 (Clean Architecture)

- **Domain Model**: 外部に公開するインターフェースは `interface`、値オブジェクト（Value Object）や DTO は `type`。
- **Implementation**: ステートを持つもの、DI の注入対象、Infrastructure 層の実装は `class`。
