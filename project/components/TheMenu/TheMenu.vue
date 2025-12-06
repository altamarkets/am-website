<template>
  <v-menu content-class="the-menu" transition="slide-x-reverse-transition" activator="parent" location="bottom end"
          offset="10">

    <div class="the-menu__body">
      <ul class="the-menu__list">
        <li class="the-menu__link"
            v-for="(link, index) in links"
            :key="index"
        >

          <a :href="link.path" class="menu__link">{{ link.item }}</a>
        </li>

        <!-- <li>
          <a :href="login" target="_blank" class="menu__link the-dialog-menu__link--bold">Log In</a>
        </li> -->
      </ul>

      <div class="the-menu__sociales">
        <a :href=medium class="the-dialog-menu__icon" target="_blank" rel="nofollow">
          <Medium/>
        </a>

        <a :href=twitter class="the-menu__icon" target="_blank" rel="nofollow">
          <Twitter/>
        </a>

        <a :href=linkedin class="the-menu__icon" target="_blank" rel="nofollow">
          <Linkedin/>
        </a>
      </div>
    </div>
  </v-menu>
</template>

<script async src="./TheMenu.ts"/>
<style lang="scss" src="./TheMenu.scss"/>
