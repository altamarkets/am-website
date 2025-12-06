<template>
  <article class="app-card-logo">
    <div class="app-card-logo__logo">
      <a :href=href target="_blank" rel="nofollow">
        <NuxtImg format="webp" loading="lazy" :src="image" alt="logo"/>
      </a>
    </div>
  </article>
</template>

<script async src="./AppCardLogo.ts"/>
<style lang="scss" src="./AppCardLogo.scss"/>
