# Q10: Define predicate logic with examples

## Definition of Predicate Logic

**Predicate Logic** (also called **First-Order Logic** or **FOL**) is a formal system in artificial intelligence and mathematics that extends propositional logic to represent relationships between objects and their properties.

Predicate logic allows us to express statements about specific objects and general statements about all or some objects in a domain, making it much more expressive than propositional logic.

---

## Key Distinction from Propositional Logic

### Propositional Logic Limitations:

```
Propositional Logic can say:
- "It is raining" - Simple fact
- "It is raining AND it is cold" - Compound fact
- "If it rains, the ground is wet" - Conditional

But CANNOT say:
- "John is tall" - Individual property
- "All humans are mortal" - Universal statement
- "Some students study hard" - Existential statement
- "John gave a book to Mary" - Multi-entity relationships
```

### Predicate Logic Advantages:

```
Predicate Logic can express:
- Properties: Tall(john), Red(apple)
- Relations: Parent(john, mary), Loves(john, mary)
- Universal statements: ∀x (Human(x) → Mortal(x))
- Existential statements: ∃x (Student(x) ∧ Intelligent(x))
- Complex reasoning about objects and their relationships
```

---

## Core Components of Predicate Logic

### 1. **Constants**
Specific objects in the domain.

**Examples:**
```
john, mary              (people)
paris, london           (cities)
apple, ball             (objects)
```

---

### 2. **Variables**
Placeholders representing any object in the domain.

**Examples:**
```
x, y, z                 (generic variables)
person, student         (named variables)
```

---

### 3. **Predicates**
Properties or relationships between objects.

**Examples:**
```
Unary (1-place):
  - Student(x)         - x is a student
  - Mortal(x)          - x is mortal
  - Tall(x)            - x is tall

Binary (2-place):
  - Parent(x, y)       - x is parent of y
  - Loves(x, y)        - x loves y
  - Teaches(x, y)      - x teaches y

Ternary (3-place):
  - Gives(x, y, z)     - x gives y to z
  - Between(x, a, b)   - x is between a and b
```

---

### 4. **Quantifiers**

#### Universal Quantifier (∀)
Means "for all" or "every"

**Syntax**: ∀x (Predicate(x))

**Examples:**
```
∀x (Human(x) → Mortal(x))
"All humans are mortal"

∀x (Student(x) → Studies(x))
"All students study"

∀x ∀y (Parent(x, y) → Loves(x, y))
"All parents love their children"
```

#### Existential Quantifier (∃)
Means "there exists" or "at least one"

**Syntax**: ∃x (Predicate(x))

**Examples:**
```
∃x (Bird(x) ∧ CanFly(x))
"Some birds can fly"

∃x (Student(x) ∧ Intelligent(x))
"There is at least one intelligent student"

∃x (King(x) ∧ Rich(x))
"Some kings are rich"
```

---

### 5. **Logical Operators**
Same as propositional logic:

| Operator | Symbol | Meaning |
|----------|--------|---------|
| Negation | ¬ | NOT |
| Conjunction | ∧ | AND |
| Disjunction | ∨ | OR |
| Implication | → | IF...THEN |
| Bi-conditional | ↔ | IF AND ONLY IF |

---

## Translating English to Predicate Logic

### Example 1: Simple Facts

**English**: "John is a student"
```
Predicate Logic: Student(john)
```

**English**: "Mary is tall"
```
Predicate Logic: Tall(mary)
```

---

### Example 2: Properties and Relations

**English**: "John loves Mary"
```
Predicate Logic: Loves(john, mary)
```

**English**: "Paris is the capital of France"
```
Predicate Logic: CapitalOf(paris, france)
```

**English**: "The book is red"
```
Predicate Logic: Red(book)
```

---

### Example 3: Universal Statements

**English**: "All humans are mortal"
```
Predicate Logic: ∀x (Human(x) → Mortal(x))
Translation: For all x, if x is human, then x is mortal
```

**English**: "All students study hard"
```
Predicate Logic: ∀x (Student(x) → StudiesHard(x))
Translation: For all x, if x is a student, then x studies hard
```

**English**: "Every dog is an animal"
```
Predicate Logic: ∀x (Dog(x) → Animal(x))
Translation: For all x, if x is a dog, then x is an animal
```

---

### Example 4: Existential Statements

**English**: "Some birds can fly"
```
Predicate Logic: ∃x (Bird(x) ∧ CanFly(x))
Translation: There exists an x such that x is a bird AND x can fly
```

**English**: "There is at least one intelligent student"
```
Predicate Logic: ∃x (Student(x) ∧ Intelligent(x))
Translation: There exists an x such that x is a student AND x is intelligent
```

**English**: "Someone loves John"
```
Predicate Logic: ∃x (Loves(x, john))
Translation: There exists an x such that x loves john
```

---

### Example 5: Complex Statements

**English**: "All students study some subject"
```
Predicate Logic: ∀x (Student(x) → ∃y (Subject(y) ∧ Studies(x, y)))
Translation: For all x, if x is a student, then there exists a y such that y is a subject and x studies y
```

**English**: "No birds are mammals"
```
Predicate Logic: ∀x (Bird(x) → ¬Mammal(x))
OR: ¬∃x (Bird(x) ∧ Mammal(x))
Translation: For all x, if x is a bird, then x is not a mammal
```

**English**: "If someone is a teacher, they must teach"
```
Predicate Logic: ∀x (Teacher(x) → Teaches(x))
Translation: For all x, if x is a teacher, then x teaches
```

---

## Domain of Discourse (Universe of Discourse)

The **domain** is the set of all objects that the variables can represent.

### Examples:

**Example 1: Domain = People**
```
Θ = {john, mary, david, susan, ...}

Predicate Logic:
∀x (Human(x))  - "All elements are humans"
Tall(x)        - "x is tall" (where x ∈ people)
```

**Example 2: Domain = Numbers**
```
Θ = {1, 2, 3, 4, 5, ...}

Predicate Logic:
∃x (Prime(x) ∧ GreaterThan(x, 100))
"There exists a prime number greater than 100"
```

**Example 3: Domain = Animals**
```
Θ = {dog, cat, bird, elephant, ...}

Predicate Logic:
∀x (Animal(x) → CanMove(x))
"All animals in this domain can move"
```

---

## Predicate Logic vs Propositional Logic

| Aspect | Propositional Logic | Predicate Logic |
|--------|-------------------|-----------------|
| **Atoms** | Propositions (P, Q) | Predicates with arguments |
| **Representation** | "It rains" | Rain(location, time) |
| **Variables** | None | Uses variables (x, y, z) |
| **Quantifiers** | None | ∀ (for all), ∃ (exists) |
| **Relationships** | Limited | Rich relationships |
| **Expressiveness** | Low | High |
| **Example** | P ∧ Q | ∀x (Student(x) → Studies(x)) |

---

## Common Predicate Logic Patterns

### Pattern 1: "All A are B"
```
∀x (A(x) → B(x))
Example: ∀x (Dog(x) → Animal(x))
"All dogs are animals"
```

### Pattern 2: "Some A are B"
```
∃x (A(x) ∧ B(x))
Example: ∃x (Student(x) ∧ Intelligent(x))
"Some students are intelligent"
```

### Pattern 3: "No A are B"
```
∀x (A(x) → ¬B(x))  OR  ¬∃x (A(x) ∧ B(x))
Example: ∀x (Bird(x) → ¬Mammal(x))
"No birds are mammals"
```

### Pattern 4: "Some A are not B"
```
∃x (A(x) ∧ ¬B(x))
Example: ∃x (Student(x) ∧ ¬Intelligent(x))
"Some students are not intelligent"
```

### Pattern 5: "Every A has (at least one) B"
```
∀x (A(x) → ∃y (B(y) ∧ Has(x, y)))
Example: ∀x (Person(x) → ∃y (Mother(y) ∧ ParentOf(y, x)))
"Every person has a mother"
```

---

## Predicate Logic in Reasoning

### Example: The Socrates Syllogism

**Premises:**
1. All humans are mortal
2. Socrates is a human

**Predicate Logic Representation:**
```
Premise 1: ∀x (Human(x) → Mortal(x))
Premise 2: Human(socrates)
Conclusion: Mortal(socrates)
```

**Reasoning:**
```
From Premise 1: ∀x (Human(x) → Mortal(x))
Substitute x = socrates: Human(socrates) → Mortal(socrates)
From Premise 2: Human(socrates) is true
By Modus Ponens: Mortal(socrates)
```

---

## Advantages of Predicate Logic

1. **Expressive Power**: Can represent complex relationships and statements
2. **Formal Foundation**: Provides rigorous mathematical basis
3. **Automated Reasoning**: Supports mechanical inference and theorem proving
4. **Natural Representation**: Mirrors natural language statements well
5. **Universality**: Can represent knowledge in any domain
6. **Compositionality**: Complex formulas built from simpler ones

---

## Limitations of Predicate Logic

1. **Computational Complexity**: Inference is computationally expensive
2. **Knowledge Acquisition**: Time-consuming to formalize knowledge
3. **Uncertainty**: Not suited for probabilistic reasoning
4. **Commonsense Reasoning**: Difficult to capture common-sense knowledge
5. **Scalability**: Large knowledge bases become difficult to manage
6. **Closed World Assumption**: Assumes what's not provable is false

---

## Real-World Applications

### 1. **Expert Systems**
Represent medical knowledge for diagnosis:
```
∀x (HasSymptom(x, fever) ∧ HasSymptom(x, cough) → 
    PossibleDisease(x, flu))
```

### 2. **Database Query Languages**
SQL uses predicate logic concepts:
```
SELECT * FROM Students 
WHERE Intelligence(student) AND Studies(student, math)
```

### 3. **Automated Theorem Proving**
Prove mathematical theorems using logical inference.

### 4. **Natural Language Processing**
Represent meaning of sentences:
```
"John gave Mary a book"
Gives(john, mary, book)
```

### 5. **Planning Systems**
Represent actions and preconditions:
```
Precondition: Robot(r) ∧ At(r, location1)
Action: Move(r, location1, location2)
Effect: At(r, location2) ∧ ¬At(r, location1)
```

---

## Summary

Predicate Logic:
- **Definition**: Formal system for representing properties, relationships, and quantified statements
- **Components**: Constants, variables, predicates, quantifiers, logical operators
- **Expressiveness**: Much more powerful than propositional logic
- **Representation**: Maps naturally to English sentences
- **Reasoning**: Supports automated inference and theorem proving
- **Application**: Foundation of AI knowledge representation systems

Predicate logic is fundamental to modern AI and remains a cornerstone of knowledge representation and automated reasoning systems.
