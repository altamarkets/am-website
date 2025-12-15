<template>
  <header
    class="the-header scroll-section"
    :class="{ 'the-header--default': isThemeDefault }"
  >
    <div class="the-header__container">
      <div class="the-header__wrapper">
        <NuxtImg
          v-if="!scrolled && theme === 'original'"
          class="the-header__logo-img"
          format="webp"
          loading="lazy"
          :src="logo"
          alt=""
        />

        <NuxtImg
          v-if="!!scrolled || theme === 'default'"
          class="the-header__logo-img"
          format="webp"
          loading="lazy"
          :src="logoBlack"
          alt=""
        />

        <!-- <div class="the-header__menu menu">
          <button>
            <Burger class="menu__icon" v-show="!menu" />
            <Close class="menu__icon" v-show="menu" />
            <TheMenu @update:model-value="switchIcon" />
          </button>

          <nav class="menu__body">
            <ul class="menu__list">
              <li
                class="menu__item"
                v-for="(link, index) in links"
                :key="index"
              >
                <NuxtLink :to="link.path" class="menu__link">
                  {{ link.item }}
                </NuxtLink>
              </li>
              <li>
                <a :href="login" target="_blank" class="menu__link menu__link--bold">Log In</a>
              </li>
            </ul>
          </nav>
        </div> -->
      </div>
    </div>
  </header>
</template>

<script async src="./TheHeader.ts"/>
<style lang="scss" src="./TheHeader.scss"></style>
