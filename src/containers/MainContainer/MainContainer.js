import React, {Component} from 'react';
import Modal from "../../components/UI/Modal/Modal";
import Button from "../../components/UI/Button/Button";

class MainContainer extends Component {
    state = {
        modal: false,
    };

    showModal = () => {
        this.setState({modal: true})
    };

    closeModal = () => {
        this.setState({modal: false})
    };

    continued = () => {
        alert('Continued!');
    };

    render() {
        return (
            <div className="container py-3">

                <Button
                    type="secondary"
                    label="Show Modal"
                    clicked={this.showModal}
                />

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

            </div>
        )
    }
}

export default MainContainer;