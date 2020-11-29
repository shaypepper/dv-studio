import React from 'react'
import Head from 'next/head'
import { css } from 'pretty-lights'
import Card from './Card'
import Watermark from './Sections/Watermark'
import PottersHouse from './Sections/PottersHouse'
import FBC from './Sections/FBC'
import MLK from './Sections/MLK'

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
        <Card>
          <h1>Sermons the Sunday after</h1>
        </Card>
        <MLK></MLK>
        <Watermark />
        <FBC></FBC>
        <PottersHouse />
        <Card>
          In 2015, Dallas had the largest percentage of evangelicals of any metro area at 38%
        </Card>

        <Card
          className={css`
            flex-direction: column;
            justify-items: left;
          `}
        >
          <p>Watermark Church</p>

          <p>Potter's House</p>
        </Card>
        <Card> HELLO</Card>
      </main>
    </>
  )
}

export default FinalProject
