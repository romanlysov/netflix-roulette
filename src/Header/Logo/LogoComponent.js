import React from 'react';
import { render} from 'react-dom';
import placeholder_logo3 from '../../images/placeholder_logo3.png';

const logoElement = document.getElementById('logo');

class LogoComponent extends React.PureComponent {
    render() {
    return <img src={placeholder_logo3} alt="" width="200px" />
    }
}

render(<LogoComponent />, logoElement);
