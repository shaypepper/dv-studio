import React from 'react'
import { css, cx } from 'pretty-lights'

const r = () => Math.floor(Math.random() * 55 + 200)

const containerClass = css`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  position: relative;
`
type CardProps = {
  className?: string
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return <section className={cx(containerClass, className)}>{children}</section>
}

export default Card
