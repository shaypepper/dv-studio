import React from 'react'

type LogoMaskProps = {
  church: string
  size: number
}

const LogoMask: React.FC<LogoMaskProps> = ({ church, size }) => {
  return (
    <mask id={`${church}LogoMask`}>
      <image href={`/img/logos/${church}.svg`} height={size} width={size} fill={'white'} />
    </mask>
  )
}

export default LogoMask
