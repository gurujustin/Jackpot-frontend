import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Jackpot',
  description:
    'Best Jackpot Game on Ethereum',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Jackpot')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Jackpot')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Jackpot')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Jackpot')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Jackpot')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Jackpot')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Jackpot')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Jackpot')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Jackpot')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Jackpot')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Jackpot')}`,
      }
    default:
      return null
  }
}
