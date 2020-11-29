import React from 'react'
import Card from '../Card'
import { containerClass, sermonClass, proBLM, proPolice, proNothing } from './styled'
import { css } from 'pretty-lights'
import { sermon } from './watermarkSermon'
import Lorem from './Lorem'

const buildingClass = css`
  position: absolute;
  bottom: 0;
  width: 100%;
`

const pastorClass = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  max-width: 400px;
`

const loremClass = css`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  overflow: scroll;
  position: relative;
  z-index: 1;
`

const Watermark: React.FC = () => {
  return (
    <Card className={containerClass}>
      <h2 style={{ gridArea: 'title' }}>Watermark Church</h2>
      <div className={sermonClass}>
        {sermon.map((paragraph) => {
          const x = Math.random()
          const [start, end] = [
            Math.floor((Math.random() * paragraph.length) / 2),
            Math.floor(((1 + Math.random()) * paragraph.length) / 2),
          ]
          let className = proNothing
          if (x < 0.1) className = proPolice
          else if (x < 0.6) className = proBLM

          return (
            <p key={paragraph.length}>
              {paragraph.slice(0, start)}
              <mark className={className}>{paragraph.slice(start, end)} </mark>{' '}
              {paragraph.slice(0, end + 1)}
            </p>
          )
        })}
      </div>
      {/* <div className={loremClass}>
        <Lorem />
      </div> */}
      <img src="/img/watermark-building.png" alt="Watermark building" className={buildingClass} />
      <img src="/img/watermark-todd.png" alt="Pastor Todd Wagner" className={pastorClass} />
    </Card>
  )
}

export default Watermark
