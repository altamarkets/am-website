<template>
  <v-app id="app">
    <div class="wrapper">
      <TheHeader
        :scrolled="isScrolled"
        :class="[{ scrolled: isScrolled }]"
        :theme="isIndexPage ? 'original' : 'default'"
      />
      <TheCookiesSection />
      <NuxtPage />
      <TheFooter />
    </div>
  </v-app>
</template>

<style lang="scss">
#app {
  background: none;
  color: #fff;
}
</style>

<script>
import TheHeader from "@/components/TheHeader/TheHeader.vue";
import TheCookiesSection from "@/components/TheCookiesSection/TheCookiesSection.vue";
import TheFooter from "@/components/TheFooter/TheFooter.vue";

export default {
  components: {
    TheFooter,
    TheCookiesSection,
    TheHeader,
  },
  props: {},
  data() {
    return {
      isScrolled: false,
    };
  },
  created() {
    if (!!window) {
      // alert("test");
      console.log("LAYOUT/created"); //DELETE
    }
  },
  mounted() {
    console.debug("LAYOUT/mounted"); //DELETE
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    isIndexPage() {
      return this.$route.name === "index";
    },
  },
  watch: {},
  methods: {
    handleScroll() {
      this.isScrolled =
        this.isIndexPage && document.documentElement.scrollTop > 150;
    },
  },
};
</script>