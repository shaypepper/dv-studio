import { css } from 'pretty-lights'

export const containerClass = css`
  display: grid;
  grid-template-areas:
    'title'
    'images'
    'something';
  grid-template-rows: min-content 1fr 1fr;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100vh;
  h2 {
    font-family: NYTCheltenham;
    font-weight: 300;
    font-size: 4rem;
    font-style: italic;
    padding: 1rem 2rem;
    text-align: left;
    z-index: 2;
    background-color: white;
    box-shadow: 0px 40px 50px white;
  }
`

export const proBLM = css`
  background-color: var(--accent2);
`
export const proPolice = css`
  background-color: var(--chart2);
`

export const proNothing = css`
  background-color: rgba(0, 0, 0, 0);
`

export const sermonClass = css`
  columns: 3;
  overflow-y: scroll;
  z-index: 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: baseline;
  p {
    font-size: 4px;
  }
`
