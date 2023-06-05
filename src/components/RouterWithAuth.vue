<script setup lang="ts">
import { useAuth } from '@/hooks/useAuth';

useAuth();
</script>

<template>
  <RouterView />
</template>
