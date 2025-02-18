<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <ViewTrans>
    <DefaultTheme.Layout>
      <!-- 传递所有插槽 -->
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </DefaultTheme.Layout>
  </ViewTrans>
</template>
