import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      resume: {
        resumeText: `
        <div>
        This is a test version of resume. You can also write html code here. Check <strong>Set Database</strong> page for initalizing.

        </div>`,
        education: [
          {
            id: "e1",
            schoolName: "Test School",
            years: "2015-2019",
            gpa: "3.23",
            city: "kocaeli",
          },
          {
            id: "e2",
            schoolName: "Test School 2",
            years: "2019-2023",
            gpa: "3.23",
            city: "istanbul",
          },
        ],
        experience: [
          {
            id: "ex1",
            companyName: "Test Experience",
            years: "2021-2021",
            skills: [
              { name: "Csharp", type: "backend" },
              { name: "SQL", type: "database" },
              { name: "ASP.NET", type: "frontend" },
              { name: "Object Oriented Programming", type: "backend" },
              { name: "Agile Methods", type: "backend" },
            ],
            city: "kocaeli",
          },
          {
            id: "ex2",
            companyName: "Test Experience 2",
            years: "2023-2023",
            skills: [
              { name: "Csharp", type: "backend" },
              { name: "Unity", type: "other" },
              { name: "Blender", type: "other" },
              { name: "Zbrush", type: "other" },
            ],
            city: "kocaeli",
          },
        ],
        skills: [
          { name: "java", type: "backend" },
          { name: "Csharp", type: "backend" },
          { name: "C", type: "backend" },
          { name: "SQL", type: "database" },
          { name: "ASP.NET", type: "frontend" },
          { name: "React", type: "frontend" },
          { name: "Vue", type: "frontend" },
          { name: "Blender", type: "other" },
          { name: "Zbrush", type: "other" },
          { name: "Unity", type: "other" },
          { name: "Photoshop", type: "other" },
          { name: "Python", type: "backend" },
          { name: "Object Oriented Programming", type: "backend" },
          { name: "Component Based Development", type: "frontend" },
          { name: "Agile Methods", type: "backend" },
        ],
      },
      about: {
        aboutText: `
        <div>
        This is a test version of about. You can also write html code here. Check <strong>Set Database</strong> page for initalizing
        </div>
  `,
      },
      contact: {
        contactText: `
        <div style="margin-bottom: 40px">
        This is a test version of contact. You can also write html code here. Check <strong>Set Database</strong> page for initalizing

        </div>`,
        links: [
          "http://mywebsite.com",
          "my@email.com",
          "https://www.linkedin.com/me",
          "https://github.com/me",
          "https://myself.itch.io",
          "https://myblog.tumblr.com",
          "https://steamcommunity.com/id/me",
        ],
      },
    };
  },
  mutations,
  actions,
  getters,
};
