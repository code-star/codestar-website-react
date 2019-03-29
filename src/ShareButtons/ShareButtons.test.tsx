import React from 'react'
import { ShareButtons } from './ShareButtons'
import renderer from 'react-test-renderer'

describe('ShareButtons', () => {
  it('shows twitter icon', () => {
    const comp = renderer.create(<ShareButtons twitter link="/share-url" />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('shows linkedin icon', () => {
    const comp = renderer.create(<ShareButtons linkedin link="/share-url" />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('shows facebook icon', () => {
    const comp = renderer.create(<ShareButtons facebook link="/share-url" />).toJSON()
    expect(comp).toMatchSnapshot()
  })
})
