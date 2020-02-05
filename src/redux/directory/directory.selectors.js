import { createSelector } from 'reselect'

const selectDierctory = state => state.directory

export const selectDierctorySections = state => createSelector(
  [selectDierctory],
  directory => directory.sections
)