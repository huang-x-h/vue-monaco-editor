let callbacksQueue = [];
let loaderPending = false;
let monacoEditorUrl = '';

export default {
  setup: function(url) {
    monacoEditorUrl = url;
  },

  load: function(callback) {
    function onLoad() {
      window.require.config({
        paths: {
          'vs': monacoEditorUrl
        }
      });

      window.require(['vs/editor/editor.main'], function() {
        callbacksQueue.map(callback => callback(window.monaco));
      });
    }

    if (window.monaco) {
      callback(window.monaco);
    } else {
      callbacksQueue.push(callback);

      if (!loaderPending) {
        const loaderUrl = `${monacoEditorUrl}/loader.js`;
        const loaderScript = window.document.createElement('script');
        loaderScript.src = loaderUrl;
        loaderScript.addEventListener('load', onLoad);
        window.document.body.appendChild(loaderScript);
        loaderPending = true;
      }
    }
  }
}