import React from 'react'
import styled from 'styled-components'

const BigScreenNavBar = () => {
  return <Wrapper>BigScreenNavBar</Wrapper>
}

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

export default BigScreenNavBar
