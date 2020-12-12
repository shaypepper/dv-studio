import React, { useState } from 'react'
import Card from '../Card'
import * as styled from './styled'
import { css, cx } from 'pretty-lights'
import { sermon } from './watermarkSermon'
import DFWMap from '../Map'
import InfluenceChart from '../InfluenceChart'
import { ChurchKeys } from '../metadata'

const Watermark: React.FC = () => {
  return (
    <Card className={styled.containerClass}>
      <div style={{ gridArea: 'title' }}>
        <h1>Preaching on Race</h1>
        <sub>How white pastors of Dallas responded to national tragedies in 2016</sub>
      </div>
      <div style={{ gridArea: 'church' }}>
        <h2>
          Todd Wagner{' '}
          <span
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              fontFamily: 'nytfranklin',
              fontWeight: 'lighter',
              color: 'gray',
              marginLeft: '6px',
            }}
          >
            Watermark Church
          </span>
        </h2>
        <p>
          Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
          fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
          soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
          facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        </p>
      </div>
      <div className={styled.chartArea}>
        <div style={{ zIndex: -1, gridArea: 'map' }}>
          <DFWMap className={styled.mapClass} landmark={ChurchKeys.Watermark} />
        </div>

        {/* <div>
            <p data-connotation="negative">Only Jesus can fix this</p>
            <p data-connotation="negative">We need to have unity</p>
            <p data-connotation="negative">Be careful not to ask for too much</p>
            <p data-connotation="positive">Black Lives Matter</p>
            <p data-connotation="positive">The country has a history of systematic racism</p>
          </div> */}
        <div style={{ gridArea: 'influence1' }}>
          <InfluenceChart church={ChurchKeys.TVC} calculationKey={'twitterFollowers'} />
        </div>
        <div style={{ gridArea: 'influence2' }}>
          <InfluenceChart church={ChurchKeys.TVC} calculationKey={'attendees'} />
        </div>
        <div style={{ gridArea: 'influence3' }}>
          <InfluenceChart church={ChurchKeys.TVC} calculationKey={'podcastReviews'} />
        </div>
      </div>

      <div style={{ gridArea: 'images', position: 'relative', width: '100%', height: '35vh' }}>
        <div>
          <img
            src="/img/watermark-building.png"
            alt="Watermark building"
            className={styled.buildingClass}
          />
          <img
            src="/img/watermark-todd.png"
            alt="Pastor Todd Wagner"
            className={styled.pastorClass}
          />
        </div>
      </div>
      <div className={styled.sermonContainerClass}>
        <p className={styled.sermonClass}>
          {sermon.map((paragraph, idx) => {
            const x = Math.random()
            const [start, end] = [
              Math.floor((Math.random() * paragraph.length) / 2),
              Math.floor(((1 + Math.random()) * paragraph.length) / 2),
            ]
            let className = styled.proNothing
            if (x < 0.1) className = styled.proPolice
            else if (x < 0.6) className = styled.proBLM

            return (
              <>
                <span
                  data-text="Shay is so cool"
                  className={cx(styled.spanClass, className)}
                  key={paragraph.length}
                >
                  {paragraph}
                </span>
              </>
            )
          })}
        </p>
      </div>
    </Card>
  )
}

export default Watermark
