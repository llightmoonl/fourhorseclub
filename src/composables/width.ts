import {ref, onMounted, onUnmounted, type Ref, computed} from "vue";

export function useWidth() {
  const width: Ref<number> = ref(document.documentElement.clientWidth);

  const editWidth = () => {
    width.value = document.documentElement.clientWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', editWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', editWidth);
  });

  const isWidthMobile = (widthMobile: number) => {
    return width.value < widthMobile;
  }

  return {width, isWidthMobile};
}