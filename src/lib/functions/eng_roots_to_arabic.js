export default function convertRomanToArabic(letters) {
	const hash = {
		a: ['ا', 'أ', 'ء', 'ع'],
		"'a": ['ا', 'أ', 'ء', 'ع'],
		b: 'ب',
		t: ['ت', 'ط'],
		th: ['ث', 'ذ'],
		j: 'ج',
		H: 'ح',
		kh: 'خ',
		d: ['د', 'ض'],
		z: ['ذ', 'ز', 'ظ'],
		r: 'ر',
		s: ['س', 'ث', 'ص'],
		sh: 'ش',
		3: 'ع',
		gh: 'غ',
		g: ['غ', 'ج'],
		f: 'ف',
		q: 'ق',
		k: 'ك',
		l: 'ل',
		m: 'م',
		n: 'ن',
		w: 'و',
		v: 'و',
		h: ['ه', 'ح'],
		y: 'ي',
		i: 'ي'
	};

	let combos = {
		r1: [],
		r2: [],
		r3: [],
		r4: []
	};

	let word = '';

	letters = letters.split('').filter((l) => l !== ' ');
	// Go through each letter
	for (let i = 0; i < letters.length; i++) {
		console.log(i, letters[i]);
		const l = letters[i];
		if (Array.isArray(hash[l])) {
			// Go through each l in array
			hash[l].forEach((item) => {
				combos['r' + (i + 1)].push(item);
			});
		} else {
			combos['r' + (i + 1)].push(hash[l]);
		}
	}

	console.log(combos);
	let car;
	if (combos['r4'].length > 0) {
		car = cartesian(combos['r1'], combos['r2'], combos['r3'], combos['r4']);
	} else {
		car = cartesian(combos['r1'], combos['r2'], combos['r3']);
	}

	let roots = [];
	car.forEach((item) => {
		word = '';
		item.forEach((r) => {
			word += r + ' ';
		});
		roots.push(word.trim());
	});

	console.log(roots);
	return roots;
}

function cartesian() {
	var r = [],
		arg = arguments,
		max = arg.length - 1;
	function helper(arr, i) {
		for (var j = 0, l = arg[i].length; j < l; j++) {
			var a = arr.slice(0); // clone arr
			a.push(arg[i][j]);
			if (i == max) r.push(a);
			else helper(a, i + 1);
		}
	}
	helper([], 0);
	return r;
}
