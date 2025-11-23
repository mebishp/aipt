# Q3: What are the types of knowledge representation techniques in AI?

## Overview of Knowledge Representation

**Knowledge Representation (KR)** is the process of encoding information about the real world in a form that a computer can understand and process. It is a critical component of AI systems that enables machines to think and solve problems intelligently.

The goal of KR is to represent knowledge in a way that:
- Facilitates drawing inferences from sentences and facts
- Enables efficient reasoning and problem-solving
- Captures the structure and relationships in a domain
- Allows manipulation and transformation of knowledge

---

## Main Categories of Knowledge Representation

Knowledge can be represented in two broad ways:

### 1. **Logical Representation** (Using Logic)
### 2. **Structured Representation** (Using Data Structures)

---

## 1. LOGICAL REPRESENTATION SCHEMES

### A. Propositional Logic

#### Definition
A **proposition** is a declarative sentence that has a truth value (either true or false, not ambiguous).

**Propositional logic** deals with propositions and analyzes them individually or compositely using logical operators.

#### Characteristics:
- Simple and easy to understand
- Limited expressiveness
- Cannot represent relationships between entities

#### Logical Operators:

| Operator | Symbol | Meaning | Example |
|----------|--------|---------|---------|
| **Negation** | ¬ | NOT | ¬P (not P) |
| **Conjunction** | ∧ | AND | P ∧ Q (P and Q) |
| **Disjunction** | ∨ | OR | P ∨ Q (P or Q) |
| **Implication** | → | IF...THEN | P → Q (if P then Q) |
| **Bi-conditional** | ↔ | IF AND ONLY IF | P ↔ Q (P if and only if Q) |

#### Examples:
- **"It is raining"** = P (simple proposition)
- **"It is raining AND it is cold"** = P ∧ Q (compound proposition)
- **"If it is raining, then the ground is wet"** = P → Q (implication)

#### Advantages:
- Simple and intuitive
- Efficient inference algorithms
- Well-studied and understood

#### Limitations:
- Cannot represent properties of objects
- Cannot express relationships between entities
- Limited to simple true/false statements
- Cannot quantify over domains ("all", "some")

---

### B. Predicate Logic (First-Order Logic - FOL)

#### Definition
**Predicate logic** extends propositional logic by introducing predicates, variables, and quantifiers to represent more complex relationships and statements.

#### Components of Predicate Logic:

| Component | Definition | Example |
|-----------|-----------|---------|
| **Constants** | Specific objects or values | John, Mary, 5, Apple |
| **Variables** | Placeholders for objects | x, y, z |
| **Predicates** | Properties or relations | Parent(x,y), Age(x,n), Color(x) |
| **Functions** | Map objects to objects | Father(x), Plus(x,y) |
| **Quantifiers** | Scope indicators | ∀ (for all), ∃ (there exists) |

#### Quantifiers:

**1. Universal Quantifier (∀)**
- Means "for all"
- Applies a statement to all members of a domain
- Example: ∀x (Dog(x) → Animal(x)) - "All dogs are animals"

**2. Existential Quantifier (∃)**
- Means "there exists"
- States that at least one member satisfies the condition
- Example: ∃x (Dog(x) ∧ Color(x, Brown)) - "There exists a brown dog"

**3. Uniqueness Quantifier (∃!)**
- Means "exactly one"
- States that exactly one member satisfies the condition
- Example: ∃!x (President(x, USA)) - "There is exactly one president of USA"

#### Examples:
- **"Socrates is mortal"** = Mortal(Socrates)
- **"All humans are mortal"** = ∀x (Human(x) → Mortal(x))
- **"Some birds can fly"** = ∃x (Bird(x) ∧ CanFly(x))
- **"John is the father of Mary"** = Father(John, Mary)

#### Advantages:
- More expressive than propositional logic
- Can represent relationships between entities
- Can quantify over domains
- Suitable for complex reasoning

#### Limitations:
- More computationally complex
- Inference is slower
- Can be difficult to represent all real-world concepts
- Does not handle uncertainty well

---

## 2. STRUCTURED REPRESENTATION SCHEMES

Structured representations organize knowledge in more organized and intuitive ways using data structures.

---

### A. Weak Slot-and-Filler Structures

These structures represent knowledge as a set of entities and their attributes. A **slot** is an attribute-value pair, and a **filler** is the value a slot can take.

#### 1. **Semantic Networks**

##### Definition
A semantic network is a **graphic notation** representing knowledge in patterns of interconnected nodes and labeled edges. Knowledge is represented as a set of concepts related to one another.

##### Components:

| Component | Description |
|-----------|-------------|
| **Nodes** | Represent objects, concepts, or values |
| **Arcs (Labeled Links)** | Represent relationships or properties between nodes |
| **Labels** | Describe the type of relationship |

##### Common Semantic Relations:

**1. INSTANCE Relation**
- X is a specific example of the general concept Y
- Example: "Shawn INSTANCE Human"

**2. ISA Relation**
- X is a subset (subclass) of the more general concept Y
- Example: "Sparrow ISA Bird"
- Allows inheritance of properties

**3. HASPART Relation**
- Concept Y is a part of concept X
- Example: "Bird HASPART Wings"
- Example: "Car HASPART Engine"

**4. HASPROPERTY Relation**
- X has property Y
- Example: "Sky HASPROPERTY Blue"

##### Visual Example of Semantic Network:

```
                    [ISA]
            Sparrow -----> Bird
              |              |
           [COLOR]       [ISA]
              |              |
            Red          Animal
                           |
                       [HASPART]
                           |
                         Wings
```

##### Advantages:
- Ability to represent default values for categories
- Convey meaning in a transparent and visual manner
- Simple and easy to understand
- Supports inheritance of properties

##### Limitations:
- Links between objects represent only **binary relations**
- Difficult to express negation, disjunction, and complex knowledge
- No standard definition of link names
- Can become very large and complex
- Limited inference capabilities

##### Example Application:
A system representing animal knowledge:
```
Animal - [HASPART] - Legs
  |
  +-- [ISA] - Bird - [ISA] - Parrot
  +-- [ISA] - Dog

Parrot - [HASPROPERTY] - CanFly
Parrot - [COLOR] - Green
Parrot - [HABITAT] - Tropical Forest
```

---

#### 2. **Frames**

##### Definition
A **frame** is a collection of attributes (**slots**) and associated values (**fillers**) that describe some entity. Frames organize knowledge about objects/concepts in a structured way.

##### Components:

1. **Frame Name**: Identifies the concept or entity
2. **Slots**: Attributes describing the object
3. **Fillers**: Values for the slots
4. **Methods/Procedures**: Attached actions (optional)
5. **Constraints**: Restrictions on slot values

##### Structure Example:

```
FRAME: Bird
  Slots:
    - Class: Animal
    - HasWings: Yes
    - CanFly: Yes (default)
    - Color: (varies)
    - Habitat: Trees
    - Diet: Seeds, insects
    
FRAME: Penguin
  - ISA: Bird
  - CanFly: No (overrides default from Bird)
  - Habitat: Antarctic
  - Color: Black and White
```

##### Key Features:

**1. Inheritance**
- Child frames inherit properties from parent frames
- Properties can be overridden
- Example: Penguin inherits from Bird but overrides "CanFly" to No

**2. Default Values**
- Slots can have default values
- Used when specific value is not known
- Example: "Bird.CanFly = Yes (default)"

**3. Meta-knowledge**
- Knowledge about other knowledge
- Constraints on slot values
- Methods to compute values

##### Advantages:
- Organizes related knowledge together
- Supports inheritance and defaults
- Efficient storage of similar objects
- Flexible and extensible

##### Limitations:
- Less formal than logical representations
- Inheritance conflicts can be complex
- No standard semantics
- Less suitable for complex reasoning

##### Example Application:
```
FRAME: Car
  - Type: Vehicle
  - HasWheels: 4
  - FuelType: Gasoline (default)
  - Color: Unknown
  - Weight: (varies by model)

FRAME: ElectricCar
  - ISA: Car
  - FuelType: Electric (overrides default)
  - BatteryCapacity: (in kWh)
  - ChargingTime: (in hours)
```

---

### B. Strong Slot-and-Filler Structures

These structures represent links between objects according to **more rigid rules**, providing specific notions of what types of objects and relations are included.

#### 1. **Conceptual Dependency (CD)**

##### Definition
CD structures are used to represent knowledge about **events and actions** usually conveyed in natural language sentences.

##### Goals of CD:
- Facilitate drawing inferences from sentences
- Be independent of the language in which sentences were originally stated

##### CD Claim:
For any two sentences identical in meaning, regardless of language, there should be only one representation.

##### Key Features:
- Uses **primitive actions**: ATRANS (transfer), PTRANS (move), MTRANS (mental transfer), PROPEL (apply force), GRASP, INGEST, EXPEL, EXHALE, BUILD, MOVE (of body), GRASP

##### Example:
- English: "John gave Mary a book"
- CD: ATRANS(Actor=John, Object=Book, From=John, To=Mary)

##### Advantages:
- Uses fewer inference rules
- Many inference rules are already embedded in structure
- Language-independent representation
- Good for natural language processing

##### Limitations:
- Knowledge must be decomposed into low-level primitives
- Representations can be complex even for simple actions
- Requires large storage space
- Difficult to represent static knowledge

---

#### 2. **Scripts**

##### Definition
A **script** is a structure that describes a **stereotyped sequence of events** in a particular context. It captures typical patterns of behavior.

##### Components of a Script:

| Component | Description | Example |
|-----------|-------------|---------|
| **Entry Conditions** | Must be satisfied before events can occur | Restaurant has tables, food, staff |
| **Results** | Conditions that will be true after events | Customer is full, payment is made |
| **Props** | Objects involved in events | Tables, menus, food, cash register |
| **Roles** | Persons involved in events | Customer, waiter, chef |
| **Track** | Variations on the script | Happy/sad ending, fast/slow service |
| **Scenes** | Sequence of events | Entering, ordering, eating, paying |

##### Example: Restaurant Script

```
SCRIPT: Eating at a Restaurant

Entry Conditions:
  - Customer is hungry
  - Restaurant is open
  - Customer has money

Props:
  - Tables
  - Menus
  - Food items
  - Cash register

Roles:
  - Customer
  - Waiter
  - Chef

Scenes:
  1. Customer enters restaurant
  2. Customer is seated at a table
  3. Waiter gives menu to customer
  4. Customer reads menu
  5. Customer orders food
  6. Waiter takes order to kitchen
  7. Chef prepares food
  8. Waiter brings food to customer
  9. Customer eats food
  10. Waiter brings bill
  11. Customer pays bill
  12. Customer leaves

Results:
  - Customer is no longer hungry
  - Restaurant has money
  - Waiter has tip (usually)
```

##### Advantages:
- Captures stereotypical sequences
- Ability to predict subsequent events
- Avoids inference explosion by limiting inferences
- Good for story understanding and narrative

##### Limitations:
- Less general than frames
- Not suitable for all types of knowledge
- Requires manual script creation
- Difficult to handle variations

---

#### 3. **CYC (Cycorp) - Ontology**

##### Definition
Cyc is an ambitious AI project attempting to assemble a **comprehensive ontology and common sense knowledge base** of everyday knowledge.

##### Goal:
Enable AI applications to perform human-like reasoning by understanding everyday concepts.

##### Scope:
- Covers millions of concepts
- Represents relationships between concepts
- Captures common-sense knowledge
- Examples: "Lemons are sour", "Water is necessary for life"

##### Advantages:
- Comprehensive knowledge base
- Enables human-like reasoning
- Supports inference
- Continuously growing

##### Limitations:
- Extremely complex to build and maintain
- Incomplete coverage of all knowledge
- Expensive in terms of storage and computation
- Knowledge acquisition is challenging

---

## 3. COMPARISON OF REPRESENTATION TECHNIQUES

| Technique | Expressiveness | Computational Cost | Learning Capability | Typical Use |
|-----------|----------------|-------------------|-------------------|-------------|
| **Propositional Logic** | Low | Low | No | Simple rule-based systems |
| **Predicate Logic** | High | High | No | Expert systems, formal reasoning |
| **Semantic Networks** | Medium | Medium | Partial | Knowledge organization, inheritance |
| **Frames** | Medium | Medium | Yes | Object-oriented knowledge, defaults |
| **Conceptual Dependency** | High (for events) | High | No | Natural language processing |
| **Scripts** | Medium | Low | No | Story understanding, planning |
| **Ontologies (CYC)** | Very High | Very High | Partial | Semantic web, knowledge integration |

---

## 4. CHOOSING THE RIGHT REPRESENTATION

### Choose Propositional Logic for:
- Simple yes/no facts
- Basic rule-based systems
- Systems requiring fast inference

### Choose Predicate Logic for:
- Complex relationships between entities
- Systems needing quantification
- Formal reasoning and verification

### Choose Semantic Networks for:
- Organizing related concepts
- Representing hierarchical knowledge
- Visualization of relationships

### Choose Frames for:
- Object-like entities with properties
- Systems with default reasoning
- Knowledge with similar structures

### Choose Conceptual Dependency for:
- Natural language understanding
- Event and action representation
- Language-independent description

### Choose Scripts for:
- Stereotyped sequences of events
- Story and narrative understanding
- Prediction of typical behavior

### Choose Ontologies for:
- Large-scale knowledge integration
- Semantic reasoning across domains
- Web-based knowledge representation

---

## Summary

- **Logical representations** (Propositional and Predicate Logic) are formal and suitable for reasoning
- **Structured representations** (Semantic Networks, Frames, Scripts) are intuitive and efficient for organizing knowledge
- Each technique has strengths and weaknesses
- Modern AI systems often combine multiple representation techniques
- Choice depends on the domain, reasoning requirements, and computational constraints
