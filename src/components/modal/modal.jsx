import { Modal } from 'react-bootstrap'

const ModalCard = ({show, handleClose}) => {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
            <Modal.Header>
                <Modal.Title>This is Modal</Modal.Title>
            </Modal.Header>
            </Modal>
        </>
    )
}

export default ModalCard