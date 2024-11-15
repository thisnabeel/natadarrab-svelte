export default function (array = null) {
	const min = 100; // Minimum 3-digit number
	const max = 999; // Maximum 3-digit number

	if (array) {
		let randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
		while (array.map((b) => b.id).includes(randomCode)) {
			randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
		}
		return randomCode;
	} else {
		const cryptoObj = window.crypto || window.msCrypto;
		if (!cryptoObj) {
			console.log(
				'Cryptographically secure random number generation is not supported in this browser.'
			);
			return null;
		}

		const array = new Uint8Array(8);
		cryptoObj.getRandomValues(array);

		let uuid = '';
		for (let i = 0; i < array.length; i++) {
			uuid += array[i].toString(16).padStart(2, '0');
		}

		return uuid;
	}
}
