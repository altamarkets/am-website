import TheMenu from "@/components/TheMenu/TheMenu.vue";
import Close from "@/public/img/svg/close.svg";
import Burger from "@/public/img/svg/burger.svg";
import Logo from "@/public/img/svg/logo.svg";
import * as links from "../../shared/links";

import logo from "/img/png/logo_white.png";
import logoBlack from "/img/png/logo_black.png";

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

    scrolled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      logo,
      logoBlack,
      menu: false,
      links: [
        // {
        //   item: 'Services',
        //   path: links.servicesSection,
        // },
        // {
        //   item: 'Team',
        //   path: links.teamSection,
        // },
        // {
        //   item: 'Partners',
        //   path: links.partnersSection
        // },
        // {
        //   item: 'Contacts',
        //   path: links.formSection,
        // },
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
