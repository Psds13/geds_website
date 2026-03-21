export {}; // <- deve vir antes do declare global ou fora dele

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => {
        init: () => void;
      };
    };
  }
}

import 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}