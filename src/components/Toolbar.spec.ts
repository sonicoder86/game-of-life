import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Toolbar } from './';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Toolbar, {
      props: { running: false, generation: 0 },
    });
    expect(wrapper.text()).toContain('Start');
  });
});
