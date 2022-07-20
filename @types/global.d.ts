import type { PropType as VuePropType, VueElement } from 'vue';
import { App } from 'vue';
import type { DialogApiInjection } from 'naive-ui/lib/dialog/src/DialogProvider';
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider';
import { LoadingBarApiInjection } from 'naive-ui/lib/loading-bar/src/LoadingBarProvider';
import { AxiosPromise } from 'axios';
// GlobalComponents for Volar

declare global {
  interface Window {
    // Global vue app instance
    __APP__: App<Element>;
    webkitCancelAnimationFrame: (handle: number) => void;
    mozCancelAnimationFrame: (handle: number) => void;
    oCancelAnimationFrame: (handle: number) => void;
    msCancelAnimationFrame: (handle: number) => void;
    webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  }
  interface Window {
    $message: MessageApiInjection;
    $dialog: DialogApiInjection;
    $loading: LoadingBarApiInjection;
    __axiosPromiseArr: AxiosPromise[];
    $vue: App<Element>;
  }

  // vue
  type PropType<T> = VuePropType<T>;

  type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  };

  type Nullable<T> = T | null;

  type Recordable<T = any> = Record<string, T>;
  type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };
  type Indexable<T = any> = {
    [key: string]: T;
  };
  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
  type TimeoutHandle = ReturnType<typeof setTimeout>;
  type IntervalHandle = ReturnType<typeof setInterval>;

  interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  interface WheelEvent {
    path?: EventTarget[];
  }

  function parseInt(s: string | number, radix?: number): number;

  function parseFloat(string: string | number): number;
}
