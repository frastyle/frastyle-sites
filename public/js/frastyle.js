// eslint-disable-next-line no-unused-vars
let clipboard = (e) => {
	const button = e.target.parentNode.querySelector('.clipboard');
	const data = button.dataset;
	let tempValue = button.innerHTML;
	const content = e.target.parentNode.querySelectorAll(
		'[data-value="content"]'
	);

	const feedback = (status, fallback) => {
		button.disabled = true;
		button.classList.add('clipboard-' + status);
		button.innerHTML = data[status] ? data[status] : fallback;
		setTimeout(() => {
			button.classList.remove('clipboard-' + status);
			button.innerHTML = tempValue;
			button.disabled = false;
		}, 5000);
	};

	let i = 0;
	let textValue = '';
	while (content[i]) {
		textValue += content[i].innerText + '\n';
		i++;
	}

	navigator.clipboard.writeText(textValue).then(
		// Success
		() => {
			feedback('success', 'Berhasil menyalin');
		},
		// Error
		() => {
			feedback('error', 'Gagal menyalin');
		}
	);
};

// eslint-disable-next-line no-unused-vars
function menu_mobile(params) {
	let menu = document.getElementById('menu-mobile');
	if (params) {
		menu.classList.remove('d-none');
	} else if (menu.classList.contains('d-none')) {
		menu.classList.remove('d-none');
	} else {
		menu.classList.add('d-none');
	}
}

// eslint-disable-next-line no-unused-vars
function myFunction(params) {
	document.getElementById(params).classList.toggle('show');
}

window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName('dropdown-content');
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};
