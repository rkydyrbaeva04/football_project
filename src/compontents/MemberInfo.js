import React from "react"
import {Col} from "react-bootstrap"

export const MemberInfo = ({member}) => {
    return (
        <Col className='border rounded border-primary pt-3' xs={12} md={4}>
            <h4 className='fw-semibold'>{member.name}</h4>
            <a href={"mailto:" + member.email} target="_blank">{member.email}</a>
            <div>
                <p>
                    {member.additional}
                </p>
            </div>
        </Col>
    )
}