import React from 'react'

import { SearchForm } from 'components/form/index'

const createXHR = (onLoad) => {
    const xhr = new window.XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.timeout = 10000

    xhr.addEventListener('load', function () {
        switch (xhr.status) {
            case 200:
                onLoad(xhr.response)
                break
        }
    })
    return xhr

const load = (onLoad) => {
    const xhr = createXHR(onLoad)
    const request = 'pulp fiction'
    const by = '&searchBy=title'
    const URL = request + by
    xhr.open('GET', URL)
    }
}
class SearchRequest extends React.Component {

}

