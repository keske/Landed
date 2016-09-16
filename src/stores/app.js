import { observable, action } from 'mobx';

class App {
  @observable isFetching = false;
  @observable headerColor = 'white';
  @observable menu = false;

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

}

export default new App();
