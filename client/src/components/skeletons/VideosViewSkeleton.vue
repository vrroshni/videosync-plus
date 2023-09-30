<template>
  <div class="flex justify-center">
    <div class="flex flex-col md:flex-row flex-wrap  justify-center items-center w-full">
      <div v-for="i in [1, 2]" :key="i"
        class="overflow-hidden bg-white w-3/4 md:w-1/3  shadow-xl m-4  rounded-lg py-4 px-4  flex flex-col justify-center  min-h-[20rem] gap-3 ">
        <AnimatedPlaceHolder class="h-40  w-full overflow-hidden rounded-lg  "/>
        <AnimatedPlaceHolder class="h-10  w-full overflow-hidden "/>
        <AnimatedPlaceHolder class="h-6  w-full overflow-hidden "/>
        <div class="flex  w-full">
          <div class=" m-2 w-1/2 ">
            <AnimatedPlaceHolder/>
          </div>
          <div class="m-2 w-1/2">
            <AnimatedPlaceHolder/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceHolder from '../elements/AnimatedPlaceHolder.vue';


</script>

<style lang="scss" scoped></style>