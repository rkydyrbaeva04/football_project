import React from "react"
import {Col, Form} from "react-bootstrap"


export const TeamInfo = ({number, scores, players, playersString, teamInfoSetter}) => {

    const setScores = (scores) => {
        scores = parseInt(scores)

        teamInfoSetter({
            number,
            scores: scores ? scores : 0,
            players
        })
    }

    const setPlayers = (playersString) => {
        teamInfoSetter({
            number,
            scores,
            players: playersString.split('\n').map(item => item.trim()).filter(item => item.length),
            playersString
        })
    }

    return (
        <Col as={Form} xs={12} md={6}>
            <h2 className='fw-bolder text-center'>Team {number}</h2>
            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label className='ms-2' htmlFor="playersList">Players list</Form.Label>
                    <Form.Control id="playersList" as={"textarea"} style={{height: '200px'}}
                                  placeholder="Players List"
                                  value={playersString}
                                  onChange={event => setPlayers(event.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='ms-2' htmlFor="scores">Scores</Form.Label>
                    <Form.Control id="Scores" type='number' min={1}
                                  placeholder="Scores"
                                  value={scores}
                                  onChange={event => setScores(event.target.value)}
                    />
                </Form.Group>
            </fieldset>
        </Col>
    )
}
