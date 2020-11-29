import React from 'react'
import Card from '../Card'
import { css } from 'pretty-lights'
import { containerClass, sermonClass } from './styled'
import { generateRandomSermon } from './watermarkSermon'

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

const FBC: React.FC = () => {
  return (
    <Card className={containerClass}>
      <h2 style={{ gridArea: 'title' }}>First Baptist Church</h2>
      <div className={sermonClass}>
        {generateRandomSermon().map((paragraph) => {
          return <p key={paragraph.length}>{paragraph}</p>
        })}
      </div>
      <img
        src="/img/fbc-building.png"
        alt="FBC building"
        className={buildingClass}
        style={{ width: '100%' }}
      />
      <img src="/img/fbc-jeffress.png" alt="Pastor Robert Jeffress" className={pastorClass} />
    </Card>
  )
}

export default FBC
