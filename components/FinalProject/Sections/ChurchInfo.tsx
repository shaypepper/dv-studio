import React, { useState } from 'react'
import Card from '../Card'
import * as styled from './styled'
import { css, cx } from 'pretty-lights'
import * as sermons from '../data/sermons'
import DFWMap from '../Map'
import InfluenceChart from '../Charts/InfluenceChart'
import SubstanceChart from '../Charts/SubstanceChart'
import { ChurchKeys, churches, classifiedStatements } from '../data/metadata'

const Watermark: React.FC = () => {
  const [selectedChurch, setSelectedChurch] = useState<ChurchKeys>(null)
  const fillClass = css`
    &::before {
      content: '';
      background-image: url('/img/buildings/watermark.png');
      background-size: cover;
      background-position: bottom;
      position: fixed;
      z-index: -1;
      top: 0px;
      right: 0px;
      bottom: -30px;
      left: 0px;
      opacity: 0.03;
    }

    [data-church] {
      fill: var(--highlight);
      opacity: ${selectedChurch ? 0.3 : 0.9};
      transition: opacity 1000ms ease;

      &:hover {
        opacity: 0.1;
      }

      &[data-sentiment='problematic'] {
        fill: var(--problematic);
      }

      &[data-sentiment='productive'] {
        fill: var(--productive);
      }
    }

    [data-church='${selectedChurch}'] {
      opacity: 0.9;

      &:hover {
        opacity: 0.7;
      }
    }
  `

  const clickHandler = setSelectedChurch

  const ChurchInfo = () => {
    const church = churches[selectedChurch]
    return (
      <>
        <h2>
          {churches[selectedChurch]?.pastor}{' '}
          <span
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              fontWeight: 'lighter',
              color: 'gray',
              marginLeft: '6px',
              fontFamily: 'nytfranklin',
            }}
          >
            {church?.name} ({church?.denomination}) - {church?.city}
          </span>
        </h2>
        {church?.fastFacts &&
          Object.entries(church?.fastFacts).map(([factType, fact], idx) => (
            <p key={`${selectedChurch}-${idx}`}>
              {' '}
              <span>{factType}</span> {fact}
            </p>
          ))}
      </>
    )
  }

  return (
    <Card className={cx(fillClass, styled.containerClass)}>
      <div style={{ gridArea: 'title' }}>
        <h1>Preaching on Race</h1>
        <sub>
          What message did white pastors of Dallas send after a week of national tragedies in 2016?
        </sub>
      </div>
      <div className={styled.churchArea}>
        <ChurchInfo />
      </div>

      <div className={styled.chartArea}>
        <div style={{ zIndex: -1, gridArea: 'map' }}>
          <h3>Location</h3>
          <DFWMap className={styled.mapClass} />
        </div>
        <div style={{ gridArea: 'influence' }}>
          <h3>Influence</h3>
        </div>
        <div style={{ gridArea: 'influence1' }}>
          <InfluenceChart
            onElementClick={(a: ChurchKeys) => clickHandler(a)}
            church={selectedChurch}
            calculationKey={'twitterFollowers'}
          />
        </div>
        <div style={{ gridArea: 'influence3' }}>
          <InfluenceChart
            onElementClick={(a: ChurchKeys) => clickHandler(a)}
            church={selectedChurch}
            calculationKey={'attendees'}
          />
        </div>
        <div style={{ gridArea: 'influence4' }}>
          <InfluenceChart
            onElementClick={(a: ChurchKeys) => clickHandler(a)}
            church={selectedChurch}
            calculationKey={'podcastReviews'}
          />
        </div>

        <div style={{ gridArea: 'influence2' }}>
          <InfluenceChart
            onElementClick={(a: ChurchKeys) => clickHandler(a)}
            church={selectedChurch}
            calculationKey={'churchTwitterFollowers'}
          />
        </div>
      </div>
      <div style={{ gridArea: 'substance' }}>
        <h3>Substance</h3>
        <SubstanceChart
          onElementClick={(a: ChurchKeys) => clickHandler(a)}
          selectedChurch={selectedChurch}
        />
      </div>

      {/* <img
            src="/img/watermark-todd.png"
            alt="Pastor Todd Wagner"
            className={styled.pastorClass}
          /> */}

      <div className={styled.sermonContainerClass}>
        <p className={styled.sermonClass}>
          {sermons[selectedChurch]?.map((paragraph, idx) => {
            if (typeof paragraph === 'string') {
              return (
                <span
                  key={`${selectedChurch}-${idx}`}
                  style={{
                    animation: `${50 * idx}ms ease fadein`,
                  }}
                >
                  {paragraph}
                </span>
              )
            }
            return (
              <span
                key={`${selectedChurch}-${idx}`}
                className={cx(
                  styled.spanClass,
                  classifiedStatements[paragraph.statementSentiment] === 'productive'
                    ? styled.proBLM
                    : styled.proPolice
                )}
                style={{
                  animation: `${30 * idx}ms easein fadein`,
                }}
              >
                {paragraph.text}
              </span>
            )
          })}
        </p>
      </div>
    </Card>
  )
}

export default Watermark
