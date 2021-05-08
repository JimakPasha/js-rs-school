'use strict';

const coverElem = document.getElementById('cover');
const donateBtn = document.getElementById('btn-donate');
const formAnimal = document.getElementById('form-animal');
const formDonat = document.getElementById('form-donat');
const closeBtnAnimal = document.getElementById('close-btn-animal');
const closeBtnDonat = document.getElementById('close-btn-donat');
const nextBtnForm = document.getElementById('modal-animal__btn');
const donateBtnForm = document.getElementById('modal-donat__btn');
const mapImage = document.getElementById('map');
const wrapperMap = document.getElementsByClassName('map');
const infoAnimalBtnsBox = document.querySelectorAll('.animal-info__bottom-item');
const formDonate1 = document.getElementById('formDonate1');
const formDonate2 = document.getElementById('formDonate2');
const carouselList = document.querySelector('.about__images-list');
const carouselItems = document.querySelectorAll('.about__images-item');
const elems = Array.from(carouselItems);



// карусель на главной
carouselList.addEventListener('click', function (event) {
	let newActive = event.target.closest('.about__images-item');

	if (!newActive) {
		return;
	} else {
		update(newActive);
	}

});

const update = function (newActive) {
	const newActivePos = newActive.dataset.pos;

	const current = elems.find((elem) => elem.dataset.pos == 0);
	const prev = elems.find((elem) => elem.dataset.pos == -1);
	const next = elems.find((elem) => elem.dataset.pos == 1);
	const first = elems.find((elem) => elem.dataset.pos == -2);
	const last = elems.find((elem) => elem.dataset.pos == 2);


	[current, prev, next, first, last].forEach(item => {
		var itemPos = item.dataset.pos;

		item.dataset.pos = getPos(itemPos, newActivePos)
	});
};

const getPos = function (current, active) {
	const diff = current - active;

	if (Math.abs(current - active) > 2) {
		return -current
	}

	return diff;
}

// спойлер информации
infoAnimalBtnsBox.forEach(item => {
	item.addEventListener('click', function () {
		item.classList.toggle('active');
		let children = item.children;
		for (var i = 0; i < children.length; ++i) {
			children[i].classList.toggle('active');
		}
	});
});

// модальное окно доната
donateBtn.addEventListener('click', () => {
	document.body.classList.add('notScroll');
	coverElem.classList.remove('hidden');
	formAnimal.classList.remove('hidden');
});

coverElem.addEventListener('click', () => {
	document.body.classList.remove('notScroll');
	coverElem.classList.add('hidden');
	formAnimal.classList.add('hidden');
	formDonat.classList.add('hidden');
});

closeBtnAnimal.addEventListener('click', () => {
	document.body.classList.remove('notScroll');
	coverElem.classList.add('hidden');
	formAnimal.classList.add('hidden');
	formDonat.classList.add('hidden');
});

closeBtnDonat.addEventListener('click', () => {
	document.body.classList.remove('notScroll');
	coverElem.classList.add('hidden');
	formDonat.classList.add('hidden');
});


formDonate1.addEventListener('submit', (e) => {
	e.preventDefault();
	formAnimal.classList.add('hidden');
	formDonat.classList.remove('hidden');
});

formDonate2.addEventListener('submit', (e) => {
	e.preventDefault();
	document.body.classList.remove('notScroll');
	coverElem.classList.add('hidden');
	formDonat.classList.add('hidden');
	alert('Thank you for your donation');
});


//бургер меню
const menuBtn = document.querySelector('.menu__btn');
if(menuBtn) {
	const menuList = document.querySelector('.menu__list');
	menuBtn.addEventListener('click', function(e) {
		document.body.classList.toggle('lock');
		this.classList.toggle('active');
		menuList.classList.toggle('active');
	});
}

// функция проверки максимальной длины введёного значения
function maxLengthCheck(object) {
	if (object.value.length > object.maxLength) {
		object.value = object.value.slice(0, object.maxLength)
	}
	if (object.value.length < object.minLength) {
		object.value = object.value.slice(0, object.minLength)
	}
}









// const getCoords = (elem) => {
// 	var box = elem.getBoundingClientRect();
// 	return {
// 		top: box.top + pageYOffset,
// 		left: box.left + pageXOffset
// 	};
// }

// mapImage.addEventListener('mousedown', (e) => {

// 		const {top, left} = getCoords(mapImage);
// 		let shiftX = e.pageX - left;
// 		let shiftY = e.pageY - top;

// 		const moveAt = (e) => {
// 			mapImage.style.top = e.pageX - shiftX + 'px';
// 			mapImage.style.left = e.pageY - shiftY + 'px';
// 		};

// 		wrapperMap.appendChild(mapImage);
// 		moveAt(e);

// 		document.onmousemove = function (e) {
// 			moveAt(e);
// 		};

// 		document.addEventListener('mousemove', moveAt);
// 	});

// mapImage.ondragstart = function () {
// 	return false;
// };