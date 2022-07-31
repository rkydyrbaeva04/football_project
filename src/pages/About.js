import React from "react"
import {Button, Card, Col, Row} from "react-bootstrap"
import {MemberInfo} from "../compontents/MemberInfo"

const members = [
    {
        name: 'Kydyrbayeva Rabiya Almazkyzy',
        email: 'rkydyrbaeva04@mail.ru',
        additional: 'student AITU, SE-2107 ' +
            'age:18'
    },
    {
        name: 'Kydyrbayeva Rabiya Almazkyzy',
        email: 'rkydyrbaeva04@mail.ru',
        additional: 'student AITU, SE-2107 ' +
            'age:18'
    },
    {
        name: 'Kydyrbayeva Rabiya Almazkyzy',
        email: 'rkydyrbaeva04@mail.ru',
        additional: 'student AITU, SE-2107 ' +
            'age:18'
    },
]

export const About = () => {
    return (
        <div>
            <h1 className='fw-bold mb-3'>About</h1>
            <Row className='px-1 gap-3 justify-content-center'>
                <Col xs={12} md={10}>
                    <img style={{height: '100%', width: '100%'}}
                         src="https://www.iedunote.com/img/28051/reference-groups.jpg" alt="group"/>
                </Col>
                {members.map((member, index) => {
                    return <MemberInfo member={member} key={index}/>
                })}
            </Row>
        </div>
    )
}