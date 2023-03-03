import ReactModal from 'react-modal';
import {ModalButton, ModalStale} from './Modal.styled'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
ReactModal.setAppElement('#root');


export const Modal = ({ image, IsOpen, onClose }) => {
  return (
    
       <ReactModal
        isOpen={IsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      ><ModalStale>
      <h2>Food</h2>
      <img src={image} alt="" width="360" />
        <ModalButton onClick={onClose}>Close modal</ModalButton>
        </ModalStale> 
      </ReactModal>
    
    )
};
