console.log('hola mundo');

// Utils
const isPair = (number) => {
	return number % 2 === 0;
};

// Median Calculator
const medianOfSalaries = (arr) => {
	const listSize = arr.length;
	let median;
	if (isPair(listSize)) {
		let index1 = listSize / 2 - 1;
		let index2 = listSize / 2;

		median = (arr[index1] + arr[index2]) / 2; // Calculate median if the list size is pair
	} else {
		let index = parseInt(listSize / 2);
		median = arr[index]; // Calculate median if the list size is odd
	}
	return median;
};

// Median of colombian salaries
const colombianSalaries = colombia.map((person) => {
	return person.salary;
});

const orderedColombianSalaries = colombianSalaries.sort(
	(salaryA, salaryB) => salaryA - salaryB
);

// Top 10% of colombian salaries
const calculateTopPercentageOfSalaries = (arr, percentage) => {
	const topPercentage = arr.length * (percentage / 100);
	return arr.slice(-topPercentage);
};
console.log(orderedColombianSalaries);
console.log(calculateTopPercentageOfSalaries(orderedColombianSalaries, 10));
console.log(calculateTopPercentageOfSalaries(orderedColombianSalaries, 15));
console.log(calculateTopPercentageOfSalaries(orderedColombianSalaries, 20));

// console.log(tenPercentOfTotalColombianSalary);
// console.log(medianOfSalaries(orderedColombianSalaries));
// console.log(medianOfSalaries(tenPercentOfTotalColombianSalary));
