import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledJackpotCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const JackpotCard = () => {
  const { t } = useTranslation()

  return (
    <StyledJackpotCard>
      <CardBody>
        <Heading scale="lg" mb="24px">
          {t('JACKPOT')}
        </Heading>
        <Heading scale="xl">32791 DAI</Heading>
        <Text fontSize="16px">Current balance of Jackpot</Text>
      </CardBody>
    </StyledJackpotCard>
  )
}

export default JackpotCard
