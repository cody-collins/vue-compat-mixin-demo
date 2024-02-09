import { shallowMount } from '@vue/test-utils'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hi'
    const wrapper = shallowMount(App, {
      propsData: { msg }
    })
    expect(wrapper.props('msg')).toMatch('Hi')
    const child = wrapper.findComponent(HelloWorld)
    expect(child.props('msg')).toMatch('Hi. How are you')
  })
})
