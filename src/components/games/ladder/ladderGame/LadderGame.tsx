import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { $authStore } from '../../../../effector/auth'
import { getCategory } from '../../../../effector/game/game'
import { $ladderStore, calculationGame, changeIsLoading, reset } from '../../../../effector/ladder/ladder'
import { getError } from '../../../../effector/messageScreen/messageScreen'
import { toggleHistory, toggleRegistration } from '../../../../effector/togglePopup/togglePopup'
import LadderCell from './components/LadderCell'
import './LadderGame.scss'

const LadderGame = () => {
    const ladder = useStore($ladderStore)
    const auth = useStore($authStore)
    const { activeСell, stone, gameStatus } = ladder
    const [newField, setNewField] = useState<any[]>([])
    const [heroPosition, setHeroPosition] = useState(50)

    const HERO = { color: '#ffb400', id: 2, tag: 'H' }
    const STONE = { color: '#000', id: 3, tag: 'S' }
    const EMPTY = { color: '', id: 1 }
    const coeff = [9, 7, 5.50, 4, 3.40, 2.90, 2.40, 1.90, 1.50, 1.20]
    const field: any[] = []

    const createField = () => {
        for (let i = 1; i <= 10; i++) {
            for (let y = 1; y <= 5; y++) {
                const newHero = { ...EMPTY, position: y }
                field.push(newHero)
            }
        }
        if (field) {
            field.splice(51, 0, HERO)
        }
        setNewField(field)
    }

    useEffect(() => {
        if (gameStatus === 'start') {
            createField()
            setHeroPosition(50)
            reset()
        }
    }, [gameStatus])

    const changeHeroPosition = (id: number) => {
        newField.splice(id, 1, HERO)
        newField.splice(heroPosition, 1, EMPTY)
        setHeroPosition(id)

    }

    useEffect(() => {
        if (stone) {
            newField.splice(stone?.stoneIndex, 1)
            newField.splice(stone?.stoneIndex, 0, STONE)
        }
    }, [stone])


    const moveGame = async (position: number, id: number) => {
        changeHeroPosition(id)
        changeIsLoading(true)
        const ladderGameId = window.localStorage.getItem('ladderGameId')
        const data = {
            gameID: ladderGameId,
            selectedCell: position
        }
        await calculationGame(data)
            .catch((e) => {
                getError(e.response.data.message)
            })

        setTimeout(() => {
            changeIsLoading(false)
        }, 1500)
    }

    const openHistoryPopup = () => {
        if (!auth.isAuth) {
            return toggleRegistration(true)
        }
        toggleHistory(true)
        getCategory('ladder')
    }
    return (<>
        {
            <section className="ladder__game">
                <div onClick={openHistoryPopup} className='ladder__history'>
                    <div>
                        <svg className='ladder__history-button' viewBox="0 0 62.246 62.246"><path d="M57.548,45.107H19.965c-2.595,0-4.699,2.105-4.699,4.701c0,2.594,2.104,4.699,4.699,4.699h37.583c2.594,0,4.698-2.105,4.698-4.699C62.246,47.213,60.142,45.107,57.548,45.107z" /><path d="M57.548,26.402H19.965c-2.595,0-4.699,2.104-4.699,4.7c0,2.595,2.104,4.699,4.699,4.699h37.583c2.594,0,4.698-2.104,4.698-4.699S60.142,26.402,57.548,26.402z" /><path d="M19.965,17.096h37.583c2.594,0,4.698-2.104,4.698-4.7s-2.104-4.699-4.698-4.699H19.965c-2.595,0-4.699,2.104-4.699,4.699C15.266,14.991,17.37,17.096,19.965,17.096z" /><circle cx="4.77" cy="12.439" r="4.77" /><circle cx="4.77" cy="31.102" r="4.769" /><circle cx="4.77" cy="49.807" r="4.77" /></svg>
                    </div>
                </div>
                <div className='ladder__game-container'>
                    <div className='ladder__game-coeff'>
                        {
                            coeff.map((item, id) => (
                                <div key={id} className='ladder__game-coeff-item'>
                                    x{item}
                                </div>
                            ))
                        }
                    </div>
                    <div className='ladder__game-items'>
                        {
                            newField?.map((item, id) => (
                                <LadderCell key={id} moveGame={moveGame} activeСell={activeСell} item={item} id={id} />
                            ))
                        }
                    </div>
                </div>
            </section>
        }
    </>)
}

export default LadderGame


