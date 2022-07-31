import React, {useState} from "react"
import {Button, Col, Container, Row} from "react-bootstrap"
import {TeamInfo} from "../compontents/TeamInfo"
import {Winner} from "../compontents/Winner"

const teamInfoInit = {
    number: null,
    scores: 0,
    players: [],
    playersString: ''
}

export const Home = () => {
    const [teamInfo1, setTeamInfo1] = useState({...teamInfoInit, number: 1})
    const [teamInfo2, setTeamInfo2] = useState({...teamInfoInit, number: 2})

    const [isShowWinner, toggleIsShowWinner] = useState(false)

    const setTeamInfoDecorator = (func) =>{
        const wrapped = (args) => {
            toggleIsShowWinner(false)
            return func(args)
        }

        return wrapped
    }

    const showWinner = () => {
        toggleIsShowWinner(true)
    }

    return (
        <>
            <h1 className='fw-bold mb-3'>Home</h1>
            <Row>
                <TeamInfo {...teamInfo1} teamInfoSetter={setTeamInfoDecorator(setTeamInfo1)}/>
                <TeamInfo {...teamInfo2} teamInfoSetter={setTeamInfoDecorator(setTeamInfo2)}/>
                <Container className='d-flex justify-content-center'>
                    <Button onClick={showWinner}>Get Winner</Button>
                </Container>
            </Row>
            {isShowWinner === true && (
                <Row className='mt-4 justify-content-center fw-bolder'>
                    <Winner teams={[teamInfo1, teamInfo2]}/>
                </Row>
            )}
        </>
    )
}