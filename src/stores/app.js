import { observable, action } from 'mobx';

class App {
  @observable isFetching = false;
}

export default new App();
