
<template>
  <div class="screenfullBtn" @click="toggleScreenfull">
  <slot></slot>
  
  </div>
</template>
 
 
<script>
import { onMounted, onUnmounted, reactive, toRefs } from "vue";
import screenfull from "screenfull";
import { ElMessage } from "element-plus";
import full from "../../assets/image/header/full.png";
export default {
  setup() {
    const state = reactive({
      isFullscreen: false
    });

    onMounted(() => {
      if (screenfull.isEnabled) {
        screenfull.on("change", checkFullscreen);
      }
    });

    onUnmounted(() => {
      if (screenfull.isEnabled) {
        screenfull.off("change", checkFullscreen);
      }
    });

    function checkFullscreen() {
      state.isFullscreen = screenfull.isFullscreen;
    }

    function toggleScreenfull() {
      if (screenfull.isEnabled) {
        screenfull.toggle();
      } else {
        ElMessage.warning({
          message: "当前浏览器不支持该全屏功能，可尝试使用F11触发全屏",
          center: true
        });
      }
    }

    return {
      ...toRefs(state),
      toggleScreenfull
    };
  }
};
</script>
 
<style scoped>
</style>