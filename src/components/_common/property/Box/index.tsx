import {
  getPhotoProperty,
  shouldShowBedroomInfo,
  shouldShowBuildedArea,
  shouldShowGarageInfo,
  shouldShowTotalArea,
} from '@/utils'
import React from 'react'
import {
  Button,
  Card,
  Content,
  Description,
  Image,
  ImageContainer,
  Info,
  InfoItem,
  LocationIcon,
  Price,
  Subtitle,
  Title,
} from './styles'
import { IBoxCommon } from './types'

export const BoxCommon: React.FC<IBoxCommon> = ({
  property,
  orientation,
  ...props
}) => {
  if (!property) return null

  return (
    <Card $orientation={orientation} {...props}>
      <Price className="price">{`Cód ${property.codePretty} - ${property.valor}`}</Price>
      <ImageContainer>
        <Image
          src={String(getPhotoProperty(property, 'thumb'))}
          alt={property.title}
        />
      </ImageContainer>
      <Content>
        <Title className="title">{property.title}</Title>
        <Subtitle>
          <LocationIcon /> {property?.neighborhood?.data?.city?.data?.long_desc}
          , {property?.neighborhood?.data?.nome}
        </Subtitle>
        <Description>{property.descGeral}</Description>
        <Info>
          {shouldShowTotalArea(property) && (
            <InfoItem>
              {property.areaTotal}
              <span>m²</span>
              <span className="total-area">Total</span>
            </InfoItem>
          )}
          {shouldShowBuildedArea(property) && (
            <InfoItem>
              {property.areaConstruida}
              <span>m²</span>
              <span className="total-area">Const.</span>
            </InfoItem>
          )}
          {shouldShowGarageInfo(property) && (
            <InfoItem>{property.garagem} carro(s)</InfoItem>
          )}
          {shouldShowBedroomInfo(property) && (
            <InfoItem>{property.dormitorio} dorm(s)</InfoItem>
          )}
        </Info>
        <Button className="go-button">Conhecer +</Button>
      </Content>
    </Card>
  )
}
