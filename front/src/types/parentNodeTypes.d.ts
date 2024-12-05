declare global {
  export interface ParentNode {
    classList: {
      add: (className: string) => void;
      remove: (className: string) => void;
    };
  }
}
