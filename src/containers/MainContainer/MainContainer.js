import React, {Component} from 'react';
import Modal from "../../components/UI/Modal/Modal";

class MainContainer extends Component {
    state = {
        modal: false,
    };

    showModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    };


    render() {
        return (
            <div className="container">
                <button onClick={this.showModal}>Show modal</button>
                <Modal
                    show={this.state.modal}
                />

            </div>
        )
    }
}

export default MainContainer;