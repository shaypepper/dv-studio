import React from 'react'

const LogoMask: React.FC = ({ church, size }) => {
  return (
    <mask id={`${church}LogoMask`}>
      <image href={`/img/logos/${church}.svg`} height={size} width={size} fill={'white'} />
    </mask>
  )
}

export default LogoMask
