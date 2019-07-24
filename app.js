// const colorPicker = document.getElementById('color');

// colorPicker.addEventListener('change', e => {
//   document.body.style.setProperty('--main-bg', colorPicker.value);
// });

const themes = {
	white: {
		'--box-bg': '#ffffff',
		'--box-text-color': '#000000'
	},
	black: {
		'--box-bg': '#000000',
		'--box-text-color': '#ffffff'
	},
	sea: {
		'--box-bg': '#28e3ff',
		'--box-text-color': '#ffffff'
	},
	marshmallow: {
		'--box-bg': '#ff82da',
		'--box-text-color': '#ffffff'
	}
};

const themeSelect = document.getElementById('themes');
const form = document.forms['customThemeFrom'];
const colorInputs = document.querySelectorAll('[data-var]');
const inputThemeName = form.elements['themeName'];
const fragment = document.createDocumentFragment('div');

themeSelect.addEventListener('change', e => {
	const themeVariables = themes[themeSelect.value];
	Object.entries(themeVariables).forEach(([ key, value ]) => {
		console.log(value);
		
		const setInput = document.createElement('div');
		setInput.classList.add('controls-item');
		fragment.appendChild(setInput);

		const label = document.createElement('label');
		label.setAttribute('for', `color${key}`);
		label.textContent = key;
		label.style.minWidth = '150px';
		setInput.appendChild(label);

		const input = document.createElement('input');
		input.setAttribute('type', 'color');
		input.setAttribute('value', value);
		input.setAttribute('id', `color${key}`);
		input.setAttribute('data-var', `color${key}`);
		setInput.appendChild(input);
		inputs.appendChild(fragment);
		console.log(setInput);
	});
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const newTheme = {};
  const newThemeName = inputThemeName.value;
  colorInputs.forEach(input => {
    const key = input.dataset.var;
    const value = input.value;
    newTheme[key] = value;
  });

  themes[newThemeName] = newTheme;
  const newSelectOption = new Option(newThemeName, newThemeName);
  themeSelect.appendChild(newSelectOption);
  form.reset();
});
