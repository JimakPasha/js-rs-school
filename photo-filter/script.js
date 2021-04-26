'use strict';

const image = document.querySelector('img'),
			fileInput = document.querySelector('[type="file"]'),
			output = document.querySelector('output'),
			filtersBox = document.querySelector('.filters'),

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

// загрузка картинки
fileInput.addEventListener('change', function () {
	image.remove();
	const file = fileInput.files[0];
	const read = new FileReader();
	read.onload = function() {
		const imgNew = new Image();
		imgNew.src = read.result;
		imgContainer.append(img);
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

	if (now.getHours() == 6 || 7 || 8 || 9 || 10 || 11) {
		image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${count}.jpg`;
	} else if (now.getHours() == 12 || 13 || 14 || 15 || 16 || 17) {
		image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/${count}.jpg`;
	} else if (now.getHours() == 18 || 19 || 20 || 21 || 22 || 23) {
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




