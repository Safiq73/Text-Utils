import React from 'react'

function Alert(props) {
    return (
        <div className='mb-5' style={{height:'30px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> 
            <strong>{props.alert.type}</strong>{props.alert.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button>
                {/* <span aria-hidden="true">&times;</span> */}
        </div>}
        </div>
    )            
}

export default Alert
