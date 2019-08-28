import { CounterStore } from './CounterStore'
import { configure } from 'mobx'

configure({ enforceActions: 'always' })

export default {
  counterStore: new CounterStore()
}
