import {scrollExecutionObserver} from "./services/sectionScrollService.ts";
import iphone from "/img/png/iPhone.png";
import ipad from "/img/png/iPad.png";
import macbook from "/img/png/macbook.png";
import mountains from "/img/png/mountains.png";

export default {
  components: {},
  props: {},
  data() {
    return {
      title: "GUI & OTC <br />Custom Execution",
      list: [
        "-> Custom settings for each instrument and asset",
        "-> Dedicated account manager & trader",
        "-> Limit and position management",
        "-> Different order types",
        "-> Isolated margin",
      ],
      iphone,
      ipad,
      macbook,
      mountains,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {
    scrollExecutionObserver(this)
  }
};

