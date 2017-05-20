const {app, BrowserWindow} = require('electron')

let mainWindow

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 500, height: 400,
        resizable: false, maximizable: false
    })

    mainWindow.loadURL('file://' + __dirname + '/app/index.html')
    mainWindow.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
