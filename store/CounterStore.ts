import { observable, action } from 'mobx'

export class CounterStore {
  @observable counter = 0

  @action
  increment() {
    this.counter++
  }

  @action
  decrement() {
    this.counter--
  }
}
