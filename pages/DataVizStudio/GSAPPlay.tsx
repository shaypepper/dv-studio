import React, { useEffect, useRef } from 'react'
import { gsap, Power0 } from 'gsap'
import { css, cx } from 'pretty-lights'

const containerClass = css`
  position: relative;
`

const squareClass = css`
  height: 300px;
  width: 300px;
  position: relative;
  margin-bottom: calc(100vh - 350px);
`

const purple = css`
  background-color: mediumpurple;
`

const red = css`
  background-color: red;
`

const movingBlockClass = css`
  background-color: #3b3b3b;
  /* height: 100px; */
  /* width: 100px; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  opacity: 0;

  img {
    width: 100%;
  }
`

const getAnimationProps = (n): any => ({
  scrollTrigger: {
    trigger: `.square${n + 1}`,
    scrub: true,
    // start: 'top top',
    // end: 'bottom top',
    onToggle: (a) => console.log('***', n, a.isActive),
    toggleActions: 'play none reverse reset',
  },
  opacity: (n + 1) * 0.1,
  //   x: (n + 1) * 20,
  //   duration: 2,
  ease: Power0.easeNone,
})

const GSAPPlay: React.FC = () => {
  const square1 = useRef(null)
  const square2 = useRef(null)
  const square3 = useRef(null)
  const square4 = useRef(null)
  const square5 = useRef(null)
  const movingBlock = useRef(null)

  useEffect(() => {
    // tl.current = gsap.timeline()
    gsap.fromTo('.movingBox', { opacity: 0 }, { ...getAnimationProps(0) })
    gsap.fromTo('.movingBox', { opacity: 0.1 }, { ...getAnimationProps(1) })
    gsap.fromTo('.movingBox', { opacity: 0.2 }, { ...getAnimationProps(2) })
    gsap.fromTo('.movingBox', { opacity: 0.3 }, { ...getAnimationProps(3) })
    gsap.fromTo('.movingBox', { opacity: 0.4 }, { ...getAnimationProps(4) })
  }, [])
  return (
    <div className="container trigger">
      <div ref={square1} style={{ top: 75 }} className={`${cx(squareClass, red)}  square1`} />
      <div ref={square2} className={`${cx(squareClass, purple)}  square2`} />
      <div ref={square3} className={`${cx(squareClass, red)}  square3`} />
      <div ref={square4} className={`${cx(squareClass, purple)}  square4`} />
      <div ref={square5} className={`${cx(squareClass, red)}  square5`} />
      <div className={`${cx(squareClass)}  `} />
      <div ref={movingBlock} className={`${movingBlockClass} movingBox`} style={{ opacity: 0 }}>
        <img src="/img/DFW.png" alt="map of Dallas"></img>
      </div>
    </div>
  )
}

export default GSAPPlay
