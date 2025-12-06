import AppBtn from "@/components/AppBtn/AppBtn";

export default {
  components: {
    AppBtn,
  },
  props: {},
  data() {
    return {
      titleCookies: "We Use Cookies",
      cookiesAccepted: useCookie('cookiesAccepted').value,
      showNotification: true,
    }
  },
  computed: {},
  watch: {
    $route(to) {
      this.showNotification = to.fullPath !== "/privacy"
    },
  },
  mounted() {
  },
  methods: {
    setCookiesAccepted() {
      useCookie('cookiesAccepted').value = true;
      this.cookiesAccepted = true;
    }
  },
};