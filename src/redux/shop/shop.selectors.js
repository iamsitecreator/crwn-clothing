import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShopcollections = state =>
  createSelector([selectShop], shop => shop.collections)
