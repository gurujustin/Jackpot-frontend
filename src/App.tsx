import React, { lazy, useState } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { usePollCoreFarmData, useFetchProfile, usePollBlockNumber } from 'state/hooks'
import PageHeader from 'components/PageHeader'
import PopUp from 'components/PopUp'
import GlobalStyle from './style/Global'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import EasterEgg from './components/EasterEgg'
import history from './routerHistory'
import logo from './assets/logo.png'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  usePollBlockNumber()
  useEagerConnect()
  useFetchProfile()
  usePollCoreFarmData()

  const [seen, setSeen] = useState(true)
  const togglePop = () => {
    setSeen(false)
  }

  return (
    <>
      <div>{seen ? <PopUp toggle={togglePop} /> : null}</div>
      <Router history={history}>
        <ResetCSS />
        <PageHeader background="transparent">
          <img src={logo} alt="logo" />
        </PageHeader>
        <GlobalStyle />
          <SuspenseWithChunkError fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </SuspenseWithChunkError>
        <EasterEgg iterations={2} />
        <ToastListener />
      </Router>
    </>
  )
}

export default React.memo(App)
