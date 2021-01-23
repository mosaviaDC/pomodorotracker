import React from 'react';

const ResetPassword = (props)=>{

    return <h1>
        {props.match.params.code}
        Reset password
    </h1>

}
export default ResetPassword;