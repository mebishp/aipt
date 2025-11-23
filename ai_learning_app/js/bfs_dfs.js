const graphCanvas = document.getElementById('graph-canvas');
const graphCtx = graphCanvas.getContext('2d');
const searchLog = document.getElementById('search-log');

// Graph definition (Adjacency List + Coordinates)
const nodes = {
    'A': { x: 300, y: 50, neighbors: ['B', 'C'] },
    'B': { x: 150, y: 150, neighbors: ['D', 'E'] },
    'C': { x: 450, y: 150, neighbors: ['F', 'G'] },
    'D': { x: 80, y: 250, neighbors: [] },
    'E': { x: 220, y: 250, neighbors: ['H'] },
    'F': { x: 380, y: 250, neighbors: [] },
    'G': { x: 520, y: 250, neighbors: [] },
    'H': { x: 220, y: 350, neighbors: [] }
};

let visited = new Set();
let queue = []; // For BFS
let stack = []; // For DFS
let currentAlgorithm = null;
let animationInterval = null;

function drawGraph(activeNode = null, visitedNodes = new Set(), frontier = []) {
    graphCtx.clearRect(0, 0, graphCanvas.width, graphCanvas.height);

    // Draw edges
    graphCtx.strokeStyle = '#ccc';
    graphCtx.lineWidth = 2;
    for (let nodeId in nodes) {
        const node = nodes[nodeId];
        for (let neighborId of node.neighbors) {
            const neighbor = nodes[neighborId];
            graphCtx.beginPath();
            graphCtx.moveTo(node.x, node.y);
            graphCtx.lineTo(neighbor.x, neighbor.y);
            graphCtx.stroke();
        }
    }

    // Draw nodes
    for (let nodeId in nodes) {
        const node = nodes[nodeId];
        graphCtx.beginPath();
        graphCtx.arc(node.x, node.y, 20, 0, 2 * Math.PI);
        
        if (nodeId === activeNode) {
            graphCtx.fillStyle = '#e74c3c'; // Active (Red)
        } else if (visitedNodes.has(nodeId)) {
            graphCtx.fillStyle = '#2ecc71'; // Visited (Green)
        } else if (frontier.includes(nodeId)) {
            graphCtx.fillStyle = '#f1c40f'; // Frontier (Yellow)
        } else {
            graphCtx.fillStyle = '#3498db'; // Default (Blue)
        }
        
        graphCtx.fill();
        graphCtx.stroke();

        graphCtx.fillStyle = 'white';
        graphCtx.font = 'bold 16px Arial';
        graphCtx.textAlign = 'center';
        graphCtx.textBaseline = 'middle';
        graphCtx.fillText(nodeId, node.x, node.y);
    }
}

function log(message) {
    searchLog.innerHTML += `> ${message}<br>`;
    searchLog.scrollTop = searchLog.scrollHeight;
}

function resetGraph() {
    clearInterval(animationInterval);
    visited.clear();
    queue = [];
    stack = [];
    currentAlgorithm = null;
    searchLog.innerHTML = '';
    drawGraph();
    log("Graph reset.");
}

function runBFS() {
    resetGraph();
    log("Starting BFS from node 'A'...");
    queue.push('A');
    visited.add('A'); // Mark start as visited immediately in queue logic usually, or upon processing. 
    // Standard BFS: Enqueue start. While queue not empty: dequeue, process, enqueue unvisited neighbors.
    // Let's adjust for animation:
    
    // Reset for correct algo logic
    visited.clear();
    queue = ['A'];
    visited.add('A');
    
    animationInterval = setInterval(() => {
        if (queue.length === 0) {
            clearInterval(animationInterval);
            log("BFS Complete.");
            drawGraph(null, visited, []);
            return;
        }

        const currentNode = queue.shift();
        log(`Visiting ${currentNode}`);
        
        // Get neighbors
        const neighbors = nodes[currentNode].neighbors;
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                log(`  Discovered ${neighbor}, adding to queue.`);
            }
        }

        drawGraph(currentNode, visited, queue);

    }, 1000);
}

function runDFS() {
    resetGraph();
    log("Starting DFS from node 'A'...");
    stack = ['A'];
    visited.clear(); // DFS marks visited when popping usually, or pushing. 
    // Standard DFS: Push start. While stack not empty: pop, if not visited: mark visited, push neighbors.
    
    animationInterval = setInterval(() => {
        if (stack.length === 0) {
            clearInterval(animationInterval);
            log("DFS Complete.");
            drawGraph(null, visited, []);
            return;
        }

        const currentNode = stack.pop();
        
        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            log(`Visiting ${currentNode}`);
            
            // Add neighbors to stack (reverse order to visit left-to-right visually if desired, or standard)
            const neighbors = nodes[currentNode].neighbors;
            // Reverse to process left child first (since stack is LIFO)
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const neighbor = neighbors[i];
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                    log(`  Pushing ${neighbor} to stack.`);
                }
            }
        }

        drawGraph(currentNode, visited, stack);

    }, 1000);
}

document.getElementById('btn-bfs').addEventListener('click', runBFS);
document.getElementById('btn-dfs').addEventListener('click', runDFS);
document.getElementById('btn-reset-graph').addEventListener('click', resetGraph);

// Initial draw
drawGraph();
