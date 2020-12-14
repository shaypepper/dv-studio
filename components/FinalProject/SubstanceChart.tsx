import React, { useState } from 'react'
import { churches, ChurchKeys, classifiedStatements, sentimentLabels } from './metadata'
import { css } from 'pretty-lights'
import LogoMask from './Map/LogoMask'

const labelClass = css`
  text-transform: uppercase;
  font-family: nytfranklin;
  font-size: 1.75px;
  font-weight: 300;
`

const SubstanceChart: React.FC = ({ selectedChurch, onElementClick }) => {
  const [selectedSentiment, setSelectedSentiment] = useState(null)
  return (
    <div style={{}}>
      <svg viewBox="0 0 100 40">
        <defs>
          <LogoMask church="watermark" size="2"></LogoMask>
          <LogoMask church="tvc" size="2"></LogoMask>
          <LogoMask church="covenant" size="2"></LogoMask>
          <LogoMask church="prestonwood" size="2"></LogoMask>
          <LogoMask church="fellowship" size="2"></LogoMask>
          <LogoMask church="fbc" size="2"></LogoMask>
        </defs>
        <text className={labelClass} transform="translate(0 2)">
          How long did he talk about it?
        </text>

        <g>
          {Object.values(churches).map((church, i) => {
            const verticalCoordinate = 2.5 * i + 3
            const logo = (
              <rect
                mask={`url(#${church.key}LogoMask)`}
                height="2"
                width="2"
                transform={`translate(0 ${verticalCoordinate})`}
              />
            )
            let currentPosition = 3
            let totalMinutes = 0
            return (
              <g
                key={`thing${i}`}
                onClick={() => {
                  onElementClick(church.key)
                }}
                data-church={church.key}
              >
                {church.minutes.concat([null]).map((occasion, j) => {
                  currentPosition += church.minutes[j - 1] ? church.minutes[j - 1].length + 0.5 : 0

                  if (!occasion) {
                    return (
                      <React.Fragment key={`thing${j}`}>
                        <text
                          transform={`translate(${currentPosition + 0.5} ${
                            verticalCoordinate + 1.6
                          })`}
                          fontSize="2"
                        >
                          {totalMinutes} minutes
                        </text>
                      </React.Fragment>
                    )
                  }
                  totalMinutes += occasion.length
                  return (
                    <React.Fragment key={`thing${j}`}>
                      {logo}
                      <rect
                        height={2}
                        width={occasion.length}
                        transform={`translate(${currentPosition} ${verticalCoordinate})`}
                      />
                    </React.Fragment>
                  )
                })}
              </g>
            )
          })}
        </g>

        <g transform="translate(0 20)">
          <text className={labelClass} transform="translate(0 1)">
            How did he talk about it?
          </text>
          <circle transform="translate(25 0.25)" fill="var(--problematic)" r="0.75"></circle>
          <text className={labelClass} transform="translate(26 1)">
            PROBLEMATIC
          </text>
          <circle transform="translate(39.5 0.25)" fill="var(--productive)" r="0.75"></circle>
          <text transform="translate(41 1)" className={labelClass}>
            PRODUCTIVE
          </text>
          {Object.values(churches).map((church, i) => {
            const verticalCoordinate = 2.5 * i + 3
            const logo = (
              <rect
                mask={`url(#${church.key}LogoMask)`}
                data-church={church.key}
                height="2"
                width="2"
                transform={`translate(0 ${verticalCoordinate - 1})`}
              />
            )
            const dots = [logo]

            const addDot = (category) => ([premise, n]) => {
              dots.push(
                <circle
                  transform={`translate(${dots.length * 2.5 + 2} ${verticalCoordinate})`}
                  r="1"
                  fill={`var(--${category})`}
                  data-sentiment={category}
                  data-church={`${church.key}`}
                  onClick={() => {
                    console.log(premise)
                    if (church.key === selectedChurch) {
                      setSelectedSentiment(premise)
                    }
                  }}
                />
              )
            }
            if (church.sentiments) {
              Object.entries(church.sentiments)
                .filter(([c, count]) => classifiedStatements[c] === 'problematic')
                .forEach(addDot('problematic'))

              Object.entries(church.sentiments)
                .filter(([c, count]) => classifiedStatements[c] === 'productive')
                .forEach(addDot('productive'))
            }
            return (
              <g
                onClick={() => {
                  onElementClick(church.key)
                  if (church.key !== selectedChurch) {
                    setSelectedSentiment(null)
                  }
                }}
              >
                {dots}
                {selectedSentiment && church.key === selectedChurch && (
                  <g transform={`translate(${dots.length * 2.5 + 2} ${verticalCoordinate + 0.85})`}>
                    <text fontSize="2.5px">{sentimentLabels[selectedSentiment]}</text>
                  </g>
                )}
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}

export default SubstanceChart
