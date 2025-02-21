const {app, BrowserWindow} = require('electron');
const path = require('path');
let mainWindow;

app.whenReady().then(()=>{
    mainWindow = new BrowserWindow({
        width:500,
        height:500,
        resizable: false,
        icon: path.join(__dirname,'..','assets','icons','icon.ico')
        
    });
    mainWindow.removeMenu()
    mainWindow.loadURL(path.join(__dirname,'index.html'))
});
