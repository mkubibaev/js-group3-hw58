import React from 'react';

const Alert = props => {
    const alertClasses = ['alert'];
    alertClasses.push('alert-' + props.type);

    let dismissBtn = null;

    if (props.dismiss && !props.clickDismissable) {
        dismissBtn = (
            <button
                type="button"
                className="close"
                onClick={props.dismiss}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        )
    }

    return (
        <div className={alertClasses.join(' ')}
             onClick={props.clickDismissable ? props.dismiss : null}
        >
            {props.children}
            {dismissBtn}
        </div>
    );
};

export default Alert;