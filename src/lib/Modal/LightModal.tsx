import ReactModal from 'react-modal';

interface ModalProps extends ReactModal.Props {

}

const styles = {
    content: {
        boxShadow: '2px 2px 19px 5px rgba(0,0,0,.2)',
        maxWidth: '500px',
        margin: '0px auto',
        borderColor: '#d9d9d7',
        height: 'max-content',
        borderRadius: '12px',
        padding: '24px',
        inset: '20% 2%'
    }
}



const LightModal = (props: ModalProps) => {
    return <ReactModal {...props} style={styles}>
        {props.children}
    </ReactModal>
}


export default LightModal;