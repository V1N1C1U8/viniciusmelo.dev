let container = document.getElementsByTagName('body')
let menu = document.getElementById('menu')

function openMenu() {
	if (menu.style.display == 'flex'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
        
    }
}


