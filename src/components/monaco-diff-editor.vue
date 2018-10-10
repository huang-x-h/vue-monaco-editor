<template>
  <div></div>
</template>
<script>
import MonacoLoader from "../MonacoLoader";

export default {
  props: ["original", "modified", "language"],

  mounted: function() {
    let self = this;

    MonacoLoader.load(monaco => {
      let diffEditor = monaco.editor.createDiffEditor(self.$el);
      diffEditor.setModel({
        original: monaco.editor.createModel(self.original, self.language),
        modified: monaco.editor.createModel(self.modified, self.language)
      });
    });
  }
};
</script>
