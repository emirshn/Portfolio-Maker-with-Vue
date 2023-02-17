<template>
  <base-card>
    <h3>{{ name }}</h3>
    <h4>{{ date }}</h4>
    <div>
      <base-badge
        v-for="skill in skills"
        :key="skill.name"
        :type="skill.type"
        :title="skill.name"
      >
      </base-badge>
    </div>
    <base-card>
      <h4>{{ longDesc }}</h4>
    </base-card>
    <base-card v-if="videoLink">
      <iframe
        class="video"
        width="560"
        height="315"
        :src="videoLink"
        frameborder="0"
        allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </base-card>
    <base-card v-if="imglink !== ''">
      <img :src="imglink" alt="img" class="image-fit" />
    </base-card>
    <div class="actions" v-if="type === 'programming' && sourceLink">
      <a :href="sourceLink" target="”_blank”">Source Code</a>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedProject: null,
    };
  },
  computed: {
    videoLink() {
      const youtubeEmbedTemplate = "https://www.youtube.com/embed/";
      const url = this.selectedProject.videoLink.split(
        /(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/
      );
      console.log("url", url);
      const YId =
        undefined !== url[2] ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0];
      console.log("YId", YId);
      if (YId === url[0]) {
        console.log("not a youtube link");
      } else {
        console.log("it's  a youtube video");
      }
      const topOfQueue = youtubeEmbedTemplate.concat(YId);
      console.log("topOfQueue", topOfQueue);
      if (topOfQueue === "https://www.youtube.com/embed/") {
        return null;
      }
      return topOfQueue;
    },
    type() {
      return this.selectedProject.type;
    },
    name() {
      if (this.selectedProject.name.length > 0) {
        return this.selectedProject.name;
      } else {
        return "unknown name";
      }
    },
    date() {
      if (this.selectedProject.date.length > 0) {
        return this.selectedProject.date;
      } else {
        return "unknown date";
      }
    },
    longDesc() {
      if (this.selectedProject.longDesc.length > 0) {
        return this.selectedProject.longDesc;
      } else {
        return "no description";
      }
    },
    skills() {
      return this.selectedProject.skills;
    },
    imglink() {
      return this.selectedProject.image;
    },
    sourceLink() {
      return this.selectedProject.sourceLink;
    },
  },
  created() {
    const projectsList = this.$store.getters["projects/projects"];
    this.selectedProject = projectsList.find(
      (project) => project.id === this.id
    );
  },
};
</script>

<style scoped>
video {
  width: 100% !important;
  height: auto !important;
  object-fit: fill;
}
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
