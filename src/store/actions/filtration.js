import {
  RESET_FILTERS, SET_DATE_FILTER_VALUE,
  SET_FILTERED_DATA, SET_MANUAL_FILTER,
  SET_PRIMARY_FILTER_VALUE, SET_SECONDARY_FILTER_DATA,
  SET_SECONDARY_FILTER_VALUE
} from 'store/actions/actionTypes'
import { getDetailedFilteredData, isDetailedFilterEmpty } from 'utils/filter'
import { checkIfNonEmptyArray, getObjPropertyViaString } from 'utils'
import { DetailedFilterTypes } from 'utils/const'

export const setPrimaryFilterValue = value => ({
  type: SET_PRIMARY_FILTER_VALUE,
  payload: value
})

export const setSecondaryFilterValue = value => ({
  type: SET_SECONDARY_FILTER_VALUE,
  payload: value
})

export const setDateFilterValue = ({from, to}) => ({
  type: SET_DATE_FILTER_VALUE,
  payload: {
    from,
    to
  }
})

export const setSecondaryFilteredData = data => ({
  type: SET_SECONDARY_FILTER_DATA,
  payload: data
})

export const setFilteredData = data => ({
  type: SET_FILTERED_DATA,
  payload: data
})

export const applyFiltration = ({rawData, filter = {}, manualFilter}) => {
  return (dispatch, getState) => {
    const filterState = getState().filter
    const activePrimary = filterState.activePrimary
    const activeSecondary = filterState.activeSecondary
    const activeDate = filterState.activeDate
    const activeDetailed = filterState.detailedFilter
    const {primary, secondary, detailed, date} = filter

    const isNoDateFilterApplied = !activeDate || (!activeDate?.from && !activeDate.to)
    const isNoFilterApplied = !activePrimary && !activeSecondary && isNoDateFilterApplied && isDetailedFilterEmpty(activeDetailed) && !manualFilter
    const isDetailedFilterRequired = detailed && Array.isArray(detailed) && detailed.length > 0

    const dateFilter = date && activeDate?.from
      ? rawData.filter(item => {
        const itemField = item[date.fieldName]

        if (typeof itemField === 'object' && itemField?.from && itemField?.to) {

          if (activeDate?.from && !activeDate?.to) {
            const isFullRange = itemField.from >= activeDate.from.getTime()
            const isPartRange = itemField.from < activeDate.from.getTime() && itemField.to >= activeDate.from.getTime()

            return isFullRange || isPartRange
          }

          if (!activeDate?.from && activeDate?.to) {
            const isFullRange = itemField.to <= activeDate.to.getTime()
            const isPartRange = itemField.to > activeDate.to.getTime() && itemField.from <= activeDate.to.getTime()

            return isFullRange || isPartRange
          }

          const isFullRange = itemField.from >= activeDate.from.getTime() && itemField.to <= activeDate.to.getTime()
          const isPartRange = (itemField.from >= activeDate.from.getTime() && itemField.from <= activeDate.to.getTime()) ||
            (itemField.to >= activeDate.from.getTime() && itemField.to <= activeDate.to.getTime())

          return isFullRange || isPartRange
        }

        return activeDate?.to
          ? item[date.fieldName] >= activeDate.from.getTime() && item[date.fieldName] <= activeDate.to.getTime()
          : item[date.fieldName] >= activeDate.from.getTime()
      })
      : rawData

    const primaryFiltered = activePrimary && primary
      ? dateFilter.filter(item => activePrimary.values.length === 0 ||  activePrimary.values.indexOf(item[primary.field].toUpperCase()) >= 0)
      : dateFilter

    const secondaryFiltered = activeSecondary && secondary
      ? primaryFiltered
        .filter(item => {
          if (!activeSecondary) return true

          const itemValue = getObjPropertyViaString(item, secondary.field)
          return activeSecondary.values.length === 0 || activeSecondary.values.indexOf(itemValue.toUpperCase()) >= 0
        })
      : primaryFiltered

    const detailedFiltered = checkIfNonEmptyArray(detailed)
      ? getDetailedFilteredData(secondaryFiltered, activeDetailed)
      : secondaryFiltered

    const manualFiltered = manualFilter
      ? detailedFiltered.slice().filter(item => {
        const arr = Object.values(item)

        return arr.reduce((total, item) => {
          if (`${item}`.includes(manualFilter)) {
            total = true
          }

          return total
        }, false)
      })
      : detailedFiltered

    if (isNoFilterApplied) {
      dispatch(setFilteredData(rawData))
      isDetailedFilterRequired && dispatch(setSecondaryFilteredData(rawData))
    } else {
      dispatch(setFilteredData(manualFiltered))
      isDetailedFilterRequired && dispatch(setSecondaryFilteredData(secondaryFiltered))
    }
  }
}

export const resetFilters = ({primaryList, secondaryList, detailedList}) => {
  return dispatch => {
    const defaultPrimary = primaryList
      ? primaryList.find(item => item.isDefault)
      : null

    const defaultSecondary = secondaryList
      ? secondaryList.find(item => item.isDefault)
      : null

    const defaultDetailed = detailedList ? detailedList.map(item => {
      switch (item.type) {
        case DetailedFilterTypes.INPUT:
          return {
            ...item,
            value: null
          }
        case DetailedFilterTypes.RANGE:
          return {
            ...item,
            value: {
              from: null,
              to: null,
            }
          }
        default:
          return {
            ...item,
            values: []
          }
      }
    }) : null

    dispatch({
      type: RESET_FILTERS,
      payload: {
        activePrimary: defaultPrimary,
        activeSecondary: defaultSecondary,
        detailedFilter: defaultDetailed,
        secondaryFilteredData: null,
        manualFilter: '',
        filteredData: null,
      }
    })
  }
}

export const setManualFilter = string => ({
  type: SET_MANUAL_FILTER,
  payload: string
})
