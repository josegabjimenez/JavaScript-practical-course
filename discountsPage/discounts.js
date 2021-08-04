const coupons = {
	coupon10: 10,
	coupon20: 20,
	coupon30: 30,
};

const calculatePrice = (price, discount, coupon) => {
	if (coupon > 0) {
		return price * ((100 - discount - coupon) / 100);
	}
	return price * ((100 - discount) / 100);
};

const calculateDiscount = () => {
	const basePrice = document.getElementById('price').value;
	const discount = document.getElementById('discount').value;
	const finalPrice = document.getElementById('finalPrice');
	const errorMessage = document.getElementById('errorMessage');
	const coupon = document.getElementById('coupon').value;
	if (basePrice > 0) {
		if (discount >= 0 && discount <= 100) {
			if (coupon != '') {
				if (coupons[coupon]) {
					const price = calculatePrice(basePrice, discount, coupons[coupon]);
					finalPrice.value = `$${price}`;
					errorMessage.innerText = '';
					return;
				} else {
					finalPrice.value = ``;
					errorMessage.innerText =
						'The coupon that you entered does not exist.';
					return;
				}
			}

			const price = calculatePrice(basePrice, discount, 0);
			finalPrice.value = `$${price}`;
			errorMessage.innerText = '';
			return;
		} else {
			finalPrice.value = '';
			errorMessage.innerText =
				'The discount percentage must be between 0 and 100.';
			return;
		}
	} else {
		finalPrice.value = '';
		errorMessage.innerHTML = 'The price must be a positive number.';
		return;
	}
};
