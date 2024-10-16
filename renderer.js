const { ipcRenderer } = require("electron")

async function start(){

	let data = await ipcRenderer.invoke("an-action",[...document.getElementById("show_url").children].map(x=>x.textContent))

	document.getElementById("result").innerText = data

}

document.addEventListener("drop", (event) => {
	
	event.preventDefault()

	if ( document.getElementById("show_url").children.length >= 2 ){
		document.getElementById("show_url").children[0].remove()
	}

	let m = [...document.getElementById("show_url").children].map(x=>x.textContent)

	for ( const file of [...event.dataTransfer.files].slice(0,2) ) {

		if( !m.includes(file.path) ){
			
			document.getElementById("show_url").innerHTML += "<li>" + file.path + "</li>"
		}
	}
	
})
 
document.addEventListener("dragover", (e) => {
	e.preventDefault()
})

function clear_all(){

	document.getElementById("show_url").innerHTML = ""
	document.getElementById("result").innerHTML = ""

}