import React from "react"
import {Col, Form} from "react-bootstrap"


export const TeamInfo = ({number, scores, players, playersString, teamInfoSetter}) => {

    const setScores = (event) => {
        let scores = parseInt(event.target.value)

        const minScores = 0
        const maxScores = 7

        if(scores < minScores){
            scores = 0
        }

        if(scores > maxScores){
            scores = 7
        }

        event.target.value = scores

        teamInfoSetter({
            number,
            scores: scores ? scores : 0,
            players
        })
    }

    const setPlayers = (event) => {
        let newPlayersString = event.target.value
        let newPlayers = newPlayersString.split('\n').map(item => item.trim()).filter(item => item.length)

        if(newPlayers.length > 11){
            event.target.value = playersString
            return
        }

        teamInfoSetter({
            number,
            scores,
            players: newPlayers,
            playersString: newPlayersString
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
                                  onChange={event => setPlayers(event)}
                    />
                    {players.length == 11 && (
                        <span className='text-danger'>You entered maximal number of players</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='ms-2' htmlFor="scores">Scores</Form.Label>
                    <Form.Control id="Scores" type='number' min={0} max={7}
                                  placeholder="Scores"
                                  value={parseInt(scores)}
                                  onChange={event => setScores(event)}
                    />
                </Form.Group>
            </fieldset>
        </Col>
    )
}
