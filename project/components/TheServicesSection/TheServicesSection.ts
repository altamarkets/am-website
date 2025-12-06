import { scrollObserver } from "./services/sectionScrollService.ts"
import LinesAnimation from "./components/LinesAnimation/LinesAnimation.vue";
import CubesAnimation from "./components/CubesAnimation/CubesAnimation.vue";
import ProviderImg from "./components/ProviderImg/ProviderImg.vue";
import linesBg from "/img/png/lines-bg.png";
import linesBg_placeholder from "/img/png/lines-bg_placeholder.webp";
import provider1 from "/img/png/liquidity1.png";
import provider2 from "/img/png/liquidity2.png";
import provider3 from "/img/png/liquidity3.png";
import provider_placeholder1 from "/img/png/liquidity1.webp";
import provider_placeholder2 from "/img/png/liquidity2.webp";
import provider_placeholder3 from "/img/png/liquidity3.webp";
import box from "/img/png/box.png";
import box_placeholder from "/img/png/box_placeholder.webp";
import phone from "/img/png/phone.png";
import phone_placeholder from "/img/png/phone_placeholder.webp";

export default {
  components: {
    LinesAnimation,
    CubesAnimation,
    ProviderImg,
  },
  props: {},
  data() {
    return {
      title: "Setup & Services",
      text: "Institutional trading infrastructure and experience",
      images: [provider1, provider2, provider3],
      placeholder_images: [provider_placeholder1, provider_placeholder2, provider_placeholder3],
      box,
      box_placeholder,
      phone,
      phone_placeholder,
      linesBg,
      linesBg_placeholder,
      linesAnimation1Started: false,
      linesAnimation2Started: false,
      cubesAnimationStarted: false,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {
    scrollObserver(this);
  }
};
