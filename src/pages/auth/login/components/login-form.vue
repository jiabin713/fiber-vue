<template>
  <t-form>
    <t-form-item>
      <t-input v-model="form.username" placeholder="Username" autofocus></t-input>
    </t-form-item>
    <t-form-item>
      <t-input v-model="form.password" type="password" placeholder="Password"></t-input>
    </t-form-item>
    <t-form-item>
      <t-button type="primary" block @click="handleSubmit">Login</t-button>
    </t-form-item>
  </t-form>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';

const userStore = useUserStore();
</script>
