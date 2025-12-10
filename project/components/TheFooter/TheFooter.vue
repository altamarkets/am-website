<template>
  <footer class="the-footer">
    <div class="the-footer__container">
      <div class="the-footer__content">
        <div class="the-footer__info">
          <div class="the-footer__logo">
            <NuxtImg class="the-footer__logo-img" format="webp" loading="lazy" :src="logo" alt="" />
          </div>

          <div class="the-footer__contacts">
            <div class="the-footer__address" v-html="address"></div>

            <div class="the-footer__details">
              <div class="the-footer__contact">
                <div>{{ phone }}</div>
                <div>{{ email }}</div>
              </div>

              <div class="the-footer__license" v-html="license"></div>
            </div>
          </div>
        </div>

        <div class="the-footer__more">
          <div class="the-footer__resources">
            <NuxtLink :to="conditions" target="_blank"
              >Terms and Conditions</NuxtLink
            >
            <NuxtLink :to="use" target="_blank">Terms of Use</NuxtLink>
            <NuxtLink :to="security" target="_blank">Security Risks</NuxtLink>
            <NuxtLink :to="disclaimer" target="_blank"
              >Risk Disclaimer</NuxtLink
            >
            <NuxtLink :to="brochure" target="_blank">Risk Brochure</NuxtLink>
            <NuxtLink :to="privacy" target="_blank"
              >Privacy & Cookie Policy</NuxtLink
            >
          </div>

          <div class="the-footer__links">
            <ul class="the-footer__links-sections">
              <li v-for="(item, index) in sections" :key="index">
                <a :href="item.href">{{ item.name }}</a>
              </li>
            </ul>
            <div class="the-footer__links-social">
              <a :href="twitter" rel="nofollow" target="_blank">
                <Twitter />
              </a>
              <a :href="linkedin" rel="nofollow" target="_blank">
                <Linkedin />
              </a>
              <a :href="medium" rel="nofollow" target="_blank">
                <Medium />
              </a>
            </div>
          </div>
        </div>

        <div class="the-footer__rights">
          © All rights reserved {{ currentYear }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script async src="./TheFooter.ts"/>
<style lang="scss" src="./TheFooter.scss"/>
