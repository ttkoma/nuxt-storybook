import { storiesOf } from '@storybook/vue'
import List from './List'
import store from '@/.storybook/store'

storiesOf('List', module)
  .add('General', () => ({
    template: '<List />',
    store
  }))
  .add('As a local component of a story', () => ({
    components: { List },
    template: '<List />',
    store
  }))
