<template>
  <section id="the-team-section" class="the-team-section">
    <div class="the-team-section__container">
      <div class="the-team-section__wrapper">
        <h1 class="general-title">{{ title }}</h1>

        <div class="the-team-section__cards">
          <AppCardEmployer
            v-for="(card, index) in cards"
            :key="index"
            :name="card.name"
            :secondName="card.secondName"
            :subTitle="card.subTitle"
            :info="card.info"
            :link="card.link"
            :image="card.image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script async src="./TheTeamSection.ts" />
<style lang="scss" src="./TheTeamSection.scss"/>
