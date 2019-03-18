import React from 'react'
import { connect } from 'react-redux'
import noop from 'lodash-es/noop'
import { createSelector } from 'reselect'
import { routingSelector } from '../../selectors/simpleSelectors'
import { actionCreator } from '../../actions'

class SkipRouterUnwrapped extends React.Component {
    componentDidMount() {
        const { SkipRouting, dispatch } = this.props
        switch (SkipRouting) {
            case true:
                noop()
                dispatch(actionCreator.setSkipRouting(false))
                break
            case false:
                dispatch(actionCreator.setSkipRouting(true))
                noop()
        }
        // if (SkipRouting) {
        //     noop()
        //     dispatch(actionCreator.setSkipRouting(false))
        // }
    }
    componentDidUpdate(prevProps) {
        const { SkipRouting, dispatch } = this.props
        if (prevProps.SkipRouting === false && SkipRouting === false)


    }
}

const mapStateToProps = createSelector(
    routingSelector,
    (routing) => ({
      ...routing
    })
)

export const SkipRouter = connect(mapStateToProps)(SkipRouterUnwrapped)