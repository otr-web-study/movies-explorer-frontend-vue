<script setup lang="ts">
import { computed } from 'vue';
import ExternalLink from '@/components/ExternalLink.vue';
import { formatTime } from '@/utils/formatTime';
import type { Movie } from '@/types';
import { IMAGE_BASE_URL } from '@/constants';

const props = defineProps<{ movie: Movie }>();
const time = computed(() => formatTime(props.movie.duration));
</script>

<template>
  <div className="relative flex flex-col">
    <ExternalLink :href="props.movie.trailerLink" className="peer">
      <img
        :src="`${IMAGE_BASE_URL}${props.movie.image}`"
        :alt="props.movie.nameRU"
        className="w-[300px] h-[188px] object-cover object-center rounded-md min-[600px]:w-[339px] min-[600px]:h-[190px] min-[1000px]:w-full min-[1000px]:h-[201px] min-[1000px]:max-w-[360px]"
      />
    </ExternalLink>
    <slot></slot>
    <div
      className="flex justify-between mt-4 min-[600px]:mt-[25px] min-[1000px]:mt-[14px] min-[1000px]:mx-[14px]"
    >
      <p
        className="w-60 text-[13px] leading-[16px] font-medium text-start text-ellipsis overflow-hidden whitespace-nowrap min-[600px]:w-[250px] min-[1000px]:whitespace-normal"
      >
        {{ props.movie.nameRU }}
      </p>
      <p
        className="py-[3px] text-center w-[52px] h-[18px] text-[11px] leading-[11px] text-[#8B8B8B] bg-[#2F2F2F] rounded-[3px]"
      >
        {{ time }}
      </p>
    </div>
  </div>
</template>
