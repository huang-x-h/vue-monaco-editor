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
      monaco.editor.create(self.$el, {
        value: self.value,
        language: self.language,
        theme: self.theme
      });
    });
  }
};
</script>
