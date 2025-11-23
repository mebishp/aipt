# Q11: What are the characteristics of a problem? Give suitable examples.

## Overview

Understanding **problem characteristics** is crucial for selecting the appropriate problem-solving method and search algorithm. Different characteristics make problems easier or harder to solve, requiring different strategies and approaches.

By analyzing problem characteristics along several key dimensions, AI systems can choose the most efficient solving strategies.

---

## Seven Key Problem Characteristics

### 1. **Is the problem decomposable?**

#### Definition
Whether a large problem can be broken down into **independent smaller subproblems** that can be solved separately and whose solutions combined to solve the original problem.

#### Two Categories:

**A. DECOMPOSABLE PROBLEMS (Yes)**

Characteristics:
- Can be split into independent subproblems
- Solutions to subproblems can be combined
- Divide-and-conquer approach works well
- Typically easier to solve

Example:
```
Problem: Solve ∫ x² + 3x + sin²x cos²x dx

Decompose into:
- ∫ x² dx = x³/3
- ∫ 3x dx = 3x²/2  
- ∫ sin²x cos²x dx = (harder but separate)

Combine: Add all parts to get final solution
```

Another Example:
```
Problem: Assemble a car

Decompose into:
- Build engine
- Build body
- Build suspension
- Assemble electrical system

Each can be done independently, then combined
```

**B. NON-DECOMPOSABLE (ATOMIC) PROBLEMS (No)**

Characteristics:
- Cannot be split into independent parts
- Must be solved as a whole
- Solving one part affects solution to others
- Usually harder to solve

Example:
```
Problem: 8-Puzzle

Cannot decompose because:
- Moving one tile affects positions of others
- No independent subproblems
- Must be solved as complete state space

Must use:
- Complete state representation
- Search through entire state space
```

Another Example:
```
Problem: Playing Chess

Cannot fully decompose:
- Each move affects the entire board state
- Cannot solve "queen position" independently of "knight position"
- All pieces interact in complex ways
```

---

### 2. **Can solution steps be ignored or undone?**

#### Definition
Whether previously taken actions can be reversed or ignored without affecting the problem's solvability.

#### Three Categories:

**A. IGNORABLE PROBLEMS**

Definition:
- Solution steps can be **completely ignored** without affecting solvability
- Previous steps don't need to be undone
- System can jump between states freely

Characteristics:
- No need to track history
- Can explore any path regardless of past
- Simple solution search

Example:
```
Problem: Theorem Proving

"Prove: If x > 5, then x + 1 > 6"

If we derive: "x > 5" (a step in proof)
Later discovering we don't need it: Can simply ignore it
The proof still works without that step

Type: Ignorable
Recovery: No recovery needed, just skip that step
```

Another Example:
```
Problem: Mathematical Problem Solving

Derivations can be ignored if they lead nowhere
But they don't break the overall solution process
```

**B. RECOVERABLE PROBLEMS**

Definition:
- Solution steps can be **undone or reversed**
- If a wrong path is taken, can backtrack and recover
- System can return to previous states

Characteristics:
- Backtracking possible
- Can try multiple paths
- More efficient than blind search

Example:
```
Problem: 8-Puzzle

Current State:
1 2 3
4 5 6
7 8 _

Action: Move blank left (wrong direction)
1 2 3
4 5 6
_ 8 7

Recovery: Can easily undo by moving blank right
Back to previous state

The error doesn't prevent eventual solution
Type: Recoverable
Recovery: Backtracking
```

Another Example:
```
Problem: Robot Navigation

Current position: (5, 5)
Move north to (5, 6) - wrong direction
Recovery: Move south back to (5, 5)
Try east instead

Can undo moves by moving in opposite direction
```

**C. IRRECOVERABLE PROBLEMS**

Definition:
- Solution steps **cannot be undone**
- Once an action is taken, cannot go back
- Failure to make correct move means starting over

Characteristics:
- No backtracking possible
- Must get it right first time
- Requires careful planning
- Most difficult category

Example:
```
Problem: Chess Game

Current Position: White's turn
White plays: Move rook to e5 (a bad move)

Recovery: IMPOSSIBLE
- Cannot undo the move in a real chess game
- Black gets to respond
- The board state is now permanently changed

To solve again: Must start new game from beginning
Type: Irrecoverable
Recovery: None - must restart
```

Another Example:
```
Problem: Surgical Operation

Surgeon makes incision to repair artery
Decision: Found artery is healthy, was wrong location

Recovery: Cannot undo the incision
Must carefully manage the error and continue

Type: Irrecoverable
Recovery: None - must work with current state
```

---

### 3. **Is the problem's universe predictable?**

#### Definition
Whether the outcomes of actions are **certain and predictable** or **uncertain and probabilistic**.

#### Two Categories:

**A. DETERMINISTIC/CERTAIN OUTCOME PROBLEMS**

Definition:
- Actions have predictable, known outcomes
- Planning leads reliably to solutions
- No randomness or uncertainty

Characteristics:
- Can predict result of each action
- Solutions are guaranteed if plan is correct
- Simpler planning required

Example:
```
Problem: 8-Puzzle

Action: Move blank tile up

Result: ALWAYS predictable
- Blank moves up
- Tile above blank moves down
- All other tiles unchanged

Type: Deterministic
Certainty: 100% - outcome is guaranteed
```

Another Example:
```
Problem: Water Jug Problem

Action: Pour Jug A to Jug B

Result: PREDICTABLE
- Water transfers from A to B
- Amount is determined by capacity
- Result is certain

Type: Deterministic
```

**B. STOCHASTIC/UNCERTAIN OUTCOME PROBLEMS**

Definition:
- Actions have uncertain or probabilistic outcomes
- Cannot guarantee specific results
- Outcomes are influenced by randomness

Characteristics:
- Must account for probabilities
- Multiple possible outcomes per action
- Planning more complex

Example:
```
Problem: Playing Poker

Action: Bet money on hand

Results: UNCERTAIN
- Opponent might fold (probability p₁)
- Opponent might raise (probability p₂)
- Opponent might call (probability p₃)

Type: Stochastic
Certainty: Must use probability theory
```

Another Example:
```
Problem: Robot Navigation in Traffic

Action: Move forward

Results: UNCERTAIN
- Traffic light might turn red (probability)
- Another car might appear (probability)
- Road conditions might change (probability)

Type: Stochastic
Certainty: Cannot guarantee outcome
```

---

### 4. **Is a good solution absolute or relative?**

#### Definition
Whether the problem simply needs ANY solution or requires the OPTIMAL/BEST solution.

#### Two Categories:

**A. ANY-PATH PROBLEMS**

Definition:
- Satisfied with **any solution** that works
- Path to solution is not important
- Quality doesn't need to be optimal

Characteristics:
- Can use fast heuristics
- Early termination acceptable
- Less computational cost

Example:
```
Problem: 8-Puzzle

Goal: Arrange tiles in order (any sequence of moves acceptable)

Requirement: Just reach goal state
Quality: Speed matters, not optimality
Solution: First path that reaches goal (100+ moves) is acceptable

Heuristic: Manhattan distance works well
Method: Hill climbing acceptable
```

Another Example:
```
Problem: Simple Database Query

Query: "Find any student from Computer Science major"

Requirement: Any student record that matches
Quality: Doesn't matter if it's first or last student found
Solution: First matching record is acceptable
```

**B. BEST-PATH PROBLEMS**

Definition:
- Requires the **optimal or best solution**
- Not satisfied with just any solution
- Solution quality is critical

Characteristics:
- Must explore more thoroughly
- Higher computational cost
- Optimality important

Example:
```
Problem: Traveling Salesman Problem (TSP)

Goal: Visit all cities exactly once and return home

Requirement: Path with MINIMUM total distance
Quality: Optimal route essential (cost minimization critical)
Solution: Not just any path - must be shortest

Method: Must use A* or other optimal algorithms
Heuristic: Can't use simple greedy heuristics
```

Another Example:
```
Problem: Airline Route Planning

Requirement: MINIMUM cost route for passengers
Quality: Saving money important
- Route A: Total cost = $500, 8 hours
- Route B: Total cost = $1000, 5 hours

Must find optimal solution balancing cost and time
```

---

### 5. **Is the solution a state or a path?**

#### Definition
Whether the problem requires finding a **final goal state** or a **sequence of steps/path** to reach it.

#### Two Categories:

**A. GOAL STATE PROBLEMS**

Definition:
- Solution is simply the **final state**
- Path/sequence to get there not important
- Only care about end result

Characteristics:
- State representation sufficient
- Path reconstruction not needed
- Simpler representation

Example:
```
Problem: Understanding a Sentence

"John went to Paris yesterday"

Goal: Interpret the sentence
Solution: Semantic representation of meaning
- Who: John
- Action: go
- Destination: Paris
- When: yesterday

Requirement: Just the final interpretation (state)
Path: How we arrived at interpretation not important
```

Another Example:
```
Problem: Image Recognition

Input: Photograph
Goal: Identify what's in the image

Solution: "This is a cat"
Requirement: Just the final classification (state)
Path: Don't care how neural network got to this answer
```

**B. PATH PROBLEMS**

Definition:
- Solution is the **sequence of steps/actions**
- Path to solution is essential
- Must know how to get there

Characteristics:
- Sequence representation needed
- Path/plan is the solution
- More complex representation

Example:
```
Problem: Water Jug Problem

Goal: Measure exactly 2 liters

Solution IS the path:
1. Fill Jug A
2. Pour A→B (A has 1L, B has 3L)
3. Empty B
4. Pour A→B (A empty, B has 1L)
5. Fill A (A has 4L, B has 1L)
6. Pour A→B (A has 2L!)

Requirement: Not just state (2L in jug), but SEQUENCE to achieve it
Path: Essential part of solution
```

Another Example:
```
Problem: Robot Arm Control

Goal: Move object from position A to position B

Solution IS the path:
1. Rotate base 45 degrees
2. Extend arm to length 1 meter
3. Lower arm to height 0.5 meters
4. Close gripper
5. Raise arm
6. Rotate base 90 degrees
... (many more steps)

Requirement: Exact sequence of movements
Path: Critical for execution
```

---

### 6. **What is the role of knowledge?**

#### Definition
How much and what **type of knowledge** is needed to solve the problem efficiently.

#### Two Approaches:

**A. MINIMAL KNOWLEDGE PROBLEMS**

Definition:
- Only **basic rules for legal moves** needed
- Domain knowledge not required
- Brute-force search acceptable

Characteristics:
- Few heuristics needed
- Simple problem specification
- Larger search space

Example:
```
Problem: 8-Puzzle

Knowledge Needed:
- Only rule: "blank tile can move up/down/left/right"
- No domain knowledge about optimal strategies
- Pure search with minimal heuristics

Solving:
- Can solve with just BFS/DFS
- Maybe simple heuristic (Manhattan distance)
- Doesn't need deep puzzle knowledge
```

Another Example:
```
Problem: Tic-Tac-Toe

Knowledge Needed:
- Only rule: "X and O alternate placing marks"
- No strategic knowledge needed
- Exhaustive search feasible

Solving:
- Can use minimax with minimal knowledge
- Brute force enumeration works
```

**B. EXTENSIVE KNOWLEDGE PROBLEMS**

Definition:
- **Rich domain knowledge** essential for efficiency
- Heuristics based on expert knowledge critical
- Cannot solve without domain understanding

Characteristics:
- Requires expert knowledge
- Heuristics significantly reduce search
- Infeasible without domain knowledge

Example:
```
Problem: Medical Diagnosis

Knowledge Needed:
- Extensive medical knowledge about:
  - Diseases and symptoms
  - Diagnostic procedures
  - Treatment protocols
  - Drug interactions
  - Patient history patterns
  - Statistical frequencies

Solving:
- Cannot brute-force search all possibilities
- Must use medical heuristics
- Expert system approach needed
- Knowledge base essential
```

Another Example:
```
Problem: Chess Playing

Knowledge Needed:
- Board evaluation heuristics
- Opening principles
- Endgame strategies
- Piece values
- Position patterns
- Historical games database

Solving:
- Cannot examine all 10^120 possible positions
- Must use expert knowledge to prune search tree
- Deep domain knowledge critical for performance
```

---

### 7. **Does the task require interaction with a person?**

#### Definition
Whether the problem-solving process needs **intermediate human interaction** or is **fully automated**.

#### Two Categories:

**A. SOLITARY PROBLEMS**

Definition:
- Program works **autonomously** to completion
- No intermediate human interaction needed
- Produces final answer independently

Characteristics:
- Fully automated
- No feedback from user during solving
- Complete solution path determined automatically

Example:
```
Problem: Calculate Mortgage Payment

Input: Principal, rate, term (provided once)
Process: Automatic calculation
Output: Final payment schedule

Type: Solitary
Interaction: None needed after initial input
User Role: Provide data, receive answer
```

Another Example:
```
Problem: Check Spelling in Document

Process: Automatic scan of entire document
Output: Spelling errors highlighted

Type: Solitary
Interaction: None - fully automatic
User Role: Review results after completion
```

**B. CONVERSATIONAL PROBLEMS**

Definition:
- Requires **intermediate interaction** during solving
- System asks clarifying questions
- User provides additional input as needed

Characteristics:
- Back-and-forth communication
- Feedback used to guide search
- Interactive refinement

Example:
```
Problem: Medical Diagnosis System

Interaction Pattern:
1. Patient describes symptoms
2. System asks clarifying questions
   - "Is fever constant or intermittent?"
   - "Any difficulty breathing?"
   - "Recent travel to tropical regions?"
3. User answers each question
4. System refines diagnosis hypothesis
5. May ask more questions based on answers
6. Final diagnosis offered

Type: Conversational
Interaction: Critical throughout process
User Role: Active participant in diagnosis
```

Another Example:
```
Problem: Legal Consultation System

Interaction:
1. User describes legal situation
2. System asks about jurisdiction
3. Questions about timeline
4. Inquiries about related events
5. System refines legal recommendations
6. Suggests next steps based on dialogue

Type: Conversational
Interaction: Integral to solution process
```

---

## Summary Table of Problem Characteristics

| Characteristic | Category A | Category B | Difficulty |
|---|---|---|---|
| **Decomposable?** | Yes (decomposable) | No (atomic) | B is harder |
| **Steps reversible?** | Ignorable | Recoverable/Irrecoverable | C is hardest |
| **Universe predictable?** | Deterministic | Stochastic | B is harder |
| **Solution quality?** | Any-path | Best-path | B is harder |
| **What to find?** | State | Path | B is harder |
| **Knowledge role?** | Minimal | Extensive | B needs more |
| **Human interaction?** | Solitary | Conversational | B is harder |

---

## Combined Example: Analyzing a Complex Problem

### Problem: Autonomous Vehicle Navigation

**1. Decomposable?**
- Partially decomposable
- Perception, planning, control can be somewhat separate
- But they interact significantly
- Answer: Mostly non-decomposable

**2. Reversible?**
- Irrecoverable
- Cannot undo moving through an intersection
- Wrong move is permanent
- Must plan carefully

**3. Predictable?**
- Stochastic
- Other vehicles behave unpredictably
- Weather changes possible
- Road conditions uncertain

**4. Solution quality?**
- Best-path required
- Must minimize accidents and time
- Cannot accept any solution

**5. Solution type?**
- Path problem
- Need sequence of steering/acceleration commands
- Not just destination state

**6. Knowledge role?**
- Extensive
- Traffic rules needed
- Physics knowledge needed
- Sensor interpretation needed
- Decision heuristics critical

**7. Interaction?**
- Conversational initially (route planning with user)
- Solitary during autonomous driving

**Implications:**
- Very complex problem
- Requires sophisticated algorithms
- Cannot use simple search
- Extensive domain knowledge essential
- Real-time constraints critical

---

## Conclusion

Problem characteristics significantly influence:
- **Algorithm selection**: Some algorithms fit better
- **Difficulty level**: Some characteristics make problems harder
- **Resource requirements**: Time and space needed
- **Solution approach**: Search depth, breadth, etc.
- **Feasibility**: Some problems may be unsolvable with given resources

Understanding these characteristics is the first step in effective problem solving in AI.
