<template>
  <div>
    <project-item
      v-for="project in projectsList"
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
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
export default {
  components: {
    ProjectItem,
  },
  computed: {
    projectsList() {
      const projects = this.$store.getters["projects/projects"];
      const filteredProjects = projects.filter((project) => {
        return project.type == "other";
      });
      return filteredProjects;
    },
  },
  created() {
    this.loadProjects();
  },
  methods: {
    async loadProjects() {
      await this.$store.dispatch("projects/loadProjects");
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
