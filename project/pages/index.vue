<template>
  <div>
    <ThePlanetSection/>
    <TheServicesSection/>
    <TheExecutionSection/>
    <TheReasonsSection/>
    <TheTeamSection/>
    <ThePartnersSection/>
    <TheMediaSection/>
    <TheFormSection/>
  </div>
</template>

<script>
import {useHead} from '#app';
import ThePlanetSection from "@/components/ThePlanetSection/ThePlanetSection.vue";
import TheServicesSection from "@/components/TheServicesSection/TheServicesSection.vue";
import TheExecutionSection from "@/components/TheExecutionSection/TheExecutionSection.vue";
import TheReasonsSection from "@/components/TheReasonsSection/TheReasonsSection.vue";
import TheTeamSection from "@/components/TheTeamSection/TheTeamSection.vue";
import ThePartnersSection from "@/components/ThePartnersSection/ThePartnersSection.vue";
import TheMediaSection from "@/components/TheMediaSection/TheMediaSection.vue";
import TheFormSection from "@/components/TheFormSection/TheFormSection.vue";

export default {
  layout: "default",
  components: {
    ThePlanetSection,
    TheServicesSection,
    TheExecutionSection,
    TheReasonsSection,
    TheTeamSection,
    ThePartnersSection,
    TheMediaSection,
    TheFormSection,
  },
  props: {},
  data: () => ({}),
  computed: {},
  watch: {},
  methods: {},
  created() {
  },
  mounted() {
  },
  setup() {
    if (!!process.server) {
      useHead({
        title: 'Advanced Cryptocurrency Brokerage Services | PI Digital',

        meta: [
          {
            hid: 'description',
            name: "description",
            content: "PI Digital provides innovative and first-class cryptocurrency brokerage services. Discover and utilise our digital wealth management expertise."
          },
        ],

        link: [{rel: "canonical", href: process.env.FRONT_URL + "/"}],
      })
    }
  }
};
</script>

<style lang="scss"></style>
