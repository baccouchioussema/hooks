import react ,{useState} from "react"
import { Modal , Button, Form} from 'react-bootstrap'
const AddMovie = (handleMovie) => {
    const [name , setName ] = useState("");
    const [image , setImage ] = useState("");
    const [description , setDescription ] = useState("");
    const [rating , setRating ] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>AddMovie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<forem>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          
        <Form.Label>Enter Movie Name  </Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Label>Enter Description  </Form.Label>
          <Form.Control type="text" placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)} />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Label>Enter Rating  </Form.Label>
          <Form.Control type="number" placeholder="Enter Rating" onChange={(e)=>setRating(e.target.value)} />
         
        </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label> Enter Image</Form.Label>
        <Form.Control type="text" placeholder="Image..." onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      
    </forem>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleMovie({id:Math.random(), image,name,description,rating});handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
export default AddMovie
