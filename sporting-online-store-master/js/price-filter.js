const priceSlider = document.querySelector('.price-filter__slider');


noUiSlider.create(priceSlider, {
	start: [0, 200000],
	tooltips: [wNumb({
		decimals: 0
	}), wNumb({
		decimals: 0
	})],
	connect: true,
	range: {
		'min': [0],
		'max': [200000]
	}
});


const priceStart = document.querySelector('#price-start');
const priceEnd = document.querySelector('#price-end');

function setPriceListener() {
	let priceStartValue;
	let priceEndValue;

	if (priceStart.value != '') {
		priceStartValue = priceStart.value
	}

	if (priceEnd.value != '') {
		priceEndValue = priceEnd.value
	}

	priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
}

priceStart.addEventListener('change', setPriceListener)
priceEnd.addEventListener('change', setPriceListener)