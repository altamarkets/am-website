<template>
  <section class="the-services-section" id="the-services-section">
    <div class="the-services-section__container">
      <div class="the-services-section__content">
        <div class="the-services-section__title" id="the-services-section__title">
          <h1 class="general-title the-services-section__title-text">{{ title }}</h1>
          <div class="the-services-section__title-description">{{ text }}</div>
        </div>

        <div class="the-services-section__schema">
          <div class="the-services-section__schema-gradient"></div>

          <div class="the-services-section__lines">
            <NuxtImg :src="linesBg" format="webp" :placeholder="linesBg_placeholder" loading="lazy" alt=""
                     class="the-services-section__lines-bg"/>
            <LinesAnimation ref="lines" :animation1="linesAnimation1Started" :animation2="linesAnimation2Started"
                            class="the-services-section__lines-left"/>
            <CubesAnimation :animation="cubesAnimationStarted" ref="cubes" class="the-services-section__lines-right"/>
          </div>

          <div class="the-services-section__providers">
            <ProviderImg v-for="(img, index) in images"
                         :key="index"
                         :src="img"
                         :placeholder_src="placeholder_images[index]"/>
          </div>

          <div ref="box" class="the-services-section__box">
            <NuxtImg format="webp" loading="lazy" class="the-services-section__box-img" :placeholder="box_placeholder"
                     :src="box" alt=""/>
          </div>

          <div class="the-services-section__phone">
            <NuxtImg format="webp" loading="lazy" class="the-services-section__phone-img"
                     :placeholder="phone_placeholder" :src="phone" alt="phone"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script async src="./TheServicesSection.ts"></script>
<style lang="scss" src="./TheServicesSection.scss"/>
