<template>
  <base-card>
    <div>
      <h1>Let's get in touch</h1>
      <div v-html="contact"></div>
      <ul>
        <li v-if="links[0]">
          <i class="fa fa-user-circle-o fa-lg fa-fw"></i>
          <a :href="links[0]" target="_blank">{{ links[0] }}</a>
        </li>
        <li v-if="links[1]">
          <i class="fa fa-envelope-o fa-lg fa-fw"></i>
          <a href="mailto:links[1]" target="_blank">{{ links[1] }}</a>
        </li>
        <li v-if="links[2]">
          <i class="fa fa-linkedin fa-lg fa-fw" style="vertical-align: -5%"></i>
          <a :href="links[2]" target="_blank">{{ links[2] }}</a>
        </li>
        <li v-if="links[3]">
          <i class="fa fa-github fa-lg fa-fw"></i>
          <a :href="links[3]" target="_blank">{{ links[3] }}</a>
        </li>
        <li v-if="links[4]">
          <i class="fa fa-gamepad fa-lg fa-fw"></i>
          <a :href="links[4]" target="_blank">{{ links[4] }}</a>
        </li>
        <li v-if="links[5]">
          <i class="fa fa-tumblr fa-lg fa-fw"></i>
          <a :href="links[5]" target="_blank">{{ links[5] }}</a>
        </li>
        <li v-if="links[6]">
          <i class="fa fa-steam fa-lg fa-fw"></i>
          <a :href="links[6]" target="_blank">{{ links[6] }}</a>
        </li>
      </ul>
    </div>
  </base-card>
</template>

<script>
export default {
  computed: {
    contact() {
      const contact = this.$store.getters["information/contact"];
      return contact.contactText;
    },
    links() {
      const links = this.$store.getters["information/contact"];
      const newLinks = [];
      const personalSite = links.links[0];
      const personalMail = links.links[1];
      const linkedin = links.links[2];
      const github = links.links[3];
      const itch_io = links.links[4];
      const tumblr = links.links[5];
      const steam = links.links[6];
      newLinks.push(
        personalSite,
        personalMail,
        linkedin,
        github,
        itch_io,
        tumblr,
        steam
      );
      return newLinks;
    },
  },
  methods: {
    async loadContact() {
      await this.$store.dispatch("information/loadContact");
    },
  },
  created() {
    this.loadContact();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-inline-start: 0px;
}

li {
  line-height: 1.8em;
  font-size: 1.2em;
}

@media only screen and (min-width: 620px) {
  ul {
    padding-inline-start: 40px;
  }

  li {
    line-height: 2em;
    font-size: 1.4em;
  }
}

i {
  margin-right: 20px;
}
</style>
