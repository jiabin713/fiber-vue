<template>
  <div class="h-screen flex flex-col">
    <t-layout>
      <Navbar />
      <t-layout class="flex-grow">
        <Sidebar />
        <t-layout>
          <Content />
          <Footer />
        </t-layout>
      </t-layout>
    </t-layout>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/navbar/index.vue';
import Sidebar from './components/sidebar/index.vue';
import Content from './components/content/index.vue';
import Footer from './components/footer/index.vue';
</script>
