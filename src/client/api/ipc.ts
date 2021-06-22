interface IpcRendererEvent {
  sender: unknown;
  senderId: number;
}

type IpcListener = (event: IpcRendererEvent, ...args: any[]) => void;

interface IpcRenderer {
  on(channel: string, listener: IpcListener): void;
  once(channel: string, listener: IpcListener): void;
  removeListener(channel: string, listener: IpcListener): void;
  removeAllListeners(channel?: string): void;
  send(channel: string, ...args: any[]): void;
  invoke<T>(channel: string, ...args: any[]): Promise<T>;
}

declare global {
  interface Window {
    ipc: IpcRenderer;
  }
}

export default window.ipc;
