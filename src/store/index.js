import { createStore } from "vuex";

import projectsModule from "./modules/projects/index.js";
import infoModule from "./modules/information/index.js";

const store = createStore({
  modules: {
    projects: projectsModule,
    information: infoModule,
  },
});

export default store;
