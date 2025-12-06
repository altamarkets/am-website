<template>
  <section v-if="!cookiesAccepted && showNotification" class="the-cookies-section">
    <div class="the-cookies-section__container">
      <div class="the-cookies-section__wrapper">
        <div>
          <h1 class="the-cookies-section__title"> {{ titleCookies }}</h1>

          <p class="the-cookies-section__description">We use cookies to improve site performance. By continuing, you
            agree to our use of cookies as per our
            <NuxtLink class="the-cookies-section__link" to="/privacy">Privacy Policy.</NuxtLink>
          </p>
        </div>

        <AppBtn class="the-cookies-section__btn" @click="setCookiesAccepted">Accept</AppBtn>
      </div>
    </div>
  </section>
</template>

<script async src="./TheCookiesSection.ts" lang="ts"></script>
<style scoped src="./TheCookiesSection.scss" lang="scss"></style>