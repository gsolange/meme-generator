const asideImg = document.querySelector('.aside-img')
const url = document.getElementById('url')
const image = document.querySelector('.image')
const imgColor = document.getElementById('img-color')
const optionsFilterBg = document.getElementById('options-filter-bg')
const brightnessFilter = document.getElementById('brightness')
const opacityFilter = document.getElementById('opacity')
const contrastFilter = document.getElementById('contrast')
const blurFilter = document.getElementById('blur')
const grayscaleFilter = document.getElementById('grayscale')
const sepiaFilter = document.getElementById('sepia')
const hueFilter = document.getElementById('hue')
const saturateFilter = document.getElementById('saturate')
const invertFilter = document.getElementById('invert')
const resetBtn = document.getElementById('reset-btn')
const imageForm = document.getElementById('imageForm')
const textInputColor = document.getElementById("text-input-color")
const contInputColor = document.getElementById("cont-input")

contInputColor.addEventListener('click', () => {
    imgColor.click()
})

url.addEventListener('change', (e) => {
	const input = e.target
    image.style.backgroundImage = `url("${input.value}")`
    image.style.backgroundSize = 'cover'
    image.style.backgroundPosition = 'center'
})

const updateColor = () => {
    image.style.backgroundColor = (`${imgColor.value}`)
    textInputColor.innerText = `${imgColor.value}`
}

imgColor.addEventListener('input', updateColor)

optionsFilterBg.addEventListener('change', () => {
    image.style.backgroundBlendMode = optionsFilterBg.value

})

const updateFilter = () => {
    image.style.filter = `brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) grayscale(${grayscaleFilter.value}%) sepia(${sepiaFilter.value}%) hue-rotate(${hueFilter.value}deg) saturate(${saturateFilter.value}%) invert(${invertFilter.value})`
}

brightnessFilter.addEventListener('input', updateFilter)
opacityFilter.addEventListener('input', updateFilter)
contrastFilter.addEventListener('input', updateFilter)
blurFilter.addEventListener('input', updateFilter)
grayscaleFilter.addEventListener('input', updateFilter)
sepiaFilter.addEventListener('input', updateFilter)
hueFilter.addEventListener('input', updateFilter)
saturateFilter.addEventListener('input', updateFilter)
invertFilter.addEventListener('input', updateFilter)

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    imageForm.reset()
    updateFilter()
    updateColor()
})

const body = document.body
const btnImgAside = document.getElementById('btn-img-aside')
const btnTxtAside = document.getElementById('btn-txt-aside')
const btnTheme = document.getElementById('btn-theme')
const textTheme = document.getElementById('text-theme')
const contImage = document.querySelector('.mainContainerMemeInside')
const closeAside = document.getElementById('close-aside')
const aside = document.querySelector('.aside')

btnImgAside.addEventListener('click', () => {
	aside.classList.remove('hidden')
	asideImg.classList.remove('hidden')
	asideTxt.classList.add('hidden')

})
btnTxtAside.addEventListener('click', () => {
	aside.classList.remove('hidden')
	asideImg.classList.add('hidden')
	asideTxt.classList.remove('hidden')
})

closeAside.addEventListener('click', () => {
	aside.classList.add('hidden')
})


if (window.screen.width <= '700') {
	aside.classList.add('hidden')
}

const asideTxt = document.querySelector(".aside-txt")
const topText = document.getElementById("top-text")
const bottomText = document.getElementById("bottom-text")
const topImage = document.querySelector(".top-text")
const bottomImage = document.querySelector(".bottom-text")
const checkTopText = document.getElementById("check-top-text")
const checkBottomText = document.getElementById("check-bottom-text")
const contTextTop = document.getElementById("cont-text-top")
const textFontTop = document.getElementById("textFontTop")
const textFontBottom = document.getElementById("textFontBottom")
const optionTextFont = document.getElementById("optionTextFont")
const fontSize = document.getElementById("fontSize")
const alignLeftBtn = document.getElementById("btn-left")
const alignRightBtn = document.getElementById("btn-right")
const alignCenterBtn = document.getElementById("btn-center")
const textColor = document.getElementById("text-color")
const textBackground = document.getElementById("text-background")
const textColorHex = document.getElementById("text-color-hex")
const textBackgroundHex = document.getElementById("text-background-hex")
const checkTransparent = document.getElementById("checkbox-transparent")
const textShadowNone = document.getElementById("text-shadow-none")
const textShadowLight = document.getElementById("text-shadow-light")
const textShadowDark = document.getElementById("text-shadow-dark")
const paddingText = document.getElementById("padding-text")
const lineHeight = document.getElementById("line-height")
const colorInput = document.getElementById("color-input")
const backgroundInput = document.getElementById("background-input")


const forms = document.getElementsByTagName('form')

for (form of forms) {
	form.addEventListener('submit', (e) => {
		e.preventDefault()
	})
}

topText.addEventListener('keyup', (e) => {
	topImage.innerText = e.target.value
})

bottomText.addEventListener('keyup', (e) => {
	bottomImage.innerText = e.target.value
})

checkTopText.addEventListener('change', (e) => {
	if (e.target.checked) {
		topImage.style.display = 'none'
	} else {
		topImage.style.display = 'flex'
	}
})

checkBottomText.addEventListener('change', (e) => {
	if (e.target.checked) {
		bottomImage.style.display = 'none'
	} else {
		bottomImage.style.display = 'flex'
	}
})

optionTextFont.addEventListener('change', () => {
	textFontTop.style.fontFamily = optionTextFont.value
	textFontBottom.style.fontFamily = optionTextFont.value
})

fontSize.addEventListener('change', () => {
	textFontTop.style.fontSize = fontSize.value + "px"
	textFontBottom.style.fontSize = fontSize.value + "px"
})

alignLeftBtn.addEventListener('click', (e) => {
	e.preventDefault()
	textFontTop.style.textAlign = "flex-start"
	textFontBottom.style.textAlign = "flex-start"
})

alignRightBtn.addEventListener('click', (e) => {
	e.preventDefault()
	textFontTop.style.textAlign = "flex-end"
	textFontBottom.style.textAlign = "flex-end"
})

alignCenterBtn.addEventListener('click', (e) => {
	e.preventDefault()
	textFontTop.style.textAlign = "center"
	textFontBottom.style.textAlign = "center"
})

textColor.addEventListener('input', () => {
	textFontTop.style.color = `${textColor.value}`
	textFontBottom.style.color = `${textColor.value}`
	textColorHex.innerText = `${textColor.value}`
})

textBackground.addEventListener('input', () => {
	textFontTop.style.backgroundColor = `${textBackground.value}`
	textFontBottom.style.backgroundColor = `${textBackground.value}`
	textBackgroundHex.innerText = `${textBackground.value}`
})

checkTransparent.addEventListener('change', (e) => {
	if (e.target.checked) {
		textFontTop.style.backgroundColor = "transparent"
		textFontBottom.style.backgroundColor = "transparent"
	} else {
		textFontTop.style.backgroundColor = `${textBackground.value}`
		textFontBottom.style.backgroundColor = `${textBackground.value}`
	}
})

textShadowNone.addEventListener('click', () => {
	textFontTop.style.textShadow = "none"
	textFontBottom.style.textShadow = "none"
})

textShadowLight.addEventListener('click', () => {
	textFontTop.style.textShadow =
		"rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px"
	textFontBottom.style.textShadow =
		"rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px"
})

textShadowDark.addEventListener('click', () => {
	textFontTop.style.textShadow =
		"rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px"
	textFontBottom.style.textShadow =
		"rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px"
})

paddingText.addEventListener('input', (e) => {
	textFontTop.style.padding = `${paddingText.value}px 10px`
	textFontBottom.style.padding = `${paddingText.value}px 10px`
})

lineHeight.addEventListener('change', () => {
	textFontTop.style.lineHeight = `${lineHeight.value}`
	textFontBottom.style.lineHeight = `${lineHeight.value}`
})

colorInput.addEventListener('click', () => {
	textColor.click()
})

backgroundInput.addEventListener('click', () => {
	textBackground.click()
})

