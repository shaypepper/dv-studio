import React from 'react'
import Card from '../Card'
import { containerClass, sermonClass, proBLM, proPolice, proNothing } from './styled'
import { sermon } from './watermarkSermon'
import { css } from 'pretty-lights'

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

const PottersHouse: React.FC = () => {
  return (
    <Card className={containerClass}>
      <h2 style={{ gridArea: 'title' }}>Potter&apos;s House</h2>
      <div className={sermonClass}>
        {sermon.map((paragraph) => {
          const x = Math.random()
          const [start, end] = [
            Math.floor((Math.random() * paragraph.length) / 2),
            Math.floor(((1 + Math.random()) * paragraph.length) / 2),
          ]
          let className = proNothing
          if (x < 0.05) className = proPolice
          else if (x < 0.9) className = proBLM

          return (
            <p key={paragraph.length}>
              {paragraph.slice(0, start)}
              <mark className={className}>{paragraph.slice(start, end)} </mark>{' '}
              {paragraph.slice(0, end + 1)}
            </p>
          )
        })}
      </div>
      <div style={{ gridArea: 'images' }}>
        <img
          src="/img/potters-house-building.png"
          alt="Potter's House building"
          className={buildingClass}
          style={{ width: '100%' }}
        />
        <img src="/img/potters-house-jakes.png" alt="Pastor T.D. Jakes" className={pastorClass} />
      </div>
    </Card>
  )
}

export default PottersHouse
