import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Alerta({show, title, msg}) {
  const [smShow, setSmShow] = useState(show);

  return (
    <>
      
      <Modal
        centered
        animation={false}
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {msg}
        </Modal.Body>
      </Modal>
      
    </>
  );
}

export default Alerta;