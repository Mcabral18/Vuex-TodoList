<template>
  <div class="stats">
    <h3>A different componet</h3>
    <p>There are currently {{ countLinks }} links</p>
    <button class="rm" v-on:click="removeAllLinks">Remove all Links</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      msg: "",
    };
  },
  computed: {
    ...mapGetters(["countLinks"]),
  },
  methods: {
    ...mapMutations(["REMOVE_ALL"]),
    ...mapActions(["removeAll"]),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = "They have been removed";
      });
    },
  },
};
</script>

<style>
</style>