<template>
  <section class="the-media-section">
    <div class="the-media-section__container">
      <div class="the-media-section__wrapper">
        <h1 class="general-title">{{ titleMedia }}</h1>

        <div class="the-media-section__logos">
          <AppCardLogo
            v-for="(media, index) in medias"
            :key="index"
            :image="media.image"
            :href="media.href"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script async src="./TheMediaSection.ts"/>
<style lang="scss" src="./TheMediaSection.scss"/>
