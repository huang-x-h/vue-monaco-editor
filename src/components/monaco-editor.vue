<template>
  <div></div>
</template>
<script>
import MonacoLoader from "../MonacoLoader";

export default {
  name: "MonacoEditor",
  props: ["value", "language", "theme"],

  mounted: function() {
    let self = this;
    MonacoLoader.load(monaco => {
      self.editor = monaco.editor.create(self.$el, {
        value: self.value,
        language: self.language,
        theme: self.theme
      });
    });
  },

  destroyed: function() {
    if (this.editor) this.editor.dispose();
  }
};
</script>
