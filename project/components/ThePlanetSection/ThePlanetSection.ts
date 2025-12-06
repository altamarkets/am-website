import AppBtn from "@/components/AppBtn/AppBtn.vue";
import planet from "/img/png/planet.png";
import planet_placeholder from "/img/png/planet_placeholder.webp";
import earth from "/img/png/earth.png";
import earth_placeholder from "/img/png/earth_placeholder.webp"
import animation from "/img/png/anim3.png";
import * as links from "@/shared/links";

export default {
  components: {
    AppBtn,
  },
  props: {},
  data() {
    return {
      servicesSection: links.servicesSection,
      planet,
      planet_placeholder,
      earth,
      earth_placeholder,
      animation,
    };
  },
  watch: {},
  methods: {},
};
