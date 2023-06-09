<script setup lang="ts">
import { storeToRefs } from 'pinia';
import PageContainer from './components/UI/PageContainer.vue';
import AppPreloader from './components/AppPreloader.vue';
import InfoTooltip from './components/InfoTooltip.vue';
import { useAppControlsStore } from './stores/useAppControlsStore';
import { useAuth } from './hooks/useAuth';

const { checkLoggedIn } = useAuth();
const { isAuthChecked } = storeToRefs(useAppControlsStore());

checkLoggedIn();
</script>

<template>
  <PageContainer>
    <RouterView v-if="isAuthChecked" />
    <AppPreloader />
    <InfoTooltip />
  </PageContainer>
</template>
