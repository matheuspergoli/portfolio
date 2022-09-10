import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  color: #333;
  font-weight: 700;
  margin-top: 35px;
  font-size: 1.5rem;
  text-align: center;
  padding: 0 20px 5px 0;

  span {
    font-weight: 400;
    color: #04c2c9;
  }
`

function Footer() {
  return (
    <FooterContainer>
      Matheus Pergoli <span>&copy;2022</span>
    </FooterContainer>
  )
}

export default Footer