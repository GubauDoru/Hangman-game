const computerWords = ["TELENCICLOPEDIE", "ELICOPTER", "MICROFON"];
let memberNumber = 1;
const keyboardIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function startGame(player2Word) {
	for (let i = 0; i <= 25; ++i) {
		document.getElementById(keyboardIds[i]).disabled = false;
	}
	document.getElementById('startButton').disabled = true;
	document.getElementById('adaugaButton').disabled = true;
	window.chusenWord;
	const wordValue = document.getElementById('wordOptions').value;
	if (player2Word == null) {
		chusenWord = computerWords[wordValue];
	} else {
		let word = player2Word;
		chusenWord = word.toUpperCase();
	}
	window.wordLength = chusenWord.length;//---------> pot sa scap de asta daca o introduc direct in for
	for (i = 0; i < wordLength; ++i) {
		const wordLetters = document.createElement('p');
		wordLetters.setAttribute('id', i);
		wordLetters.textContent = '__';
		document.getElementById('sublines').appendChild(wordLetters);
	}
}

function checkLetters(letter) {
	const smallLet = letter.toLowerCase();
	document.getElementById(smallLet).disabled = true;
	if (chusenWord.indexOf(letter) < 0) {
		showHangMan();
	}
	for(let i = 0; i < wordLength; ++i) {
		if (chusenWord[i] === letter) {
			showLetters(i);
		}
	}
}

function showLetters(i) {
	document.getElementById(i).innerHTML = ' ' + chusenWord[i] + ' ';
	let checkWord = 0;
	for(let i = 0; i < wordLength; ++i) {
		if (document.getElementById(i).textContent === '__') {
			checkWord = 1;
			break;
		}
	}
	if (checkWord === 0) {
		const modal = document.getElementById('myModal');
		modal.style.display = 'block';
	}
}

function showHangMan() {
	const bodyParts = 'images/hang_man_body_part_' + memberNumber + '.png';
	const hangManImages = document.createElement('img');
	hangManImages.setAttribute('class', 'hangTable')
	hangManImages.src = bodyParts;
	document.getElementById('gameTable').appendChild(hangManImages);
	if (memberNumber === 7) {
		const modal = document.getElementById('myModal');
		modal.style.display = 'block';
	}
		++memberNumber;
}

function restartGame() {
	window.location.reload();
}