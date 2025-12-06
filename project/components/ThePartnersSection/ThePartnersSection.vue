<template>
  <section class="the-partners-section" id="the-partners-section">
    <div class="the-partners-section__container">
      <div class="the-partners-section__wrapper">
        <h1 class="general-title">{{ titlePartners }}</h1>

        <div class="the-partners-section__logos">
          <AppCardLogo
            v-for="(partner, index) in partners"
            :key="index"
            :image="partner.image"
            :href="partner.href"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script async src="./ThePartnersSection.ts"/>
<style lang="scss" src="./ThePartnersSection.scss"/>


