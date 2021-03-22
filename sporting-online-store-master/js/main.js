//Adaptive functions
let move_array = [];
if ($('*[data-move]')) {
	$.each($('*[data-move]'), function (index, val) {
		if ($(this).data('move') != '' && $(this).data('move') != null) {

			$(this).attr('data-move-index', index);
			move_array[index] = {
				'parent': $(this).parent(),
				"index": $(this).index()
			};
		}
	});
}

function dynamic_adaptive() {
	let w = $(window).outerWidth();
	$.each($('*[data-move]'), function (index, val) {
		if ($(this).data('move') != '' && $(this).data('move') != null) {
			let dat_array = $(this).data('move').split(',');
			let dat_parent = $('.' + dat_array[0]);
			let dat_index = dat_array[1];
			let dat_bp = dat_array[2];
			if (w < dat_bp) {
				if (!$(this).hasClass('js-move_done_' + dat_bp)) {
					if (dat_index > 0) {
						$(this).insertAfter(dat_parent.find('*').eq(dat_index - 1));
					} else {
						$(this).prependTo(dat_parent);
					}
					$(this).addClass('js-move_done_' + dat_bp);
				}
			} else {
				if ($(this).hasClass('js-move_done_' + dat_bp)) {
					dynamic_adaptive_back($(this));
					$(this).removeClass('js-move_done_' + dat_bp);
				}
			}
		}
	});
}

function dynamic_adaptive_back(el) {
	let index_original = el.data('move-index');
	let move_place = move_array[index_original];
	let parent_place = move_place['parent'];
	let index_place = move_place['index'];
	if (index_place > 0) {
		el.insertAfter(parent_place.find('*').eq(index_place - 1));
	} else {
		el.prependTo(parent_place);
	}
}
$(window).resize(function (event) {
	dynamic_adaptive();
});
dynamic_adaptive();


function dynamic_adaptive_back_all() {
	$.each($('*[data-move]'), function (index, val) {
		let index_original = $(this).data('move-index');
		let move_place = move_array[index_original];
		let parent_place = move_place['parent'];
		let index_place = move_place['index'];
		if (index_place > 0) {
			$(this).insertAfter(parent_place.find('*').eq(index_place - 1));
		} else {
			$(this).prependTo(parent_place);
		}
	});
}

// -----------------------------------

// Бургер меню

const burgerMenu = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu__body')

burgerMenu.addEventListener('click', function () {
	this.classList.toggle('active')
	menu.classList.toggle('active')
})

const menuPageBurger = document.querySelector('.menu-page__burger')
const menuPageBody = document.querySelector('.menu-page__body')

menuPageBurger.addEventListener('click', () => {
	menuPageBurger.classList.toggle('active')
	menuPageBody.classList.toggle('active')
})

// Выезжающая карточка товара из каталога

const menuParents = document.querySelectorAll('.menu-page__parent>a')


for (let index = 0; index < menuParents.length; index++) {
	const menuParent = menuParents[index];
	menuParent.addEventListener('click', (e) => {

		e.preventDefault()
		menuParent.parentElement.classList.toggle('active')
	})

}
// Категории

const categoriesSelect = document.querySelector('.search-page__title')
const categoriesSearch = document.querySelector('.search-page__categories')

categoriesSelect.addEventListener('click', () => {
	categoriesSearch.classList.toggle('active')
	categoriesSelect.classList.toggle('active')

})


const categoriesSearchCheckbox = document.querySelectorAll('.categories-search__input')

// считаем сколько выбарно категорий
for (let index = 0; index < categoriesSearchCheckbox.length; index++) {
	const item = categoriesSearchCheckbox[index];


	item.addEventListener('click', () => {
		item.classList.toggle('active')

		const checkboxActiveCat = document.querySelectorAll('.categories-search__input.active')
		if (checkboxActiveCat.length > 0) {
			categoriesSelect.classList.add('add-count')

			let searchQuantity = categoriesSelect.querySelector('.search-page__quantity')

			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + checkboxActiveCat.length

		} else {
			categoriesSelect.classList.remove('add-count')
		}
	})
}

// слайдер

const mainSlider = new Swiper('.swiper-container', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	autoHeight: true,
	speed: 800,

	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
})

const mainSliderImage = document.querySelectorAll('.mainSlider__image')
const mainSliderDotts = document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet')

for (let index = 0; index < mainSliderImage.length; index++) {
	const image = mainSliderImage[index].querySelector('img').getAttribute('src')

	mainSliderDotts[index].style.backgroundImage = "url('" + image + "')"
}

// Спойлеры в фильтре

const sectionFilterTitle = document.querySelectorAll('.section-filter__title._spoller')
const sectionFilterBody = document.querySelectorAll('.section-filter__body._spoller')

sectionFilterTitle.forEach((item, index) => {
	const currentItem = sectionFilterTitle[index]

	item.addEventListener('click', () => {
		item.classList.toggle('_active')
		currentItem.nextElementSibling.classList.toggle('_active')
	})

})



// Селект

const dropdownHeader = document.querySelector('.order-catalog-select__header')
const dropdownBody = document.querySelector('.order-catalog-select__body')
const dropdownItemCurrent = document.querySelector('.order-catalog-select__current')
const dropdownItems = document.querySelectorAll('.order-catalog-select__item')

function selectCurrent(event, itemBody, current) {
	current.textContent = event.target.textContent
	itemBody.classList.remove('active')
}

if (dropdownHeader) {
	dropdownHeader.addEventListener('click', () => {

		dropdownBody.classList.toggle('active')

		dropdownItems.forEach(item => {
			item.addEventListener('click', function () {
				selectCurrent(event, dropdownBody, dropdownItemCurrent)
			})
		})

	})
}



// Счетчик

const quantityButtons = document.querySelectorAll('.quantity__button')
const quantityInput = document.querySelectorAll('.quantity__input-text')


function inputChange(e) {
	e.preventDefault()

	const input = this.closest('.quantity').querySelector('.quantity__input-text')
	const direction = this.dataset.direction
	let newValue;

	if (direction === 'plus') {
		newValue = parseInt(input.value, 10) + 1
	} else {
		newValue = input.value > 1 ? input.value - 1 : 1
	}

	input.value = newValue
}

quantityButtons.forEach(btn => {
  	btn.addEventListener('click', inputChange)
})


// Табы

const tabsItem = document.querySelectorAll('.info-product__item')
const content = document.querySelectorAll('.info-product__block')

const tabsItemOrder = document.querySelectorAll('.content-checkout__item')
const contentOrder = document.querySelectorAll('.content-checkout__block')

function selectTab() {

	tabsItem.forEach(item => {
		item.classList.remove('active-tab')
	})

	tabsItemOrder.forEach(item => {
		item.classList.remove('active-tab')
	})

	this.classList.add('active-tab')

	let tabName = this.getAttribute('data-tab')
	selectTabContent(tabName)
}


function selectTabContent(tabName) {
	content.forEach(item => {
		item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active')
	})
	contentOrder.forEach(item => {
		item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active')
	})
}


tabsItem.forEach(item => {
	item.addEventListener('click', selectTab)
})
tabsItemOrder.forEach(item => {
	item.addEventListener('click', selectTab)
})

// Слайдеры

const productsSlider = new Swiper('.products-slider__item', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	autoHeight: true,
	speed: 500,
	spaceBetween: 0,

	pagination: {
		el: '.products-slider__info',
		type: 'fraction'
	},

	navigation: {
		prevEl: '.products-slider__arrow_prev',
		nextEl: '.products-slider__arrow_next',
	}
})

const brandsSlider = new Swiper('.brands-slider__body', {
	slidesPerView: 5,
	slidesPerGroup: 1,
	speed: 500,
	spaceBetween: 0,

	navigation: {
		prevEl: '.brands-slider__arrow_prev',
		nextEl: '.brands-slider__arrow_next',
	},

	breakpoints: {

		280: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		600: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},

		992: {
			slidesPerView: 5,
		}
	}
})

const productSubSlider = new Swiper('.images-product__subslider', {
	slidesPerView: 4,
	speed: 500,
	spaceBetween: 0,
})

const productSlider = new Swiper('.images-product__mainslider', {
	slidesPerView: 1,
	speed: 500,
	spaceBetween: 0,

	thumbs: {
		swiper: productSubSlider
	}
})
