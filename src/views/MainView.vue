<script setup lang="ts">
import ContentContainer from '@/components/UI/ContentContainer.vue';
import AppHeader from '@/components/AppHeader.vue';
import MainPromo from '@/components/MainPromo.vue';
import MainAboutProject from '@/components/MainAboutProject.vue';
import MainTechs from '@/components/MainTechs.vue';
import MainAboutMe from '@/components/MainAboutMe.vue';
import MainPortfolio from '@/components/MainPortfolio.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <ContentContainer class="bg-[#073042]">
    <AppHeader />
    <MainPromo />
    <MainAboutProject />
    <MainTechs />
    <MainAboutMe />
    <MainPortfolio />
    <AppFooter />
  </ContentContainer>
</template>
