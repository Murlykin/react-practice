import ReactModal from 'react-modal';
import { ModalButton, ModalStale, ModalImg } from './Modal.styled'
// import PropTypes from 'prop-types';

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


export const Modal = ({ image, IsOpen, onClose, name }) => {
  return (
    
       <ReactModal
        isOpen={IsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      ><ModalStale>
      <h2>{name}</h2>
      <ModalImg src={image} alt=""/>
        <ModalButton onClick={onClose}>Close modal</ModalButton>
        </ModalStale> 
      </ReactModal>
    
    )
};


// Modal.propTypes = {
//   item: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   };
