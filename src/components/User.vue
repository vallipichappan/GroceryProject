<template>
  <div>
    <input
      placeholder="Enter Text Here"
      v-model="tempMessage"
      @keyup.enter="submit"
      @keydown.enter="clear"
    />
  </div>
</template>

<script>
export default {
  name: "UsrMsg",
  data() {
    return {
      tempMessage: ""
    };
  },
  methods: {
    submit: function() {
      this.$emit("inputData", this.tempMessage);
      this.tempMessage = "";
    },
    clear: function(){
      this.$emit("inputData", "");
    }
  }
};
</script>