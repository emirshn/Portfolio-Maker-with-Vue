<template>
  <div>
    <base-card>
      <ul>
        <li>
          This app uses firebase as database. You can also edit code to use this
          app. For firebase you need only change firebase adress in firebase.js
          to your firebase link.
        </li>
        <li>
          You can initalize database with below
          <strong>Initialize Database</strong> button and create a inital
          version of data and you can see format of data and edit database.
        </li>
        <li>
          You can change data seperately with other buttons and
          <strong>Add Project</strong> creates new project. There is currently
          no remove project function.
        </li>
        <li>
          There is currently a bug when submitting forms, some parts doesnt
          change in database, in this case you need to submit form again. I
          disabled browser default but normally it should refresh the page.
        </li>
        <li>
          After editing pages you can delete this page from code and use it.
        </li>
        <li>
          Videolink must be youtube link and you need to write link of image.
          There is currently no file adding function.
        </li>
        <li>
          I added some checks but they are probably not enough so please try to
          fill every part of forms. You can leave youtube, source and image
          links empty.
        </li>
      </ul>
    </base-card>
    <base-card>
      <base-button type="button" mode="flat" @click="initalizeFirebase">
        Initialize Database
      </base-button>

      <base-button type="button" mode="flat" @click="aboutVisible">
        Edit About
      </base-button>

      <base-button type="button" mode="flat" @click="resumeVisible">
        Edit Resume
      </base-button>

      <base-button type="button" mode="flat" @click="contactVisible">
        Edit Contact
      </base-button>

      <base-button type="button" mode="flat" @click="projectVisible">
        Add Project
      </base-button>
    </base-card>

    <base-card v-if="isAbout">
      <h1>About</h1>
      <form @submit.prevent="setAbout">
        <div class="form-control">
          <label for="abouttext">About Text</label>
          <textarea
            id="abouttext"
            rows="5"
            v-model.trim="abouttext.val"
          ></textarea>
        </div>
        <base-button>Set About</base-button>
      </form>
    </base-card>

    <base-card v-if="isResume">
      <h1>Resume</h1>
      <form @submit.prevent="setResume">
        <div class="form-control">
          <label for="resumetext">Resume Text</label>
          <textarea
            id="resumetext"
            rows="5"
            v-model.trim="resumetext.val"
          ></textarea>
        </div>

        <ul v-for="education in educations" :key="education.schoolName">
          <li>
            {{ education.schoolName }}, {{ education.schoolYears }},
            {{ education.gpa }},
            {{ education.schoolCity }}
          </li>
        </ul>

        <base-card>
          <h2>Education</h2>
          <form @submit.prevent="addEducation">
            <div class="form-control">
              <label for="schoolName">School Name</label>
              <input type="text" id="schoolName" v-model.trim="schoolName" />
            </div>
            <div class="form-control">
              <label for="schoolYears">Years</label>
              <input type="text" id="schoolYears" v-model.trim="schoolYears" />
            </div>
            <div class="form-control">
              <label for="gpa">GPA</label>
              <input type="text" id="gpa" v-model.trim="gpa" />
            </div>
            <div class="form-control">
              <label for="schoolCity">City</label>
              <input type="text" id="schoolCity" v-model.trim="schoolCity" />
            </div>
            <base-button>Add Education</base-button>
          </form>
        </base-card>

        <ul v-for="experience in experiences" :key="experience.companyName">
          <li>
            {{ experience.companyName }}, {{ experience.companyYears }},
            {{ experience.companyCity }} {{ experience.experienceSkills }}
          </li>
        </ul>

        <base-card>
          <h2>Experience</h2>
          <form @submit.prevent="addExperience">
            <div class="form-control">
              <label for="companyName">Company Name</label>
              <input type="text" id="companyName" v-model.trim="companyName" />
            </div>
            <div class="form-control">
              <label for="companyYears">Years</label>
              <input
                type="text"
                id="companyYears"
                v-model.trim="companyYears"
              />
            </div>
            <div class="form-control">
              <label for="companyCity">City</label>
              <input type="text" id="companyCity" v-model.trim="companyCity" />
            </div>
            <ul v-for="skill in projectSkills" :key="skill.name">
              {{
                skill.name
              }},
              {{
                skill.type
              }}
            </ul>
            <base-card>
              <h2>Learned Skills</h2>
              <form @submit.prevent="addProjectSkill">
                <div class="form-control">
                  <label for="projectSkillName">Skill Name</label>
                  <input
                    type="text"
                    id="projectSkillName"
                    v-model.trim="projectSkillName"
                  />
                </div>
                <div class="form-control">
                  <label for="projectSkillType">Type</label>
                  <select id="projectSkillType" v-model.trim="projectSkillType">
                    <option disabled value="">Please select one</option>
                    <option value="backend">backend</option>
                    <option value="frontend">frontend</option>
                    <option value="database">database</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <base-button>Add Skill</base-button>
              </form>
            </base-card>
            <base-button>Add Experience</base-button>
          </form>
        </base-card>

        <ul v-for="skill in skills" :key="skill.name">
          {{
            skill.name
          }},
          {{
            skill.type
          }}
        </ul>
        <base-card>
          <h2>Known Skills</h2>
          <form @submit.prevent="addSkill">
            <div class="form-control">
              <label for="projectSkillName">Skill Name</label>
              <input
                type="text"
                id="projectSkillName"
                v-model.trim="projectSkillName"
              />
            </div>
            <div class="form-control">
              <label for="projectSkillType">Type</label>
              <select id="projectSkillType" v-model.trim="projectSkillType">
                <option disabled value="">Please select one</option>
                <option value="backend">backend</option>
                <option value="frontend">frontend</option>
                <option value="database">database</option>
                <option value="other">other</option>
              </select>
            </div>
            <base-button>Add Skill</base-button>
          </form>
        </base-card>

        <base-button>Set Resume</base-button>
      </form>
    </base-card>

    <base-card v-if="isContact">
      <h1>Contact</h1>
      <form @submit.prevent="setContact">
        <div class="form-control">
          <label for="contactText">Contact Text</label>
          <textarea
            id="contactText"
            rows="5"
            v-model.trim="contacttext.val"
          ></textarea>
        </div>
        <ul v-for="link in links" :key="link">
          <li>{{ link }},</li>
        </ul>
        <base-card>
          <h2>Links</h2>
          <form @submit.prevent="setLink">
            <div class="form-control">
              <label for="siteLink">
                <i class="fa fa-user-circle-o fa-lg fa-fw"></i> Personal Site
              </label>
              <input type="email" id="siteLink" v-model.trim="siteLink" />
            </div>
            <div class="form-control">
              <label for="personalLink">
                <i class="fa fa-envelope-o fa-lg fa-fw"></i> Personal
                Mail</label
              >
              <input
                type="email"
                id="personalLink"
                v-model.trim="personalLink"
              />
            </div>
            <div class="form-control">
              <label for="linkedinLink">
                <i
                  class="fa fa-linkedin fa-lg fa-fw"
                  style="vertical-align: -5%"
                ></i>
                Linkedin
              </label>
              <input
                type="email"
                id="linkedinLink"
                v-model.trim="linkedinLink"
              />
            </div>
            <div class="form-control">
              <label for="githubLink">
                <i class="fa fa-github fa-lg fa-fw"></i> Github
              </label>
              <input type="email" id="githubLink" v-model.trim="githubLink" />
            </div>
            <div class="form-control">
              <label for="itchioLink">
                <i class="fa fa-gamepad fa-lg fa-fw"></i> Itch.io</label
              >
              <input type="email" id="itchioLink" v-model.trim="itchioLink" />
            </div>
            <div class="form-control">
              <label for="tumblrLink">
                <i class="fa fa-tumblr fa-lg fa-fw"></i> Tumblr</label
              >
              <input type="email" id="tumblrLink" v-model.trim="tumblrLink" />
            </div>
            <div class="form-control">
              <label for="steamLink">
                <i class="fa fa-steam fa-lg fa-fw"></i> Steam</label
              >
              <input type="email" id="steamLink" v-model.trim="steamLink" />
            </div>
            <base-button>Set Links</base-button>
          </form>
        </base-card>
        <base-button>Set Contact</base-button>
      </form>
    </base-card>

    <base-card v-if="isProject">
      <h1>Add Project</h1>
      <form @submit="addProject">
        <div class="form-control">
          <label for="projectname">Project Name</label>
          <input type="text" id="projectname" v-model.trim="projectname.val" />
        </div>

        <div class="form-control">
          <label for="projectdate">Date</label>
          <input type="text" id="projectdate" v-model.trim="projectdate.val" />
        </div>

        <div class="form-control">
          <label for="shortdesc">Short Description</label>
          <input type="text" id="shortdesc" v-model.trim="shortdesc.val" />
        </div>

        <div class="form-control">
          <label for="longdesc">Long Description</label>
          <textarea
            id="longdesc"
            rows="5"
            v-model.trim="longdesc.val"
          ></textarea>
        </div>

        <div class="form-control">
          <label for="sourceLink">Source Link</label>
          <input type="text" id="sourceLink" v-model.trim="sourceLink.val" />
        </div>

        <div class="form-control">
          <label for="videoLink">Video Link</label>
          <input type="text" id="videoLink" v-model.trim="videoLink.val" />
        </div>

        <div class="form-control">
          <label for="imageLink">Image Link</label>
          <input type="text" id="imageLink" v-model.trim="imageLink.val" />
        </div>

        <div class="form-control">
          <label for="projecttype">Type</label>
          <select id="projecttype" v-model.trim="projecttype.val">
            <option disabled value="">Please select one</option>
            <option value="programming">programming</option>
            <option value="other">other</option>
          </select>
        </div>

        <ul v-for="skill in projectSkills" :key="skill.name">
          {{
            skill.name
          }},
          {{
            skill.type
          }}
        </ul>

        <base-card>
          <h2>Used Tecnologies</h2>
          <form @submit.prevent="addProjectSkill">
            <div class="form-control">
              <label for="projectSkillName">Tecnology</label>
              <input
                type="text"
                id="projectSkillName"
                v-model.trim="projectSkillName"
              />
            </div>
            <div class="form-control">
              <label for="projectSkillType">Tecnology Type</label>
              <select id="projectSkillType" v-model.trim="projectSkillType">
                <option disabled value="">Please select one</option>
                <option value="backend">backend</option>
                <option value="frontend">frontend</option>
                <option value="database">database</option>
                <option value="other">other</option>
              </select>
            </div>
            <base-button>Add Tecnology</base-button>
          </form>
        </base-card>

        <base-button>Add Project</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageLink: {
        val: "",
      },
      isAbout: false,
      isResume: false,
      isContact: false,
      isProject: false,
      links: [],
      contacttext: {
        val: "",
      },
      projectname: {
        val: "",
      },
      projectdate: {
        val: "",
      },
      shortdesc: {
        val: "",
      },
      longdesc: {
        val: "",
      },
      sourceLink: {
        val: "",
      },
      videoLink: {
        val: "",
      },
      projecttype: {
        val: "",
      },
      projectSkill: {
        name: "",
        type: "",
      },
      projectSkills: [],
      abouttext: {
        val: "",
      },
      resumetext: {
        val: "",
      },
      education: {
        schoolName: "",
        schoolYears: "",
        gpa: "",
        schoolCity: "",
      },
      educations: [],
      experienceSkill: {
        experienceSkillName: "",
        experienceSkillType: "",
      },
      experienceSkills: [],
      skills: [],
      experience: {
        companyName: "",
        companyYears: "",
        experienceSkills: this.experienceSkills,
        companyCity: "",
      },
      experiences: [],
    };
  },
  methods: {
    aboutVisible() {
      this.isAbout = !this.isAbout;
      this.isResume = false;
      this.isContact = false;
      this.isProject = false;
    },
    resumeVisible() {
      this.isAbout = false;
      this.isResume = !this.isResume;
      this.isContact = false;
      this.isProject = false;
    },
    contactVisible() {
      this.isAbout = false;
      this.isResume = false;
      this.isContact = !this.isContact;
      this.isProject = false;
    },
    projectVisible() {
      this.isAbout = false;
      this.isResume = false;
      this.isContact = false;
      this.isProject = !this.isProject;
    },
    setLink() {
      this.links[0] = this.siteLink;
      this.links[1] = this.personalLink;
      this.links[2] = this.linkedinLink;
      this.links[3] = this.githubLink;
      this.links[4] = this.itchioLink;
      this.links[5] = this.tumblrLink;
      this.links[6] = this.steamLink;
    },
    addProjectSkill() {
      const skillData = {
        name: this.projectSkillName,
        type: this.projectSkillType,
      };
      this.projectSkills.push(skillData);
    },
    addProject() {
      const project = {
        id: this.projectname.val,
        name: this.projectname.val,
        date: this.projectdate.val,
        skills: [...this.projectSkills],
        shortDesc: this.shortdesc.val,
        longDesc: this.longdesc.val,
        sourceLink: this.sourceLink.val,
        videoLink: this.videoLink.val,
        image: this.imageLink.val,
        type: this.projecttype.val,
      };
      this.$store.dispatch("projects/registerProject", project);
    },
    addExperienceSkill() {
      const experienceSkillnData = {
        experienceSkillName: this.experienceSkillName,
        type: this.experienceSkillType,
      };
      this.educations.push(experienceSkillnData);
    },
    addExperience() {
      const experienceData = {
        companyName: this.companyName,
        companyYears: this.companyYears,
        experienceSkills: [...this.projectSkills],
        companyCity: this.companyCity,
      };
      this.experiences.push(experienceData);
    },
    addEducation() {
      const educationData = {
        schoolName: this.schoolName,
        schoolYears: this.schoolYears,
        gpa: this.gpa,
        schoolCity: this.schoolCity,
      };
      this.educations.push(educationData);
    },
    addSkill() {
      const skillData = {
        name: this.projectSkillName,
        type: this.projectSkillType,
      };
      this.skills.push(skillData);
    },
    setAbout() {
      const aboutData = {
        aboutText: this.abouttext.val,
      };
      this.$store.dispatch("information/editAbout", aboutData);
    },
    setResume() {
      const resume = {
        resumeText: this.resumetext.val,
        education: [...this.educations],
        experience: [...this.experiences],
        skills: [...this.skills],
      };
      this.$store.dispatch("information/editResume", resume);
    },
    setContact() {
      const contact = {
        contactText: this.contacttext.val,
        links: [...this.links],
      };
      this.$store.dispatch("information/editContact", contact);
    },
    initalizeFirebase() {
      const projectData1 = {
        id: "t1",
        name: "test programming project",
        date: "1.1.2023-1.1.2023",
        skills: [
          { name: "html", type: "frontend" },
          { name: "Blender", type: "other" },
          { name: "SQL", type: "database" },
          { name: "Python", type: "backend" },
        ],
        shortDesc: "this is a short description of programming project ",
        longDesc:
          "this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long description of programming project",
        sourceLink: "https://github.com/emirshn/Find-a-Coach-App-with-Vue",
        videoLink: "https://youtu.be/zL19uMsnpSU",
        image:
          "https://pbs.twimg.com/media/Fo3PFOhX0AEzzI0?format=jpg&name=large",
        type: "programming",
      };
      const projectData2 = {
        id: "t2",
        name: "test other project",
        date: "1.1.2023-1.1.2023",
        skills: [
          { name: "html", type: "frontend" },
          { name: "Blender", type: "other" },
          { name: "SQL", type: "database" },
          { name: "Python", type: "backend" },
        ],
        shortDesc: "this is a short description of other project ",
        longDesc:
          "this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long description of other project",
        sourceLink: "https://github.com/emirshn/Find-a-Coach-App-with-Vue",
        videoLink: "https://youtu.be/zL19uMsnpSU",
        image:
          "https://pbs.twimg.com/media/Fo3PFOhX0AEzzI0?format=jpg&name=large",
        type: "other",
      };
      const contactData = {
        contactText:
          "This is a test version of contact. You can also write html code here",
        links: [
          "http://mywebsite.com",
          "my@email.com",
          "https://www.linkedin.com/me",
          "https://github.com/me",
          "https://myself.itch.io",
          "https://myblog.tumblr.com",
          "https://steamcommunity.com/id/me",
        ],
      };
      const aboutData = {
        aboutText: `this is a test version of about. You can also write html code here. Check <strong>Set Database</strong> page for initalizing`,
      };
      const resumeData = {
        resumeText:
          "this is a test version of resume. You can also write html code here",
        education: [
          {
            id: "e1",
            schoolName: "Test Database",
            years: "2015-2019",
            gpa: "3.23",
            city: "tested",
          },
        ],
        experience: [
          {
            id: "ex1",
            companyName: "Test Database",
            years: "2021-2021",
            skills: [
              { name: "Csharp", type: "backend" },
              { name: "SQL", type: "database" },
              { name: "ASP.NET", type: "frontend" },
              { name: "Object Oriented Programming", type: "backend" },
              { name: "Agile Methods", type: "backend" },
            ],
            city: "tested",
          },
        ],
        skills: [
          { name: "test1", type: "backend" },
          { name: "test2", type: "frontend" },
          { name: "test3", type: "other" },
          { name: "test4", type: "database" },
        ],
      };
      this.$store.dispatch("information/editContact", contactData);
      this.$store.dispatch("information/editAbout", aboutData);
      this.$store.dispatch("information/editResume", resumeData);
      this.$store.dispatch("projects/registerProject", projectData1);
      this.$store.dispatch("projects/registerProject", projectData2);
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
