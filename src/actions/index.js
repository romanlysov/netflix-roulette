export const VISIBILITY = 'VISIBILITY';

export const visibilityStatuses = {
    NO_RESULTS: 'NO_RESULTS',
    SHOW_REQUESTED: 'SHOW_REQUESTED'
}

export function setVisibility (status) {
    return {type: VISIBILITY, status}
}

