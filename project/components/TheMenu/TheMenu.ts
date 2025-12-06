import Close from "@/public/img/svg/close.svg";
import Burger from "@/public/img/svg/burger.svg";
import Medium from "@/public/img/svg/medium.svg";
import Linkedin from "@/public/img/svg/linkedin.svg";
import Twitter from "@/public/img/svg/twitter.svg";
import * as links from "../../shared/links";

export default {
  components: {
    Close,
    Burger,
    Medium,
    Linkedin,
    Twitter,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      menu: false,
      links: [
        {
          item: 'Services',
          path: links.servicesSection,
        },
        {
          item: 'Team',
          path: links.teamSection,
        },
        {
          item: 'Partners',
          path: links.partnersSection,
        },
        {
          item: 'Contacts',
          path: links.formSection,
        },
      ],
      login: links.platform,
      twitter: links.twitter,
      linkedin: links.linkedin,
      medium: links.medium,
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
