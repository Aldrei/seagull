import { ICONS_ONE } from '@/icons/template-one/icons'
import { styled } from 'styled-components'

export const PropertyContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  max-width: 600px; // Adjust the width as necessary
  margin: calc(${props => props.theme.spaces.md}*2) auto 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Header = styled.div`
  background: #f0f0f0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #000;
`

export const Price = styled.span`
  font-weight: bold;
  color: #333;
  color: #000;
`

export const InfoSection = styled.section`
  padding: 1rem;
  background: #e9e9e9;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.span`
  margin-right: 0.5rem;
  // Here you would include styles for your icons
`

export const InfoText = styled.span`
  font-size: 0.875rem;
  color: #000;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  padding: 1rem;
  text-align: center;
  color: #000;
`

export const LocationIcon = styled(ICONS_ONE.LocationIcon)`
  transform: rotate(45deg);
  font-size: ${props => props.theme.spaces.xl};
  margin-right: calc(${props => props.theme.spaces.xs} / 2);
`