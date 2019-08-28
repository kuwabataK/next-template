import { observable, action } from 'mobx'

export class CounterStore {
  @observable counter = 0
  @observable.ref objectCounter = {
    counter: 0,
    deepcnt: {
      counter: 0
    }
  }

  @action
  increment(): void {
    this.counter++
  }

  @action
  decrement(): void {
    this.counter--
  }

  @action
  incrementObj(): void {
    this.objectCounter.counter++
    this.objectCounter = { ...this.objectCounter }
  }

  @action
  decrementObj(): void {
    this.objectCounter.counter--
    this.objectCounter = { ...this.objectCounter }
  }

  @action
  incrementDeep(): void {
    this.objectCounter.deepcnt.counter++
    this.objectCounter = { ...this.objectCounter }
  }

  @action
  decrementDeep(): void {
    this.objectCounter.deepcnt.counter--
    this.objectCounter = { ...this.objectCounter }
  }
}
