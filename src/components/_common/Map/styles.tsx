import styled from 'styled-components'

export const MapWrapper = styled.div`
  position: relative;
  z-index: 30;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 400px;
  border: 5px solid red;
  margin-top: 50px;

  > div {
    height: 100%;
  }
`
