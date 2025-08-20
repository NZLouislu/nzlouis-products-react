import React, { Fragment } from 'react'

function Thumbs({ items, currentIndex, onThumbClick }) {
  return (
    <Fragment>
      {items.map((catalog, idx) => (
        <button
          key={idx}
          data-testid={'thumb-button-' + idx}
          onClick={() => onThumbClick(idx)}
          className={
            'inline-flex w-90 pa-4 image-thumb ' +
            (idx === currentIndex ? 'thumb-selected' : '')
          }
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer'
          }}
        >
          <span
            className="mx-5 thumb"
            style={{ backgroundImage: 'url(' + catalog.thumb + ')' }}
          />
        </button>
      ))}
    </Fragment>
  )
}

export default Thumbs
