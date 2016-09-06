import { observable, action } from 'mobx';

class App {
  @observable isFetching = false;
  @observable headerColor = 'white';

  @action headerSetColor(color) {
    this.headerColor = color;
  }
}

export default new App();
