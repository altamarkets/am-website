<template>
  <AppDocPage>
    <h1 class="security__title">{{ title }}</h1>

    <div class="security__description">
      {{ description }}
    </div>

    <div class="security__text" v-for="(item, index) in text"
         :key="index">
      {{ item }}
    </div>
  </AppDocPage>
</template>

<script>
import {useHead} from '#app';
import AppDocPage from "@/components/AppDocPage/AppDocPage.vue";

export default {
  components: {
    AppDocPage,
  },
  props: {},
  data() {
    return {
      title: "Security Risks",
      description: "Client’s cryptocurrency wallet/account and email account(s) safety",
      text: ["The Client must take all reasonable steps to keep Client’s cryptocurrency wallet/account, password and any other security features safe at all times and never disclose them to anyone.",
        "The Client must take all reasonable care to ensure that the Client’s email account(s) are secure and only accessed by the Client, as the Client’s email address may be used to receive security codes, which is used for funds withdrawal from the Client’s cryptocurrency wallet/account, to reset passwords or to communicate with the Client about the security of your cryptocurrency wallet/account. In case any of the Client’s email addresses registered with Altamarkets become compromised, The Client should without undue delay after becoming aware of this event, contact Altamarkets and also contact the Client’s email service provider.",
        "Our personnel will never ask you to provide your email password and any other email security features (e.g., OTP, 2FA etc.) to us or to a third party. The Client must manage and use his/her email privately and confidentially without granting any access to anyone, including by means of remote-control services (VPN, the same device usage, TeamViewer, etc.).",
        "Any message the Client receives or website visits that asks for the Client’s password or other security features should be reported to Altamarkets. If the Client is in doubt whether a website is genuine, the Client should contact Altamarkets. It is advisable to the Client to change password regularly, i.e., at least every three months, in order to reduce the risk of a security breach in relation to the Client’s cryptocurrency wallet/account. Altamarkets also advises the Client not to choose a password that is easily guessed from information someone might know or gather about the Client or a password that has a meaning.",
        "Irrespective of whether the Client is using a public, a shared or his/her own computer to access his/her email and/or cryptocurrency wallet/account, the Client must always ensure his/her login details are not stored by the browser or cached or otherwise recorded. The Client should never use any functionality that allows login details or passwords to be stored by the computer he/she is using.",
        "The Client must comply with the security procedures Altamarkets informs the Client about from time to time.",
        "The Client, not Altamarkets, is responsible for maintaining adequate security and control of any and all IDs, passwords, or any other details that the Client uses to access his/her wallet/account and the services. The Client is solely responsible for unauthorized access to and/or unauthorized use of the Client’s wallet/account and/or email, as well as loss, theft, misappropriation and/or exposure to abuse.The Client shall be exclusively liable for all losses and expenses (fully and totally, without any limits, limitations and exclusions) relating to any unauthorized use of the Client’s cryptocurrency wallet/account and/or email account(s), as well as in case(s) where the Client acts fraudulently and/or fails to fulfill one or more of its obligations relating to correct and safe usage and safe keeping of the Client’s cryptocurrency wallet/account and/or email account(s).",
        "Considering that technologies develop speedily and constantly, and it is impossible now to foresee all possible future ways of obtaining illegal access to the Client’s cryptocurrency wallet/account and/or email account(s), it is impossible to list all measures that the Client shall take or avoid to ensure safe keeping and use of the Client’s cryptocurrency wallet/account and/or email account(s). Nevertheless the Client bears full responsibility for taking all reasonable precautions and security measures to prevent access of unauthorized persons to the Client’s cryptocurrency wallet/account and/or email account(s) and their further use thereof.",
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
  },
  mounted() {
  },
  setup() {
    if (!!process.server) {
      useHead({
        title: "Security Risks | Altamarkets",

        meta: [
          {
            hid: "description",
            name: "description",
            content: "At Altamarkets, we prioritise security of your digital assets. Check out our robust security measures designed to protect your digital assets and data."
          }
        ],

        link: [
          {rel: "canonical", href: process.env.FRONT_URL + "/security"}
        ]
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/colors";
@import "@/styles/_breakpoints.scss";

.security {
  &__title {
    margin-bottom: 10px;
    // font-family: $fontFamily, sans-serif;
    font-family: Inter, sans-serif;
    color: $mainColor;
    font-size: 22px;
    font-weight: 400;
    line-height: 30.8px;

    @media (min-width: $screen-xsm) {
      font-size: 30px;
      line-height: 42px;
    }

    @media (min-width: $screen-sm) {
      font-size: 50px;
      line-height: 70px;
    }
  }

  &__description {
    margin-top: 30px;
    font-family: Inter, sans-serif;
    color: $mainColor;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;

    @media (min-width: $screen-xsm) {
      font-size: 20px;
    }

    @media (min-width: $screen-sm) {
      font-size: 22px;
    }

    @media (min-width: $screen-md) {
      width: 800px;
    }

    @media (min-width: $screen-lg) {
      width: 100%;
    }
  }

  &__text {
    margin-top: 20px;
    font-family: Inter, sans-serif;
    color: $mainColor;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0;
    text-align: left;

    @media (min-width: $screen-xsm) {
      font-size: 20px;
    }

    @media (min-width: $screen-sm) {
      font-size: 22px;
    }

    @media (min-width: $screen-lg) {
      width: 1000px;
    }
  }
}
</style>
