import React from 'react'
import { useStore } from 'effector-react'
import { $authStore } from '../../../../effector/auth'
import { $coinStore } from '../../../../effector/coin/coin'
import { getCategory } from '../../../../effector/game/game'
import { toggleHistory, toggleRegistration } from '../../../../effector/togglePopup/togglePopup'
import './CoinGame.scss'


const CoinGame = () => {
    const coin = useStore($coinStore)
    const auth = useStore($authStore)

    const openHistoryPopup = () => {
        if (!auth.isAuth) {
            return toggleRegistration(true)
        }
        toggleHistory(true)
        getCategory('flipCoin')
    }
    return (
        <section className='coin__game coin__section'>
            <div className='coin__game-container'>
                <div className='coin__ratio'>
                    <span className='coin__ratio-number'>x1.9</span>
                    <span className='coin__ratio-title'>Коэфф.</span>
                </div>
                <div className={coin.gameStatus === 'end' ? 'flipHead flipTail' : ''} id="coins" >
                    <div
                        style={{ transform: coin.randomCoin === 0 ? 'rotateX(-180deg)' : '' }}
                        className='side head'>
                        DUN
                    </div>
                    <div
                        style={{ transform: coin.randomCoin === 1 ? 'rotateX(-180deg)' : '' }}
                        className='side tail'>
                        ON
                    </div>
                </div>
                <div className='coin__history'>
                    <div onClick={openHistoryPopup} >
                        <svg className='coin__history-button' viewBox="0 0 62.246 62.246"><path d="M57.548,45.107H19.965c-2.595,0-4.699,2.105-4.699,4.701c0,2.594,2.104,4.699,4.699,4.699h37.583c2.594,0,4.698-2.105,4.698-4.699C62.246,47.213,60.142,45.107,57.548,45.107z"/><path d="M57.548,26.402H19.965c-2.595,0-4.699,2.104-4.699,4.7c0,2.595,2.104,4.699,4.699,4.699h37.583c2.594,0,4.698-2.104,4.698-4.699S60.142,26.402,57.548,26.402z"/><path d="M19.965,17.096h37.583c2.594,0,4.698-2.104,4.698-4.7s-2.104-4.699-4.698-4.699H19.965c-2.595,0-4.699,2.104-4.699,4.699C15.266,14.991,17.37,17.096,19.965,17.096z"/><circle cx="4.77" cy="12.439" r="4.77" /><circle cx="4.77" cy="31.102" r="4.769" /><circle cx="4.77" cy="49.807" r="4.77" /></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoinGame