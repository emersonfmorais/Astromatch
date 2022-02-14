import styled from 'styled-components'
export const DivContainer = styled.div `
  background-color:#F8F8FF;
  width:100vw;
  height:100vh;    
  padding:20px;
`
export const DivHeaderProfile = styled.div `
  display:grid;
  grid-template-columns:30vw 5vw;
  justify-items:center;
  border-bottom:1px solid #F8F8FF;  
`
export const DivHeaderMatches = styled.div `
  display:grid;
  grid-template-columns:5vw 20vw;
  justify-items:center;
  border-bottom:1px solid #F8F8FF;  
`
export const DivProfilesMatches = styled.div`
    border:1px solid black;
    border-radius:1vw;
    background-color: white;
    width:30vw;
    height:90vh;    
    margin:0 auto;    
`
export const ColorTitleMatch = styled.h1 `
  color: Blue;
  cursor:default;  
`
export const ColorTitleAstro = styled.span`
  color: lightgray;
`
export const IconMatchProfile = styled.img `
  width:3vw;
  height:6vh;
  cursor: pointer;  
  &:hover{
    width:2.5vw;
    height:5.5vh;
  }
`
export const DivIconMatch = styled.div `
  display:flex;
  align-items:center;    
  margin-right:10vw;
`
export const DivIconProfile = styled.div`
  display:flex;
  align-items:center;  
`