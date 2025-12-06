<template>
  <section class="the-planet-section" id="the-planet-section">
    <div class="the-planet-section__bg-img">
      <NuxtImg loading="lazy" format="webp" :src="earth" :placeholder="earth_placeholder" class="the-planet-section__high" alt=""/>

      <div class="the-planet-section__mid">
        <NuxtImg loading="lazy" format="webp" :src="planet" :placeholder="planet_placeholder" class="the-planet-section__mid-planet"
                 alt=""/>
        <img class="the-planet-section__mid-animation" :src="animation" alt=""/>
      </div>
    </div>

    <div class="the-planet-section__container">
      <div class="the-planet-section__content">
        <h1 class="general-title the-planet-section__title">
          Digital Assets Spot & Derivatives Prime Broker
        </h1>

        <p class="the-planet-section__text">
          Access aggregated digital assets liquidity through bespoke prime
          brokerage services
        </p>

        <AppBtn :href="servicesSection" class="the-planet-section__btn">Find out more</AppBtn>
      </div>
    </div>
  </section>
</template>

<script async src="./ThePlanetSection.ts"/>
<style scoped lang="scss" src="./ThePlanetSection.scss"/>
