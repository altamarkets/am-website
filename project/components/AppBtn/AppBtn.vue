<template>
    <v-btn
      @mouseover="$emit('mouseover')"
      class="app-btn"
      variant="outlined"
      :loading="loading"
      :href="href"
    >
      <slot></slot>
    </v-btn>
</template>

<script async src="./AppBtn.ts" />
<style lang="scss" src="./AppBtn.scss" />
