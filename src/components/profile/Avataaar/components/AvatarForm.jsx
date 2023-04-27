/* tslint:disable */

import * as React from 'react'

import { InputLabel, MenuItem, Select, FormGroup } from '@mui/material'

class OptionSelect extends React.Component {
  render() {
    const { controlId, label, value, children } = this.props
    return (
      <FormGroup className='!grid grid-cols-4 items-center'>
        <InputLabel className='col-span-1' >
          {label}
        </InputLabel>
        <Select className='col-span-3'
          value={value}
          size="small"
          onChange={this.onChange}>
          {children}
        </Select>
      </FormGroup>
    )
  }

  onChange = (event) => {
    if (this.props.onChange) {
      this.props.onChange(event.target.value)
    }
  }
}


export default class AvatarForm extends React.Component {
  onChangeCache = []

  UNSAFE_componentWillMount() {
    const { optionContext } = this.props
    optionContext.addStateChangeListener(() => {
      this.forceUpdate()
    })
    this.onChangeCache = optionContext.options.map(option =>
      this.onChange.bind(this, option)
    )
  }

  render() {
    const { optionContext, } = this.props
    const selects = optionContext.options.map((option, index) => {
      const optionState = optionContext.getOptionState(option.key)
      if (optionState.available <= 0) {
        return null
      }
      const selectOptions = optionState.options.map(type => (
        <MenuItem key={type} value={type}>
          {type}
        </MenuItem>
      ))
      const value = optionContext.getValue(option.key)
      return (
        <OptionSelect
          key={option.key}
          controlId={option.key}
          label={option.label}
          value={value}
          onChange={this.onChangeCache[index]}>
          {selectOptions}
        </OptionSelect>
      )
    })

    return (
      <div className="flex flex-col gap-2">
        {selects}
      </div>
    )
  }

  onChange(option, value) {
    const { optionContext } = this.props
    optionContext.setValue(option.key, value)
  }

}
