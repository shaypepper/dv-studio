import { css } from 'pretty-lights'

export const containerClass = css`
  display: grid;
  margin: 0 auto;
  max-width: 1300px;
  grid-template-areas:
    'title  title'
    'church  sermon'
    'charts  sermon'
    'blank  sermon';
  grid-template-rows: min-content 1fr min-content 50px;
  grid-template-columns: 0.75fr 1fr;
  grid-column-gap: min(7vw, 5vh);
  grid-row-gap: 3vh;
  width: calc(100vw - 40px);
  height: 100vh;
  h1 {
    font-family: NYTCheltenham;
    font-weight: 300;
    font-size: 3rem;
    font-style: italic;
    padding: 1rem 0 0;
    text-align: left;
    z-index: 2;
    /* background-color: white; */
    /* box-shadow: 0px 40px 50px white; */
  }

  sub {
    font-size: 1rem;
  }

  /* h2 {
    animation: 2000ms ease 0s alternate fadein;
  } */
`

export const proPolice = css`
  background-color: var(--productive);
  color: white;
`
export const proBLM = css`
  &::hover {
    transform: scale(50) translate3d(-100px, -100px, 0px);
  }
  position: relative;
  transform: scale(7);
  background-color: var(--accent2);
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
`

export const proNothing = css`
  background-color: rgba(0, 0, 0, 0);
`

export const sermonClass = css`
  position: relative;
  overflow-y: scroll;
  z-index: 0;
  height: 100%;
  align-self: baseline;
  columns: 2;
  font-size: 0.5vmin;
  color: rgb(160, 160, 160);
  text-justify: inter-word;
  text-align: justify;
`

export const sermonContainerClass = css`
  grid-area: sermon;
  overflow-y: scroll;
  height: 100%;
  /* background-color: rgb(40, 40, 40); */
  /* padding: 0 10%; */
`

export const buildingClass = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 10%;
`

export const spanClass = css`
  position: relative;
`

export const mapClass = css`
  position: relative;
  /* bottom: 50%; */
  left: -50px;
  width: 100%;
  z-index: -1;
  transform-origin: 0 0;
  transform: scale(1.25);
`

export const pastorClass = css`
  position: absolute;
  bottom: 0;
  /* left: -10vw; */
  width: 75%;
  max-width: 230px;
`

export const churchArea = css`
  grid-area: church;
  animation: 2000ms ease 0s alternate fadein;
  height: 100%;
  h2,
  p {
    animation: 2000ms ease 0s alternate fadein;
  }
`

export const chartArea = css`
  grid-area: charts;
  align-self: baseline;
  position: relative;
  display: grid;
  grid-template-areas:
    'substance substance substance'
    'map influence influence'
    'map influence1 influence2'
    'map influence3 influence4';

  grid-template-columns: 2.5fr 1fr 1fr;
  grid-template-rows: min-content min-content 1fr 1fr;

  p {
    font-size: 1rem;
    font-family: 'nytcheltenham', serif;
  }

  > div > p {
    padding: 10px;
    margin: 10px 10px 10px 0px;
    width: fit-content;
  }
`
