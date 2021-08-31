import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledRulesCard = styled(Card)`
  min-height: 320px;
`

const RulesCard = () => {
  const { t } = useTranslation()

  return (
    <StyledRulesCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Rules')}
        </Heading>
        <Text fontSize="16px">{t('Starting jackpot')}: 10,000 DAI</Text>
        <Text fontSize="16px">New bid is highest bid + 1 DAI</Text>
        <Text fontSize="16px">Highest bid when the countdown thimer hits zero, gets starting jackpot + all placed bets</Text>
        <Text fontSize="16px">Top 5 &apos;losers&apos; receive the placed bets + extra %20</Text>
      </CardBody>
    </StyledRulesCard>
  )
}

export default RulesCard
