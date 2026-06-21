<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-view />
  <van-button type="primary">Button</van-button>
  <van-card num="2" price="2.00" title="item title" />
   <van-cell-group>
    <van-field label="Field" placeholder="input" />
  </van-cell-group>
</template>
