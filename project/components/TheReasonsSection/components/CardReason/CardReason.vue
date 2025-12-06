<template>
  <article class="card-reason">
    <div class="card-reason__logo">
      <slot name="logo"></slot>
    </div>
    <div>
      <div class="card-reason__text">
        <slot name="text"></slot>
      </div>
      <slot name="custom"></slot>
    </div>
  </article>
</template>

<script async src="./CardReason.ts"/>
<style lang="scss" src="./CardReason.scss"/>
