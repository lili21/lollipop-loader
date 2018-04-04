import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Svg = styled.svg`
  stroke-linecap: round;
  animation: lollipop-circle 1.5s ease infinite, lollipop-rotate 1.5s linear infinite;
  @keyframes lollipop-rotate {
    0% {
      transform: rotate(0)
    }

    100% {
      transform: rotate(360deg)
    }
  }
  ${lollipopCircle}  
`

function lollipopCircle ({ size, dash }) {
  const circumference = 3.14 * (size - dash)
  return `
    @keyframes lollipop-circle {
      0% {
        stroke-dasharray: ${dash}, ${circumference};
        stroke-dashoffset: 0
      }

      50% {
        stroke-dasharray: ${circumference}, ${circumference};
        stroke-dashoffset: -${circumference * 0.25};
      }

      100% {
        stroke-dasharray: ${circumference}, ${circumference};
        stroke-dashoffset: ${dash - circumference}
      }
    }
  `
}

export default function Loading ({ size, dash, color }) {
  const radius = (size - dash) / 2
  return (
    <div>
      <Svg width={size} height={size} size={size} dash={dash}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={dash} />
      </Svg>
    </div>
  )
}

Loading.propTypes = {
  size: PropTypes.number,
  dash: PropTypes.number,
  color: PropTypes.string
}

Loading.defaultProps = {
  size: 36,
  dash: 4,
  color: 'mediumseagreen'
}
