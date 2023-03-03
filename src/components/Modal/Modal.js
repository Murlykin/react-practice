import ReactModal from 'react-modal';
import { ModalButton, ModalStale, ModalImg } from './Modal.styled'


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
      <h2>{}</h2>
      <ModalImg src={image} alt=""/>
        <ModalButton onClick={onClose}>Close modal</ModalButton>
        </ModalStale> 
      </ReactModal>
    
    )
};


