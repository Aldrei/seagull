import { useContext } from 'react'

import { CustomerContext } from '@/hooks/useCustomer'
import {
  ContactWhatsBody,
  ContactWhatsButton,
  ContactWhatsButtonIcon,
  ContactWhatsContainer,
  ContactWhatsContent,
  ContactWhatsHeader,
  ContactWhatsHeaderAvatar,
  ContactWhatsHeaderDesc,
  ContactWhatsHeaderDescStatus,
  ContactWhatsHeaderDescTitle,
} from './styles'

export const WhatsAppCommon: React.FC = ({ ...props }): React.ReactElement => {
  const { customerData: customer } = useContext(CustomerContext)

  return (
    <ContactWhatsContainer {...props}>
      <ContactWhatsContent>
        <ContactWhatsHeader>
          <ContactWhatsHeaderAvatar
            src={customer?.broker_1_picture}
            alt="Foto do corretor de imóveis"
          />
          <ContactWhatsHeaderDesc>
            <ContactWhatsHeaderDescTitle>
              {customer?.name}
            </ContactWhatsHeaderDescTitle>
            <ContactWhatsHeaderDescStatus>online</ContactWhatsHeaderDescStatus>
          </ContactWhatsHeaderDesc>
        </ContactWhatsHeader>
        <ContactWhatsBody>
          <ContactWhatsButton href={``} target="_blank" title="">
            Fale conosco
            <ContactWhatsButtonIcon />
          </ContactWhatsButton>
        </ContactWhatsBody>
      </ContactWhatsContent>
    </ContactWhatsContainer>
  )
}
