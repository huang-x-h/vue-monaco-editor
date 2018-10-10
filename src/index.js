import MonacoEditor from './components/monaco-editor.vue';
import MonacoDiffEditor from './components/monaco-diff-editor.vue';
import MonacoLoader from './MonacoLoader';

function install(Vue, options) {
  Vue.component('MonacoEditor', MonacoEditor);
  Vue.component('MonacoDiffEditor', MonacoDiffEditor);

  MonacoLoader.setup(options.monacoEditorUrl);
}

export default {
  MonacoEditor,
  MonacoDiffEditor,
  install
}