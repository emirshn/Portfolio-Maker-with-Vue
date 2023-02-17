<template>
  <base-card>
    <h3>{{ nameChecked }}</h3>
    <h4>{{ dateChecked }}</h4>
    <div>
      <base-badge
        v-for="skill in skills"
        :key="skill.name"
        :type="skill.type"
        :title="skill.name"
      >
      </base-badge>
    </div>
    <base-card v-if="shortDesc">
      <h4>{{ shortDesc }}</h4>
    </base-card>
    <base-card v-if="imglink">
      <img :src="imglink" alt="img" class="image-fit" />
    </base-card>
    <div class="actions">
      <base-button mode="outline" v-if="type === 'programming'">
        <a :href="sourceLink" target="”_blank”">Source Code</a>
      </base-button>
      <base-button link :to="projectDetailsLink">View Details</base-button>
    </div>
  </base-card>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "date",
    "skills",
    "shortDesc",
    "image",
    "sourceLink",
    "type",
  ],
  computed: {
    nameChecked() {
      if (this.name.length > 0) {
        return this.name;
      } else return "unknown name";
    },
    dateChecked() {
      if (this.date.length > 0) {
        return this.date;
      } else return "unknown date";
    },
    imglink() {
      return this.image;
    },
    projectDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}
.image-fit {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
