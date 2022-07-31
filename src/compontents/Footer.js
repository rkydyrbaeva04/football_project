import React from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Contact} from "./Contact"

const contacts = [
    {
        title: 'Contacts 1',
        phones: [
            '87777777777',
            '87777777777',
            '87777777777'
        ]
    },
    {
        title: 'Contacts 2',
        phones: [
            '87777777777',
            '87777777777',
            '87777777777'
        ]
    },
    {
        title: 'Contacts 3',
        phones: [
            '87777777777',
            '87777777777',
            '87777777777'
        ]
    },
]

export const Footer = () => {
    return (
        <footer className='mt-2 pt-1 pb-3'>
            <Container>
                <h2 className='fw-bold text-white'>Contacts</h2>
                <Row>
                    {contacts.map((contact, index) => {
                        return <Contact contact={contact}/>
                    })}
                </Row>
            </Container>
        </footer>
    )
}