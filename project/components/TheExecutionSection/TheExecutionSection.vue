<template>
  <section class="the-execution-section">
    <div class="the-execution-section__container">
      <div class="the-execution-section__wrapper">
        <div class="the-execution-section__content">
          <h1 v-html="title" class="general-title"></h1>
          <ul class="the-execution-section__list" ref="list">
            <li
              v-for="(item, index) in list"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <div ref="devices" class="the-execution-section__devices">
          <NuxtImg format="webp" loading="lazy" class="the-execution-section__devices-phone" :src=iphone alt="" />
          <NuxtImg format="webp" loading="lazy" class="the-execution-section__devices-tablet" :src=ipad alt="" />
          <NuxtImg format="webp" loading="lazy" class="the-execution-section__devices-desktop" :src=macbook alt="" />
        </div>
      </div>
    </div>

    <div class="the-execution-section__mountains">
      <NuxtImg format="webp" loading="lazy" class="the-execution-section__mountains-img" :src="mountains" alt="" />
    </div>
  </section>
</template>

<script async src="./TheExecutionSection.ts"/>
<style lang="scss" src="./TheExecutionSection.scss"/>
