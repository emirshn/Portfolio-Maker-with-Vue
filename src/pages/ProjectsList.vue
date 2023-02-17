<template>
  <ul v-for="array in rowArray" :key="array[0].id">
    <div>
      <project-item
        v-for="project in array"
        :key="project.id"
        :id="project.id"
        :name="project.name"
        :date="project.date"
        :skills="project.skills"
        :shortDesc="project.shortDesc"
        :image="project.image"
        :sourceLink="project.sourceLink"
        :type="project.type"
      ></project-item>
    </div>
  </ul>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
export default {
  components: {
    ProjectItem,
  },
  created() {
    this.loadProjects();
  },
  methods: {
    async loadProjects() {
      await this.$store.dispatch("projects/loadProjects");
    },
  },
  computed: {
    rowCount() {
      const projects = this.$store.getters["projects/projects"];
      var count = Object.keys(projects).length;
      return count % 2 === 0 ? count % 2 : (count % 2) + 1;
    },
    rowArray() {
      var rowArray = [],
        i,
        k;
      for (i = 0, k = -1; i < Object.keys(this.projectsList).length; i++) {
        if (i % 2 === 0) {
          k++;
          rowArray[k] = [];
        }
        rowArray[k].push(this.projectsList[i]);
      }
      return rowArray;
    },
    projectsList() {
      const projects = this.$store.getters["projects/projects"];
      const filteredProjects = projects.filter((project) => {
        return project.type == "programming";
      });
      return filteredProjects;
    },
  },
};
</script>

<style>
.flex-parent {
  display: flex;
  justify-content: center;
  zoom: 0.9;
}
.flex-child {
  flex: 0.4;
}
</style>
