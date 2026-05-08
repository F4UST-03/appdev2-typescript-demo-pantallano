# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts
Demonstrates replacing `enum` with **literal union types** (e.g. `'admin' | 'guest' | ...'`). It is to show that TypeScript can restrict valid values without creating an enum object, while still giving strong type safety.

## 07-custom-type-role.ts
Shows how to create reusable domain types using `type` aliases. This file is to build a `Role` union and a structured `User` type so the compiler enforces consistent shapes and allowed role values.

## 08-functions.ts
Covers function typing and special return types (`void`, `never`), plus using function types for callbacks and methods. This file is to demonstrate how TypeScript validates parameters/returns and models “functions as types”.

## 09-special-types.ts
Demonstrates TypeScript’s special literal types `null` and `undefined`. Its purpose is to show how these values must be explicitly typed (or included via unions), and how union types affect what you can assign.

## 10-form.html and 10-type-narrowing.ts
A small HTML form plus the TypeScript code for safe DOM access. Its purpose is to explain that `document.getElementById(...)` can return `null`, and show approaches like non-null assertion (`!`), runtime checks, and optional chaining (`?.`) to narrow types safely.

## 11-optional.ts
Demonstrates **optional values** in parameters and object properties, and the difference between `||` and `??` (fallback on any falsy vs fallback only on `null`/`undefined`). Its purpose is to teach how to write safer code when values may be missing.
