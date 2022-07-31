import React from "react"
import {Col} from "react-bootstrap"

export const Contact = ({contact}) => {
    return (
        <Col xs={12} md={4}>
            <h4 className='fw-bold text-white'>{contact.title}</h4>
            <div className='d-flex flex-column gap-2'>
                {contact.phones.map((phone, index) => {
                    return <a href={"tel:" + phone} key={index}>{phone}</a>
                })}
            </div>
        </Col>
    )
}