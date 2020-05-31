import React, { useState } from 'react'
import {Container, Button, Modal, ModalTitle, ModalBody, ModalFooter} from 'react-bootstrap'

function OpenModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>Launch modal</Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal Header</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// class OpenModal extends React.Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        show: false
//     }
//   }

//   handleShow() {
//     this.setState({ show: true })
//   }

//   handleClose(){
//     this.setState({ show: false })
//   }


//   render() {
//     return (
//       <div>
//         <Button onClick={() => this.handleShow()}>open Modal</Button>
//         <Modal show={this.state.show} onHide={this.handleClose} size="lg" centered>
//           <Modal.Header>
//             <ModalTitle className="text-center">Apis</ModalTitle>
//           </Modal.Header>
//           <ModalBody>

//             <Container className="container-fluid">
//               masuk jo
//             </Container>

//           </ModalBody>
//           <ModalFooter>
//             <Button onClick={() => this.handleClose()}>Close</Button>
//           </ModalFooter>          
//         </Modal>
//       </div>
//     )
//   }
// }

export default OpenModal