/* tslint:disable */

import '../assets/App.css'

import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Avatar, AvatarStyle, OptionContext, allOptions } from 'avataaars'
import { Button } from '@mui/material'
import {
  UrlQueryParamTypes,
  UrlUpdateTypes,
  addUrlProps
} from 'react-url-query'
import { fromPairs, sample } from 'lodash'
import AvatarForm from './AvatarForm'
import { filteredOptions } from './Common'
import { debugLog, getAxios } from '51cloudclass-utilities/src/utils'
import { toast } from 'react-toastify'
import queryString from 'query-string'
import { updateAvatar } from '51cloudclass-utilities/src/store/reducers/authSlice'
import { connect } from 'react-redux'

const axiosInstance = getAxios();

const updateType = UrlUpdateTypes.pushIn
const urlPropsQueryConfig = {
  ...fromPairs(
    allOptions.map(option => [
      option.key,
      {
        type: UrlQueryParamTypes.string,
        updateType
      }
    ])
  ),
  avatarStyle: {
    type: UrlQueryParamTypes.string,
    updateType
  }
}


function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export class Main extends React.Component {

  static childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext),
  }

  static defaultProps = {
    avatarStyle: AvatarStyle.Circle
  }

  state = {
    displayComponentCode: false,
    displayComponentImg: false
  }

  constructor(props) {
    super(props)
    this.updateAvatar = this.updateAvatar.bind(this)
  }

  updateAvatar() {

    let avatarParams = new URLSearchParams(window.location.search).toString();
    let data = {
      avatar_url: `https://avataaars.io/?${avatarParams}`
    }
    let url = `${process.env.GATSBY_API_SERVER}/users/update-avatar`;
    axiosInstance.post(url, data).then(response => {
      if (response.status === 200) {
        toast("更新成功")
        this.props.updateAvataaar(data.avatar_url)
      }
    });
  }

  avatarRef = null
  optionContext = new OptionContext(filteredOptions)


  getChildContext() {
    return { optionContext: this.optionContext }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.updateOptionContext(nextProps)
  }

  UNSAFE_componentWillMount() {
    this.optionContext.addValueChangeListener(this.onOptionValueChange)
    this.updateOptionContext(this.props)
    if (typeof window !== 'undefined') {
      let paramObj = queryString.parse(window.location.search)
      this.optionContext.setData(paramObj)
    }
  }

  UNSAFE_componentDidMount() {
    if (typeof window !== 'undefined') {
      const anyWindow = window
      setTimeout(() => {
        anyWindow.prerenderReady = true
      }, 500)
    }
  }

  UNSAFE_componentWillUnmount() {
    this.optionContext.removeValueChangeListener(this.onOptionValueChange)
  }


  render() {
    const { avatarStyle } = this.props
    return (
      <main role='main' className="flex flex-col gap-4 pb-12 min-w-[420px]">
        <header className='header clearfix'>
          <h2 style={{ color: '#6A39D7' }}>
            头像生成器
            <Button
              className='ml-6'
              type='submit'
              variant='outlined'
              onClick={this.onRandom}
            >
              随机
            </Button>
          </h2>
        </header>

        <div className="flex justify-center">
          <Avatar ref={this.onAvatarRef} avatarStyle={avatarStyle} />
        </div>
        <AvatarForm
          optionContext={this.optionContext}
          avatarStyle={avatarStyle}
        />
        <Button variant='contained' onClick={this.updateAvatar}>更新</Button>
      </main>
    )
  }

  onAvatarRef = (ref) => {
    this.avatarRef = ref
  }


  onOptionValueChange = (key, value) => {
    const name = capitalizeFirstLetter(key)
    const handlerName = `onChange${name}`
    const updateHandler = this.props[handlerName]
    updateHandler(value)
  }

  updateOptionContext(nextProps) {
    this.optionContext.setData(nextProps)
  }

  onRandom = () => {
    const { optionContext } = this
    let values = {
      avatarStyle: this.props.avatarStyle
    }

    for (const option of optionContext.options) {
      if (option.key in values) {
        continue
      }
      const optionState = optionContext.getOptionState(option.key)

      if (!optionState.options.length) {
        continue
      }
      values[option.key] = sample(optionState.options)
    }
    this.optionContext.setData(values)
    this.props.onChangeUrlQueryParams(values, UrlUpdateTypes.push)
  }
}


Main.contextTypes = {
  searchParamString: PropTypes.string
}


const mapDispatchToProps = {
  updateAvataaar: updateAvatar,
}

var Component = connect(null, mapDispatchToProps)(Main)

if (typeof window !== 'undefined') {
  Component = addUrlProps({ urlPropsQueryConfig })(Component)
}
export default Component
