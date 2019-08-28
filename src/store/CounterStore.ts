import { observable, action } from 'mobx'

export class CounterStore {
  @observable counter = 0

  @action
  increment(): void {
    this.counter++
  }

  @action
  decrement(): void {
    this.counter--
  }
}
