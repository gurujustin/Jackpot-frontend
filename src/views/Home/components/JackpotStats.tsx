import React from 'react'
import { Card, CardBody, Heading, Text, Button } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import UnlockButton from 'components/UnlockButton'

const StyledJackpotStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const Actions = styled.div`
  display: flex;
  margin-top: 24px;
  button {
    flex: 1 0 50%;
  }
`

const JackpotStats = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <StyledJackpotStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Jackpot Stats')}
        </Heading>
        <Row>
          <Text fontSize="16px">{t('Highest bid at this moment to win jackpot')}</Text>
          <Text fontSize="16px">213 DAI</Text>
        </Row>
        <Row>
          <Text fontSize="16px">{t('Countdown timer')}</Text>
          <Text fontSize="16px">28 minutes left</Text>
        </Row>
        <Row>
          <Text fontSize="16px">{t('Place new bid(+1 DAI)')}</Text>
          <Text fontSize="16px">214 DAI</Text>
        </Row>
        {account ? (
          <Actions>
            <Button
              id="dashboard-collect-winnings"
              disabled={false}
              style={{ margin: 'auto' }}
            >
              {t('Place New Bid')}
            </Button>
          </Actions>
        ) : (
          <Actions>
            <UnlockButton width="100%"/>
          </Actions>
        )}
      </CardBody>
    </StyledJackpotStats>
  )
}

export default JackpotStats
