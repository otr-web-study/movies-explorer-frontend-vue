<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { ESC_KEY, ENTER_KEY } from '@/constants';
import { useAppControlsStore } from '@/stores/useAppControlsStore';

const store = useAppControlsStore();
const { clearInfoMessage } = store;
const { isError, infoMessage } = storeToRefs(store);
const closeBtnRef = ref<HTMLButtonElement | null>();

const handleKeyboardEvent = (evt: KeyboardEvent) => {
  evt.preventDefault();
  if (evt.key === ESC_KEY || evt.key === ENTER_KEY) {
    clearInfoMessage();
  }
};

const handlePopupMouseDown = (evt: MouseEvent) => {
  if ((evt.target as HTMLDivElement).id === 'modal-background') {
    clearInfoMessage();
  }
};

watchEffect(() => {
  if (infoMessage.value) {
    window.addEventListener('keydown', handleKeyboardEvent);
    if (closeBtnRef.value) {
      closeBtnRef.value.focus();
    }
  } else {
    window.removeEventListener('keydown', handleKeyboardEvent);
  }
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="infoMessage"
      id="modal-background"
      class="fixed z-50 top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black/50"
      @mousedown="handlePopupMouseDown"
    >
      <div
        class="z-[51] max-w-[calc(100%-40px)] px-[50px] py-[18px] relative bg-[#202020] text-white rounded-[10px] min-[468px]:max-w-[430px] w-full min-[468px]:px-10 min-[468px]:py-9 flex flex-col items-center shadow-modal-container"
      >
        <i
          v-if="isError"
          class="w-[38px] h-[38px] object-cover"
          style="background-image: url(/images/error-logo.svg)"
        ></i>
        <i
          v-else
          class="w-[38px] h-[38px] object-cover"
          style="background-image: url(/images/success_logo.svg)"
        ></i>
        <h2 class="mt-8 mb-[60px] text-[24px] leading-[29px] font-medium text-center">
          {{ infoMessage }}
        </h2>
        <button
          ref="closeBtnRef"
          class="text-[#4285F4] text-[14px] leading-[17px] focus:outline-none"
          @click="clearInfoMessage"
        >
          Закрыть
        </button>
        <button
          class="absolute bg-transparent right-0 -top-9 w-5 h-5 min-[540px]:-right-[35px] min-[540px]:-top-[35px] min-[540px]:w-8 min-[540px]:h-8 before:absolute before:content-[''] before:top-0 before:rotate-45 before:border-2 before:border-white before:h-5 min-[540px]:before:h-8 after:absolute after:content-[''] after:top-0 after:-rotate-45 after:border-2 after:border-white after:h-5 min-[540px]:after:h-8"
          type="button"
          ariaLabel="Закрыть"
          @click="clearInfoMessage"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply ease-in opacity-100 duration-300;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
