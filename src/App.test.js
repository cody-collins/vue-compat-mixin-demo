import { shallowMount } from '@vue/test-utils'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(App, {
      propsData: { msg }
    })
    const child = wrapper.findComponent(HelloWorld)
    expect(child.props('msg')).toMatch(msg)
  })
})
