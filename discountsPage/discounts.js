const calculateDiscount = () => {
	const basePrice = document.getElementById('price').value;
	const discount = document.getElementById('discount').value;
	const finalPrice = document.getElementById('finalPrice');
	const errorMessage = document.getElementById('errorMessage');
	if (basePrice > 0) {
		if (discount >= 0 && discount <= 100) {
			const price = basePrice * ((100 - discount) / 100);
			finalPrice.value = `$${price}`;
			errorMessage.innerHTML = '';
		} else {
			finalPrice.value = '';
			errorMessage.innerHTML =
				'The discount percentage must be between 0 and 100.';
		}
	} else {
		finalPrice.value = '';
		errorMessage.innerHTML = 'The price must be a positive number.';
	}
};
