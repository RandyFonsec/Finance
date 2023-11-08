import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

//Estilos internos
const circleStyle = {
  backgroundColor: '#FFFFFF',
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  border: '2px solid #000000',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  display: 'flex', justifyContent: 'center', alignItems: 'center' 
};



function Lateral() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    



    <>
     <Container>

      <Row className="mt-3 justify-content-md-center">

        <Col>
               <Button variant = "light" onClick={handleShow}>
        <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="2rem"
      width="2rem"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 6.5h12M4.498 10.5h11.997M4.5 14.5h11.995" />
      </g>
    </svg>
      </Button>
        </Col>
      </Row>


      <Row style = {{marginTop : '5rem'}}>
      <Stack gap={3}>

      <div style = {circleStyle} onClick={handleShow}><svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="3em"
      width="3em"
    >
      <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
    </svg></div>
    <div style = {circleStyle}>
<svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
      
    >
      <path d="M15 15v2h3v3h2v-3h3v-2h-3v-3h-2v3m-3.03-3.39C14.85 10.28 13.59 8.97 12 9c-1.7.03-3 1.3-3 3s1.3 2.94 3 3c.38 0 .77-.08 1.14-.23.27-1.1.72-2.14 1.83-3.16M13 16H7a2 2 0 00-2-2v-4c1.11 0 2-.89 2-2h10a2 2 0 002 2v.06c.67 0 1.34.12 2 .34V6H3v12h10.32a6.38 6.38 0 01-.32-2z" />
    </svg>
    </div>
    <div style = {circleStyle}>
<svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
    >
      <path d="M15 15v2h8v-2m-8.03-3.39C14.85 10.28 13.59 8.97 12 9c-1.7.03-3 1.3-3 3s1.3 2.94 3 3c.38 0 .77-.08 1.14-.23.27-1.1.72-2.14 1.83-3.16M13 16H7a2 2 0 00-2-2v-4c1.11 0 2-.89 2-2h10a2 2 0 002 2v.06c.67 0 1.34.12 2 .34V6H3v12h10.32a6.38 6.38 0 01-.32-2z" />
    </svg>
    </div>
    <div style = {circleStyle}>

     <svg
      viewBox="0 0 576 512"
      fill="currentColor"
      height="3em"
      width="3em"
    >
      <path d="M547.6 103.8l-57.3-90.7C485.2 5 476.1 0 466.4 0H109.6c-9.7 0-18.8 5-23.9 13.1l-57.4 90.7c-29.6 46.8-3.4 111.9 51.9 119.4 4 .5 8.1.8 12.1.8 26.1 0 49.3-11.4 65.2-29 15.9 17.6 39.1 29 65.2 29s49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29 26.2 0 49.3-11.4 65.2-29 16 17.6 39.1 29 65.2 29 4.1 0 8.1-.3 12.1-.8 55.5-7.4 81.8-72.5 52.1-119.4zm-47.9 151.1h-.1c-5.3.7-10.7 1.1-16.2 1.1-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4-5.5 0-11-.4-16.3-1.1H76c-4.1-.6-8.1-1.3-12-2.3V448c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V252.6c-4 1-8 1.8-12.3 2.3z" />
    </svg></div>
    <div style = {circleStyle}>

    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="3em"
      width="3em"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M11 7 A4 4 0 0 1 7 11 A4 4 0 0 1 3 7 A4 4 0 0 1 11 7 z" />
      <path d="M7 3v4h4M9 17v4M17 14v7M13 13v8M21 12v9" />
    </svg>

    </div>



        </Stack>

      </Row>

      <Row style = {{marginTop : '3rem'}}>
      <Col sx={11}></Col>
      <Col sx={1} style = {{marginLeft : '2.5rem'}}>
      <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      style={{
    backgroundColor:'#FFFFFF',   
    border: '1px solid black',
    padding :'3px',
    borderRadius: '50%',
  }}
    >
      <path d="M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z" />
    </svg>
      </Col>
      </Row>




    </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Lateral;