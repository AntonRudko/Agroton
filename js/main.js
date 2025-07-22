const menuBtn = document.querySelector('.menu__btn')
const menuList = document.querySelector('.menu--list')

menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('menu--active')
	menuBtn.classList.toggle('menu--active')
})
