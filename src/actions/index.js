export const VISIBILITY = 'VISIBILITY'
export const NO_RESULTS = 'NO_RESULTS'
export const SHOW_REQUESTED = 'SHOW_REQUESTED'

export function setVisibility(status) {
    return {
        type: VISIBILITY,
        payload: status
    }
}

