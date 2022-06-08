<template>
  <t-aside style="border-top: 1px solid var(--component-border)">
    <t-menu theme="light" value="dashboard" style="margin-right: 50px" height="550px">
      <t-menu-item value="dashboard">
        <template #icon>
          <t-icon name="dashboard" />
        </template>
        仪表盘
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <t-icon name="server" />
        </template>
        资源列表
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <t-icon name="root-list" />
        </template>
        根目录
      </t-menu-item>
      <t-menu-item value="control-platform">
        <template #icon>
          <t-icon name="control-platform" />
        </template>
        调度平台
      </t-menu-item>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <t-icon name="precise-monitor" />
        </template>
        调度平台
      </t-menu-item>
      <t-menu-item value="mail">
        <template #icon>
          <t-icon name="mail" />
        </template>
        消息区
      </t-menu-item>
      <t-menu-item value="user-circle">
        <template #icon>
          <t-icon name="user-circle" />
        </template>
        个人中心
      </t-menu-item>
      <t-menu-item value="play-circle">
        <template #icon>
          <t-icon name="play-circle" />
        </template>
        视频区
      </t-menu-item>
      <t-menu-item value="edit1">
        <template #icon>
          <t-icon name="edit-1" />
        </template>
        资源编辑
      </t-menu-item>
    </t-menu>
  </t-aside>
</template>
