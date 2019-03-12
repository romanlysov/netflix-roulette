import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import { SearchByPanel } from '../src/components/Header/SearchByPanel'

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('SearchByPanel', module)
    .addParameters({
        backgrounds: [
            { name: 'twitter', value: '#00aced', default: true },
            { name: 'facebook', value: '#3b5998' },
        ],
    })
  .add('byTitle', () => {
    return (
      <SearchByPanel
        className="search-by"
        searchBy="title"
        filter="title"
      />
    )
  })
  .add('byGenre', () => {
    return (
      <SearchByPanel
        className="search-by"
        searchBy="genre"
        filter="genres"
      />
    )
  })

