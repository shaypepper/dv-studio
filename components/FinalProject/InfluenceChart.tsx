import React from 'react'
import { pack, hierarchy } from 'd3-hierarchy'
import { ChurchKeys, churches } from './metadata'
import { css } from 'pretty-lights'

type InfluenceChartProps = {
  calculationKey: string
  church: ChurchKeys
}

const labels = {
  twitterFollowers: 'Followers (pastor)',
  churchTwitterFollowers: 'Followers (church)',
  attendees: 'Church Attendees',
  podcastReviews: 'Podcast Reviews',
}

const labelClass = css`
  text-transform: uppercase;
  font-family: nytfranklin;
`

const InfluenceChart: React.FC<InfluenceChartProps> = ({
  calculationKey,
  church,
  onElementClick,
}) => {
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
                r={node.r}
                key={node.data.key}
                transform={`translate(${node.x} ${node.y})`}
                data-church={node.data.key}
                onClick={() => onElementClick(node.data.key)}
              ></circle>
            </>
          )
        })}
        <text className={labelClass} transform="translate(0 -18)" fontSize="8px" fontWeight="300">
          {labels[calculationKey]}
        </text>

        <text className={labelClass} transform="translate(0 -5)" fontSize="14px" fontWeight="700">
          {churches[church]?.[calculationKey]}
        </text>
      </svg>
    </div>
  )
}

export default InfluenceChart
