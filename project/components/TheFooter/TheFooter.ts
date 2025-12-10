import Logo from "@/public/img/svg/logo-footer.svg"
import Twitter from "@/public/img/svg/twitter.svg"
import Linkedin from "@/public/img/svg/linkedin.svg"
import Medium from "@/public/img/svg/medium.svg"
import * as links from "../../shared/links"

import logo from "/img/png/logo_def.png";

export default {
  components: {
    Logo,
    Twitter,
    Linkedin,
    Medium,
  },
  props: {},
  data() {
    return {
      logo,
      address: "PI Digital AG <br/>Dammstrasse 16 <br/>6300 Zug <br/>Switzerland",
      phone: "+41 44 797 51 40",
      email: "info@pidigital.swiss",
      license: "License: <br/>VQF SRO member no. 101020",
      conditions: "/conditions",
      use: "/use",
      security: "/security",
      disclaimer: "/disclaimer",
      brochure: "/brochure",
      privacy: "/privacy",
      servicesSection: links.servicesSection,
      teamSection: links.teamSection,
      partnersSection: links.partnersSection,
      formSection: links.formSection,
      twitter: links.twitter,
      linkedin: links.linkedin,
      medium: links.medium,
      sections: [
        // {
        //   name: "Services",
        //   href: links.servicesSection,
        // },
        // {
        //   name: "Team",
        //   href: links.teamSection,
        // },
        // {
        //   name: "Partners",
        //   href: links.partnersSection,
        // },
        // {
        //   name: "Contacts",
        //   href: links.formSection,
        // }
      ],
    };
  },
  computed: {
    currentYear(){
      return new Date().getFullYear();
    }
  },
  watch: {},
  methods: {},
};
