import { checkPropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ProtoTypes from 'prop-types';

const InputBase = styled.input`
    width:100%;
    padding:15px;
    font-size:14px;
    border: 1px solid ${({theme})=> theme.colors.primary};
    color: black;
    background-color:${({theme})=> theme.colors.maisBg};
    border-radius:${({theme})=> theme.colors.borderRadius};
    outline:0;
    margin-bottom:25px;
`;


export default function Input ({onChange, placeholder, ...props}){
    return(
        <div>
            <InputBase
                onChange={onChange} 
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}

Input.defaultProps={
    value:'',
}

Input.prototype = {
    onChange: ProtoTypes.func.isRequired,
    placeholder: ProtoTypes.string.isRequired,
    name: ProtoTypes.string.isRequired,
    value: ProtoTypes.string.isRequired
};