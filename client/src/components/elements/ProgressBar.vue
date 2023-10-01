<script setup>
import { useVideoStore } from '../../stores/video';

const videoStore = useVideoStore()

</script>


<template>
  <div
    class="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-[1000] outline-none focus:outline-none bg-neutral-800/70">
    <div
      class="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto flex flex-col justify-center items-center">
      <div class="shell w-[250px] md:w-[450px]">
        <div class="bar" :style="{ width: videoStore.uploadProgress + '%' }">
          <span>{{ videoStore.uploadProgress }}%</span>
        </div>
      </div>
      <h1 class="font-bold text-sm md:text-lg text-white py-3">Please stay calm, Don't exit the Page</h1>
    </div>
  </div>
</template>
<style scoped>
.shell {
  height: 30px;
  border: 2px solid #ffffff;
  border-radius: 13px;
  padding: 3px;
}

.bar {
  background: linear-gradient(to right, #B993D6, #8CA6DB);
  height: 20px;
  width: 15px;
  border-radius: 9px;

}

.bar span {
  float: right;
  padding: 4px 5px;
  color: #fff;
  font-size: 0.7em
}
</style>