interface Ipc {
    invoke<T>(channel: string, ...args: any[]): Promise<T>;
}

declare global {
    interface Window {
        ipc: Ipc
    }
}

export default window.ipc;
