let container = document.getElementsByTagName('body')
let menu = document.getElementById('menu')

function openMenu() {
	if (menu.style.display == 'flex'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
        
    }
}


let dark = {
	backgroundColor: "#0D0D0D",
}

let white = {
	backgroundColor: "#ffffff",
}

function alteraTema(){
	if (container.style.backgroundColor == "#0D0D0D") {
		Object.assign(container.style, white);
	}else{
		Object.assign(container.style, dark);
	}
}