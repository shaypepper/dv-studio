import React from 'react'
import Card from '../Card'
import ParagraphCard from '../ParagraphCard'
import { css } from 'pretty-lights'

const containerClass = css`
  display: block;
`

const MLK = () => {
  return (
    <Card className={containerClass}>
      <ParagraphCard>
        {' '}
        First, I must confess that over the past few years I have been gravely disappointed with the
        white moderate.
      </ParagraphCard>

      <ParagraphCard>
        ...I came to Birmingham with the hope that the white religious leadership of this community
        would see the justice of our cause and, with deep moral concern, would serve as the channel
        through which our just grievances could reach the power structure. I had hoped that each of
        you would understand. But again I have been disappointed. -Martin Luthing King, Jr. in
        Letter from Birmingham Jail
      </ParagraphCard>
      <ParagraphCard>
        {' '}
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
        est laborum et dolorum fuga.{' '}
      </ParagraphCard>
      <ParagraphCard>
        {' '}
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
        est laborum et dolorum fuga.{' '}
      </ParagraphCard>
      <ParagraphCard>
        {' '}
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque={' '}
      </ParagraphCard>
      <ParagraphCard>
        {' '}
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
        est laborum et dolorum fuga.{' '}
      </ParagraphCard>
      <div>
        <img
          style={{ width: '100%', paddingBottom: '100px' }}
          src="/img/BLMsupport.png"
          alt="Chart of black lives matter support in 2016"
        />
      </div>
    </Card>
  )
}

export default MLK
