import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  color: #333;
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 100px;
  text-align: center;
  padding: 0 20px 5px 0;
  text-decoration: underline;

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