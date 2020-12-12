import React from 'react'
import { pack, hierarchy } from 'd3-hierarchy'
import { ChurchKeys, churches } from './metadata'
import { colors } from './styled'
import { css } from 'pretty-lights'

type InfluenceChartProps = {
  calculationKey: string
  church: ChurchKeys
}

const circleClass = css`
  transition: opacity 300ms ease;
  opacity: 50%;
  &:hover {
    opacity: 100%;
  }

  &:after {
    content: 'SHAY IS SO COOL';
    color: red;
  }
`

const labels = {
  twitterFollowers: 'Twitter Followers',
  attendees: 'Church Attendees',
  podcastReviews: 'Podcast Reviews',
}

const labelClass = css`
  text-transform: uppercase;
  font-family: nytfranklin;
`

const InfluenceChart: React.FC<InfluenceChartProps> = ({ calculationKey, church }) => {
  const root = { children: Object.values(churches) }
  const h = hierarchy(root).sum((d) => d[calculationKey])
  const packedData = pack().size([100, 100])(h)
  ChurchKeys.Watermark
  return (
    <div style={{}}>
      <svg height="100%" width="100%" viewBox="0 -30 100 130">
        {packedData.leaves().map((node, i) => {
          return (
            <>
              <circle
                className={circleClass}
                r={node.r}
                key={node.data.key}
                transform={`translate(${node.x} ${node.y})`}
                fill={node.data.key === church ? 'rgb(40,40,40)' : 'gainsboro'}
              ></circle>
            </>
          )
        })}
        <text className={labelClass} transform="translate(0 -18)" fontSize="8px" fontWeight="300">
          {labels[calculationKey]}
        </text>

        <text className={labelClass} transform="translate(0 -5)" fontSize="14px" fontWeight="700">
          {churches[church][calculationKey]}
        </text>
      </svg>
    </div>
  )
}

export default InfluenceChart
