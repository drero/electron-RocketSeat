import { Tray, Menu, nativeImage, BrowserWindow } from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
const icon = nativeImage.createFromPath(
  path.resolve(__dirname, "rotionTemplate.png")
);
const tray = new Tray(icon);

const menu = Menu.buildFromTemplate([
  { label: "GoHortion", enabled: false },
  { type: "separator" },
  {
    label: "Criar novo documento",
    click: () => {
      window.webContents.send('new-document')
    },
  },
  { type: "separator" },
  { label: "Documentos recentes", enabled: false },
  {
    label: "GoHorse",
    accelerator: "CommandOrControl+1",
    acceleratorWorksWhenHidden: false,
  },
  {
    label: "JavaScript",
    accelerator: "CommandOrControl+2",
    acceleratorWorksWhenHidden: false,
  },
  {
    label: "TypeScript",
    accelerator: "CommandOrControl+3",
    acceleratorWorksWhenHidden: false,
  },
  { label: "Sair do GoHortion", role: "quit" },
]);
tray.setContextMenu(menu);
}
