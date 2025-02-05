import {ref, computed, onMounted, onUnmounted} from "vue";

export function useSliderMobile(widthMobile: number) {
  const width = ref(document.documentElement.clientWidth);

  const editWidth = () => {
    width.value = document.documentElement.clientWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', editWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', editWidth);
  });

  const isSliderMobile = computed(() => width.value < widthMobile);

  return {isSliderMobile};
}