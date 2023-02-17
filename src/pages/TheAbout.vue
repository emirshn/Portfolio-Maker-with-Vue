<template>
  <base-card>
    <h1 class="margin: 0 auto">About Me</h1>
    <div class="paragraph" v-html="about"></div>
    <div class="actions"></div>
  </base-card>
</template>

<script>
export default {
  computed: {
    about() {
      const about = this.$store.getters["information/about"];
      return about.aboutText;
    },
  },
  created() {
    this.loadAbout();
  },
  methods: {
    async loadAbout() {
      await this.$store.dispatch("information/loadAbout");
    },
  },
};
</script>

<style scoped>
div {
  margin: 0 auto;
}

h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}
.actions {
  display: flex;
  justify-content: flex-end;
}

.paragraph {
  max-width: 700px;
}
</style>
