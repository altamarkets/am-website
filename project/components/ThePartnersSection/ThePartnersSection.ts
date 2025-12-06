import AppCardLogo from "@/components/AppCardLogo/AppCardLogo.vue";

import kraken from "/img/png/kraken.png";
import fireblocks from "/img/png/fireblocks.png";
import coinify from "/img/png/coinify.png";
import crystal from "/img/png/crystal.png";
import prime from "/img/png/prime.png";
import moreleil from "/img/png/mareleil.png";
import invemo from "/img/png/invemo.png";
import sumsub from "/img/png/sumsub.png";

import * as links from "@/shared/links";

export default {
  components: {
    AppCardLogo,
  },
  props: {},
  data() {
    return {
      titlePartners: 'Partners',
      partners: [
        {
          image: kraken,
          href: links.kraken,
        },
        {
          image: fireblocks,
          href: links.fireblocks,
        },
        {
          image: coinify,
          href: links.coinify,
        },
        {
          image: crystal,
          href: links.crystal,
        },
        {
          image: prime,
          href: links.fxprime,
        },
        {
          image: moreleil,
          href: links.moreleil,
        },
        {
          image: invemo,
          href: links.invemo,
        },
        {
          image: sumsub,
          href: links.sumsub,
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
