import AppCardEmployer from "@/components/AppCardEmployer/AppCardEmployer.vue";

import People1 from "/img/png/people1.png";
import People2 from "/img/png/people2.png";
import People3 from "/img/png/people3.png";
import People4 from "/img/png/people4.png";
import People5 from "/img/png/people5.png";
import People6 from "/img/png/people6.png";
import People7 from "/img/png/people7.png";
import People8 from "/img/png/people8.png";

export default {
  components: {
    AppCardEmployer,
    People1,
    People2,
    People3,
    People4,
    People5,
    People6,
    People7,
    People8,
  },
  props: {},
  data() {
    return {
      title: 'Team',
      cards: [
        {
          name: 'Alex',
          secondName: 'Norking',
          subTitle: 'Founding Partner',
          info: 'Board Member',
          link: 'https://www.linkedin.com/in/alexander-norking-93086b1a',
          image: People1,
        },
        {
          name: 'Antonio',
          secondName: 'Pellizzato',
          subTitle: 'Founding Partner',
          info: 'Board Member',
          link: 'https://www.linkedin.com/in/antonio-pellizzato-015096233',
          image: People2,
        },
        {
          name: 'Thomas',
          secondName: 'Walcher',
          subTitle: 'Founding Partner',
          info: 'Board Member',
          link: 'https://www.linkedin.com/in/thomas-walcher-81080617',
          image: People3,
        },
        {
          name: 'Patrick',
          secondName: 'Haberstock',
          subTitle: 'Founding Partner',
          info: 'Board Member',
          link: 'https://www.linkedin.com/in/patrick-haberstock-b8056b79/',
          image: People4,
        },
        {
          name: 'Maxim',
          secondName: 'Zimin',
          subTitle: 'Founding Partner',
          info: 'Board Member',
          link: 'https://www.linkedin.com/in/maxim-zimin-01b064a4/',
          image: People5,
        },
        // {
        //   name: 'Ralph',
        //   secondName: 'Trippel',
        //   subTitle: 'Relationship Manager',
        //   info: '',
        //   link: 'https://www.linkedin.com/in/ralph-trippel-76023613/',
        //   image: People6,
        // },
        // {
        //   name: 'Mikael',
        //   secondName: 'Olofsson',
        //   subTitle: '',
        //   info: 'Senior Advisor',
        //   link: 'https://www.linkedin.com/in/mikael-olofsson-9a865135/',
        //   image: People7,
        // },
      ],
    };
  },
  computed: {
  },
  watch: {},
  methods: {},
};
