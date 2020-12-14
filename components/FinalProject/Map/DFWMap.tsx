import React from 'react'
import { ChurchKeys } from '../metadata'
import LogoMask from './LogoMask'

type MapProps = {
  className?: string
}

const Map: React.FC<MapProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className={className}>
      <defs>
        <style>
          {
            '.cls-1{fill:#ef579f;}.cls-2{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.2px;}'
          }
        </style>

        <radialGradient id="radialGradient">
          <stop offset="10%" stopColor="rgb(50,50,50)"></stop>
          <stop offset="90%" stopColor="black"></stop>
        </radialGradient>
        <mask id="gradient-mask">
          <circle cx="13.5" cy="13.5" r="17.5" fill="url('#radialGradient')" />
        </mask>

        <LogoMask church="watermark" size={2}></LogoMask>
        <LogoMask church="tvc" size={2}></LogoMask>
        <LogoMask church="covenant" size={2}></LogoMask>
        <LogoMask church="prestonwood" size={2}></LogoMask>
        <LogoMask church="fellowship" size={2}></LogoMask>
        <LogoMask church="fbc" size={2}></LogoMask>
      </defs>
      <text transform="translate(4 2)" fontSize="0.75" fontFamily="nytfranklin" fontWeight="300">
        MAP OF CHURCHES IN DALLAS-FORT WORTH
      </text>
      <g id="Map" data-name="Layer 1" mask="url('#gradient-mask')">
        <path
          className="cls-2"
          d="M6.33-.71A4.2,4.2,0,0,0,6.39.36a2.56,2.56,0,0,0,.43,1A2.43,2.43,0,0,1,7.14,2c.07.21.13.44.19.67a2.18,2.18,0,0,0,.22.57,2.23,2.23,0,0,0,.37.5L8.16,4l.24.28a4.2,4.2,0,0,1,.36.5c.11.17.21.35.33.51a1.87,1.87,0,0,0,.41.43L10,6l.11.08.1.08"
        />
        <path
          className="cls-2"
          d="M26.08,0a16.21,16.21,0,0,1-.5,1.68,16.25,16.25,0,0,1-.67,1.62l-.18.39c-.05.13-.11.26-.17.39a1,1,0,0,0-.1.45,3.73,3.73,0,0,0,0,.47,4.46,4.46,0,0,1,.05.63,2.81,2.81,0,0,1-.05.64c0,.17-.05.34-.08.51a2.83,2.83,0,0,1-.13.5c-.1.27-.2.54-.32.79a2.58,2.58,0,0,1-.47.71,2,2,0,0,0-.22.29,3,3,0,0,0-.16.31,1.52,1.52,0,0,1-.32.46l-.39.41c-.12.12-.24.24-.37.35s-.25.23-.37.36a1.67,1.67,0,0,0-.33.47,1.75,1.75,0,0,0-.18.56,4.09,4.09,0,0,0-.07.6c0,.21,0,.41,0,.61s0,.68,0,1,0,.69,0,1v.12a.37.37,0,0,0,0,.11,2.59,2.59,0,0,1-.09.79,4.07,4.07,0,0,1-.26.74c-.15.35-.32.7-.47,1s-.3.7-.44,1.06a.25.25,0,0,1,0,.07.13.13,0,0,0,0,.06q0,.33,0,.66c0,.22,0,.44.05.65a.48.48,0,0,0,.07.21.34.34,0,0,0,.17.14.76.76,0,0,1,.19.12l.16.16"
        />
        <path
          className="cls-2"
          d="M18.53-.19a7.74,7.74,0,0,1-1,.36,7.73,7.73,0,0,0-1.08.4c-.35.16-.69.33-1,.52L14,1.84l-1.37.75a.75.75,0,0,0-.25.25.66.66,0,0,0-.07.32,1.57,1.57,0,0,1-.08.49,1.94,1.94,0,0,1-.22.43l-.27.44c-.08.15-.17.29-.26.44l-.14.18-.15.17-.46.43-.46.43"
        />
        <path
          className="cls-2"
          d="M29.23,20.23a2.75,2.75,0,0,1-.4,0c-.14,0-.27,0-.4,0a2.38,2.38,0,0,1-.76,0,3.86,3.86,0,0,1-.73-.23l-.22-.08-.23-.08a.32.32,0,0,0-.25,0l-.24.08A.08.08,0,0,0,26,20s0,.08,0,.11a1.37,1.37,0,0,0-.08.35.65.65,0,0,0,.07.35A.48.48,0,0,1,26,21a2.43,2.43,0,0,0,0,.27c0,.55,0,1.1,0,1.66s0,1.1,0,1.66c0,.12,0,.24,0,.36v.36a.37.37,0,0,1-.09.26.31.31,0,0,1-.27.07,4.52,4.52,0,0,0-.52,0h-.53a2.52,2.52,0,0,0-.73.05,2.33,2.33,0,0,0-.7.24L22,26.42l-1.11.46a2.73,2.73,0,0,0-.48.25l-.47.28a1.1,1.1,0,0,1-.29.11l-.31.07-.09,0s-.06,0-.08,0a.49.49,0,0,1-.2.05.45.45,0,0,1-.19-.05l-.09,0a.27.27,0,0,0-.09,0,.55.55,0,0,1-.34-.07L18,27.37l-.41-.19a1.09,1.09,0,0,0-.44-.1H14.3a.41.41,0,0,1-.16,0A.27.27,0,0,1,14,27l-.25-.36-.26-.34a4.6,4.6,0,0,1-.37-.53l-.35-.55a.56.56,0,0,0,0-.08.09.09,0,0,0-.09-.05"
        />
        <path className="cls-2" d="M18-.6a3.53,3.53,0,0,1,0,.46v.06S18,0,18,0" />
        <path
          className="cls-2"
          d="M33.13,15.94l.21-.82a2,2,0,0,0,0-.24.8.8,0,0,0,0-.31,1.42,1.42,0,0,0-.1-.29,1.38,1.38,0,0,1-.09-.39c0-.13,0-.27,0-.4a1.34,1.34,0,0,1,0-.2v-.21c0-.3,0-.61,0-.91s.07-.6.13-.9a1.5,1.5,0,0,0,0-.63,1.35,1.35,0,0,0-.25-.56,1.84,1.84,0,0,0-.44-.4,1.28,1.28,0,0,0-.59-.18l-.51,0-.49.09-.51.08-.5.06a.36.36,0,0,1-.23,0,.86.86,0,0,1-.2-.13l-.86-.64c-.28-.22-.56-.44-.83-.68l-.22-.19-.24-.16a1.2,1.2,0,0,1-.6-.84,2.76,2.76,0,0,0-.08-.27,1.34,1.34,0,0,0-.09-.26.94.94,0,0,0-.25-.34A.85.85,0,0,0,26.1,6a5.87,5.87,0,0,0-.59,0l-.6,0-.48,0H24l-.77,0-.77,0-.18,0-.17.07-.31.1a1.65,1.65,0,0,1-.32.06,1.24,1.24,0,0,1-.51-.08,1.34,1.34,0,0,1-.44-.27l-.19-.16-.18-.16a.76.76,0,0,0-.23-.13,1.22,1.22,0,0,0-.26-.06,7.4,7.4,0,0,0-.94,0H16.92a.62.62,0,0,0-.37.11.79.79,0,0,0-.24.29l-.3.55-.32.54a.6.6,0,0,1-.57.32c-.28,0-.57,0-.86,0l-.85.09c-.2,0-.39,0-.58,0h-.58a.51.51,0,0,0-.21,0l-.19.08a.19.19,0,0,0-.11.12.28.28,0,0,0,0,.18c0,.13,0,.27,0,.4s0,.27,0,.4a.51.51,0,0,0,.08.28,1.32,1.32,0,0,0,.16.25.77.77,0,0,1,.14.36.67.67,0,0,1-.09.38,1.06,1.06,0,0,0-.14.48c0,.16,0,.33,0,.5s0,.26,0,.39a2.74,2.74,0,0,1-.09.39,1,1,0,0,1-.11.26.9.9,0,0,1-.2.19l-.08.05a.08.08,0,0,0,0,.09"
        />
        <path
          className="cls-2"
          d="M10.61,28.49a.59.59,0,0,0-.29-.12.44.44,0,0,0-.31.05.27.27,0,0,1-.18.07,1,1,0,0,1-.17,0l-.88-.12-.88-.14-.45-.07-.45,0H6.17l-.83,0-.48,0-.48,0"
        />
        <path
          className="cls-2"
          d="M5.59,10.76a.09.09,0,0,1,.06.08.34.34,0,0,1,0,.1c0,1,0,2,0,3v3a.83.83,0,0,1,0,.15.27.27,0,0,0,0,.15"
        />
        <path
          className="cls-2"
          d="M18.7,21.66l-.65.15a5.09,5.09,0,0,1-.66.12L17.2,22l-.18.09a.88.88,0,0,1-.3.1.53.53,0,0,1-.3-.05,2.18,2.18,0,0,0-.6-.14l-.62,0a6.43,6.43,0,0,0-.76,0,6.48,6.48,0,0,0-.76.06,3.24,3.24,0,0,1-.44,0,2.17,2.17,0,0,0-.44,0"
        />
        <path
          className="cls-2"
          d="M18,.07a.36.36,0,0,1,0,.09.28.28,0,0,1,0,.09,3,3,0,0,0-.07.66c0,.22,0,.45,0,.67a.67.67,0,0,1,0,.24.67.67,0,0,1-.1.21,1.24,1.24,0,0,0-.16.4,1.31,1.31,0,0,0,0,.44.28.28,0,0,1,0,.09V3c0,.25,0,.49,0,.74s0,.48,0,.73,0,.75,0,1.12,0,.75,0,1.12c0,.12,0,.25,0,.37s0,.24,0,.36a.21.21,0,0,0,0,.12s.06.06.08.09A.66.66,0,0,1,18,8a1.1,1.1,0,0,1,0,.41.33.33,0,0,0,0,.14s0,.1,0,.15a1.79,1.79,0,0,1,0,.23,1,1,0,0,1,0,.24,1.32,1.32,0,0,0-.08.44,1.71,1.71,0,0,0,0,.45,2.94,2.94,0,0,1,0,.51,2.91,2.91,0,0,0,0,.51s0,.07,0,.1,0,0,.1,0a4.45,4.45,0,0,1,.73,0l.73,0,.67,0c.22,0,.44,0,.66,0h.15l.15,0"
        />
        <path className="cls-2" d="M12.76,17.22h-7a3,3,0,0,1-.42,0l-.42-.08H4.72l-.22,0" />
        <path
          className="cls-2"
          d="M25.93,19.94a.61.61,0,0,0-.3,0l-.27.1a1.45,1.45,0,0,1-.5.08,4.38,4.38,0,0,1-.5,0,4.1,4.1,0,0,0-.5,0,1,1,0,0,0-.47.17l-.08,0h-.08c-.21,0-.42,0-.63,0H22a1.19,1.19,0,0,0-.51.11,1,1,0,0,0-.37.38.42.42,0,0,1-.15.17.79.79,0,0,1-.22.06l-.18,0a1,1,0,0,0-.17.1"
        />
        <path
          className="cls-2"
          d="M21.45,11.31a2,2,0,0,1,.86.36c.26.18.49.39.74.57l.38.3.39.29a1.69,1.69,0,0,1,.32.27,1.64,1.64,0,0,1,.26.33.86.86,0,0,0,.18.2,1.16,1.16,0,0,0,.21.16l.68.47a4.08,4.08,0,0,1,.63.54l.06,0,.06,0a1.43,1.43,0,0,1,.54.22,4.1,4.1,0,0,1,.47.35l.66.49a4.68,4.68,0,0,1,.62.56,1.18,1.18,0,0,1,.17.24.91.91,0,0,1,.1.29l.09.49c0,.16.07.32.11.48a.32.32,0,0,1,0,.17.35.35,0,0,1-.14.12c-.14.08-.27.17-.4.26a2.8,2.8,0,0,1-.41.25l-.71.4c-.24.14-.48.27-.73.39l-.11.06a.24.24,0,0,0-.09.11"
        />
        <path
          className="cls-2"
          d="M13,16.58l-.6-.37-.57-.39a1.55,1.55,0,0,1-.37-.35c-.11-.13-.2-.28-.3-.41a.48.48,0,0,1-.08-.18.69.69,0,0,1,0-.2,1.36,1.36,0,0,0-.1-.36.77.77,0,0,0-.26-.28l-.56-.39-.55-.38a2.2,2.2,0,0,0-.63.54c-.17.21-.32.43-.48.64s-.33.44-.5.65a5.09,5.09,0,0,1-.56.58,1,1,0,0,0-.31.43,1.51,1.51,0,0,0-.08.53q0,.45,0,.9c0,.3,0,.6,0,.89s0,.66,0,1,0,.66,0,1a.5.5,0,0,1,0,.12.37.37,0,0,1,0,.11c-.06.1-.12.2-.17.3a2.82,2.82,0,0,1-.18.29.05.05,0,0,0,0,.05.15.15,0,0,0,0,.06,2.09,2.09,0,0,1-.06.56,2.09,2.09,0,0,0,0,.56"
        />
        <path
          className="cls-2"
          d="M5.65,9.26a.5.5,0,0,0,.23.18l.26.08a1.47,1.47,0,0,1,.6.34,2.42,2.42,0,0,1,.44.55A2.93,2.93,0,0,0,7.6,11a1.47,1.47,0,0,0,.59.35l.8.23.81.22.51.14.5.14.11,0a.27.27,0,0,1,.08.07"
        />
        <path
          className="cls-2"
          d="M11.94,7.42a.72.72,0,0,0,.11.19l.15.16a3.38,3.38,0,0,1,.24.41,4.14,4.14,0,0,1,.2.43,5.07,5.07,0,0,0,.32.61l.33.6a1.41,1.41,0,0,1,.14.31,1.28,1.28,0,0,1,.07.34,6.06,6.06,0,0,0,.09.73c.05.24.1.49.13.73,0,.07,0,.15,0,.22a.83.83,0,0,0,.06.21"
        />
        <path
          className="cls-2"
          d="M4.42,17.2a5.61,5.61,0,0,1-.58,0,3.7,3.7,0,0,1-.57-.07H3.11a.8.8,0,0,1-.15,0,3.89,3.89,0,0,1-.59,0H1.43a2.21,2.21,0,0,1-.35,0,.49.49,0,0,0-.2,0l-.21.05H.11a1.45,1.45,0,0,1-.42,0,1.37,1.37,0,0,1-.38-.15.19.19,0,0,0-.12,0,.48.48,0,0,0-.12,0"
        />
        <path
          className="cls-2"
          d="M13,16.7a.25.25,0,0,0-.12.08.21.21,0,0,0,0,.13,2.33,2.33,0,0,1-.11.65c-.07.21-.15.41-.22.62a1.46,1.46,0,0,0-.05.2,1.49,1.49,0,0,0,0,.21c0,.25,0,.51,0,.76a6.33,6.33,0,0,0,.05.76,5,5,0,0,0,.11.66c0,.22.09.43.13.65a3.33,3.33,0,0,1,.07.54,1.07,1.07,0,0,1-.13.54.64.64,0,0,0-.07.28v.3l0,.56,0,.56a1.4,1.4,0,0,0,0,.29.72.72,0,0,0,.06.29.4.4,0,0,1,0,.28.89.89,0,0,1-.13.23l-.16.2a1.62,1.62,0,0,1-.18.19,1.92,1.92,0,0,0-.37.48,1.8,1.8,0,0,0-.19.58.65.65,0,0,1,0,.13.34.34,0,0,1-.06.12,4,4,0,0,0-.36.71,2.46,2.46,0,0,0-.16.77"
        />
        <path
          className="cls-2"
          d="M18,27.44a.3.3,0,0,0,0,.18l0,.19a3.49,3.49,0,0,1,0,.56c0,.18,0,.37,0,.55,0,.63,0,1.27,0,1.9s0,1.26,0,1.89c0,.41,0,.83,0,1.24s0,.83,0,1.24"
        />
        <path
          className="cls-2"
          d="M5.83,7.61a1.33,1.33,0,0,1,0,.28,2.45,2.45,0,0,1,0,.27,1.33,1.33,0,0,0,0,.2.4.4,0,0,0,.09.2A.53.53,0,0,0,5.68,9c0,.15,0,.31,0,.46l0,.56c0,.18,0,.37,0,.55a.41.41,0,0,1,0,.16.25.25,0,0,1-.12.1,3.14,3.14,0,0,0-.31.18l-.3.19a1.8,1.8,0,0,1-.46.23,1.13,1.13,0,0,1-.52,0,1.35,1.35,0,0,0-.35,0H3.15a.33.33,0,0,0-.19.06.79.79,0,0,0-.17.14,1.57,1.57,0,0,0-.32.31.9.9,0,0,0-.17.4.89.89,0,0,0,0,.23.48.48,0,0,0,.13.21l.31.27a3.85,3.85,0,0,1,.3.27,3,3,0,0,1,.23.27,1,1,0,0,1,.17.31,4.14,4.14,0,0,0,.31.59l.37.56a.76.76,0,0,1,.13.31,1.12,1.12,0,0,1,0,.32,4.07,4.07,0,0,0,.06.6c0,.2.06.39.08.59s0,.35,0,.53v.53a3,3,0,0,0,0,.42,1.24,1.24,0,0,0,.16.4,1.07,1.07,0,0,1,.2.58,2.18,2.18,0,0,1-.08.61c0,.21-.11.42-.16.63s-.11.43-.14.64-.1.56-.13.84a4.13,4.13,0,0,0,0,.86c0,.23,0,.46.05.69s0,.46,0,.69l0,1.44c0,.48,0,1,0,1.44,0,.16,0,.33,0,.49a4.21,4.21,0,0,0,0,.5c0,.24,0,.48,0,.71s0,.48,0,.72a1.53,1.53,0,0,1,0,.37c0,.12,0,.25,0,.37a.92.92,0,0,1,0,.16.77.77,0,0,1,0,.15,1.8,1.8,0,0,1-.12.47,1.91,1.91,0,0,1-.24.41,1.68,1.68,0,0,0-.33.67,3.65,3.65,0,0,0-.09.74c0,.22,0,.43,0,.65l0,.66c0,.08,0,.17,0,.26a1.11,1.11,0,0,1-.07.26c0,.08-.05.16-.08.23a1,1,0,0,0,0,.25H3.17"
        />
        <path
          className="cls-2"
          d="M2.33,12.73a.2.2,0,0,0,0,.11.37.37,0,0,0,0,.11v.52c0,.18,0,.36,0,.53a3.27,3.27,0,0,1-.15,1.18,3.92,3.92,0,0,1-.52,1.07c-.1.14-.19.29-.28.43l-.27.45"
        />
        <path
          className="cls-2"
          d="M18.19,11.25a1.8,1.8,0,0,0,.08.39l.12.39c.06.23.12.46.19.69s.13.46.2.69a1,1,0,0,1,0,.42c0,.14,0,.27-.05.4,0,.39-.08.77-.11,1.15l-.12,1.14-.09.88c0,.29-.07.58-.1.88s0,.44,0,.65a2.48,2.48,0,0,0,.08.66v0s0,.2,0,.22"
        />
        <path
          className="cls-2"
          d="M18.11,11.19l-.3,0a1.51,1.51,0,0,1-.3,0,1.21,1.21,0,0,0-.38.06,1.14,1.14,0,0,0-.34.15,8.22,8.22,0,0,1-1.1.49c-.38.13-.77.24-1.15.35l-.34.11a.63.63,0,0,1-.36,0,2.26,2.26,0,0,1-.85.1c-.29,0-.57,0-.85-.05a1.61,1.61,0,0,1-.37-.07,3.59,3.59,0,0,1-.35-.12.49.49,0,0,0-.25-.05.52.52,0,0,0-.25.08,7,7,0,0,0-.63.43c-.21.16-.4.32-.61.46l-.07.06a.19.19,0,0,0,0,.08"
        />
        <path
          className="cls-2"
          d="M12.41,2.77a.69.69,0,0,0-.32,0,1.63,1.63,0,0,1-.3.07l-.45.07L10.89,3l-.66.11-.65.09-.22,0-.21,0a.65.65,0,0,0-.28.12.8.8,0,0,0-.21.2l-.18.25-.17.26"
        />
        <path
          className="cls-2"
          d="M21,15.29l.21,0,.2,0a.17.17,0,0,1,.1,0l.08.07.2.16.19.17a1,1,0,0,0,.44.22c.16,0,.32.05.48.08a.58.58,0,0,0,.28,0l.26-.14.15-.08.15-.09c.06,0,.1,0,.13,0a.19.19,0,0,1,.08.11l0,.07a.13.13,0,0,1,0,.06.81.81,0,0,0,.09.47,2.48,2.48,0,0,0,.29.37,3.7,3.7,0,0,1,.31.46,1.65,1.65,0,0,0,.36.43s0,0,0,0a.07.07,0,0,1,0,.05.92.92,0,0,0,.14.37,1.43,1.43,0,0,0,.24.31,2.12,2.12,0,0,1,.25.36l.21.39a.36.36,0,0,1,.06.2,1.47,1.47,0,0,1,0,.21.65.65,0,0,1,0,.14.22.22,0,0,0,0,.13"
        />
        <path
          className="cls-2"
          d="M14.56,15.81l-.11.17,0,.05s0,0,0,0l0,0a1.18,1.18,0,0,1,.37.49,2.7,2.7,0,0,1,.17.59,5.09,5.09,0,0,0,.14.56c0,.19.1.37.17.56a2.31,2.31,0,0,0,.1.28.63.63,0,0,0,.18.22.42.42,0,0,0,.13.07.31.31,0,0,0,.13,0,1.74,1.74,0,0,1,.65.1,4,4,0,0,1,.58.3l.36.2a3,3,0,0,0,.39.13.73.73,0,0,1,.25.08l.22.13a.52.52,0,0,1,.17.22,1.14,1.14,0,0,1,.06.25,4,4,0,0,1,.09.48,3.87,3.87,0,0,1,0,.48.83.83,0,0,0,0,.27.42.42,0,0,0,.19.23A.26.26,0,0,1,19,22a.27.27,0,0,1-.05.22.85.85,0,0,0-.17.39,1.17,1.17,0,0,0,0,.42.54.54,0,0,1-.06.29.63.63,0,0,1-.22.21.1.1,0,0,1-.05,0l-.05,0a.72.72,0,0,0-.36.3.91.91,0,0,0-.13.45,3.16,3.16,0,0,1-.11.6c0,.19-.1.39-.13.59a1.13,1.13,0,0,0,0,.25,1,1,0,0,0,0,.24"
        />
        <path
          className="cls-2"
          d="M9.48,13.28a1,1,0,0,0-.19-.17A1.19,1.19,0,0,0,9.07,13a6.52,6.52,0,0,1-.72-.43c-.23-.15-.45-.32-.67-.49a5.72,5.72,0,0,0-.48-.32l-.49-.29a1.24,1.24,0,0,1-.26-.19l-.23-.22A1.05,1.05,0,0,0,6,10.87a.42.42,0,0,0-.3,0"
        />
        <path
          className="cls-2"
          d="M20.38,21.21a.76.76,0,0,1,.13.23,2,2,0,0,1,.07.26,1.16,1.16,0,0,0,.17.45.73.73,0,0,1,.09.32,1.21,1.21,0,0,0,.08.34A.87.87,0,0,1,21,23a1.21,1.21,0,0,1,.05.18.45.45,0,0,0,.17.28.38.38,0,0,0,.32,0l.44-.11a2.36,2.36,0,0,1,.46,0l.5.05.5.09.09,0,.08.05c.12.13.24.25.37.37s.24.25.35.38l.14.14.14.13.6.49.61.48"
        />
        <path
          className="cls-2"
          d="M6.3,22.5a.66.66,0,0,0,0,.14.76.76,0,0,1,0,.15.44.44,0,0,0,0,.2.28.28,0,0,0,.11.17,1,1,0,0,1,.34.47,1.75,1.75,0,0,1,.08.57,1.13,1.13,0,0,1,0,.26,1.1,1.1,0,0,1-.06.26,5.44,5.44,0,0,0-.15.54,3.43,3.43,0,0,0-.07.56"
        />
        <path
          className="cls-2"
          d="M21,15.31H18.21l-.12,0a.38.38,0,0,0-.18,0,.22.22,0,0,0-.17.09.33.33,0,0,1-.2.12.6.6,0,0,1-.23,0,1.33,1.33,0,0,0-.63,0,3.52,3.52,0,0,0-.6.2.52.52,0,0,0-.19.11l-.18.13a.43.43,0,0,1-.25.09.3.3,0,0,1-.23-.08.7.7,0,0,0-.19-.1.5.5,0,0,0-.21,0,.59.59,0,0,1-.22-.05.72.72,0,0,0-.21-.05.46.46,0,0,1-.33-.11c-.09-.08-.16-.18-.25-.25a.28.28,0,0,1-.09-.19c0-.08,0-.16,0-.23,0-.38,0-.76,0-1.13s0-.76,0-1.14v-.1a.15.15,0,0,0,0-.09"
        />
        <path
          className="cls-2"
          d="M21.16,23.43a.15.15,0,0,0,0,.15s0,.09.05.13c.08.28.15.56.23.85a5.11,5.11,0,0,0,.29.83,2.86,2.86,0,0,1,.15.41c0,.14.06.29.1.43a.1.1,0,0,0,0,.07s0,.05,0,.08"
        />
        <path
          className="cls-2"
          d="M10.22,6.25a1.5,1.5,0,0,1-.34.27,1.1,1.1,0,0,1-.42.14.78.78,0,0,0-.32.15L8.86,7a1,1,0,0,1-.26.11.44.44,0,0,1-.27,0l-.05,0,0,0a3.49,3.49,0,0,1-.34-.15,1.11,1.11,0,0,0-.36-.08"
        />
        <path
          className="cls-2"
          d="M22,26.46a4.67,4.67,0,0,0,.37,1.05,5.19,5.19,0,0,0,.62.93,3.15,3.15,0,0,1,.24.3l.23.32"
        />
        <path
          className="cls-2"
          d="M16.65,27.15a1.3,1.3,0,0,1-.2.43,3.8,3.8,0,0,1-.29.38c-.21.27-.41.55-.61.82a9.6,9.6,0,0,1-.64.79"
        />
        <path
          className="cls-2"
          d="M6.55,25.86a2.22,2.22,0,0,0,0,.37c0,.12,0,.25,0,.37s0,.26,0,.39v.39a1.64,1.64,0,0,0,0,.23.49.49,0,0,1,0,.24"
        />
        <path
          className="cls-2"
          d="M10,28.49a.41.41,0,0,0,.26.15.4.4,0,0,0,.26-.06.57.57,0,0,1,.29-.09h.3l.19,0h.18a2.69,2.69,0,0,1,1,.11c.32.08.64.2,1,.28a3.47,3.47,0,0,1,.73.29c.24.11.47.25.7.38"
        />
        <path
          className="cls-2"
          d="M13.76,15.31a.11.11,0,0,0-.1,0l-.06.09-.3.6a4.38,4.38,0,0,1-.37.58c.14.14.25.3.37.44a1.39,1.39,0,0,0,.44.35,4.7,4.7,0,0,1,.7.46l.66.54.1.07a.16.16,0,0,0,.12,0"
        />
        <path
          className="cls-2"
          d="M8.39,4.33a.13.13,0,0,0,0,.08.19.19,0,0,0,0,.08c0,.21,0,.42,0,.63v.64a.62.62,0,0,1-.06.31.79.79,0,0,1-.21.24,10.14,10.14,0,0,0-.92.8A9.94,9.94,0,0,0,6.33,8c-.07.08-.12.17-.19.26a.77.77,0,0,1-.23.21"
        />
        <path
          className="cls-2"
          d="M10.32,6.23a6.42,6.42,0,0,0,.53.38A5.36,5.36,0,0,1,11.4,7l.25.18a1.15,1.15,0,0,1,.21.23"
        />
        <path
          className="cls-2"
          d="M21.67,23.43a.84.84,0,0,1,0,.2,1.48,1.48,0,0,1,0,.21c0,.16,0,.32,0,.48a2.57,2.57,0,0,1,0,.48,2.3,2.3,0,0,0-.1.33s0,0,0,0"
        />
        <path className="cls-2" d="M11.88,26.07l.08,0h1.29l.06,0" />
        <path
          className="cls-2"
          d="M20.34,21.19a1.77,1.77,0,0,1-.32.21,1.37,1.37,0,0,1-.36.11.62.62,0,0,0-.34.15,2.11,2.11,0,0,1-.31.21"
        />
        <path
          className="cls-2"
          d="M16.75,27.05a.32.32,0,0,1,.08-.21.57.57,0,0,1,.15-.16,2.21,2.21,0,0,0,.32-.29,1.76,1.76,0,0,0,.25-.34l0,0,.06,0a1.58,1.58,0,0,1,.31.64,2,2,0,0,1,0,.7"
        />
        <path className="cls-2" d="M21.69,23.4l-.35-.48L21,22.44a.13.13,0,0,0-.07-.06l-.07,0" />
        <path className="cls-2" d="M14.44,16.11l-.54.49-.53.49" />
        <path
          className="cls-2"
          d="M19.93,27.48a2.14,2.14,0,0,1,.2.47c0,.17.08.34.13.5a.46.46,0,0,1,0,.23,1.64,1.64,0,0,0,0,.22,2.8,2.8,0,0,0,0,.58,2.91,2.91,0,0,0,.15.56"
        />
        <path className="cls-2" d="M18.62,20.93a2.17,2.17,0,0,0-.42.11l-.42.13" />
        <path className="cls-2" d="M19.7,20l-.55.52-.29.29-.09.08a.13.13,0,0,1-.11,0" />
        <path className="cls-2" d="M13.31,17.16a.59.59,0,0,1-.25.07,1.15,1.15,0,0,1-.26,0" />
      </g>
      <g id="Locations">
        <g transform="translate(19 21)">
          <circle r="1" />
          <path d="M-1,0 L0,2 L1,0 Z" transform="translate(0 0.2)" />
          <text
            transform="translate(-6 1)"
            fontSize="0.75"
            fontFamily="nytfranklin"
            fontWeight="300"
          >
            SITE OF
          </text>
          <text
            transform="translate(-6 2)"
            fontSize="0.75"
            fontFamily="nytfranklin"
            fontWeight="300"
          >
            THE SHOOTING
          </text>
        </g>
        <rect
          mask="url(#fbcLogoMask)"
          transform="translate(19.5 21.5)"
          height="2"
          width="2"
          data-church="fbc"
        />

        <rect
          transform="translate(19.5 10.5)"
          mask="url(#watermarkLogoMask)"
          height="2"
          width="2"
          data-church="watermark"
        />
        <rect
          mask="url(#tvcLogoMask)"
          transform="translate(16 12.5)"
          height="2.2"
          width="2.2"
          data-church="tvc"
        />

        <rect
          transform="translate(15 3)"
          mask="url(#prestonwoodLogoMask)"
          height="2"
          width="2"
          data-church="prestonwood"
        />
        <rect
          mask="url(#covenantLogoMask)"
          height="2"
          width="2"
          transform="translate(15.25 7)"
          data-church="covenant"
        />
        <rect
          mask="url(#fellowshipLogoMask)"
          height="3"
          width="3"
          transform="translate(6.75 9)"
          data-church={ChurchKeys.Fellowship}
        />
      </g>
    </svg>
  )
}

export default Map
