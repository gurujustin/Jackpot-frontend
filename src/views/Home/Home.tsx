import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import RulesCard from './components/RulesCard'
import JackpotCard from './components/JackpotCard'
import JackpotStats from './components/JackpotStats'
import AwardCard from './components/AwardCard'

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <div>
        <Cards>
          <JackpotCard />
          <JackpotStats />
        </Cards>
        <Cards>
          <RulesCard />
          <AwardCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
