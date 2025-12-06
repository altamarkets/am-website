import CardReason from "@/components/TheReasonsSection/components/CardReason/CardReason.vue";
import CardLogo from "@/components/TheReasonsSection/components/CardLogo/CardLogo.vue";

import Desktop from "@/public/img/svg/desktop.svg";
import Swiss from "@/public/img/svg/swiss.svg";
import Price from "@/public/img/svg/price.svg";
import Deposits from "@/public/img/svg/deposits.svg";
import Expertise from "@/public/img/svg/expertise.svg";
import Team from "@/public/img/svg/team.svg";
import Security from "@/public/img/svg/security.svg";
import reasonBg from "/img/png/reasonsbg.png";
import Logo1 from "/img/png/fireblocksLogo.png";
import Logo2 from "/img/png/cooperLogo.png";
import Logo3 from "/img/png/crystalLogo.png";
import Logo4 from "/img/png/sumsubLogo.png";

export default {
  components: {
    CardReason,
    CardLogo,
    Desktop,
    Swiss,
    Price,
    Deposits,
    Expertise,
    Team,
    Security,
  },
  props: {},
  data() {
    return {
      title: "Why people choose us",
      description: "Get the best of digital and traditional worlds by accessing state of the art infrastructure and tailor-made services.",
      reasonBg,
      reasons: [
        {
          id: "Desktop",
          logo: 'Desktop',
          text: "Fast and fully <br/>digital onboarding"
        },
        {
          id: "Swiss",
          logo: 'Swiss',
          text: "Swiss-based <br/>& licensed counterparty"
        },
        {
          id: "Price",
          logo: 'Price',
          text: "Best prices and fees <br/>through aggregated liquidity"
        },
        {
          id: "Deposits",
          logo: 'Deposits',
          text: "Deposits in fiat <br/>and digital assets"
        },
        {
          id: "Expertise",
          logo: 'Expertise',
          text: "Crypto & traditional <br/>market expertise"
        },
        {
          id: "Team",
          logo: 'Team',
          text: "Experienced team with established track record and combined experience of 100 years across digital and traditional classes"
        },
        {
          id: "Security",
          logo: 'Security',
          text: "Institutional-grade security & <br/>full asset control through <br/>world leading providers",
          custom: true
        }
      ],
      logos: [
        { src: Logo1, },
        { src: Logo2, },
        { src: Logo3, },
        { src: Logo4, },
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {},
};

