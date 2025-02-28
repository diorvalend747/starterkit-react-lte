import 'summernote';
import 'jquery';

declare global {
  interface JQuery {
    summernote: (options?: any) => JQuery;
  }
}

declare global {
  interface Window {
    CodeMirror: any;
  }
}

declare global {
  interface JQuery<TElement = HTMLElement> {
    ionRangeSlider: (options?: any) => JQuery<TElement>;
    bootstrapSlider: (options?: any) => JQuery<TElement>;
  }
}
