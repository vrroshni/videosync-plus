import { createRouter, createWebHistory } from "vue-router";
import UploadView from "../views/UploadView.vue";
import VideoView from "../views/VideoView.vue";
import VideosView from "../views/VideosView.vue";

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
        component: VideosView,
        meta:{
          enterClass:"animate__animated animate__fadeInRight",
          leaveClass:"animate__animated animate__fadeOutLeft"
        }
      },
      {
        path: "/videos/:id",
        component: VideoView,
        meta:{
          enterClass:"animate__animated animate__fadeInRight",
          leaveClass:"animate__animated animate__fadeOutLeft"
        }
      },
    ],
    linkExactActiveClass: 'text-black bg-gray-100 rounded-full px-3 py-1.5',
  });
  export default router