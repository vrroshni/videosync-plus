import { createRouter, createWebHistory } from "vue-router";
import Videos from "../components/videos/Videos.vue";
import UploadView from "../views/UploadView.vue";

 const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        component: UploadView,
        meta:{
          enterClass:"animate__animated animate__fadeInLeft",
          leaveClass:"animate__animated animate__fadeOutRight"
        }
      },
      {
        path: "/videos",
        component: Videos,
        meta:{
          enterClass:"animate__animated animate__fadeInRight",
          leaveClass:"animate__animated animate__fadeOutLeft"
        }
      },
    ],
    linkExactActiveClass: 'text-black bg-gray-100 rounded-full px-3 py-1.5',
  });
  export default router