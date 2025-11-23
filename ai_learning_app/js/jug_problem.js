const jugCanvas = document.getElementById('jug-canvas');
const jugCtx = jugCanvas.getContext('2d');
const jugLog = document.getElementById('jug-log');

const capacityA = 4;
const capacityB = 3;
const goalA = 2;

let jugAnimationInterval = null;

function drawJugs(state) {
    jugCtx.clearRect(0, 0, jugCanvas.width, jugCanvas.height);
    
    const jugA_X = 150;
    const jugB_X = 400;
    const groundY = 250;
    const scale = 40; // pixels per gallon

    // Draw Jug A (4 gal)
    jugCtx.fillStyle = '#ecf0f1';
    jugCtx.fillRect(jugA_X, groundY - (capacityA * scale), 100, capacityA * scale);
    jugCtx.strokeRect(jugA_X, groundY - (capacityA * scale), 100, capacityA * scale);
    
    // Water A
    jugCtx.fillStyle = '#3498db';
    jugCtx.fillRect(jugA_X, groundY - (state.a * scale), 100, state.a * scale);
    
    // Label A
    jugCtx.fillStyle = '#000';
    jugCtx.font = '20px Arial';
    jugCtx.textAlign = 'center';
    jugCtx.fillText(`Jug A (4g): ${state.a}g`, jugA_X + 50, groundY + 30);

    // Draw Jug B (3 gal)
    jugCtx.fillStyle = '#ecf0f1';
    jugCtx.fillRect(jugB_X, groundY - (capacityB * scale), 100, capacityB * scale);
    jugCtx.strokeRect(jugB_X, groundY - (capacityB * scale), 100, capacityB * scale);

    // Water B
    jugCtx.fillStyle = '#3498db';
    jugCtx.fillRect(jugB_X, groundY - (state.b * scale), 100, state.b * scale);

    // Label B
    jugCtx.fillStyle = '#000';
    jugCtx.fillText(`Jug B (3g): ${state.b}g`, jugB_X + 50, groundY + 30);
}

function logJug(message) {
    jugLog.innerHTML += `> ${message}<br>`;
    jugLog.scrollTop = jugLog.scrollHeight;
}

function solveJugProblem() {
    // BFS to find solution path
    let queue = [[{ a: 0, b: 0, action: "Start" }]];
    let visited = new Set();
    visited.add("0,0");

    let solutionPath = null;

    while (queue.length > 0) {
        let path = queue.shift();
        let currentState = path[path.length - 1];

        if (currentState.a === goalA) {
            solutionPath = path;
            break;
        }

        let nextStates = getNextStates(currentState);
        
        for (let next of nextStates) {
            let key = `${next.a},${next.b}`;
            if (!visited.has(key)) {
                visited.add(key);
                let newPath = [...path, next];
                queue.push(newPath);
            }
        }
    }

    if (solutionPath) {
        animateSolution(solutionPath);
    } else {
        logJug("No solution found.");
    }
}

function getNextStates(state) {
    let moves = [];
    let { a, b } = state;

    // 1. Fill A
    moves.push({ a: capacityA, b: b, action: "Fill Jug A" });
    // 2. Fill B
    moves.push({ a: a, b: capacityB, action: "Fill Jug B" });
    // 3. Empty A
    moves.push({ a: 0, b: b, action: "Empty Jug A" });
    // 4. Empty B
    moves.push({ a: a, b: 0, action: "Empty Jug B" });
    
    // 5. Pour A to B
    let pourAtoB = Math.min(a, capacityB - b);
    moves.push({ a: a - pourAtoB, b: b + pourAtoB, action: "Pour A to B" });

    // 6. Pour B to A
    let pourBtoA = Math.min(b, capacityA - a);
    moves.push({ a: a + pourBtoA, b: b - pourBtoA, action: "Pour B to A" });

    return moves;
}

function animateSolution(path) {
    let i = 0;
    logJug("Solution found! Animating...");
    
    jugAnimationInterval = setInterval(() => {
        if (i >= path.length) {
            clearInterval(jugAnimationInterval);
            logJug("Goal Reached!");
            return;
        }

        let step = path[i];
        drawJugs(step);
        logJug(`${step.action} -> (${step.a}, ${step.b})`);
        i++;
    }, 1500);
}

document.getElementById('btn-solve-jug').addEventListener('click', () => {
    clearInterval(jugAnimationInterval);
    jugLog.innerHTML = '';
    solveJugProblem();
});

document.getElementById('btn-reset-jug').addEventListener('click', () => {
    clearInterval(jugAnimationInterval);
    jugLog.innerHTML = '';
    drawJugs({ a: 0, b: 0 });
    logJug("Reset.");
});

// Initial draw
drawJugs({ a: 0, b: 0 });
