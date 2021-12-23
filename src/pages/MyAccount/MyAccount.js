import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import MainScreen from '../../components/MainScreen/MainScreen';
import { Link } from 'react-router-dom';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import notes from '../../data/notes';

const MyAccount = () => {
    const deleteHandler = (id) => {
        if (window.confirm("Ar tikrai norite istrinti skelbima?")) {

        }
    };
    return (
        <>
        <Navbar />
        <MainScreen title='Mano Paskyra'><Link to='CreateAdd'>
            <Button>
                Ikelti skelbima
            </Button>
            </Link>

            <h3>Mano skelbimai</h3>

            {notes.map(note=> (
              
              <Card style={{ width: '18rem' }}>
        <Card.Header>
            <span>{note.title}</span>
            </Card.Header>
            <Card.Body>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Text>
                {note.text}
    </Card.Text>
    <ListGroup>
    <ListGroupItem>{note.price}€</ListGroupItem>
    <ListGroupItem>Skelbimas sukurtas -data</ListGroupItem>
  </ListGroup>
    </Card.Body>
    <div>
    <Button href={`/note/${note._id}`}>Taisyti</Button>
    <Button onClick={()=>deleteHandler(note._id)}>Istrinti</Button>
    </div>
    </Card>
            ))
            }
        </MainScreen>
        </>
    )
}

export default MyAccount
