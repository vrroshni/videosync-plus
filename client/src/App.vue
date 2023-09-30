<script setup>
import NavBar from "./components/navbar/NavBar.vue";
</script>

<template>
 
  <div
    className="bg-[#fbe2e3]  absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "
  ></div>
  <div
    className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "
  ></div>

  <NavBar />
  <main class="flex flex-col items-center justify-center w-full h-auto scroll-mt-28">
    <!-- <router-view v-slot="{ Component,route }">
      <Transition 
      :enter-active-class="route.meta.enterClass" 
      :leave-active-class="route.meta.leaveClass" 
      >
        <component :is="Component" />
      </Transition>
    </router-view> -->
    <router-view/>
  </main>
</template>
