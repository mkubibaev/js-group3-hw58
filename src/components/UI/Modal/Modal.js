import React from 'react';
import Button from "../Button/Button";

const Modal = props => {
    let modal = null;

    if (props.show) {
        modal = (
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                            <button
                                type="button"
                                className="close"
                                onClick={props.closed}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            {props.buttons.map(button => (
                                <Button
                                    key={button.label}
                                    type={button.type}
                                    label={button.label}
                                    clicked={button.clicked}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return modal;
};

export default Modal;