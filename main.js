const fs = require("fs")
const path = require("path")
const { app, BrowserWindow, screen, ipcMain } = require("electron")

ipcMain.handle( "an-action", async (event,data) => {
	
	return "coucou"

})

function createWindow(){

	// const {width,height} = screen.getPrimaryDisplay().workAreaSize
	
	win = new BrowserWindow({
		// width: width/2,
		// height: height/2,
		show:false,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		}
	})

	win.once( "ready-to-show", () => {
	setTimeout(function(){
	win.show()
	},100)
	})

	win.loadFile("index.html")

}

app.whenReady().then(createWindow)

/*app.on("before-quit", () => {
	clearInterval(progressInterval)
})

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
	app.quit()
	}
})

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
	createWindow()
	}
})*/