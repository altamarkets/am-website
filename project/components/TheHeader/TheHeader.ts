import TheMenu from "@/components/TheMenu/TheMenu.vue";
import Close from "@/public/img/svg/close.svg";
import Burger from "@/public/img/svg/burger.svg";
import Logo from "@/public/img/svg/logo.svg";
import * as links from "../../shared/links";

export default {
  components: {
    TheMenu,
    Close,
    Burger,
    Logo,
  },
  props: {
    theme: {
      type: String,
      default: 'default',
    },
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
          path: links.partnersSection
        },
        {
          item: 'Contacts',
          path: links.formSection,
        },
      ],
      login: links.platform,
    };
  },
  computed: {
    isThemeDefault() {
      return this.theme === 'default';
    },
  },
  watch: {},
  methods: {
    switchIcon() {
      this.menu = !this.menu;
    },
  },
};
