import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledAwardCard = styled(Card)`
  min-height: 320px;
`

const AwardCard = () => {
  const { t } = useTranslation()

  return (
    <StyledAwardCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Award')}
        </Heading>
        <Text fontSize="16px">Winning bid is : 213 DAI</Text>
        <Text fontSize="16px">Winner gets : 10,000 + (1+2+...+213) - 15% fee = 27872.35 DAI</Text>
        <Text fontSize="16px">Top 5 losers gets:</Text>
        <Text fontSize="16px">2nd place :  212 + 42.4 = 254.4 DAI</Text>
        <Text fontSize="16px">3rd place :  211 + 42.2 = 253.2 DAI</Text>
        <Text fontSize="16px">4th place :  210 + 42 = 252 DAI</Text>
        <Text fontSize="16px">5th place :  209 + 41.8 = 250.8 DAI</Text>
        <Text fontSize="16px">6th place :  208 + 41.6 = 249.6 DAI</Text>
      </CardBody>
    </StyledAwardCard>
  )
}

export default AwardCard
