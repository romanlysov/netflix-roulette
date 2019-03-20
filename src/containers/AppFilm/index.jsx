import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { App } from '../App'
import { actionCreator } from '../../actions'
import { mountMoreFilmsById } from '../../handlers/MountMoreFilmsById'
import {
  filmInfoSelector,
  searchParamsSelector,
  routingSelector
} from '../../selectors'
// import noop from 'lodash-es/noop'

class AppFilmUnwrapped extends React.Component {
  // async componentDidMount() {
  //   const { SkipRouting } = this.props
  //   if (SkipRouting) {
  //     const { dispatch } = this.props
  //     dispatch(actionCreator.setSkipRouting(false))
  //   } else {
  //     const { dispatch, sortBy, match } = this.props
  //     await mountMoreFilmsById({ dispatch, sortBy, match })
  //   }
  // }
  //
  // async componentDidUpdate(prevProps) {
  //   const { location } = this.props
  //   if (prevProps.location.pathname !== location.pathname) {
  //     const { SkipRouting } = this.props
  //     if (SkipRouting) {
  //       const { dispatch } = this.props
  //       dispatch(actionCreator.setSkipRouting(false))
  //     } else {
  //       const { dispatch, sortBy, match } = this.props
  //       await mountMoreFilmsById({ dispatch, sortBy, match })
  //     }
  //   }
  // }
  // -------------------------------------------------------------------
  // async componentDidMount() {
  //   const { SkipRouting, dispatch, sortBy, match } = this.props
  //   switch (SkipRouting) {
  //     case true:
  //       dispatch(actionCreator.setSkipRouting(false))
  //       break
  //     case false:
  //       await mountMoreFilmsById({ dispatch, sortBy, match })
  //   }
  //
  // }
  // async componentDidUpdate(prevProps) {
  //   const { SkipRouting, dispatch, sortBy, match } = this.props
  //   if (prevProps.SkipRouting === false && SkipRouting === false) {
  //     await mountMoreFilmsById({ dispatch, sortBy, match })
  //   }
  //     }
async componentDidMount() {
  const { SkipRouting } = this.props
  if (SkipRouting) {
    const { dispatch } = this.props
    dispatch(actionCreator.setSkipRouting(false))
    return
  }
  const { dispatch, sortBy, match } = this.props
  await mountMoreFilmsById({dispatch, sortBy, match})
}

async componentDidUpdate(prevProps) {
  const { SkipRouting } = this.props
  if (SkipRouting && prevProps.SkipRouting) {
    return
  }
  const { dispatch } = this.props
  if (SkipRouting) {
    dispatch(actionCreator.setSkipRouting(false))
    return
  }
  const { sortBy, match } = this.props
  await mountMoreFilmsById({dispatch, sortBy, match})
}
  render() {
    return <App />
  }
}

const mapStateToProps = createSelector(
  [routingSelector, filmInfoSelector, searchParamsSelector],
  (routing, film, searchParams) => ({
    ...routing,
    ...film,
    ...searchParams
  })
)

export const AppFilm = withRouter(connect(mapStateToProps)(AppFilmUnwrapped))
