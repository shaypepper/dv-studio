import { css } from 'pretty-lights'

export const containerClass = css`
  display: grid;
  margin: 0 auto;
  max-width: 1300px;
  grid-template-areas:
    'title  title'
    'church  sermon'
    'charts   sermon'
    'images  sermon';
  grid-template-rows: min-content min-content 1fr min-content;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3vw;
  grid-row-gap: 3vh;
  width: 100%;
  height: 100vh;
  h1 {
    font-family: NYTCheltenham;
    font-weight: 300;
    font-size: 3rem;
    font-style: italic;
    padding: 1rem 0 0;
    text-align: left;
    z-index: 2;
    background-color: white;
    /* box-shadow: 0px 40px 50px white; */
  }

  sub {
    font-size: 1rem;
  }
`

export const proBLM = css`
  background-color: var(--primary);
  color: white;

  &:hover {
    color: red;
  }
`
export const proPolice = css`
  &::hover {
    transform: scale(50) translate3d(-100px, -100px, 0px);
  }
  position: relative;
  transform: scale(7);
  background-color: var(--accent2);
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
  /* columns: 3; */
  font-size: 0.45vmin;
  color: rgb(120, 120, 120);
`

export const sermonContainerClass = css`
  grid-area: sermon;
  overflow-y: scroll;
  height: 100%;
  /* background-color: rgb(40, 40, 40); */
  padding: 0 10%;
`

export const buildingClass = css`
  position: absolute;
  bottom: 0;
  width: 100%;
`

export const spanClass = css`
  position: relative;

  &:before {
    content: 'shay is so cool';
    position: fixed;
    top: 20px;
    left: 20px;
    /* height: 40px; */
    background-color: black;
    color: white;
    display: none;
  }

  &:hover:before {
    display: block;
  }
`

export const mapClass = css`
  position: relative;
  /* bottom: 50%; */
  left: 0;
  width: 100%;
  z-index: -1;
  transform-origin: 0 0;
  transform: scale(1.2);
`

export const pastorClass = css`
  position: absolute;
  bottom: 0;
  /* left: -10vw; */
  width: 75%;
  max-width: 230px;
`

export const chartArea = css`
  grid-area: charts;
  position: relative;
  display: grid;
  grid-template-areas:
    'map bars bars bars'
    'map influence1 influence2 influence3';
  grid-template-columns: 3fr 1fr 1fr 1fr;

  p {
    font-size: 1rem;
    font-family: 'nytcheltenham', serif;
  }

  > div > p {
    padding: 10px;
    margin: 10px 10px 10px 0px;
    width: fit-content;

    &[data-connotation='negative'] {
      background-color: var(--accent1);
      &:hover {
        background-color: var(--accent2);
      }
    }

    &[data-connotation='positive'] {
      background-color: var(--primary);
      &:hover {
        background-color: var(--secondary);
      }
    }
  }
`
