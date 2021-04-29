'use strict';

const image = document.querySelector('img'),
			fileInput = document.querySelector('[type="file"]'),
			output = document.querySelector('output'),
			filtersBox = document.querySelector('.filters'),
			inputAll = document.querySelectorAll('input'),
			outputAll = document.querySelectorAll('output'),

			blurInput = document.querySelector('[name="blur"]'),
			invertInput = document.querySelector('[name="invert"]'),
			sepiaInput = document.querySelector('[name="sepia"]'),
			saturateInput = document.querySelector('[name="saturate"]'),
			hueInput = document.querySelector('[name="hue"]'),

			blurOutput = document.querySelector('.blur-output'),
			invertOutput = document.querySelector('.invert-output'),
			sepiaOutput = document.querySelector('.sepia-output'),
			saturateOutput = document.querySelector('.saturate-output'),
			hueOutput = document.querySelector('.hue-output'),



			imgContainer = document.querySelector('.editor'),
			btnNext = document.querySelector('.btn-next'),
			btnReset = document.querySelector('.btn-reset'),
			btnFullscreen = document.querySelector('.fullscreen');


//делаем рабочими ползунки инпутов и значния оутпутов
//полный говнокод с этими инпутами-оутпутами. Киньте плиз видео или статью, как повесить на МНОГО инпутов и чтобы они отображали знаячения на конкретные оутпуты. Как их связать, когда их много...
blurInput.addEventListener('input', function () {
	blurOutput.value = blurInput.value;
});
invertInput.addEventListener('input', function () {
	invertOutput.value = invertInput.value;
});
sepiaInput.addEventListener('input', function () {
	sepiaOutput.value = sepiaInput.value;
});
saturateInput.addEventListener('input', function () {
	saturateOutput.value = saturateInput.value;
});
hueInput.addEventListener('input', function () {
	hueOutput.value = hueInput.value;
});

// фильтр отображается по значению инпутов
blurInput.addEventListener('input', function () {
	const valueFilters = 'blur' + '(' + blurInput.value + 'px' + ') ';
	image.style.filter = valueFilters;
});

invertInput.addEventListener('input', function () {
	const valueFilters = 'invert' + '(' + invertInput.value + '%' + ') ';
	image.style.filter = valueFilters;
});

sepiaInput.addEventListener('input', function () {
	const valueFilters = 'sepia' + '(' + sepiaInput.value + '%' + ') ';
	image.style.filter = valueFilters;
});

saturateInput.addEventListener('input', function () {
	const valueFilters = 'saturate' + '(' + saturateInput.value + '%' + ') ';
	image.style.filter = valueFilters;
});

hueInput.addEventListener('input', function () {
	const valueFilters = 'hue-rotate' + '(' + hueInput.value + 'deg' + ') ';
	image.style.filter = valueFilters;
});

// кнопка reset
btnReset.addEventListener('click', function () {
	image.style.filter = 'none';
	resetRange(inputAll);
});

btnReset.addEventListener('click', function () {
	resetRange(outputAll);
});

// загрузка картинки
fileInput.addEventListener('change', function () {
	image.remove();
	const file = fileInput.files[0];
	const read = new FileReader();
	read.onload = function() {
		const imgNew = new Image();
		imgNew.src = read.result;
		imgContainer.append(imgNew);
	}
	read.readAsDataURL(file);
});

// следующая картинка
let count = 0;
btnNext.addEventListener('click', () => {
	const now = new Date();
	count = Number(count);
	count += 1;
	if (count <= 9){
		count = String(count);
		const zero = '0';
		count = zero + count;
	}
	if (count === 21){
		count = String(count);
		count = '01';
	}

	const nowHourse = now.getHours();

	if (nowHourse == 6 || nowHourse == 7 || nowHourse == 8 || nowHourse == 9 || nowHourse == 10 || nowHourse == 11) {
		image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${count}.jpg`;
	} else if (nowHourse == 12 || nowHourse == 13 || nowHourse == 14 || nowHourse == 15 || nowHourse == 16 || nowHourse == 17) {
		image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/${count}.jpg`;
	} else if (nowHourse == 18 || nowHourse == 19 || nowHourse == 20 || nowHourse == 21 || nowHourse == 22 || nowHourse == 23) {
		image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${count}.jpg`;
	} else {
		image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${count}.jpg`;
	}
});

btnFullscreen.addEventListener('click', () => {
	document.documentElement.requestFullscreen();
	if (document.documentElement.requestFullscreen) {
		document.exitFullscreen();
	}
});


// функция сброса инпутов и оутпутов

function resetRange(element) {
	element.forEach(function (item, index) {
		if (index == 3) {
			item.value = 100;
		} else {
			item.value = 0;
		}
	});
}

