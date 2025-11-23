

***

# I. Overview of Artificial Intelligence and Agents

## A. Definition and Goals of AI

Artificial Intelligence (AI) is the **simulation of human intelligence processes by machines**, primarily computer systems. It is a method of making a computer, a computer-controlled robot, or software think intelligently like the human mind.

AI aims to create machines that can simulate human cognitive processes to function autonomously in various contexts.

**Examples of Human Intelligence Tasks Simulated by AI:**
*   Learning.
*   Reasoning.
*   Problem solving.
*   Perception.
*   Decision Making.

**Why AI is Needed:**
*   Reduce Human Errors.
*   24 x 7 Availability.
*   Unbiased Decisions.
*   Quicker Decision Making.
*   No Risks.

## B. Types of AI Systems
AI systems are categorized based on their scope and capability.

| Type | Definition | Status/Examples |
| :--- | :--- | :--- |
| **Narrow AI (Weak AI)** | Designed to handle a specific task or a narrow set of tasks. | Virtual assistants (Siri, Alexa), recommendation algorithms (Netflix, Amazon), and self-driving car navigation systems. |
| **General AI (Strong AI)** | Hypothetical AI that possesses the ability to understand, learn, and apply intelligence across a wide range of tasks, similar to human cognitive capabilities. | Currently theoretical and not yet achieved. |
| **Artificial Superintelligence (ASI)** | AI that surpasses human intelligence in all aspects, including creativity, problem-solving, and social intelligence. | Speculative and subject to debate regarding feasibility and implications. |

## C. Intelligent Agents and Rationality

### 1. Agent Components and Characteristics
An agent is a computer program or system designed to perceive its environment, make decisions, and take actions to achieve a specific goal or set of goals. An agent runs in the cycle of perceiving, thinking, and acting.

**Components of an Agent:**
*   **Sensors:** Devices that detect change in the environment and send information to the agent.
*   **Actuators:** Components that convert energy into motion, responsible for moving and controlling a system (e.g., electric motor, gears).
*   **Effectors:** Devices that affect the environment (e.g., legs, arms, display screen).

An intelligent agent is an **autonomous entity** that acts upon an environment using sensors and actuators for achieving goals.

**Rules Governing AI Agents:**
1.  An AI agent must have the ability to perceive the environment.
2.  The observation must be used to make decisions.
3.  Decision should result in an action.
4.  The action taken by an AI agent must be a **rational action**.

**Rational Agent:**
A rational agent has clear preferences, models uncertainty, and acts to maximize its performance measure with all possible actions. Rationality involves making decisions that are logical, coherent, and aligned with certain goals or objectives, often utilizing logical reasoning and learning from past experiences.

**PEAS Representation (Autonomous Vehicle Example):**
*   **P (Performance measure):** Safety, time, legal drive, comfort.
*   **E (Environment):** Roads, other vehicles, road signs, pedestrians.
*   **A (Actuators):** Steering, accelerator, brake, signal, horn.
*   **S (Sensors):** Camera, GPS, speedometer, odometer.

### 2. Behavioral Characteristics of Intelligent Agents
Intelligent agents exhibit several characteristics:
*   **Reactivity:** The ability to perceive and respond promptly to changes in the environment.
*   **Proactiveness:** Taking the initiative and acting to achieve goals, rather than merely reacting.
*   **Autonomy:** The capacity to operate independently, making decisions and performing actions without human intervention.
*   **Adaptability:** The ability to learn from experience and adjust behavior to improve performance over time.
*   **Goal-Oriented Behavior:** Actions directed towards achieving specific objectives.
*   **Learning Ability:** The capability to acquire new knowledge or skills based on past experiences.
*   **Rationality:** Making decisions that maximize expected utility based on goals and knowledge.
*   **Collaboration and Communication:** Interacting and working with other agents or humans to achieve shared goals.
*   **Persistence:** The determination to continue pursuing a goal despite encountering obstacles or failures.
*   **Efficiency:** Achieving goals with minimal resource usage, such as time, energy, or cost.

### 3. Types of Agent Structures
Agents can be grouped into five classes based on their perceived intelligence and capability:

| Agent Type | Description | Key Features |
| :--- | :--- | :--- |
| **Simple Reflex Agent** | Takes decisions based solely on the current percepts, ignoring history. | Works on **Condition-action rules**. Only succeeds in fully observable environments. |
| **Model-based Reflex Agent** | Can work in a **partially observable environment** by tracking the situation. | Uses a **Model** ("how things happen in the world") and an **Internal State** (representation of the current state based on percept history). |
| **Goal-based Agents** | Expands the model-based agent by having **"goal" information**. | Chooses actions that achieve the desired goal, often considering a long sequence of possible actions (planning). |
| **Utility-based Agents** | Similar to goal-based but provides an **extra component of utility measurement** (a measure of success). | Useful when multiple alternatives exist; maps each state to a real number to check efficiency in achieving goals. |
| **Learning Agents** | Can learn from past experiences and adapt automatically. | Components include: **Learning element** (responsible for improvements), **Critic** (provides feedback against a fixed performance standard), and **Performance element** (selects external action). |

## D. Types of Environments
Environments are characterized along several dimensions:

| Environment Type | Description | Examples |
| :--- | :--- | :--- |
| **Fully Observable** | Agent has access to the complete state of the environment at every point in time. | Chess. |
| **Partially Observable** | Agent has incomplete or noisy perception. | Poker or real-world navigation. |
| **Deterministic** | The outcome of every action is predictable and known. | Solving a puzzle. |
| **Stochastic** | Uncertainty exists in the outcome of actions due to randomness. | Self-driving cars facing random traffic conditions. |
| **Episodic** | Each action or episode is independent of the previous ones. | Image classification. |
| **Sequential** | The current decision affects future decisions. | Playing a game or driving. |
| **Static** | The environment does not change while the agent is deliberating. | Crossword puzzles. |
| **Dynamic** | The environment changes while the agent is thinking. | Stock market trading, autonomous robots. |
| **Discrete** | The environment has a finite number of states and actions. | Board games like tic-tac-toe. |
| **Continuous** | The environment has infinite states or time steps. | Driving, robotic arms. |
| **Single-Agent** | Only one agent is operating. | Solving a maze alone. |
| **Multi-Agent** | Multiple agents interact (cooperative or competitive). | Multiplayer games, robotic soccer. |
| **Known** | The agent has full knowledge of the environment's rules and dynamics. | Simulated environments. |
| **Unknown** | The agent must learn or estimate how the environment works. | Real-world systems with learning (like reinforcement learning). |

***

# II. Problem Solving and Search Techniques

## A. Problem Solving and State Space Search
Problem solving is the method to reach the desired goal or finding a solution to a given situation. A problem-solving agent is a **goal-driven agent** focusing on satisfying the goal.

**Formal Problem Description Requirements:**
1.  **State Space:** Define all possible configurations of relevant objects.
2.  **Initial States:** Specify one or more starting states.
3.  **Goal States:** Specify one or more states that are acceptable solutions.
4.  **Operators (Rules):** Specify a set of rules describing actions available to move through the problem space.

**State Space Search:**
The problem is divided into a set of resolution steps from the initial state to the goal state. The state space forms a **directed map or graph** where nodes are states, links are actions, and the path is a sequence of actions.

*   **Successor Function:** A description of possible actions (operators) that transforms one state representation into another, defining a relation of accessibility among states.
*   **Solution:** A path from the initial state to a goal state.
*   **Optimal Solution:** The solution with the lowest path cost among all solutions.

**Measuring Problem-Solving Performance:**
Performance is evaluated based on four dimensions:
1.  **Completeness:** Whether the algorithm is guaranteed to find a solution if one exists.
2.  **Optimality:** Whether the solution found is guaranteed to be the best solution (lowest path cost).
3.  **Time Complexity:** Measure of time required for an algorithm to complete its task (number of nodes generated/expanded).
4.  **Space Complexity:** Maximum storage space required at any point (maximum nodes in memory).

## B. Problem Characteristics
To choose the most appropriate method for a problem, it is necessary to analyze it along several key dimensions:

1.  **Is the problem decomposable?**
    *   Large problems can be easier to solve if broken into independent smaller subproblems (e.g., solving ∫ x² + 3x + sin²x cos²x dx).

2.  **Can solution steps be ignored or undone?**
    *   **Ignorable Problems:** Steps can be ignored (e.g., theorem proving).
    *   **Recoverable Problems:** Steps can be undone (e.g., 8-puzzle).
    *   **Irrecoverable Problems:** Steps cannot be undone (e.g., Chess).

3.  **Is the problem's universe predictable?**
    *   **Certain outcome:** Planning guarantees leading to a solution (e.g., 8-puzzle).
    *   **Uncertain outcome:** Outcomes are uncertain (e.g., playing cards).

4.  **Is a good solution absolute or relative?**
    *   **Any-path problems:** Satisfied with any solution, regardless of path taken; heuristics can find solutions quickly (e.g., 8-puzzle, answering simple database questions).
    *   **Best-path problems:** Requires the optimal solution; generally computationally harder as all possible paths may be explored (e.g., Traveling Salesman Problem or TSP).

5.  **Is the solution a state or a path?**
    *   Some problems require only the final state (e.g., interpreting a sentence).
    *   Others require the sequence of operations (Plan) that leads to the final state (e.g., Water Jug problem).

6.  **What is the role of knowledge?**
    *   Knowledge can be used minimally (only rules for legal moves) or extensively (additional knowledge about strategy/tactics) to constrain the search and speed up execution.

7.  **Does the task require interaction with a person?**
    *   **Solitary:** Program produces an answer with no intermediate interaction.
    *   **Conversational:** Requires intermediate communication for additional input or reassurance (e.g., medical diagnosis).

## C. Types of Search Algorithms (Classification)

Search algorithms are universal problem-solving methods used by rational agents. They are divided into two main categories:

### 1. Uninformed Search Algorithms (Blind Search)
*   They use **no domain knowledge**.
*   They work in a brute force manner, having no knowledge about how far the goal node is.
*   They examine every node without prior knowledge.
*   Types include Breadth-first Search (BFS), Depth-first Search (DFS), and Bidirectional Search (BDS).

### 2. Informed Search Algorithms (Heuristic Search)
*   They **have domain knowledge**.
*   They contain information such as how far the goal node is, path cost, and how to reach the goal node.
*   They use **heuristic functions** specific to the problem to guide the search path and reduce the time spent searching.
*   While they might not always give the optimal solution, they typically provide a good solution in a reasonable time, solving complex problems more easily than uninformed searches.
*   Types include Best First Search, Hill Climbing, Generate and Test, and A*.

## D. Uninformed Search Algorithms

### 1. Breadth-First Search (BFS)
BFS searches the highest layer of a decision tree completely before proceeding to the next layer (traversing in layers). It uses a FIFO queue to manage nodes to be explored.

*   **Completeness:** BFS is **complete**; it will find a solution if one exists, provided the shallowest goal node is at a finite depth.
*   **Optimality:** BFS is **optimal** if the path cost is a non-decreasing function of the depth of the node.
*   **Time Complexity:** $O(b^d)$ (where $b$ is the branching factor and $d$ is the depth of the shallowest solution).
*   **Space Complexity:** $O(b^d)$.
*   **Disadvantage:** Often not feasible when the search space is large due to high, exponential storage requirements.

### 2. Depth-First Search (DFS)
DFS extends the current path as far as possible before backtracking to the last choice point and trying the next alternative path.

*   **Completeness:** DFS is **complete** within finite state space as it expands every node within a limited search tree. It can be incomplete without a depth bound.
*   **Optimality:** This strategy **does not guarantee** that the optimal solution has been found.
*   **Time Complexity:** $T(n) = O(b^m)$ (where $m$ is the maximum depth of any node).
*   **Space Complexity:** $O(b^m)$ (stores only a single path from the root node, hence linear with tree depth).
*   **Advantages:** Low storage requirement and easily programmed.

### 3. Uniform Cost Search (UCS)
UCS is a graph search algorithm that **expands the lowest cost node first**, not the shallowest (unlike BFS). It is essentially Dijkstra’s algorithm and expands nodes according to their path costs from the root node.

*   **Completeness:** Complete, provided the branching factor is finite and step costs are positive.
*   **Optimality:** **Guaranteed Optimal Solution** if all step costs are non-negative.
*   **Advantages:** Works with variable path costs and avoids unnecessary exploration.
*   **Limitations:** High memory usage as it keeps all frontier nodes in memory (priority queue); not suitable for negative edge costs.

### 4. Bidirectional Search Algorithm (BDS)
BDS runs two simultaneous searches: one **forward-search** from the initial state and one **backward-search** from the goal node. The search stops when the two graphs intersect.

*   **Completeness:** Complete if BFS is used in both searches.
*   **Optimality:** **Optimal**.
*   **Time Complexity:** $O(b^d)$ (using BFS).
*   **Advantages:** Fast and requires less memory.
*   **Disadvantages:** Implementation is difficult, and the goal state must be known in advance.

## E. Informed Search Algorithms (Heuristics)

Heuristic algorithms use **heuristic functions** that are specific to the problem to guide the search through the search space. Heuristics are rules for choosing branches in a state space that are most likely to lead to an acceptable problem solution.

### 1. Best First Search
Best First Search (BFS) is a traversal technique that uses an **evaluation function** to decide which node is the most promising one to visit next. The idea of Greedy best-first search is to use an evaluation function to decide which adjacent node is most promising and then explore it.

*   **Mechanism:** Uses two empty lists, OPEN and CLOSED. Nodes are selected from the OPEN list based on an evaluation function $f(n)$ and moved to CLOSED.
*   **Advantages:** Can switch between BFS and DFS, gaining advantages of both; more efficient than standard BFS and DFS.
*   **Disadvantages:** Can behave as an unguided depth-first search in the worst case; can get stuck in a loop; **not optimal**.

### 2. A* Search
A* search finds the shortest path through the search space using a heuristic function. It uses an evaluation function $f(n)$ defined as:
$$
\mathbf{f(n) = g(n) + h(n)} \text{ (Fitness solution)} \text{}
$$
*   $\mathbf{g(n)}$: cost from the starting node to reach $n$.
*   $\mathbf{h(n)}$: estimate of the cost of the cheapest path from $n$ to the goal.
*   $\mathbf{f(n)}$: estimated cost of the cheapest solution.

**A\* Algorithm Steps (Simplified):**
1.  Initialize with the start node in the **open list** (nodes to be evaluated).
2.  Loop: Find the node with the lowest $f$ score in the open list and move it to the **closed list**.
3.  Expand neighbors: If a neighbor is not in the closed list, check if it's new (add it) or if a cheaper path ($g$ score) has been found (update it).
4.  Repeat until the goal node is found or the open list is empty.

*   **Advantages:** Guaranteed Shortest Path; fewer nodes explored.
*   **Disadvantages:** High memory usage (maintains large open list); performance heavily depends on the quality of the heuristic function.
*   **Applications:** Pathfinding in Games, Robotics, Maze solving, Route planning, and Network Routing.

### 3. Generate and Test Strategy
This is a heuristic search technique based on Depth First Search with Backtracking. In its most systematic form, it is an exhaustive search of the problem space.

**Algorithm:**
1.  Generate a possible solution.
2.  Test to see if this is the expected solution.
3.  If found, quit; else, go back to Step 1.
Solutions can be generated randomly, but a solution is not guaranteed (known as the British Museum algorithm).

### 4. Hill Climbing Algorithm
Hill climbing is a variant of generate and test where **feedback from the test procedure is used to help the generator decide which direction to move** in the search space. It uses a heuristic function to estimate how close a given state is to a goal state.

The algorithm starts with a non-optimal state and iteratively improves its state until a predefined condition is met (reaching the peak value).

**Key Features:**
*   **Greedy Approach:** Moves in the direction of optimizing the cost (finding Local Maxima/Minima).
*   **No Backtracking:** It cannot remember the previous state.
*   **Feedback Mechanism:** Feedback from previous computation helps decide the next course of action.

#### State Space Diagram Regions
The state space diagram graphically represents the set of states an algorithm can reach versus the value of the objective function (Y-axis). The best solution is the state space where the objective function has the **maximum value (global maximum)**.

*   **Local maximum:** A state better than its neighboring state, but worse than the global maximum.
*   **Global maximum:** The best possible state, where the objective function has the highest value.
*   **Plateau/flat local maximum:** A flat region where neighboring states have the same objective function value.
*   **Ridge:** A region higher than its neighbors but which itself has a slope; a special kind of local maximum.

#### Problems in Hill Climbing
Hill climbing struggles if it enters certain regions:
1.  **Local maximum:** The algorithm terminates here because all neighbors are worse, despite a better solution existing elsewhere.
    *   *To overcome:* Utilize backtracking and maintain a list of visited states.
2.  **Plateau:** Cannot select the best direction because all neighbors have the same value.
    *   *To overcome:* Make a big jump (randomly select a state far away).
3.  **Ridge:** Movement in all possible single directions looks downward, stopping the algorithm.
    *   *To overcome:* Use two or more rules before testing, implying moving in several directions at once.

#### Types of Hill Climbing
1.  **Simple Hill Climbing:**
    *   Takes into account only the neighboring node.
    *   Sets the neighbor node as the current node if it is better than the current node.
    *   Checks only one neighbor at a time.
    *   Results in sub-optimal solutions; consumes lesser time due to low computation power.

2.  **Steepest-Ascent Hill Climbing:**
    *   An advanced form that **examines all neighboring nodes** and then selects the node closest to the solution state (nearest to the goal state) as the next node.
    *   Requires more computation power than Simple Hill Climbing.

3.  **Stochastic Hill Climbing:**
    *   Does **not look at all neighboring nodes**; instead, it randomly selects one neighboring node and decides whether to move there based on pre-defined criteria.

***

# III. Knowledge Representation and Logic

## A. Knowledge Representation (KR) Fundamentals
KR and Reasoning (KRR) is the part of AI concerned with how AI agents think and how this thinking contributes to intelligent behavior. It involves representing information about the real world so a computer can understand it and solve complex problems.

### 1. Entities in KR
KR deals with two kinds of entities:
*   **Facts:** Truths in some relevant world (things we want to represent).
*   **Representations:** Representations of facts in some chosen formalism (things we can actually manipulate).

These entities are structured at two levels:
*   **Knowledge Level:** Facts are described.
*   **Symbol Level:** Representations of objects are defined in terms of symbols manipulated by programs.

### 2. Mappings
The facts and representations are linked by two-way **representation mappings**.
*   **Forward Representation Mapping:** Maps from facts to representations.
*   **Backward Representation Mapping:** Maps from representations to facts.

### 3. Properties of Knowledge Representation
1.  **Representational Adequacy:** The ability to represent all kinds of knowledge needed in that domain.
2.  **Inferential Adequacy:** The ability to manipulate representational structures to derive new knowledge (inferred from old).
3.  **Inferential Efficiency:** The ability to incorporate information to focus the inference mechanisms in the most promising direction.
4.  **Acquisitional Efficiency:** The ability to acquire new knowledge using automatic methods when possible.

### 4. What to Represent (Types of Knowledge)
*   **Object:** Facts about objects in the world (e.g., Guitars contain strings).
*   **Events:** Actions occurring in the world.
*   **Performance:** Behavior involving knowledge about how to do things.
*   **Meta-knowledge:** Knowledge about what we know.
*   **Facts:** Truths about the real world.
*   **Knowledge-Base (KB):** A group of sentences (technical term) serving as the central component of knowledge-based agents.

| Knowledge Type | Description | Alternate Name |
| :--- | :--- | :--- |
| **Procedural Knowledge** | Responsible for knowing **how to do something**; includes rules, strategies, procedures, agendas; can be directly applied to any task. | Imperative knowledge, Interpretive knowledge. |
| **Declarative Knowledge** | Knowing **about something**; includes concepts, facts, and objects; describes only knowledge, not its use. | Descriptive knowledge. |
| **Structural Knowledge** | Basic problem-solving knowledge describing the relationship between concepts and objects. | N/A |
| **Meta Knowledge** | Knowledge about other types of Knowledge. | N/A |
| **Heuristic Knowledge** | Represents expert knowledge (rules of thumb based on previous experiences). | N/A |

**Comparison of Procedural vs. Declarative Knowledge:**

| Feature | Procedural Knowledge | Declarative Knowledge |
| :--- | :--- | :--- |
| **Focus** | How a particular thing can be accomplished. | Basic knowledge about something. |
| **Nature** | Generally process oriented. | Data oriented. |
| **Communication** | Can’t be easily communicated. | Can be easily communicated. |
| **Popularity** | Generally not popular. | More popular. |
| **Effectiveness** | Less effective. | More effective. |
| **Debugging** | Debugging and validation is not easy. | Debugging and validation is easy. |
| **Control** | Control information necessary to use the knowledge is embedded in the knowledge itself. | Control information resides separately. |

## B. Logical Representation Schemes

The logical representation scheme involves a two-step process:
1.  **Converting facts to logical propositions** (well-formed formulas or wffs).
2.  **Deducing additional information** from these facts using backward chaining or resolution.

### 1. Propositional Logic
*   A **proposition** is a declarative sentence that has a truth value (either true or false, not ambiguous).
*   **Propositional logic** deals with propositions and analyzes them individually or compositely.
*   Propositions are combined using Logical Operators: Negation ($\neg$), Disjunction ($\lor$), Conjunction ($\land$), Exclusive OR, Implication ($\to$), and Bi-Conditional.

### 2. Predicate Logic
*   **Predicates** are properties or additional information that better express the subject of the sentence (e.g., in P(x): x>5, ‘>5’ is the predicate).
*   A quantified predicate is a proposition (e.g., P(7): 7>5 is True).
*   Predicate logic consists of objects, relations, and functions between objects.
*   It introduces **quantifiers** to analyze the scope of the subject over the predicate:
    *   **Universal Quantifier ($\forall$)**: Depicts "for all".
    *   **Existential Quantifier ($\exists$)**: Depicting "there exists some".
    *   **Uniqueness Quantifier ($\exists!$)**: Depicting "exactly one".
*   Wffs use symbols like Implies ($\to$), And ($\land$), Or ($\lor$), Not ($\sim$), For all ($\forall$), and There exists ($\exists$).

## C. Rule-Based Inference Mechanisms

### 1. Forward Reasoning (Forward Chaining)
Forward reasoning is a **data-driven** task that starts with initial data and facts to find all possible solutions to a problem. Its main objective is to find a conclusion that would follow.

**Steps of Forward Reasoning:**
1.  **Start with Known Facts:** Identify the initial set of facts or conditions known to be true.
2.  **Match Facts to Rules:** Look for rules (IF [conditions] THEN [conclusion]) whose premises (IF part) match the known facts.
3.  **Apply the Rules:** Execute the "THEN" part of the matched rule to infer new information.
4.  **Add New Facts to the Knowledge Base:** Newly inferred facts are added and can be used for future inferences.
5.  **Repeat the Process:** Continue matching newly inferred facts with other rules iteratively.
6.  **Check for Goal State:** Check if the goal or desired conclusion has been reached. If found, stop.
7.  **Terminate:** If no more rules can be applied and the goal is not reached, the process terminates without success.

### 2. Backward Reasoning (Backward Chaining)
Backward reasoning is the reverse process, starting with a goal or hypothesis that is uncertain. It is a **goal-driven** task. Its main objective is to find the facts that support the conclusions.

**Steps of Backward Reasoning:**
1.  **Start with a Goal (Hypothesis):** Identify the goal you want to prove or verify.
2.  **Search for Rules that Could Produce the Goal:** Look for rules where the goal (the "THEN" part) matches the conclusion.
3.  **Identify the Premises:** Identify the conditions (the "IF" part) required to satisfy the goal.
4.  **Set Sub-Goals for the Premises:** Treat each condition as a new sub-goal to be verified.
5.  **Check if Sub-Goals Are Known Facts:** Check if the sub-goal is already a known fact.
6.  **Apply Rules Recursively:** If a sub-goal is not a known fact, search for another rule that could prove it, generating new sub-goals.
7.  **Continue/Terminate:** The process continues backward until either a known fact is reached (proving the original goal), or no more rules can be applied (goal cannot be proved).

### 3. Comparison of Forward and Backward Chaining

| Feature | Forward Chaining | Backward Chaining |
| :--- | :--- | :--- |
| **Start Point** | Starts from known facts. | Starts from the goal. |
| **Approach** | Bottom-up approach. | Top-down approach. |
| **Inference** | Data-driven inference technique. | Goal-driven technique. |
| **Search Strategy** | Applies a breadth-first search strategy. | Applies a depth-first search strategy. |
| **Rule Testing** | Tests for all the available rules. | Tests only for a few required rules. |
| **Applications** | Suitable for planning, monitoring, control, and interpretation. | Suitable for diagnostic, prescription, and debugging. |
| **Conclusions** | Can generate an infinite number of possible conclusions. | Generates a finite number of possible conclusions. |

### 4. Resolution in Predicate Logic
Resolution is a process used to prove a statement by **refutation**. It involves assuming the fact or query is untrue (negating it) and reaching a contradiction (the empty clause).

Resolution works by taking two clauses (parent clauses) that contain the same literal, where the literal occurs positively in one clause and negatively in the other. The new clause (resolvent) is obtained by combining the literals of the parent clauses and canceling out the conflicting terms.

**Resolution Refutation Steps (Predicate Logic):**
1.  **Convert wffs to Clause Form (CNF):** The premises or axioms must be converted into Conjunctive Normal Form (CNF).
    *   *Note:* $a \to b$ is equivalent to $\sim a \lor b$.
2.  **Negate the Statement to be Proved (P):** Negate $P$, convert the negation to clause form, and add it to the set of clauses.
3.  **Repeat Resolution:** Select two clauses (parent clauses).
4.  **Resolve:** Resolve them together using unification. If literals $T_1$ and $\neg T_2$ are unifiable, they are omitted from the resolvent, and the substitution produced by unification is used.
5.  **Check for Contradiction:** If the resolvent is the **empty clause (NIL)**, a contradiction has been reached, and the original theorem is proven true. If not, add the resolvent to the set of available clauses.

## D. Types of Reasoning

Reasoning is the act of deriving logical conclusions and making predictions from available knowledge.

| Reasoning Type | Description | Truth Guarantee |
| :--- | :--- | :--- |
| **Deductive Reasoning** | Deducing new information from logically related known information (top-down). | The truth of the premises **guarantees** the truth of the conclusion. |
| **Inductive Reasoning** | Arriving at a conclusion using limited facts via **generalization** (bottom-up, cause-effect). | Premises provide probable support, but do **not guarantee** the truth of the conclusion. |
| **Abductive Reasoning** | Starts with observations and seeks the ** most likely explanation** or conclusion. | Premises do **not guarantee** the conclusion. |
| **Common Sense Reasoning** | An informal form of reasoning gained through experiences, simulating human presumptions about everyday events. | N/A |

### 1. Monotonic vs. Non-monotonic Reasoning
*   **Monotonic Reasoning:** Once a conclusion is taken, it remains the same even if new information is added to the knowledge base. Adding knowledge does not decrease the set of derivable prepositions.
    *   *Disadvantage:* Not useful for real-time systems where facts change; cannot represent hypothesis knowledge.
    *   *Cannot Handle:* Reasoning by default, abductive reasoning, or belief revision.
*   **Non-monotonic Reasoning:** Some conclusions may be invalidated if new information is added. It deals with incomplete and uncertain models.
    *   *Advantage:* Used in fields like Robot navigation; allows assumptions.

### 2. Symbolic Reasoning Under Uncertainty
AI systems must cope with uncertainty, which can arise from uncertain inputs, missing data, noisy data, or uncertain knowledge (e.g., incomplete causality in the domain).

**Non-monotonic reasoning is extended to reason with incomplete information**. Inconsistency is resolved by removing tentative conclusions derived previously by default rules.

**Types of Non-monotonic Reasoning:**
1.  **Default Reasoning:** Based on default reasoning or "most probabilistic choice".
    *   **Default Logic:** Formalizes reasoning with default assumptions (e.g., "birds typically fly"). A default theory is a pair $\{W, D\}$, where $W$ is known facts and $D$ is default rules.
2.  **Minimalist Reasoning:** Based on the idea of a **minimal model**—assuming that the only true statements are those that necessarily must be true to maintain consistency.
    *   **Closed World Assumption (CWA):** What is not known to be true is believed to be false; powerful for reasoning with Databases assumed to be complete.
    *   **Circumscription:** A rule of conjecture allowing one to conclude that the objects shown to possess a certain property are in fact all the objects that possess that property.
3.  **Truth maintenance systems**.

***

# IV. Knowledge Representation Structures

## A. Weak Slot-and-Filler Structures

These structures represent knowledge as a set of entities and their attributes. They are often called knowledge-poor structures because they do not commit to the content of the representation. A slot is an attribute-value pair, and a filler is the value a slot can take (e.g., numeric, string, or pointer).

### 1. Semantic Networks
A semantic network is a **graphic notation** representing knowledge in patterns of interconnected nodes. Knowledge is best understood as a set of concepts related to one another.

*   **Nodes:** Represent various objects or values of attributes.
*   **Arcs (Labeled):** Represent relationships among nodes.

**Common Semantic Relations:**
*   **INSTANCE:** X is a specific example of the general concept Y (e.g., Shawn is an INSTANCE of Human).
*   **ISA:** X is a subset of the more general concept Y (e.g., sparrow ISA bird).
*   **HASPART:** Concept Y is a part of concept X (e.g., sparrow HASPART tail).

**Advantages:**
*   Ability to represent default values for categories.
*   Convey meaning in a transparent manner.
*   Simple and easy to understand.

**Disadvantages:**
*   Links between objects represent only **binary relations**.
*   Difficult to express certain properties like negation, disjunction, and general non-taxonomic knowledge.
*   No standard definition of link names.

### 2. Frames
A frame is another type of weak slot-and-filler structure, consisting of a collection of attributes (slots) and associated values (fillers) that describe some entity.

*   Each frame represents either a **class** (set) or an **instance** (an element of a class).
*   **Attributes:** Divided into attributes about the set itself and attributes that are to be inherited by each element of the set (often denoted with *).

**Meta Class:** A special class whose elements are themselves classes. If Y is an element of meta class X, Y inherits all the attributes of X.

## B. Strong Slot-and-Filler Structures
These structures represent links between objects according to **more rigid rules**, providing specific notions of what types of objects and relations between them are included.

### 1. Conceptual Dependency (CD)
CD structures are used to represent knowledge about events usually conveyed in Natural language sentences.

**Goals of CD:**
*   Facilitate drawing inferences from sentences.
*   Be independent of the language in which the sentences were originally stated.

**CD Claim:** For any two sentences identical in meaning, regardless of language, there should be only one representation.

*   **Advantages:** Uses fewer inference rules; many inference rules are already represented in CD structure.
*   **Disadvantages:** Knowledge must be decomposed into low-level primitives; representations can be complex even for simple actions; requires large storage.

### 2. Scripts
A script is a structure that describes a **stereotyped sequence of events** in a particular context. It is similar to a thought sequence or a chain of situations which could be anticipated.

**Components of a Script:**
1.  **Entry Conditions:** Must be satisfied before events in the script can occur.
2.  **Results:** Conditions that will be true after events in the script have occurred.
3.  **Props:** Slots representing objects involved in events.
4.  **Roles:** Slots representing persons involved in the events.
5.  **Track:** Variations on the script (different tracks may share components).
6.  **Scenes:** The actual sequence of events that occur, often represented in CD formalism.

*   **Advantages:** Captures stereotypical sequences; ability to predict events; avoids the problem of inference explosion by limiting the set of inferences made.
*   **Disadvantages:** Less general than frames; may not be suitable to represent all kinds of knowledge.

### 3. CYC (Cycorp)
Cyc is an ambitious AI project attempting to assemble a **comprehensive ontology and knowledge of everyday common sense knowledge**. Its goal is to enable AI applications to perform human-like reasoning (e.g., "lemons are sour").

***

# V. Planning

Planning is the task of finding a **procedural course of action** (a sequence of actions) for a declaratively described system to reach its goals.

## A. Planning vs. Search/Problem Solving
*   **Search vs. Planning:** The main difference is the **representation of states**. In search, states are represented as a single entity; in planning, states have **structured representations** (collections of properties) that are used by the planning algorithm.
*   **Planning vs. Problem Solving:** Planning agents are similar to problem-solving agents but differ in the representation of goals, states, actions, the use of explicit logical representations, and the way they search for solutions.

## B. Planning Components and Definition
A planning problem requires finding a sequence of actions that achieves a given goal when executed from a given initial state.

**Required components:**
*   A set of operator descriptions (defining primitive actions).
*   An initial state description.
*   A goal state description or predicate.
*   **Plan:** A sequence of operator instances that change the world to satisfy the goal-state description.

**Operators** typically contain three components:
1.  Action description.
2.  **Precondition:** Conjunction of positive literals that must be true before the operator is applied.
3.  **Effect:** Conjunction of positive or negative literals that describe how the situation changes when the operator is applied.

## C. Goal Stack Planning (STRIPS)
STRIPS (STanford Research Institute Problem Solver) is one of the most important planning algorithms, specifically designed for **linear planning** (solving goals one at a time, in order).

*   The system uses a **goal stack** to control its search, holding actions and goals.
*   **State List:** Maintains all currently true predicates.
*   **Goal Stack:** A push-down stack of goals to be solved, with the current goal on top.

**STRIPS Action Representation:** An action consists of three lists:
1.  **Pre\_Cond list:** Predicates that must be true before operation.
2.  **ADD list:** Predicates that will be true after operation.
3.  **DELETE list:** Predicates that are no longer true after operation.

**STRIPS Algorithm (Simplified):**
1.  Start by pushing the original goal on the stack. Repeat until the stack is empty.
2.  If the stack top is a compound goal, push its unsatisfied subgoals.
3.  If the stack top is a single unsatisfied goal, replace it with an action and push the action’s precondition onto the stack.
4.  If the stack top is an action, pop it, execute it, and update the knowledge base using its ADD and DELETE lists.
5.  If the stack top is a satisfied goal, pop it.

## D. Non-Linear Planning (TWEAK)
Non-linear planning is a method where multiple subproblems are worked on simultaneously, not in a linear sequence.

*   **TWEAK Constraint Posting:** Used to handle **goal interactions** (where solving one subgoal interferes with the solution of a previous subgoal) through an interleaving method.
*   The TWEAK algorithm initializes a set $S$ with the goal propositions and iteratively removes an unachieved proposition $P$ from $S$ and achieves it using an operator. It reviews all steps to find unachieved preconditions and adds them back to $S$ until $S$ is empty.

***

# VI. Learning in AI

Learning is a process that improves the knowledge of an AI program by making observations about its environment. An AI program is said to learn if its performance at tasks, as measured by a performance measure $P$, improves with experience $E$.

## A. Classification of AI Learning Models

### 1. Knowledge-Based Classification
*   **Inductive Learning (KBIL):** Based on inferring a **general rule** from datasets of input-output pairs. Focuses on finding inductive hypotheses with the help of background information. This involves learning by example, where a general rule is induced from a set of observed instances.
*   **Deductive Learning (EBL, RBL):** Starts with a series of rules and infers new rules that are more **efficient**. Explanation-Based Learning (EBL) extracts general rules by generalizing the explanation.

### 2. Feedback-Based Classification
*   **Supervised Learning:** Uses external feedback (a "teacher") to learn functions that map inputs to labeled output observations. Algorithms are trained on labeled data.
*   **Unsupervised Learning:** Focuses on learning a **pattern or structure** in the input data **without any external feedback or labels**. Used for clustering, anomaly, and outlier detection.
*   **Semi-supervised Learning:** Uses a large amount of **unlabeled data** for training and a small amount of **labeled data** for testing, acting as a solid middle ground.
*   **Reinforcement Learning (RL):** Uses opposite dynamics such as rewards and punishment to "reinforce" different types of knowledge. The algorithm learns by interacting with the environment to maximize a reward signal.

## B. Specific Learning Mechanisms

### 1. Rote Learning
Rote learning is a **memorization technique based on repetition**, avoiding inner complexities. It consists of memorizing solutions to solved problems so the system need not recompute them.

*   **Example:** Memorizing multiplication tables.
*   **Implementation:** A simple example is **caching** computed values.
*   **Issues:** Must ensure fast organization and access of stored values (e.g., using hashing or indexing); not effective in a rapidly changing environment.

### 2. Learning by Taking Advice
The system translates advice given by a human expert or programmer into **actionable decisions**. This approach requires a greater necessity of inference than rote learning.

**Automated Advice Taking Steps:**
1.  **Request:** Ask for general advice or a remedy for shortcomings.
2.  **Interpret:** Translate the advice into an internal representation.
3.  **Operationalise:** Provide a representation that can be used by the performance element.
4.  **Integrate:** Add knowledge carefully to avoid redundancy and contradictions.
5.  **Evaluate:** Assess the new knowledge for errors, contradictions, etc..

### 3. Learning in Problem Solving (Learning from Own Experiences)
Problem solving is viewed as a search of a state-space formulation of a problem. The underlying principle is reinforcement: repeating actions leading to desirable outcomes and avoiding actions leading to undesirable outcomes.

*   **Learning by Parameter Adjustment:** Programs rely on an evaluation function represented as a polynomial (e.g., $c_1t_1+c_2t_2+c_3t_3$). The basic idea is to modify the weights ($c$ terms) on the features ($t$ terms) based on accumulated experiences.
*   **Learning with Macro Operators:** A sequence of operations treated as a single whole, used to avoid expensive recomputation. STRIPS employed macro-operators in its learning phase.
*   **Learning by Chunking:** A mechanism that acquires rules from goal-based experience by grouping information into meaningful chunks to facilitate learning and recall.

### 4. Learning from Examples (Induction)
The system tries to induce a **general rule** from a set of observed instances, often used in classification tasks.

*   **Winston's Learning Program:** A pioneering effort using a **symbolic approach** to simulate human learning. It utilized positive and negative feedback to construct representations of concept definitions (e.g., determining bodies/edges in a scene).
*   **Decision Trees (Classification Tree):** A supervised machine learning technique based on the divide and conquer paradigm, useful for classification tasks. It is a flowchart-like tree structure where internal nodes denote a test on an attribute, branches are outcomes, and leaf nodes hold a class label.
    *   **ID3 Algorithm (Quinlan’s):** Builds trees automatically from positive and negative instances using **recursive partitioning**.
    *   **Metrics used in ID3:**
        *   **Entropy:** A measure of randomness or uncertainty in the information being processed; higher entropy makes conclusions harder to draw.
        *   **Information Gain (IG):** Based on the decrease in entropy after splitting a dataset on an attribute; the difference between the entropy of the parent node and the weighted average entropy of child nodes.

### 5. Explanation-Based Learning (EBL)
EBL attempts to formulate a **generalization after observing only a single example** by analyzing why that example is a member of a concept. EBL extracts general problem-solving techniques by observing and analyzing human solutions to specific problems.

**EBL Inputs:**
1.  A **training example** (what is seen in the world).
2.  A **goal concept** (high-level description of what to learn).
3.  An **operational criterion** (description of which concepts are usable/testable).
4.  A **domain theory** (rules describing relationships between objects and actions).

**EBL Process:**
1.  **Explanation:** The domain theory prunes away all unimportant aspects of the training example with respect to the goal concept.
2.  **Generalization:** The explanation is generalized as far as possible while still describing the goal concept.

### 6. Discovery-Based Learning
Discovery is a restricted form of learning where an entity acquires knowledge **without the help of a teacher**.

*   **Theory Driven Discovery (AM, 1976):** A program that discovers concepts in elementary mathematics and set theory. Given a description of set theory concepts and information on how to perform mathematics (LISP form), AM discovered concepts like Integers, Addition, and Prime Numbers.
*   **Data Driven Discovery (BACON, 1981):** Made from observing data and making sense of it. BACON was able to derive the ideal gas law by starting with variables, inputting experimental data, and noticing trends.

### 7. Analogy Learning
Analogy learning involves finding knowledge acquired in one domain and using it in a different domain by establishing similarities between "concepts" and **transferring relationships**.

**Analogical Reasoning Steps:**
1.  **Retrieve:** Retrieve cases from memory relevant to solving the problem.
2.  **Reuse:** Map the solution from the previous case (source entity) to the target problem.
3.  **Revise:** Test and, if necessary, revise the new solution.
4.  **Retain:** Store the resulting experience as a new case in memory.

**Methods of Analogical Problem Solving:**
*   **Transformational Analogy:** A pre-selected plan (sequence of actions) is modified to solve a new problem; looking for a similar solution and copying it with suitable substitutions.
*   **Derivational Analogy:** Transfers past experience to new problems by recreating lines of reasoning, including decision sequences and justifications, that proved effective previously.

### 8. Neural Network and Genetic Learning
*   **Artificial Neural Networks (ANN):** Interconnected groups of artificial neurons that use a mathematical model for information processing.
    *   **Artificial Neuron:** A mathematical function based on biological neurons, taking inputs, weighting them, summing them, and passing the sum through a non-linear function to produce output.
    *   **Perceptron:** A neural network unit (artificial neuron) proposed by Frank Rosenblatt (1957) that uses a supervised learning algorithm to learn weights for binary classifiers, drawing a linear decision boundary.
*   **Genetic Learning (Genetic Algorithms):** An adaptive heuristic search algorithm inspired by Darwin's theory of evolution in Nature, used to solve optimization problems.
    *   It uses concepts like Population, Chromosomes, Genes, Fitness Function, and Genetic Operators (Selection, Crossover, Mutation) to generate high-quality solutions over evolutionary generational cycles.
    *   **Advantages:** Parallel capabilities, optimizes various problems, does not need derivative information.
    *   **Limitations:** Not efficient for simple problems; does not guarantee the quality of the final solution.

## C. Control Learning
Control learning, a subfield of reinforcement learning, trains an agent to make decisions and take actions in an environment to achieve a specific goal.

**Components of Control Learning:**
1.  **State representation:** The agent perceives and represents the current state of the environment (e.g., observations or sensory inputs).
2.  **Action selection:** The agent selects appropriate actions using a decision-making policy (which maps states to actions).
3.  **Reward function:** The agent receives feedback (rewards or penalties) indicating the desirability of its actions, with the objective usually being to maximize cumulative rewards.
4.  **Exploration and exploitation:** The agent must balance trying new actions (exploration) to learn and using actions currently believed to be optimal (exploitation).

***

# VII. Constraint Satisfaction Problems (CSP)

A Constraint Satisfaction Problem (CSP) is a computational problem where the goal is to find a solution that **satisfies a set of constraints**. Many AI problems can be viewed as CSPs, where the goal state satisfies a given set of constraints.

## A. Definition and Examples
A CSP is formally defined by:
*   A set of variables $x_1, x_2, \ldots, x_n$.
*   A domain $D_i$ for each variable $x_i$.
*   Constraints $c_1, c_2, \ldots, c_m$.
*   **Goal:** Find a complete, consistent assignment.

**A Constraint** is specified by a subset of the variables (often two) and all the allowable joint assignments to those variables.

**Examples of CSPs:**
*   **Real World:** Scheduling classes (room availability, faculty preferences, avoiding conflicts), Timetabling, Scheduling operating system tasks, and Satellite Positioning.
*   **Toy Problems:** N Queens Problem (placing N chess queens so no two threaten each other), Sudoku, Map Colouring (ensuring no adjacent regions share the same color).

## B. Backtracking Search (Solution Method)
Backtracking Search is a general algorithm for solving CSPs that **incrementally builds candidates** to the solution and abandons a candidate (backtracks) as soon as it determines the candidate cannot be completed to a reasonable solution.

*   It finds a solution step by step, using recursive calling.
*   It utilizes the **depth-first search method**.
*   A search tree, called the **state-space tree**, represents all possible states, from the root (initial state) to the leaf (terminal state).
*   If a proposed solution path does not satisfy constraints, the branch is removed, and the algorithm returns to the previous level.

**Backtracking Algorithm Steps (Simplified):**
Repeat until a complete solution is found or all paths have led to dead ends:
1.  Select an unexpanded node of the search graph.
2.  Apply constraint inference rules to generate all possible new constraints.
3.  If a contradiction occurs, report this path is a dead end.
4.  If the constraints describe a complete solution, report success.
5.  Otherwise, apply rules to generate new partial solutions and insert them into the search graph.

**Advantages of Backtracking:** Highly flexible, can find optimal solutions, handle complex constraints, and explore the entire solution space.