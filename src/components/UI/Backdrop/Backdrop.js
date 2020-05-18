import React from 'react';
import './Backdrop.scss';
import { checkPropTypes } from 'prop-types';

const backdrop = (props) => (props.show ? <div onClick={props.hideBackdrop} className='Backdrop'></div> : null)
;

export default backdrop;
