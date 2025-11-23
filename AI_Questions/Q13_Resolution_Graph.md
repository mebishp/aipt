# Q13: Draw and explain a resolution graph

## Overview of Resolution

**Resolution** is a powerful inference technique used to prove theorems and derive conclusions in predicate logic. It works by **refutation**: assuming the statement to be proven is false, and deriving a contradiction.

A **resolution graph** (or resolution proof tree) visually represents the resolution process, showing how clauses are combined to derive the empty clause (contradiction).

---

## What is a Resolution Graph?

### Definition

A **resolution graph** is a directed acyclic graph (DAG) that:
- **Shows** the step-by-step application of the resolution rule
- **Represents** parent clauses and their resolvents
- **Demonstrates** how a theorem is proven by refutation
- **Traces** the logical derivation from premises to empty clause (NIL)

### Key Components

1. **Nodes**: Clauses (premises and derived clauses)
2. **Edges**: Resolution steps connecting parent clauses to resolvents
3. **Root Nodes**: Initial clauses (premises and negated goal)
4. **Leaves**: Final resolution step producing empty clause (NIL)
5. **Labels**: Sometimes show which literals were unified

---

## Resolution Rule (Brief Review)

### Basic Formula

```
Parent Clause 1: A ∨ B ∨ ... ∨ X
Parent Clause 2: ¬X ∨ C ∨ D ∨ ...
─────────────────────────────────
Resolvent:      A ∨ B ∨ ... ∨ C ∨ D ∨ ...
```

The literal X and ¬X are **resolved away** (canceled), and remaining literals form the resolvent.

### Example Resolution Step

```
Clause 1: Dog(Fido) ∨ Cat(Fido)
Clause 2: ¬Dog(Fido) ∨ Friendly(Fido)
─────────────────────────────────────
Resolvent: Cat(Fido) ∨ Friendly(Fido)

Literal resolved: Dog(Fido)
```

---

## Simple Example: Socrates Problem

### Problem Statement

**Premises:**
1. All humans are mortal
2. Socrates is a human

**Conclusion:** Socrates is mortal

### Convert to Clausal Form

**Premise 1:** ∀x (Human(x) → Mortal(x))
- Convert implication: ∀x (¬Human(x) ∨ Mortal(x))
- Clause form: **¬Human(x) ∨ Mortal(x)**

**Premise 2:** Human(socrates)
- Already in clause form: **Human(socrates)**

**Negate the conclusion:** We want to prove Mortal(socrates)
- Negate: ¬Mortal(socrates)
- Clause form: **¬Mortal(socrates)**

### Clauses for Resolution

```
C1: ¬Human(x) ∨ Mortal(x)      [from Premise 1]
C2: Human(socrates)             [from Premise 2]
C3: ¬Mortal(socrates)          [Negation of goal]
```

### Resolution Graph

```
        C1: ¬Human(x) ∨ Mortal(x)
             |
             |  (Unify: x/socrates)
             |
        C2: Human(socrates)
        ────────────────────
        C4: Mortal(socrates)
             |
             |  (Resolving Dog(Fido) from C4 and C3)
             |
        C3: ¬Mortal(socrates)
        ────────────────────
        
        □ (Empty Clause - Contradiction!)
```

### ASCII Representation

```
          ┌─────────────────────────┐
          │ C1: ¬Human(x)∨Mortal(x) │
          └──────────┬──────────────┘
                     │
                     │ x/socrates
                     │
          ┌──────────▼──────────┐
          │ C2: Human(socrates) │
          └──────────┬──────────┘
                     │
                     │ Resolution on Human
                     │
          ┌──────────▼──────────────────┐
          │ C4: Mortal(socrates)        │
          └──────────┬──────────────────┘
                     │
                     │
          ┌──────────▼──────────────────┐
          │ C3: ¬Mortal(socrates)       │
          └──────────┬──────────────────┘
                     │
                     │ Resolution on Mortal
                     │
          ┌──────────▼──────────────────┐
          │ □ (Empty Clause - PROVEN!)  │
          └─────────────────────────────┘
```

### Interpretation

- **Step 1**: Clauses C1 and C2 are resolved
  - Unify Human(x) with Human(socrates) by substituting x/socrates
  - Cancel Human from both clauses
  - Result: Mortal(socrates)

- **Step 2**: Clauses C4 (derived) and C3 are resolved
  - Mortal(socrates) and ¬Mortal(socrates) are complementary
  - They cancel
  - Result: Empty clause (□)

- **Conclusion**: The empty clause means contradiction
  - Our negation (¬Mortal(socrates)) led to contradiction
  - Therefore, the original statement is TRUE
  - **Socrates IS mortal**

---

## Complex Example: Multi-Variable Problem

### Problem

**Premises:**
1. All dogs are animals
2. All animals need food
3. Fido is a dog

**Conclusion:** Fido needs food

### Clausal Form

```
C1: ¬Dog(x) ∨ Animal(x)        [All dogs are animals]
C2: ¬Animal(y) ∨ NeedsFood(y)  [All animals need food]
C3: Dog(fido)                  [Fido is a dog]
C4: ¬NeedsFood(fido)           [Negation of conclusion]
```

### Resolution Graph

```
                    C1: ¬Dog(x) ∨ Animal(x)
                         │
                         │ (Unify: x/fido)
                         │
                    C3: Dog(fido)
                    ─────────────────
                    C5: Animal(fido)
                         │
                         │
                    C2: ¬Animal(y) ∨ NeedsFood(y)
                    ─────────────────────────────
                    C6: NeedsFood(fido)
                         │
                         │
                    C4: ¬NeedsFood(fido)
                    ───────────────────
                    
                    □ (Empty Clause)
```

### Detailed Explanation

**Resolution 1: C1 + C3**
```
C1: ¬Dog(x) ∨ Animal(x)
C3: Dog(fido)
─────────────────────────
Unification: {x/fido}
C5: Animal(fido)
(Dog canceled out)
```

**Resolution 2: C5 + C2**
```
C5: Animal(fido)
C2: ¬Animal(y) ∨ NeedsFood(y)
───────────────────────────────
Unification: {y/fido}
C6: NeedsFood(fido)
(Animal canceled out)
```

**Resolution 3: C6 + C4**
```
C6: NeedsFood(fido)
C4: ¬NeedsFood(fido)
───────────────────
□ (Empty Clause - Contradiction!)
```

### Proof Complete

The empty clause proves the original statement:
- **Fido needs food** ✓

---

## Graph Structure Elements

### 1. **Node Types**

```
[Premise]          [Derived]         [Empty Clause]
┌─────────┐       ┌─────────┐       ┌─────────┐
│ C1      │       │ C4      │       │ □       │
│ (Initial)│       │ (From   │       │ (Goal)  │
└─────────┘       │  C1+C2) │       └─────────┘
                  └─────────┘
```

### 2. **Edge Labels**

Edges can be labeled with:
- Unified variable
- Resolved literal
- Substitution applied

### 3. **Inference Path**

The path from leaf nodes to empty clause shows:
```
Premises → (Resolution steps) → Empty Clause
```

---

## Visual Example: Complete Resolution Graph

### Problem: Prove "Peter is happy"

**Given:**
1. If John goes to the party, Peter is happy
2. John goes to the party

**Clauses:**
```
C1: ¬Attends(john, party) ∨ Happy(peter)
C2: Attends(john, party)
C3: ¬Happy(peter)    [Negation]
```

### Resolution Graph

```
                    Attends(john,party)
                    ∨ Happy(peter)
                           │
                           │
      ┌─────────────────────┘
      │
      │         C1: ¬Attends(john,party) ∨ Happy(peter)
      │
      ▼
   C2: Attends(john,party)
      
   C4: Happy(peter) ─────────────────
                          │
                          │
                    C3: ¬Happy(peter)
                          │
                          ▼
                      □ (QED)
```

---

## Key Characteristics of Resolution Graphs

### Completeness
- Resolution is **complete** for refutation
- If a clause set is unsatisfiable, resolution will find it
- Guaranteed to derive empty clause eventually

### Directionality
- Directed edges show inference direction
- From parent clauses to resolvents
- Bottom node is typically empty clause

### Variables and Unification
- Labels show variable substitutions
- Unification essential for matching literals
- Different substitutions create different branches

### Multiple Paths
- Can have different resolution orders
- Different paths may be shorter or longer
- All eventually lead to empty clause (if provable)

---

## Difference Between Resolution Graphs and Decision Trees

| Aspect | Resolution Graph | Decision Tree |
|--------|-----------------|---------------|
| **Purpose** | Prove theorem | Make decision |
| **Nodes** | Clauses | States/conditions |
| **Edges** | Resolution steps | Logical branches |
| **Goal** | Empty clause | Leaf decision |
| **Direction** | Bottom-up | Top-down |
| **Structure** | DAG | Tree |

---

## Common Mistakes in Resolution

### Mistake 1: Not Converting to Clausal Form
```
❌ WRONG: Try resolving ∀x (P(x) → Q(x)) directly
✓ CORRECT: Convert to ¬P(x) ∨ Q(x) first
```

### Mistake 2: Forgetting to Negate Goal
```
❌ WRONG: Trying to prove P(x) directly
✓ CORRECT: Add ¬P(x) and derive contradiction
```

### Mistake 3: Incorrect Unification
```
❌ WRONG: Unify Dog(x) with Cat(fido)
✓ CORRECT: Only unify if predicates match
```

### Mistake 4: Lost Clauses
```
❌ WRONG: Only keeping resolvent, discarding parents
✓ CORRECT: Keep all clauses; may need for other resolutions
```

---

## Resolution in Practice

### Forward vs Backward Resolution

**Forward Resolution:**
- Start from premises
- Generate consequences until goal derived
- Can generate irrelevant conclusions

**Backward Resolution:**
- Start from negated goal
- Work backward to find supporting premises
- More efficient (goal-directed)

### Applications

1. **Theorem Proving**
   - Automated proof systems
   - Mathematical verification

2. **Logic Programming**
   - Prolog uses resolution (SLD resolution)
   - Queries answered via resolution

3. **AI Reasoning**
   - Expert systems
   - Knowledge-based reasoning

4. **SAT Solving**
   - Boolean satisfiability problems
   - Verification and debugging

---

## Summary

Resolution Graphs:
- ✓ Visual representation of logical inference
- ✓ Show step-by-step proof process
- ✓ Demonstrate how contradiction is derived
- ✓ Prove theorems by refutation
- ✓ Essential for understanding automated reasoning

The empty clause at the root of the graph proves that the original statement is true, having shown that assuming it false leads to contradiction - a powerful and elegant proof technique.
