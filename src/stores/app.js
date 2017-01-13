import { observable, action } from 'mobx';

export default new class App {
  @observable isFetching = false;
  @observable headerColor = 'white';
  @observable menu = false;
  @observable showQuizPopUp = false;
  @observable popup = false;

  @observable schoolForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    school: {
      first: true,
      second: false,
    },
    anonymous: true,
    send: false,
  }

  @observable lasdSchoolForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    send: false,
  }

  @observable investForm = {
    firstName: '',
    lastName: '',
    email: '',
    send: false,
  }

  @action headerSetColor(color) {
    this.headerColor = color;
  }

  @action setSchoolData(data) {
    this.schoolForm = { ...this.schoolForm, ...data };
  }

  @action setLASDData(data) {
    this.lasdSchoolForm = { ...this.schoolForm, ...data };
  }

  @action setInvestData(data) {
    this.investForm = { ...this.investForm, ...data };
  }

  @action showMenu() {
    this.menu = true;
  }

  @action hideMenu() {
    this.menu = false;
  }

  @action showQuiz() {
    this.showQuizPopUp = true;
    this.popup = true;
  }

  @action hideQuiz() {
    this.showQuizPopUp = false;
    this.popup = false;
  }

  @observable calc = {
    step: 1,

    data: {
      priceOfHome: 0,
      downpayment: 0,
    },
    showGraphs: false,
    showSuperCenter: false,

    a7State: 0,
    a32State: 0,
    a15State: 0,
    initialClosingCostRatioState: 0,
    a10State: 0,
    a8State: 0,
    a3State: 0,
    a18State: 0,
    a48State: 0,
    a4State: 0,
    a24State: 0,
    a25State: 0,
    a26State: 0,
    a27State: 0,
    a37State: 0,
    m120State: 0,
    a38State: 0,
    a13State: 0,
    a39State: 0,
    g9State: 0,
    a5State: 0,
    a46State: 0,
    a11State: 0,
    a12State: 0,
    g11State: 0,
    g12State: 0,
    a16State: 0,
    a28State: 0,
    a29State: 0,
    a30State: 0,
    a31State: 0,
    a40State: 0,
    m12016State: 0,
    a41State: 0,
    a42State: 0,
    a49State: 0,
    a17State: 0,
    a19State: 0,
    i11State: 0,
    h9State: 0,
    h11State: 0,
    h12State: 0,
    g14State: 0,
    h14State: 0,
    taxLabel: '',
  }

  @action updateCalc(data) {
    this.calc = {
      ...this.calc,
      ...data,
    };
  }
};
