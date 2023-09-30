<script setup>
import { links } from "../../utils/data";

</script>

<template>
  <ul className="flex text-lg text-gray-600">
    <li
      className="px-4 cursor-pointer capitalize py-3  hover:scale-105 duration-200 hover:text-black"
      v-for="(navlink, index) in links"
      :key="index"
    >
      <router-link :to="navlink.link">
        {{ navlink.name }}
      </router-link>
    </li>
  </ul>
</template>
