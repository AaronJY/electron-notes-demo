const {app, BrowserWindow} = require('electron')

let mainWindow

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 550, height: 450,
        resizable: false, maximizable: false
    })

    mainWindow.loadURL('file://' + __dirname + '/app/index.html')
    mainWindow.openDevTools()
    mainWindow.setMenu(null)
    mainWindow.on('closed', function() {
        mainWindow = null
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
