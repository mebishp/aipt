# Q14: ACT vs CT - Cognitive Architectures

## Overview

**ACT** (Adaptive Control of Thought) and **CT** (Computational Theory of Mind) represent two major approaches to understanding and modeling human cognition and artificial intelligence. While both aim to explain how minds process information and produce behavior, they differ significantly in their foundational assumptions, mechanisms, and applications.

---

## Part 1: ACT (Adaptive Control of Thought)

### Definition

**ACT** is a comprehensive cognitive architecture developed by **John R. Anderson** that models human cognition as an integrated system combining **procedural knowledge** (how to do things) and **declarative knowledge** (facts and concepts).

### Historical Context

- **Originated**: 1976 (initial ACT model)
- **Current Version**: ACT-R (Adaptive Control of Thought - Rational, 2007)
- **Developer**: Carnegie Mellon University
- **Purpose**: Simulate human behavior and learning at computational level

### Core Components of ACT-R

#### 1. **Declarative Knowledge (Facts)**

```
Memory Type: Long-Term Memory (LTM) of Facts
Storage: "Chunks" - units of knowledge
Structure: Property-value pairs
Example:
├── Chunk: "Dog"
│   ├── ISA: Animal
│   ├── HasProperty: Fur
│   ├── HasProperty: FourLegs
│   └── Sound: Bark
```

**Characteristics:**
- Facts stored in semantic/episodic memory
- Organized as interconnected chunks
- Retrieved through spreading activation
- Decay over time if not used

#### 2. **Procedural Knowledge (Skills)**

```
Type: Production Rules
Format: IF-THEN statements
Example:
IF: Goal is to find a restaurant
    AND: You are in a city
    AND: You are hungry
THEN: Use search engine for "restaurants near me"
```

**Characteristics:**
- Learned through practice
- Become automatic (implicit)
- Executed sequentially
- Improve with repetition

#### 3. **Memory Systems**

```
┌─────────────────────────────────────┐
│ Working Memory (WM)                 │
│ ├─ Holds: Current information       │
│ ├─ Capacity: ~4 chunks              │
│ └─ Duration: ~10 seconds            │
└─────────────────────────────────────┘
              ↕↕↕
┌─────────────────────────────────────┐
│ Long-Term Memory (LTM)              │
│ ├─ Semantic: General knowledge      │
│ ├─ Episodic: Past events            │
│ └─ Procedural: Skills               │
└─────────────────────────────────────┘
```

#### 4. **Buffers and Modules**

ACT-R operates through specialized modules:

```
┌──────────────────────────────────────────┐
│ Perceptual-Motor Module                  │
├──────────────────────────────────────────┤
│ Visual Module:  Perceive visual input    │
│ Auditory Module: Hear speech/sounds      │
│ Motor Module:  Perform manual actions    │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│ Cognitive Module                         │
├──────────────────────────────────────────┤
│ Central Processing: Production rules     │
│ Attention: Focus on relevant information │
│ Problem-solving: Goal-directed behavior  │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│ Memory Module                            │
├──────────────────────────────────────────┤
│ Retrieval from LTM                       │
│ Maintenance in WM                        │
│ Encoding of new information              │
└──────────────────────────────────────────┘
```

### Key Principles of ACT

#### Principle 1: Rational Analysis
- Cognition is rational and optimized
- Adapts to environmental demands
- Seeks to maximize usefulness of resources

#### Principle 2: Production Rules
- Behavior governed by IF-THEN rules
- Learned through experience
- Become routine and efficient

#### Principle 3: Spreading Activation
```
Fact: "Apple"
       │
       ├─→ "Red" (property)
       ├─→ "Round" (shape)
       ├─→ "Fruit" (category)
       ├─→ "Crunchy" (texture)
       └─→ "Sweet" (taste)

Activation spreads to related concepts
```

#### Principle 4: Learning Mechanisms

- **Declarative Learning**: Encoding facts into LTM
- **Procedural Learning**: Compilation of knowledge into rules
- **Reinforcement Learning**: Strengthening successful rules
- **Analogy**: Applying old solutions to new problems

### Examples of ACT in Action

#### Example 1: Learning to Drive

**Stage 1: Declarative (Fact Learning)**
- "The steering wheel turns the front wheels"
- "Pressing the pedal accelerates the car"
- "The mirror shows behind the car"

```
Production Rule:
IF: Goal is to turn right
    AND: Car is moving
THEN: Turn steering wheel clockwise
```

**Stage 2: Procedural (Skill Learning)**
- Rules become automatic
- Attention shifts to traffic conditions
- Execution becomes smooth and coordinated

**Stage 3: Expert Performance**
- Minimal conscious effort
- Automatic responses to stimuli
- Knowledge compiled into fluid actions

#### Example 2: Mathematical Problem-Solving

**Learn Division Rule:**
```
Original Rule:
IF: Need to find 15 ÷ 3
    AND: Know multiplication table
THEN: Find which number × 3 = 15, answer is 5

Compiled Rule (Automatic):
IF: See "15 ÷ 3"
THEN: Respond "5" (no intermediate steps)
```

### Strengths of ACT

| Strength | Explanation |
|----------|------------|
| **Unified Framework** | Models multiple cognitive systems together |
| **Cognitive Plausibility** | Aligns with human cognition research |
| **Predictive Power** | Makes testable predictions about behavior |
| **Learning Explanation** | Shows how skills develop from facts |
| **Empirical Support** | Supported by extensive experimental evidence |
| **Broad Application** | Covers perception, memory, problem-solving |

### Limitations of ACT

| Limitation | Description |
|-----------|------------|
| **Complexity** | Complex system with many parameters |
| **Computational Cost** | Slow compared to human cognitive speed |
| **Limited to Cognition** | Doesn't address emotion or consciousness |
| **Symbolic Limitations** | Struggles with grounding abstract symbols |
| **Neural Disconnect** | Not well-mapped to neural mechanisms |

---

## Part 2: CT (Computational Theory of Mind)

### Definition

**CT** (Computational Theory of Mind) is a philosophical and scientific approach proposing that **the mind is fundamentally a computational system** - that mental states are computational states and mental processes are computations.

### Historical Context

- **Origins**: 1950s-1960s (Cognitive Science emergence)
- **Key Figures**: Hilary Putnam, Jerry Fodor, Allen Newell
- **Foundation**: Philosophy of Mind and Cognitive Science
- **Modern Context**: Shapes AI and cognitive modeling

### Core Assumptions of CT

#### Assumption 1: Computationalism
```
Mind = Computer
     ↓
Mental States = Computational States
     ↓
Mental Processes = Computations
     ↓
Behavior = Output of Computation
```

#### Assumption 2: Symbolism
- Mind manipulates **symbols** (representations)
- Symbols have **meaning** through their relationships
- Computation is **symbol manipulation**

**Example:**
```
Symbol: "Dog"
Meaning: Derived from relationships to other symbols
         ├─ Related to: "Animal", "Bark", "Fur"
         ├─ Properties: "Four-legged", "Furry"
         └─ Role: "Pet", "Guardian"

Computation: Processing symbols to derive conclusions
"Dog(fido) ∧ Bark(x) → Sound(x)" = If Fido is a dog and dogs bark, then Fido makes sound
```

#### Assumption 3: Representationalism
- Mental content depends on **internal representations**
- Representations are **structured** and **combinatorial**
- Understanding = Manipulating representations

### Levels of CT Analysis

#### Level 1: Computational Level (Marr's Framework)
```
WHAT problem is being solved?
WHY is it being solved?
GOAL: Achieve objective

Example: "Recognize a face"
Goal: Identify person from visual input
Problem: Map pixels to identity
```

#### Level 2: Algorithmic Level
```
HOW is the problem solved?
ALGORITHM: Procedure to achieve goal
REPRESENTATION: Data structures used

Example: Edge detection → Feature analysis → Template matching
```

#### Level 3: Implementation Level
```
WHAT physical substrate implements the algorithm?
NEURAL CIRCUITS: Brain mechanisms
HARDWARE: Biological or artificial neurons

Example: Neurons in visual cortex implement feature detection
```

### Types of Computations in CT

#### Type 1: Symbol Manipulation
```
Operation: Process discrete symbols
Example:
├─ Logical inference: "All A are B; X is A; Therefore X is B"
├─ String operations: Concatenation, substitution
└─ List operations: Adding, removing, reordering items
```

#### Type 2: Statistical/Probabilistic Computation
```
Operation: Process probability distributions
Example:
├─ Bayesian inference: Update beliefs based on evidence
├─ Pattern recognition: Find statistical patterns
└─ Decision-making: Choose action with highest utility
```

#### Type 3: Neural Computation
```
Operation: Parallel processing across networks
Example:
├─ Pattern completion: Recover full pattern from partial input
├─ Categorization: Assign stimuli to categories
└─ Constraint satisfaction: Find solution satisfying constraints
```

### Key Principles of CT

#### Principle 1: Representationalism
Thought involves **manipulating internal representations**

```
Internal Representation:
┌─────────────────────────────┐
│ "The cat is on the mat"    │
├─────────────────────────────┤
│ Syntactic structure:        │
│ [NP: [D: The][N: cat]]     │
│ [VP: [V: is][PP: on mat]] │
└─────────────────────────────┘

Semantics (meaning): Relationship between world and representation
```

#### Principle 2: Compositionality
Complex thoughts are **composed from simpler components**

```
Simple Components:
├─ "Red" (color property)
├─ "Ball" (object)
└─ "On" (spatial relation)

Complex Thought:
"The red ball is on the table"
= [RED(x) ∧ BALL(x) ∧ ON(x, table)]
```

#### Principle 3: Systematicity
If you can think one thought, you can think related thoughts

```
If you can think: "John loves Mary"
Then you can think: "Mary loves John"
Because components (John, Mary, loves) are combinable
```

#### Principle 4: Physical Symbol System Hypothesis
```
A physical symbol system has the necessary 
and sufficient means for general intelligent action
          ↓
    Symbol Manipulation 
        = Intelligence
          ↓
Computers can be intelligent
```

### Examples of CT in Action

#### Example 1: Natural Language Understanding

```
Input: "The bank is by the river"

Computational Process:
1. Parse syntactic structure
2. Resolve ambiguity ("bank" = financial institution or riverbank)
3. Select appropriate representation based on context
4. Derive meaning from symbolic relationships

Output: Mental representation of meaning
```

#### Example 2: Problem-Solving

```
Problem: "Missionaries and Cannibals crossing river"

Computation:
1. Represent state as symbols: [M3, C3, 0, boat=left]
2. Generate possible actions (move who in boat)
3. Evaluate outcomes against goal state
4. Search for sequence leading to goal

Solution: Sequence of symbolic state transitions
```

### Strengths of CT

| Strength | Explanation |
|----------|------------|
| **Philosophical Clarity** | Clear framework for understanding mind-body relationship |
| **Explanatory Power** | Explains many cognitive phenomena (reasoning, language) |
| **Computational Framework** | Provides formal tools for AI and cognitive modeling |
| **Falsifiability** | Makes empirical predictions about cognition |
| **Generality** | Applies to any domain where logic/rules apply |

### Limitations of CT

| Limitation | Description |
|-----------|------------|
| **Symbol Grounding** | How do symbols get meaning? (Searle's Chinese Room) |
| **Embodiment** | Ignores role of body in cognition |
| **Emotion & Affect** | Doesn't account for emotional aspects of thinking |
| **Consciousness** | Struggles to explain subjective experience |
| **Flexibility** | Can't easily handle novel, creative situations |
| **Neural Implausibility** | May not match how brains actually work |

---

## Part 3: Comparison - ACT vs CT

### Side-by-Side Comparison

| Aspect | ACT-R | Computational Theory |
|--------|-------|---------------------|
| **Focus** | Cognitive architecture | Philosophical framework |
| **Scope** | How mind works in practice | What mind is fundamentally |
| **Level** | Implementation/Algorithmic | Computational/Theoretical |
| **Mechanism** | Production rules + memory | Symbol manipulation |
| **Learning** | Explicit mechanisms | Assumed possible |
| **Emotions** | Limited treatment | Not addressed |
| **Implementation** | Computer simulation | Formal theory |
| **Psychology** | Strongly grounded | Philosophical foundation |
| **Generality** | Specific to cognition | Applies to any computation |
| **Empirical** | Testable predictions | Harder to test directly |

### Relationship Between ACT and CT

```
Computational Theory of Mind (Philosophical Framework)
        ↑
        │ Provides foundation for
        │
Adaptive Control of Thought (ACT-R)
        │ Realizes principles of
        │
Specific Cognitive Architecture
        ↓
        │ Implemented in
        │
Computer Simulation
```

**ACT-R is a concrete realization of CT principles:**
- Uses **symbol manipulation** (CT principle)
- Implements **production rules** (CT computation)
- Demonstrates **learning** through rule compilation
- Models **memory systems** as computational structures

### When to Use Each

#### Use ACT-R When:
- ✓ Need to simulate specific cognitive tasks
- ✓ Want to predict human reaction times
- ✓ Testing hypotheses about human learning
- ✓ Modeling practical problem-solving
- ✓ Building cognitive tutors/agents

#### Use CT When:
- ✓ Analyzing fundamental nature of mind
- ✓ Designing new AI systems
- ✓ Understanding cognitive capabilities
- ✓ Exploring consciousness and meaning
- ✓ Philosophical questions about mind-body

---

## Part 4: Integration and Modern Perspective

### Integrated Framework

Modern cognitive science increasingly integrates both approaches:

```
Computational Theory
    (What is mind?)
         ↓
    ACT-R Model
    (How does it work?)
         ↓
Neural Implementation
    (Where does it happen?)
         ↓
Behavioral Predictions
    (What can we observe?)
```

### Complementary Strengths

**ACT provides to CT:**
- Concrete implementation details
- Empirical validation
- Practical applications
- Learning mechanisms

**CT provides to ACT:**
- Theoretical foundation
- Philosophical grounding
- Broader perspective
- Fundamental principles

### Modern Extensions

#### 1. **Embodied Cognition**
- Both ACT and CT extended to include body
- Sensorimotor grounding of symbols
- Interaction with physical environment

#### 2. **Distributed Cognition**
- Cognition not just in individual mind
- Shared across agents, artifacts, tools
- Social and cultural dimensions

#### 3. **Probabilistic Extensions**
- Beyond discrete symbols
- Uncertainty and statistics
- Bayesian inference

#### 4. **Hybrid Architectures**
```
Symbolic Processing (ACT-like)
        +
Neural Networks (Connectionist)
        +
Probabilistic Models
        =
Hybrid Intelligent System
```

---

## Part 5: Real-World Applications

### Application 1: Intelligent Tutoring Systems

**Using ACT-R:**
- Model student knowledge as chunks
- Predict learning and performance
- Optimize instruction timing
- Personalize feedback

**Using CT:**
- Design knowledge representation
- Determine optimal learning algorithms
- Understand reasoning errors

### Application 2: Cognitive Robotics

**Using ACT-R:**
- Simulate robot learning from demonstration
- Model skill acquisition
- Plan robot actions

**Using CT:**
- Represent physical world symbolically
- Reason about object relationships
- Plan multi-step tasks

### Application 3: Human-Computer Interaction

**Using ACT-R:**
- Predict user behavior and reaction times
- Optimize interface design
- Model expertise development

**Using CT:**
- Design intuitive representations
- Determine information display
- Support user reasoning

### Application 4: Natural Language Processing

**Using ACT-R:**
- Model language comprehension
- Predict reading times
- Simulate language learning

**Using CT:**
- Design grammatical representations
- Parse sentence structure
- Resolve ambiguities

---

## Summary Table

| Dimension | ACT-R | Computational Theory |
|-----------|-------|---------------------|
| **Type** | Architecture | Theory |
| **Origin** | Psychology/AI | Philosophy/Cognitive Science |
| **Main Proponent** | John Anderson | Putnam, Fodor, Newell |
| **Key Mechanism** | Production Rules | Symbol Manipulation |
| **Memory Types** | Declarative & Procedural | Representations & Operations |
| **Best For** | Modeling cognitive tasks | Understanding mind fundamentally |
| **Empirical Support** | Strong | Moderate (indirect) |
| **Scalability** | Medium | High |
| **Consciousness** | Not addressed | Problematic |
| **Modern Status** | Actively used & developed | Foundational but challenged |

---

## Conclusion

**ACT (Adaptive Control of Thought)** and **Computational Theory (CT)** are not competitors but complementary:

- **CT** provides the **philosophical and theoretical framework** for understanding minds as computational systems
- **ACT-R** provides a **practical computational architecture** that realizes these principles

Together, they represent a comprehensive approach to cognitive science:
1. **Why** computation explains cognition (CT)
2. **How** to model cognitive systems (ACT-R)
3. **What** predictions we can make (Both)
4. **Where** to find implementations (Neural substrates)

Modern cognitive science increasingly integrates both perspectives with neural implementations and probabilistic methods, creating increasingly sophisticated models of human intelligence and enabling more powerful artificial intelligence systems.
