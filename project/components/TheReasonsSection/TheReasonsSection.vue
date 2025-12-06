<template>
  <section class="the-reasons-section">
    <div class="the-reasons-section__wrapper">
      <NuxtImg
          format="webp"
          loading="lazy"
          class="the-reasons-section__img"
          :src="reasonBg"
          alt=""
      />

      <div class="the-reasons-section__container">
        <div class="the-reasons-section__content">
          <div class="the-reasons-section__description">
            <h1 class="general-title the-reasons-section__title">{{ title }}</h1>
            <p class="the-reasons-section__text">{{ description }}</p>
          </div>

          <div class="the-reasons-section__list">
            <CardReason
                v-for="(reason, index) in reasons"
                :key="index"
                :id="reason.id"
            >
              <template v-slot:logo>
                <component :is="reason.logo"></component>
              </template>

              <template v-slot:text>
                <span v-html="reason.text"></span>
              </template>

              <template v-if="reason.custom" v-slot:custom>
                <div class="the-reasons-section__logos">
                  <CardLogo
                      v-for="(logo, index) in logos"
                      :key="index"
                      :src="logo.src"/>
                </div>
              </template>
            </CardReason>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script async src="./TheReasonsSection.ts"/>
<style lang="scss" src="./TheReasonsSection.scss"/>
