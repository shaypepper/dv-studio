import React from 'react'
import Head from 'next/head'
import { css } from 'pretty-lights'
import Card from './Card'
import ChurchInfo from './Sections/ChurchInfo'

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

const quickCardClass = css`
  font-size: 2rem;
  margin: 25%;
`

const FinalProject: React.FC = () => {
  return (
    <>
      <Head>
        <link href="https://a1.nyt.com/fonts/css/fonts.css" type="stylesheet"></link>
      </Head>
      <main className={containerClass}>
        <Card>
          <p className={quickCardClass}>
            Preaching on Race <br />
            <span style={{ fontSize: '1rem' }}>By Shay Culpepper</span>
          </p>
          <p></p>
        </Card>
        <Card>
          <p className={quickCardClass}>
            On July 5th, 2016, Alton Sterling was murdered by Baton Rouge police officers.
          </p>
        </Card>
        <Card>
          <p className={quickCardClass}>
            The next day, Philando Castille was also killed by a police officer in Minnesota.
          </p>
        </Card>
        <Card>
          <p className={quickCardClass}>
            In the coming days, Black Lives Matter protestors organized rallies across the country,
            asking for justive for Philando and Alton. On July 7th one of these rallies was held in
            Dallas.
          </p>
        </Card>
        <Card>
          <p className={quickCardClass}>
            At this rally, a man took advantage of the protest to take his anger out on police
            officers. He shot and killed five of them as well as two civilians.
          </p>
        </Card>
        <Card>
          <p className={quickCardClass}>
            At that point, Dallas had the largest percentage of evangelicals of any metro area at
            38%, so what the pastors had to say was suddenly in the national spotlight.{' '}
          </p>
        </Card>

        <Card>
          <p className={quickCardClass}>
            The question: Could they, at a time when a vast majority of Rebulicans did not support
            BLM, use the opportunity to validate the movement? Could they avoid problematic teaching
            points? Could they productively encourage the white members in their congregations to be
            allies?
          </p>
        </Card>

        <Card>
          <p className={quickCardClass}>Let′s analyze the sermons the Sunday after.</p>
        </Card>

        <ChurchInfo />
      </main>
    </>
  )
}

export default FinalProject
