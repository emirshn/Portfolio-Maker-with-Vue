import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      projects: [
        {
          id: "p1",
          name: "project 1 name",
          date: "1.1.2023-1.1.2023",
          skills: [
            { name: "html", type: "frontend" },
            { name: "Blender", type: "other" },
            { name: "SQL", type: "database" },
            { name: "Python", type: "backend" },
          ],
          shortDesc: "this is a short description of project 1",
          longDesc:
            "this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long description of project 1",
          sourceLink: "https://github.com/emirshn/Find-a-Coach-App-with-Vue",
          videoLink: "https://youtu.be/zL19uMsnpSU",
          image:
            "https://pbs.twimg.com/media/Fo3PFOhX0AEzzI0?format=jpg&name=large",
          type: "programming",
        },
        {
          id: "p2",
          name: "project 2 name",
          date: "1.1.2023-1.1.2024",
          skills: [
            { name: "html", type: "frontend" },
            { name: "Python", type: "backend" },
            { name: "SQL", type: "database" },
            { name: "Javascript", type: "frontend" },
          ],
          shortDesc: "this is a short description of project 2",
          longDesc:
            "this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long description of project 2",
          sourceLink: "https://github.com/emirshn/Find-a-Coach-App-with-Vue",
          videoLink: "",
          image:
          "https://pbs.twimg.com/media/Fo3PFOhX0AEzzI0?format=jpg&name=large",
          type: "programming",
        },
        {
          id: "p3",
          name: "project 3 name",
          date: "1.1.2023-1.1.2025",
          skills: [
            { name: "Blender", type: "other" },
            { name: "Zbrush", type: "other" },
          ],
          shortDesc: "this is a short description of project 3",
          longDesc:
            "this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long description of project 3",
          sourceLink: "https://github.com/emirshn/Find-a-Coach-App-with-Vue",
          videoLink: "https://youtu.be/zL19uMsnpSU",
          image:
            "https://pbs.twimg.com/media/FpBU5pYXgAUPbm0?format=jpg&name=large",
          type: "other",
        },
        {
          id: "p4",
          name: "project 4 name",
          date: "1.1.2023-1.1.2025",
          skills: [
            { name: "Blender", type: "other" },
            { name: "Zbrush", type: "other" },
          ],
          shortDesc: "this is a short description of project 4",
          longDesc:
            "this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long description of project 3",
          sourceLink: "https://github.com/emirshn/Find-a-Coach-App-with-Vue",
          videoLink: "https://youtu.be/zL19uMsnpSU",
          image:
            "https://pbs.twimg.com/media/FpBU5pYXgAUPbm0?format=jpg&name=large",
          type: "programming",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
