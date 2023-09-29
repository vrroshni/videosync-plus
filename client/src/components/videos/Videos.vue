<script setup>
import { useVideoStore } from '../../stores/video';
import { onMounted } from 'vue';
const videoStore = useVideoStore()
onMounted(() => videoStore.getallVideos())
</script>

<template>
  <div class="h-full w-screen sm:px-8 md:px-10 sm:py-8">
    <main class="container mx-auto  h-full bg-white">
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row  justify-center items-center">
          <div
            class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-xl rounded-lg py-4 px-4  flex flex-col justify-center">
            <div class="h-26 w-full overflow-hidden video-link">
              <img src="https://source.unsplash.com/random/500x400/?galaxy " alt="" class="thumbnail" />
            </div>
            <div class="text-sm text-gray-500 m-2">30 March, 2023</div>
            <div class="font-bold text-lg text-black m-2">This is post title</div>
            <div class="text-gray-500 m-2 text-sm"><a href="">Galaxies are one of the biggest things in the Universe. They
                are so big that they can be seen with the naked eye. Galaxies are made up of billions of stars.</a></div>
            <div class="flex justify-between">
              <div class="flex m-2">
                <ion-icon name="chatbubble-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">896</div>
                <ion-icon name="eye-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">5648</div>
              </div>
              <div class="m-2">
                <ion-icon name="share-social-outline"
                  class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "></ion-icon>
              </div>
            </div>
          </div>
          <div
            class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-xl rounded-lg py-4 px-4  flex flex-col justify-center">
            <div class="h-26 w-full overflow-hidden video-link">
              <img src="https://source.unsplash.com/random/500x400/?galaxy " alt="" class="thumbnail" />
            </div>
            <div class="text-sm text-gray-500 m-2">30 March, 2023</div>
            <div class="font-bold text-lg text-black m-2">This is post title</div>
            <div class="text-gray-500 m-2 text-sm"><a href="">Galaxies are one of the biggest things in the Universe. They
                are so big that they can be seen with the naked eye. Galaxies are made up of billions of stars.</a></div>
            <div class="flex justify-between">
              <div class="flex m-2">
                <ion-icon name="chatbubble-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">896</div>
                <ion-icon name="eye-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">5648</div>
              </div>
              <div class="m-2">
                <ion-icon name="share-social-outline"
                  class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "></ion-icon>
              </div>
            </div>
          </div>
          <div
            class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-xl rounded-lg py-4 px-4  flex flex-col justify-center">
            <div class="h-26 w-full overflow-hidden video-link">
              <img src="https://source.unsplash.com/random/500x400/?galaxy " alt="" class="thumbnail" />
            </div>
            <div class="text-sm text-gray-500 m-2">30 March, 2023</div>
            <div class="font-bold text-lg text-black m-2">This is post title</div>
            <div class="text-gray-500 m-2 text-sm"><a href="">Galaxies are one of the biggest things in the Universe. They
                are so big that they can be seen with the naked eye. Galaxies are made up of billions of stars.</a></div>
            <div class="flex justify-between">
              <div class="flex m-2">
                <ion-icon name="chatbubble-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">896</div>
                <ion-icon name="eye-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">5648</div>
              </div>
              <div class="m-2">
                <ion-icon name="share-social-outline"
                  class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
.video-link {
  position: relative;
}


.video-link .thumbnail {
  width: 100%;
  object-fit: contain;
  object-position: center;
}

.video-link::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("//cyara.com/wp-content/uploads/resources/play-button.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 20%;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, .4));
}

.video-link:hover::after {
  background-size: 22%;
  -webkit-transition: background-size .2s ease-in-out;
  -moz-transition: background-size .2s ease-in-out;
  -o-transition: background-size .2s ease-in-out;
  transition: background-size .2s ease-in-out;
}
</style>