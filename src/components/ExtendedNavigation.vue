<script setup lang="ts">
import AppAvatar from './UI/AppAvatar.vue';
import AppLink from './AppLink.vue';
import AppSidebar from './AppSidebar.vue';
</script>

<template>
  <AppSidebar />
  <nav class="hidden items-center gap-5 xl:flex">
    <AppLink
      :to="{ name: 'movies' }"
      class="inline-flex items-center gap-[13px] text-xs"
      :activeClass="'font-medium'"
      >Фильмы</AppLink
    >
    <AppLink
      :to="{ name: 'saved-movies' }"
      class="inline-flex items-center gap-[13px] text-xs"
      :activeClass="'font-medium'"
      >Сохраненные фильмы</AppLink
    >
    <AppLink
      :to="{ name: 'profile' }"
      class="inline-flex items-center gap-[13px] text-xs font-medium pl-[30px]"
    >
      Аккаунт
      <AppAvatar />
    </AppLink>
  </nav>
</template>

<style scoped></style>
