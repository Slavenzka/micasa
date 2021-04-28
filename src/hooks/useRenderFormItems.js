import React from 'react'
import { Controller } from 'react-hook-form'
import Input from 'components/atoms/Input/Input'
import SelectDropdown from 'components/atoms/SelectDropdown/SelectDropdown'

const useRenderFormItems = ({list, control, isDisabled, errors = {}}) => {
  if (!list) return null

  const renderFormItems = () => list.map(({element, validation, name, defaultValue = '', ...item}, index) => {
    switch (element) {
      case 'select':
        return (
          <Controller
            render={({name, value, onChange}) => (
              <SelectDropdown
                name={name}
                value={value}
                onChange={onChange}
                isDisabled={isDisabled}
                {...item}
              />
            )}
            control={control}
            rules={{
              ...validation
            }}
            name={name}
            defaultValue={defaultValue}
            key={index}
          />
        )
      case 'inputCash':
        return (
          <Controller
            render={({value, name, onChange}) => (
              <Input
                value={value}
                name={name}
                onChange={onChange}
                isCash
                isDisabled={isDisabled}
                {...item}
              />
            )}
            control={control}
            rules={{
              ...validation
            }}
            key={index}
            name={name}
            defaultValue={defaultValue}
          />
        )
      // case 'datepicker':
      //   const value = watch(name)
      //   // if form state contains date, we get it from there, otherwise we use default one from
      //   // initial form description
      //   const selectedDate = value
      //     ? new Date(value.split('-').reverse().join('-'))
      //     : item?.date
      //       ? new Date(item.date)
      //       : ''
      //
      //   return (
      //     <Datepicker
      //       isSingleDaySelection
      //       defaultDate={selectedDate}
      //       key={index}
      //       {...item}
      //     >
      //       { ({data, onClick}) => {
      //         const {year, month, day} = getDateComponents(data.selected.from)
      //         const dateToRender = day && month && year ? `${day}-${month}-${year}` : ``
      //
      //         return (
      //           <Input
      //             style={{
      //               cursor: 'pointer'
      //             }}
      //             register={register({
      //               ...validation
      //             })}
      //             name={name}
      //             value={dateToRender}
      //             onClick={onClick}
      //             label={item.label}
      //             placeholder={ `Select date` }
      //             isDisabled={item.isDisabled ?? isDisabled}
      //             readOnly
      //           >
      //             <IconCalendar className={'calendar'} />
      //           </Input>
      //         )
      //       }}
      //     </Datepicker>
      //   )
      default:
        return (
          <Controller
            render={({
              field: {
              name,
              onChange,
              ref
              }
            }) => (
              <Input
                name={name}
                onChange={onChange}
                isDisabled={isDisabled}
                isError={errors[name]}
                formRef={ref}
                {...item}
              />
            )}
            control={control}
            rules={{
              ...validation
            }}
            name={name}
            defaultValue={defaultValue}
            key={index}
          />
        )
    }
  })

  return renderFormItems()
}

export default useRenderFormItems
