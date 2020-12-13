import React from 'react'
import { churches } from './metadata'
import { css } from 'pretty-lights'
import LogoMask from './Map/LogoMask'

const labelClass = css`
  text-transform: uppercase;
  font-family: nytfranklin;
  font-size: 1.75px;
  font-weight: 300;
`

const SubstanceChart: React.FC = ({ selectedChurch, onElementClick }) => {
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
            if (church.minutes.length === 1) {
              return (
                <g
                  onClick={() => {
                    onElementClick(church.key)
                  }}
                  data-church={church.key}
                >
                  {logo}
                  <rect
                    height={2}
                    width={church.minutes[0].length}
                    transform={`translate(3 ${verticalCoordinate})`}
                  ></rect>
                </g>
              )
            }
            let currentPosition = 3
            return (
              <g
                key={`thing${i}`}
                onClick={() => {
                  onElementClick(church.key)
                }}
                data-church={church.key}
              >
                {church.minutes.map((occasion, j) => {
                  currentPosition += church.minutes[j - 1] ? church.minutes[j - 1].length + 0.5 : 0
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
              console.log(category)
              new Array(n)
                .fill(true)
                .forEach(() =>
                  dots.push(
                    <circle
                      transform={`translate(${dots.length * 2.5 + 2} ${verticalCoordinate})`}
                      r="1"
                      fill={
                        category === 'problematicStatements'
                          ? 'var(--problematic)'
                          : 'var(--productive)'
                      }
                      data-church={`${church.key}`}
                    />
                  )
                )
            }
            Object.entries(church.problematicStatements).forEach(addDot('problematicStatements'))
            Object.entries(church.notAsProblematicStatements).forEach(
              addDot('notAsProblematicStatements')
            )
            return (
              <g
                onClick={() => {
                  onElementClick(church.key)
                }}
              >
                {dots}
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}

export default SubstanceChart
