btnTheme.addEventListener('click', () => {
	body.classList.toggle('darkModeSwitcher')
	body.classList.toggle('lightModeSwitcher')
	if (body.className == "darkModeSwitcher") {
		textTheme.innerText = "Light mode"
	} else {
		textTheme.innerText = "Dark mode"
	}
})