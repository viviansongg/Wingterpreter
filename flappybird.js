
//board
let board;
let boardWidth = 1400;
let boardHeight = 400;
let context;

//bird
let birdWidth = 34; 
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg;

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
}

//pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; //pipes moving left speed
let gridUnit = boardHeight / 5; // Grid-based movement
let gameOver = false;
let score = 0;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    birdImg = new Image();
    birdImg.src = "./flappybird.png";
    birdImg.onload = function() {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";
    
    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 2500);
    document.addEventListener("keydown", moveBird);
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //bird
    bird.y = Math.max(0, Math.min(bird.y, board.height - bird.height)); //keep bird within bounds
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    //pipes
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5;
            pipe.passed = true;
        }

        if (detectCollision(bird, pipe)) {
            gameOver = true;
        }
    }

    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift();
    }

    //score
    context.fillStyle = "white";
    context.font = "45px sans-serif";
    context.fillText(score, 5, 45);

    if (gameOver) {
        context.fillText("GAME OVER", 5, 90);
    }
}

function placePipes() {
    if (gameOver) {
        return;
    }
    let randomPipeY = Math.floor(Math.random() * 5) * gridUnit - pipeHeight;
    let openingSpace = gridUnit * 2;

    let topPipe = {
        img: topPipeImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }
    pipeArray.push(topPipe);

    let bottomPipe = {
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }
    pipeArray.push(bottomPipe);
}

function moveBird(e) {
    if (e.code == "ArrowUp") {
        bird.y -= gridUnit;
    } else if (e.code == "ArrowDown") {
        bird.y += gridUnit;
    }
    if (gameOver && (e.code == "ArrowUp" || e.code == "ArrowDown")) {
        bird.y = birdY;
        pipeArray = [];
        score = 0;
        gameOver = false;
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   
           a.x + a.width > b.x &&   
           a.y < b.y + b.height &&  
           a.y + a.height > b.y;    
}

function getPermutations(elements, size) {
    if (size === 1) return elements.map(e => [e]);

    let result = [];
    elements.forEach((element, index) => {
        let remaining = elements.slice(0, index).concat(elements.slice(index + 1));
        let perms = getPermutations(remaining, size - 1);
        perms.forEach(perm => result.push([element, ...perm]));
    });
    return result;
}

// Define the set of elements
let elements = ["H", "K", "Y", "D", "L"];

// Generate all permutations of size 2
let permutations = getPermutations(elements, 2);



// // Possible letters
// let letters = ["H", "K", "D", "Y", "L"];

// // Function to generate random letters and update the HTML elements
// function generateLetters() {
//     let letter1 = letters[Math.floor(Math.random() * letters.length)];
//     let letter2 = letters[Math.floor(Math.random() * letters.length)];

//     // Update the text inside the circles
//     document.getElementById("letter1").textContent = letter1;
//     document.getElementById("letter2").textContent = letter2;
// }

// // Call function at the start and every 3 seconds
// generateLetters();
// setInterval(generateLetters, 3000);

