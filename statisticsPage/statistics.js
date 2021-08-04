// Reset all the fields

const cleanListOfNumbers = (container, result) => {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
	result.value = '';
};

// Shows in the screen the inputs to set the list of numbers

const setListOfNumbers = () => {
	const lengthList = document.getElementById('numbersList').value;
	const container = document.getElementById('numbersContainer');
	const result = document.getElementById('modeResult');
	if (lengthList > 0) {
		cleanListOfNumbers(container, result);
		for (let i = 0; i < lengthList; i++) {
			let string = `<div><label for="${i + 1}">${i + 1}</label><input id="${
				i + 1
			}" type="number" min="0" /></div>`;
			container.insertAdjacentHTML('beforeend', string);
		}
	}
};

// Calculate Average

const calculateAverage = () => {
	const error = document.getElementById('errorMessageAverage'); // Error message
	const result = document.getElementById('averageResult'); // Result input
	const listSize =
		document.getElementById('numbersContainer').childElementCount; // The list size
	if (listSize > 0) {
		let addNumber = 0;
		for (let i = 0; i < listSize; i++) {
			let input = document.getElementById(`${i + 1}`); // Take each value of the list
			let value = parseFloat(input.value);
			if (!value) {
				value = 0;
				input.value = '0';
			}
			addNumber += value;
		}
		const average = addNumber / listSize;

		result.value = `${average}`;
		error.innerText = '';
	} else {
		error.innerText = "There isn't a list";
	}
};

// Calculate Median

const medianOfArray = (arr) => {
	const listSize = arr.length;
	let median;
	if (listSize % 2 == 0) {
		let index1 = listSize / 2 - 1;
		let index2 = listSize / 2;

		median = (arr[index1] + arr[index2]) / 2; // Calculate median if the list size is pair
	} else {
		let index = parseInt(listSize / 2);
		median = arr[index]; // Calculate median if the list size is odd
	}
	return median;
};

const calculateMedian = () => {
	const error = document.getElementById('errorMessageMedian'); // Error message
	const result = document.getElementById('medianResult'); // Result input
	const listSize =
		document.getElementById('numbersContainer').childElementCount; // The list size

	if (listSize > 0) {
		let orderedList = [];
		let median = 0;
		for (let i = 0; i < listSize; i++) {
			let input = document.getElementById(`${i + 1}`); // Take each value of the list and add them to an array
			let value = parseFloat(input.value);
			if (!value) {
				input.value = '0';
				orderedList.push(0);
			} else {
				orderedList.push(value);
			}
		}
		orderedList.sort((a, b) => a - b); // Sort the array from minor to max
		median = medianOfArray(orderedList); // Calculate the ordered list median.
		result.value = `${median}`;
		error.innerText = '';
	} else {
		error.innerText = "There isn't a list";
	}
};

// Calculate Mode

const calculateMode = () => {
	const error = document.getElementById('errorMessageMode'); // Error message
	const result = document.getElementById('modeResult'); // Result input
	const listSize =
		document.getElementById('numbersContainer').childElementCount; // The list size

	if (listSize > 0) {
		let list = [];
		for (let i = 0; i < listSize; i++) {
			let input = document.getElementById(`${i + 1}`);
			let value = parseFloat(input.value);
			if (!value) {
				input.value = '0';
				list.push(0);
			} else {
				list.push(value);
			}
		}
		let objectList = {};
		list.map((number) => {
			if (objectList[number]) {
				objectList[number] += 1;
			} else {
				objectList[number] = 1;
			}
		});
		list = Object.entries(objectList).sort((a, b) => {
			return b[1] - a[1];
		});

		result.value = list[0][0];
	}
};
