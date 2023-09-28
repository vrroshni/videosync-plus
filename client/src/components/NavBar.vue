<script setup>
import NavLinks from "./NavLinks.vue";
</script>
<template>
  <header className="z-[10] flex text-center justify-center">
    <div
      className="fixed top-4  rounded-full flex justify-center items-center w-1/2  h-14 border border-white
                        border-opacity-40 bg-white  bg-opacity-80 shadow-lg 
                        shadow-black/[0.3] backdrop-blur-[0.5rem]
                        text-black font-medium">
      <NavLinks />
    </div>
  </header>
</template>
