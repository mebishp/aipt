# Q4: Explain the Water Jug problem with a suitable solution

## Problem Definition

The **Water Jug Problem** (also known as the **Jug Problem** or **Water Jug Puzzle**) is a classic problem in AI and state-space search. It demonstrates how to use search techniques to find a solution by exploring the state space.

### Problem Statement:

You have:
- **Jug A (capacity = 4 liters)**
- **Jug B (capacity = 3 liters)**
- **A water supply (unlimited)**
- **A sink (to pour out water)**

**Goal**: Measure exactly **2 liters** of water in Jug A (or Jug B).

---

## Problem Formulation Using State Space Search

### 1. **State Representation**

A **state** is represented as an ordered pair: **(a, b)**
- **a** = Current amount of water in Jug A (0 to 4 liters)
- **b** = Current amount of water in Jug B (0 to 3 liters)

**Initial State**: (0, 0) - Both jugs are empty

**Goal State**: (2, ?) or (?, 2) - Either jug contains exactly 2 liters

### 2. **Operators (Actions)**

The following operators can be performed:

| Operator | Description | Conditions |
|----------|-------------|-----------|
| **1. Fill A** | Fill Jug A from the water supply | A is not full; a < 4 |
| **2. Fill B** | Fill Jug B from the water supply | B is not full; b < 3 |
| **3. Empty A** | Empty Jug A into the sink | A is not empty; a > 0 |
| **4. Empty B** | Empty Jug B into the sink | B is not empty; b > 0 |
| **5. Pour A → B** | Pour water from A to B | A is not empty AND B is not full |
| **6. Pour B → A** | Pour water from B to A | B is not empty AND A is not full |

When pouring from one jug to another, pour until either:
- The source jug is empty, OR
- The destination jug is full

---

## Solution Using Breadth-First Search (BFS)

Let me trace through a BFS solution to reach the goal state (2, 0):

### **BFS Execution Tree**

```
Level 0: (0, 0)
           ↓
Level 1: 
    (4, 0) ← Fill A
    (0, 3) ← Fill B
           ↓
Level 2:
    From (4, 0):
    (4, 3) ← Pour A→B (fill B from A)
    (0, 0) ← Empty A
    (1, 3) ← Pour A→B (partial)
    
    From (0, 3):
    (3, 0) ← Pour B→A
    (0, 0) ← Empty B
           ↓
Level 3: Continue exploring...
```

---

## Step-by-Step Solution Path

Here's one optimal solution with **6 steps**:

| Step | Action | State (A, B) | Jug A | Jug B | Explanation |
|------|--------|-------------|-------|-------|-------------|
| 1 | **Fill A** | (4, 0) | ████ | ___ | Fill Jug A completely |
| 2 | **Pour A→B** | (1, 3) | █___ | ███ | Pour from A to B until B is full. B takes 3 liters from A, leaving 1 liter in A |
| 3 | **Empty B** | (1, 0) | █___ | ___ | Empty all water from B into sink |
| 4 | **Pour A→B** | (0, 1) | ____ | █__ | Pour 1 liter from A to B |
| 5 | **Fill A** | (4, 1) | ████ | █__ | Fill A again |
| 6 | **Pour A→B** | (2, 3) | ██__ | ███ | Pour from A until B is full (2 liters go from A to B). Result: A has 2 liters! |

**Goal Achieved**: Jug A has exactly 2 liters ✓

---

## Alternative Solution Path

Here's another solution with **7 steps** reaching (2, 0):

| Step | Action | State (A, B) | Explanation |
|------|--------|-------------|-------------|
| 1 | Fill B | (0, 3) | Fill Jug B |
| 2 | Pour B→A | (3, 0) | Pour from B to A (A takes 3, B becomes empty) |
| 3 | Fill B | (3, 3) | Fill Jug B again |
| 4 | Pour B→A | (4, 2) | Pour from B to A until A is full (A takes 1 more, B left with 2) |
| 5 | Empty A | (0, 2) | Empty Jug A |
| 6 | Pour B→A | (2, 0) | Pour all 2 liters from B to A |

**Goal Achieved**: Jug A has exactly 2 liters ✓

---

## Problem Characteristics

### Using Problem Characteristics Framework:

**1. Is the problem decomposable?**
- No, this is an atomic problem that cannot be broken into independent subproblems

**2. Can solution steps be ignored or undone?**
- **Recoverable Problem**: Yes, steps can be undone by emptying and refilling jugs
- This makes it easier to solve using backtracking if wrong path is taken

**3. Is the problem's universe predictable?**
- **Certain outcome**: Yes, the physics of water pouring is predictable
- Filling and pouring outcomes are known with certainty

**4. Is a good solution absolute or relative?**
- **Any-path problem**: We just need to find any solution
- But we can also find the **best-path** (minimum steps)

**5. Is the solution a state or a path?**
- **State**: The final state (2 liters in a jug) is the solution
- But the **path** (sequence of steps) is also important for understanding how to achieve it

**6. What is the role of knowledge?**
- **Minimal knowledge**: Only operator rules needed
- **Extensive knowledge**: Heuristics like "how close are we to goal" could speed it up

**7. Does the task require interaction?**
- **Solitary**: The program finds solution without human interaction

---

## Implementation Using State Space Search

### Pseudo Code

```
FUNCTION WaterJugProblem(targetA, targetB):
    
    QUEUE = [(0, 0)]  // BFS queue: start state
    VISITED = {(0, 0)}
    PARENT = {(0, 0): None}
    
    WHILE QUEUE not empty:
        current_state = QUEUE.dequeue()
        
        IF current_state == goal_state:
            RETURN reconstructPath(current_state, PARENT)
        
        FOR EACH operator IN allOperators:
            next_state = applyOperator(current_state, operator)
            
            IF next_state not in VISITED:
                VISITED.add(next_state)
                QUEUE.enqueue(next_state)
                PARENT[next_state] = current_state
    
    RETURN "No solution found"


FUNCTION applyOperator(state (a, b), operator):
    
    IF operator == "Fill A":
        RETURN (4, b)
    
    ELSE IF operator == "Fill B":
        RETURN (a, 3)
    
    ELSE IF operator == "Empty A":
        RETURN (0, b)
    
    ELSE IF operator == "Empty B":
        RETURN (a, 0)
    
    ELSE IF operator == "Pour A→B":
        transfer = min(a, 3 - b)  // min(water in A, space in B)
        RETURN (a - transfer, b + transfer)
    
    ELSE IF operator == "Pour B→A":
        transfer = min(b, 4 - a)  // min(water in B, space in A)
        RETURN (a + transfer, b - transfer)
```

---

## Solution Statistics

### For the Water Jug Problem (4L and 3L jugs to get 2L):

**BFS Solution Quality:**
- **Completeness**: ✓ BFS will find a solution if one exists
- **Optimality**: ✓ BFS finds the shortest solution
- **Optimal Path Length**: 6 steps (or 7 with alternative)
- **Total States Explored**: Approximately 15-20 states (out of 20 possible)

**State Space Size:**
- Total possible states: (4+1) × (3+1) = 5 × 4 = **20 states**
  - (0,0), (0,1), (0,2), (0,3)
  - (1,0), (1,1), (1,2), (1,3)
  - ... up to (4,3)

---

## Why Water Jug Problem is Important

1. **Educational Value**: Demonstrates state-space search clearly
2. **Shows Problem Formulation**: How to break down a real-world problem mathematically
3. **Illustrates Search Algorithms**: BFS finds optimal solution
4. **Recoverable Problem**: Good example of problem where mistakes can be fixed
5. **Multiple Solutions**: Shows that multiple paths can reach the goal
6. **Visualization**: Easy to visualize states and transitions

---

## Variations of the Problem

### 1. **Different Jug Sizes**
- 5-liter jug and 3-liter jug to get 4 liters
- 8-liter jug and 5-liter jug to get 3 liters

### 2. **More Jugs**
- Three or more jugs with different capacities

### 3. **Multiple Goals**
- Achieve specific amounts in multiple jugs simultaneously

### 4. **Minimum Steps Constraint**
- Find the solution with fewest steps (optimize)

---

## Summary

The Water Jug Problem:
- ✓ Classic AI problem demonstrating state-space search
- ✓ Shows how to formalize real-world problems
- ✓ Can be solved with BFS to find optimal solution
- ✓ Demonstrates problem characteristics framework
- ✓ Important for understanding search algorithms
- ✓ Has multiple solution paths of varying lengths

The solution typically requires 6-7 steps depending on the target amount and approach used.
