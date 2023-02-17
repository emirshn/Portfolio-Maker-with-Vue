<template>
  <base-card>
  <h1 class="margin: 0 auto">Resume</h1>
    <div class="paragraph" v-html="resume.resumeText"></div>
   
  </base-card>
  <base-card>
    <div class="paragraph">
      <h1 class="margin: 0 auto">Education</h1>
      <div v-for="education in resume.education" :key="education.id">
        <base-card>
          <h3>School Name: {{ education.schoolName }}</h3>
          <h4>Years: {{ education.years }}</h4>
          <h4>GPA: {{ education.gpa }}</h4>
          <h4>City: {{ education.city }}</h4>
        </base-card>
      </div>
    </div>
 
  </base-card>
  <base-card>
    <div class="paragraph">
      <h1 class="margin: 0 auto">Experience</h1>
      <div v-for="experience in resume.experience" :key="experience.id">
        <base-card>
          <h3>Company Name: {{ experience.companyName }}</h3>
          <h4>Years: {{ experience.years }}</h4>
          <h4>City: {{ experience.city }}</h4>
          <base-badge
            v-for="skill in experience.skills"
            :key="skill.name"
            :type="skill.type"
            :title="skill.name"
          >
          </base-badge>
        </base-card>
      </div>
    </div>
  
  </base-card>
  <base-card>
    <div class="paragraph">
      <h1 class="margin: 0 auto">Skills</h1>
      <div>
        <base-badge
          v-for="skill in resume.skills"
          :key="skill.name"
          :type="skill.type"
          :title="skill.name"
        >
        </base-badge>
      </div>
    </div>
   
  </base-card>
</template>

<script>
export default {
  computed: {
    resume() {
      const resume = this.$store.getters["information/resume"];
      return resume;
    },
  },
  methods: {
    async loadResume() {
      await this.$store.dispatch("information/loadResume");
    },
  },
  created() {
    this.loadResume();
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
