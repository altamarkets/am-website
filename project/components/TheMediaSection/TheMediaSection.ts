import AppCardLogo from "@/components/AppCardLogo/AppCardLogo.vue";

import Coin from "/img/png/coin.png";
import Yahoo from "/img/png/yahoo.png";
import Businesswire from "/img/png/businesswire.png";
import News from "/img/png/news.png";
import Curnchbase from "/img/png/curnchbase.png";

import * as links from "@/shared/links"

export default {
  components: {
    AppCardLogo,
    Coin,
    Yahoo,
    Businesswire,
    News,
    Curnchbase,
  },
  props: {},
  data() {
    return {
      titleMedia: 'Media',
      medias: [
        {
          image: Coin,
          href: links.coinDesk,
        },
        {
          image: Yahoo,
          href: links.yahoo,
        },
        {
          image: Businesswire,
          href: links.businesswire,
        },
        {
          image: News,
          href: links.fintech,
        },
        {
          image: Curnchbase,
          href: links.crunchbase,
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
