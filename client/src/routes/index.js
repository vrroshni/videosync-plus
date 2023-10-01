import { createRouter, createWebHistory } from "vue-router";
import UploadView from "../views/UploadView.vue";
import VideoView from "../views/VideoView.vue";
import VideosView from "../views/VideosView.vue";
import AnalyticsView from "../views/AnalyticsView.vue";

 const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        component: UploadView,
       
      },
      {
        path: "/videos",
        component: VideosView,
        
      },
      {
        path: "/videos/:id",
        component: VideoView,
        
      },
      {
        path: "/analytics",
        component: AnalyticsView,
        
      },
    ],
    linkExactActiveClass: 'text-black bg-gray-100 rounded-full px-3 py-1.5',
  });
  export default router