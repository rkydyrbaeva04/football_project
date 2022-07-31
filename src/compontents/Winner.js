import React, {useState} from "react"
import {Col} from "react-bootstrap"


export const Winner = ({teams}) => {
    let winnerTeam = null

    let scoresCombinations = []

    if (teams[0].scores > teams[1].scores) {
        winnerTeam = teams[0]
    } else if (teams[0].scores < teams[1].scores) {
        winnerTeam = teams[1]
    }

    const getScoreRation = () => {
        return <h3 className='fw-bold text-center'>{teams[0].scores} : {teams[1].scores}</h3>
    }

    const calcScoreCombinationsWrapper = (score) => {
        const calcScoreCombinations = (score, start, p, results) => {
            if (score == 0) {
                results.push(p.trim())
            } else {
                for (let j = start; j < score + 1; j++) {
                    calcScoreCombinations(score - j, j, p + j + ' ', results)
                }
            }
        }

        const results = []
        calcScoreCombinations(score, 1, '', results)

        scoresCombinations = results
    }

    if (winnerTeam) {
        winnerTeam.players.forEach(playerName => console.log(playerName))
        calcScoreCombinationsWrapper(winnerTeam.scores)
    }

    return (
        <Col xs={12} md={6}>
            {winnerTeam !== null && (
                <>
                    <h2 className='fw-bold text-center'>Team {winnerTeam.number} is Winner!</h2>
                    {getScoreRation()}
                    <h3 className='text-center'>Score list</h3>
                    <div className='d-flex flex-column align-items-center'>
                        {scoresCombinations.map((scores, index) => {
                                return <div key={index}>{scores}</div>
                            }
                        )}
                    </div>
                </>
            )}
            {winnerTeam === null && (
                <>
                    <h2 className='fw-bold text-center'>Draw!</h2>
                    {getScoreRation()}
                </>
            )}
        </Col>
    )
}