import AppBtn from "@/components/AppBtn/AppBtn.vue";
import planet from "/img/png/planet.png";
import planet_placeholder from "/img/png/planet_placeholder.webp";
import earth from "/img/png/earth.png";
import earth_placeholder from "/img/png/earth_placeholder.webp"
import animation from "/img/png/anim3.png";
import * as links from "@/shared/links";
import * as validation from "@/services/formValidation";
import * as constants from "./shared/constants.ts";
import { submitFormService } from "./services/formService.ts";

export default {
  components: {
    AppBtn,
  },
  props: {},
  data() {
    return {
      servicesSection: links.servicesSection,
      planet,
      planet_placeholder,
      earth,
      earth_placeholder,
      animation,
      title: "Get in touch",
      submitLoading: false,
      name1: "",
      name2: "",
      name3: "",
      lastName1: '',
      lastName2: '',
      lastName3: '',
      email1: '',
      email2: '',
      email3: '',
      phone1: '',
      phone2: '',
      phone3: '',
      text1: '',
      text2: '',
      text3: '',
      bestExecutionCheckbox1: false,
      bestExecutionCheckbox2: false,
      bestExecutionCheckbox3: false,
      customExecutionCheckbox1: false,
      customExecutionCheckbox2: false,
      customExecutionCheckbox3: false,
      isMouseover: false,
      nameRules: [
        validation.required(),
        validation.nameSpecialCharacters(),
        validation.maxCharacters(constants.nameMaxLength),
      ],
      lastNameRules: [
        validation.required(),
        validation.nameSpecialCharacters(),
        validation.maxCharacters(constants.nameMaxLength),
      ],
      emailRules: [
        validation.required(),
        validation.email(),
        validation.maxCharacters(constants.emailMaxLength),
      ],
      phoneRules: [
        validation.required(),
        validation.numbers(),
        // validation.phone(),
        // validation.maxCharacters(constants.phoneMaxLength),
      ],
    };
  },
  watch: {},
  methods: {
    mouseover() {
      this.isMouseover = true;
    },
    async submit() {
      console.debug("submit"); //DELETE

      let validationStatus = await this.validation();
      console.debug("validationStatus:", validationStatus); //DELETE

      if (validationStatus) {
        this.submitLoading = true;

        let submitFormServiceResponse = await submitFormService({
          name: this.name3,
          lastName: this.lastName2,
          email: this.email1,
          phone: this.phone1,
          bestExecutionCheckbox: this.bestExecutionCheckbox3,
          customExecutionCheckbox: this.customExecutionCheckbox1,
          text: this.text2,
        });

        if (submitFormServiceResponse) {
          this.$refs.form.reset();
          alert("Message sent successfully");
        } else {
          alert("An error occurred while sending the message");
        }

        this.submitLoading = false;
        this.isMouseover = false;
      }
    },

    async validation() {
      // return (
      //   this.$refs.form.validate() &&
      //   this.isMouseover &&
      //   !this.name1 &&
      //   !this.name2 &&
      //   !this.lastName1 &&
      //   !this.lastName3 &&
      //   !this.email2 &&
      //   !this.email3 &&
      //   !this.phone2 &&
      //   !this.phone3 &&
      //   !this.text1 &&
      //   !this.text3 &&
      //   !this.bestExecutionCheckbox1 &&
      //   !this.bestExecutionCheckbox2 &&
      //   !this.customExecutionCheckbox2 &&
      //   !this.customExecutionCheckbox3
      // );

      return (await this.$refs.form.validate())?.valid;
    },
  },
  computed: {
    nameMaxLength() {
      return constants.nameMaxLength;
    },
    lastNameMaxLength() {
      return constants.lastNameMaxLength;
    },
    emailMaxLength() {
      return constants.emailMaxLength;
    },
    // phoneMaxLength() {
    //   return constants.phoneMaxLength;
    // },
    textMaxLength() {
      return constants.textMaxLength;
    },
  },
};
