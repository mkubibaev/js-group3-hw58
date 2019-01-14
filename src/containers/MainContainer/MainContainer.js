import React, {Component} from 'react';
import Modal from "../../components/UI/Modal/Modal";
import Button from "../../components/UI/Button/Button";
import Alert from "../../components/UI/Alert/Alert";

class MainContainer extends Component {
    state = {
        modal: false,
    };

    showModal = () => {
        this.setState({modal: true});
    };

    closeModal = () => {
        this.setState({modal: false});
    };

    continued = () => {
        alert('Continued!');
    };

    dismissAlert = () => {
        alert('Alert clicked!');
    };

    render() {
        return (
            <div className="container py-3">
                <div className="mb-3">
                    <Button
                        type="secondary"
                        label="Show Modal"
                        clicked={this.showModal}
                    />
                </div>

                <Modal
                    show={this.state.modal}
                    closed={this.closeModal}
                    title="Some kinda modal title"
                    buttons={
                        [
                            {type: 'primary', label: 'Continue', clicked: this.continued},
                            {type: 'danger', label: 'Close', clicked: this.closeModal}
                        ]
                    }
                >
                    <p>This is modal content</p>
                </Modal>

                <Alert
                    type="success"
                    dismiss={this.dismissAlert}
                >Success alert with dismiss button</Alert>
                <Alert
                    type="warning"
                >Warning alert without dismiss button</Alert>
                <Alert
                    type="danger"
                    dismiss={this.dismissAlert}
                    clickDismissable
                >Danger alert with dismiss button and clickDismissable property</Alert>

            </div>
        )
    }
}

export default MainContainer;