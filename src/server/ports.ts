import { ipcMain } from 'electron';
import SerialPort from 'serialport';
import Port from '../common/Port';

export default () => {
    ipcMain.handle('ports:list', async (event: Electron.IpcMainInvokeEvent, ...args: any[]) => {
        return (await SerialPort.list()).map(p => {
            return new Port(p.path, p.manufacturer);
        });
    });
};
