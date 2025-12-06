<template>
  <article class="app-card-employer">
    <div>
      <NuxtImg format="webp" loading="lazy" class="app-card-employer__image" :src="image" alt="people"/>
    </div>
    <div class="app-card-employer__content">
      <div class="app-card-employer__name">
        {{ name }} <br/>
        {{ secondName }}
      </div>
      <div class="app-card-employer__text">
        <div class="app-card-employer__subtitle">{{ subTitle }}</div>
        <div class="app-card-employer__info">{{ info }}</div>
      </div>
      <div class="app-card-employer__sociales">
        <div class="app-card-employer__sociale">
          <a :href="link" target="_blank">
            <Linkedin/>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script async src="./AppCardEmployer.ts"/>
<style lang="scss" src="./AppCardEmployer.scss"/>
