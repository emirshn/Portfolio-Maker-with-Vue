import firebase from "../../../firebase.js";

export default {
  async editAbout(_, data) {
    const aboutData = {
      aboutText: data.aboutText,
    };

    const response = await fetch(`${firebase.link}about.json`, {
      method: "PUT",
      body: JSON.stringify(aboutData),
    });

    if (!response.ok) {
      // error...
    }
  },
  async loadAbout(context) {
    const response = await fetch(`${firebase.link}about.json`);
    const responseData = await response.json();
    const about = {
      aboutText: responseData.aboutText,
    };
    context.commit("setAbout", about);
  },

  async editContact(_, data) {
    const contactData = {
      contactText: data.contactText,
      links: data.links,
    };

    const response = await fetch(`${firebase.link}contact.json`, {
      method: "PUT",
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      // error...
    }
  },

  async loadContact(context) {
    const response = await fetch(`${firebase.link}contact.json`);
    const responseData = await response.json();
    const contact = {
      contactText: responseData.contactText,
      links: responseData.links,
    };
    context.commit("setContact", contact);
  },

  async editResume(context, data) {
    const resumeData = {
      resumeText: data.resumeText,
      education: data.education,
      experience: data.experience,
      skills: data.skills,
    };

    const response = await fetch(`${firebase.link}resume.json`, {
      method: "PUT",
      body: JSON.stringify(resumeData),
    });

    if (!response.ok) {
      // error...
    }
  },

  async loadResume(context) {
    const response = await fetch(`${firebase.link}resume.json`);
    const responseData = await response.json();
    const resume = {
      resumeText: responseData.resumeText,
      education: responseData.education,
      experience: responseData.experience,
      skills: responseData.skills,
    };
    context.commit("setResume", resume);
  },
};
