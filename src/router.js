import { createRouter, createWebHistory } from "vue-router";

import ProjectDetail from "./pages/ProjectDetail.vue";
import ProjectsList from "./pages/ProjectsList.vue";
import OtherProjectsList from "./pages/OtherProjectsList.vue";

import Resume from "./pages/TheResume.vue";
import Contact from "./pages/TheContact.vue";
import About from "./pages/TheAbout.vue";

import Database from "./pages/database/SetDatabase.vue";

import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/about" },
    { path: "/resume", component: Resume },
    { path: "/projects", component: ProjectsList },
    { path: "/projects/:id", component: ProjectDetail, props: true },
    { path: "/others", component: OtherProjectsList },
    { path: "/others/:id", component: ProjectDetail, props: true },
    { path: "/contact", component: Contact },
    { path: "/about", component: About },
    { path: "/database", component: Database },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
