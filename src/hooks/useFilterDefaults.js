import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { resetFilters } from 'store/actions'

const useFilterDefaults = ({primaryList, secondaryList, detailedList}) => {
  const isMounted = useRef(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isMounted.current) {
      console.log(1)
      dispatch(resetFilters({primaryList, secondaryList, detailedList}))
      isMounted.current = true
    }
  }, [dispatch, primaryList, secondaryList, detailedList])

  useEffect(() => {
    return () => {
      console.log(2)
      dispatch(resetFilters({primaryList: null, secondaryList: null, detailedList: null}))
      isMounted.current = false
    }
  }, [dispatch])
}

export default useFilterDefaults
