import Linkedin from "@/public/img/svg/linkedin.svg"

export default {
  components: {
    Linkedin,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};

