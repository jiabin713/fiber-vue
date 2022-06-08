<template>
  <t-header>
    <t-head-menu value="item1" height="120px">
      <template #logo>
        <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
      </template>
      <template #operations>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="home" /></a>
      </template>
    </t-head-menu>
  </t-header>
</template>

<script setup lang="ts"></script>
