export {};

declare global {
  interface Window {
    clarity?: (method: string, ...args: string[]) => void;
  }
}
