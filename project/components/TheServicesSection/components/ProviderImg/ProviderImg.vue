<template>
  <article class="provider-img">
    <NuxtImg format="webp" loading="lazy" class="provider-img__provider" :src="src" :placeholder="placeholder_src" alt="Provider" />
  </article>
</template>

<script async src="./ProviderImg.ts"/>
<style lang="scss" src="./ProviderImg.scss"/>
