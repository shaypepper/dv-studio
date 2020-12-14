import React from 'react'
import { css } from 'pretty-lights'

const paragraphClass = css`
  padding: 32px;
  font-family: serif;
  background-color: var(--productive);
  margin: 15vh auto;
  width: 60%;
`

const ParagraphCard: React.FC = ({ children }) => {
  return <p className={paragraphClass}>{children}</p>
}

export default ParagraphCard
