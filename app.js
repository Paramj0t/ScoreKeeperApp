const p1 = {
	//objects bnale for refactoring
	score: 0,
	button: document.querySelector("#p1Button"),
	display: document.querySelector("#p1Display"),
};

const p2 = {
	score: 0,
	button: document.querySelector("#p2Button"),
	display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#resetButton");
const playto = document.querySelector("#playto");

// let p1Score = 0,
// 	p2Score = 0;
let winningScore = 11; //by default score
let isGameOver = false;

function updateScore(player, opponent) {
	// player, everyone else de skte h pura array de skte yeh nhi ki sab oppent alg banne bas player alg bnao
	if (!isGameOver) {
		player.score++;
		if (player.score === winningScore) {
			isGameOver = true;
			// p1Display.classList.add("winner");
			// p2Display.classList.add("loser");
			player.display.classList.add("has-text-success");
			opponent.display.classList.add("has-text-danger");
			player.display.textContent = player.score;
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.textContent = player.score;
	}
}

p1.button.addEventListener("click", (e) => {
	updateScore(p1, p2);
});

p2.button.addEventListener("click", (e) => {
	updateScore(p2, p1);
});

playto.addEventListener("change", function (e) {
	winningScore = parseInt(this.value);
	reset(); //idhr () yeh isliye kyuki anonymous fxn ko call back ki tarah bhej rha h toh isko execute krna padega
});

resetButton.addEventListener("click", reset);

function reset() {
	isGameOver = false;

	for (let p of [p1, p2]) {
		// [] array bnaya h p1 p2 ka
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove("has-text-success", "has-text-danger");
		p.button.disabled = false;
	}
	// (p1.score = 0), (p2.score = 0);
	// p1.display.textContent = 0;
	// p2.display.textContent = 0;
	// p1.display.classList.remove("has-text-success");
	// p1.display.classList.remove("has-text-danger");
	// p2.display.classList.remove("has-text-success", "has-text-danger");
	// p1.button.disabled = false;
	// p2.button.disabled = false;
}
