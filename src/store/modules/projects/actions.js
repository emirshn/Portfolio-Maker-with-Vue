import firebase from "../../../firebase.js";

export default {
  async registerProject(context, data) {
    const projectData = {
      name: data.name,
      date: data.date,
      skills: data.skills,
      shortDesc: data.shortDesc,
      longDesc: data.longDesc,
      sourceLink: data.sourceLink,
      videoLink: data.videoLink,
      image: data.image,
      type: data.type,
    };

    const response = await fetch(
      `${firebase.link}projects/${data.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(projectData),
      }
    );

    if (!response.ok) {
      // error...
    }
    context.commit("registerProject", {
      ...projectData,
      id: projectData.id,
    });
  },

  async loadProjects(context) {
    const response = await fetch(
      `${firebase.link}projects.json`
    );
    const responseData = await response.json();

    const projects = [];
    for (const key in responseData) {
      const project = {
        id: key,
        name: responseData[key].name,
        date: responseData[key].date,
        skills: responseData[key].skills,
        shortDesc: responseData[key].shortDesc,
        longDesc: responseData[key].longDesc,
        sourceLink: responseData[key].sourceLink,
        videoLink: responseData[key].videoLink,
        image: responseData[key].image,
        type: responseData[key].type,
      };
      projects.push(project);
    }
    context.commit("setProjects", projects);
  },
};
