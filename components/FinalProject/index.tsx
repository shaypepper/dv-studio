import React from 'react'
import Head from 'next/head'
import { css } from 'pretty-lights'
import Card from './Card'
import Watermark from './Sections/Watermark'
import FBC from './Sections/FBC'
import MLK from './Sections/MLK'
import InfluenceChart from './InfluenceChart'
import DFWMap from './Map'
import { ChurchKeys } from './metadata'

const containerClass = css`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`

const FinalProject: React.FC = () => {
  return (
    <>
      <Head>
        <link href="https://a1.nyt.com/fonts/css/fonts.css" type="stylesheet"></link>
      </Head>
      <main className={containerClass}>
        {/* <Card
          className={css`
            flex-direction: column;
            justify-items: left;
          `}
        >
          <DFWMap />
        </Card> */}
        <Card>
          <h1>Sermons the Sunday after</h1>
          {/* <InfluenceChart calculationKey={'twitterFollowers'} church={ChurchKeys.Watermark} />

          <InfluenceChart calculationKey={'attendees'} church={ChurchKeys.Watermark} />
          <InfluenceChart calculationKey={'podcastReviews'} church={ChurchKeys.Watermark} /> */}
        </Card>
        {/* <MLK></MLK> */}
        <Watermark />
        <FBC></FBC>
        <Card>
          In 2015, Dallas had the largest percentage of evangelicals of any metro area at 38%
        </Card>

        <Card> HELLO</Card>
      </main>
    </>
  )
}

export default FinalProject
