import { RouteRecordRaw } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import IndexPage from "../pages/Index.vue";
import RecorderPage from "../pages/Recorder.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: IndexPage,
      },
      {
        path: "recorder",
        component: RecorderPage,
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/Error404.vue"),
  },
];

export default routes;
