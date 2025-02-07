<template>
    <div ref="live2dContainer" class="live2d-container"></div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { Live2DWidget } from 'live2d-widget';
  
  export default {
    name: 'Live2D',
    setup() {
      const live2dContainer = ref(null);
  
      onMounted(() => {
        new Live2DWidget({
          container: live2dContainer.value,
          modelPath: 'https://cubism.live2d.com/sdk-web/cubismsdk/samples/Resources/Haru/Haru.model3.json', // 模型路径
          width: 200,
          height: 400,
        });
      });
  
      return {
        live2dContainer,
      };
    },
  };
  </script>
  
  <style>
  .live2d-container {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999;
  }
  </style>