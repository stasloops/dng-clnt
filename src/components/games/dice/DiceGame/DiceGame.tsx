import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { $authStore } from '../../../../effector/auth'
import { updateBalance } from '../../../../effector/balance'
import { $diceStore, changeIsLoading, createGame } from '../../../../effector/dice/dice'
import { getCategory } from '../../../../effector/game/game'
import { getError } from '../../../../effector/messageScreen/messageScreen'
import { toggleHistory, toggleRegistration } from '../../../../effector/togglePopup/togglePopup'
import './DiceGame.scss'

const DiceGame = () => {
  const { diceBet, range, droppedNumber, isLoading } = useStore($diceStore)
  const [fromTo, setFromTo] = useState({ less: 0, more: 0 })
  const [coeff, setCoeff] = useState('2')
  const auth = useStore($authStore)

  const startGame = async (isMore: boolean) => {
    if (!auth.isAuth) {
      return toggleRegistration(true)
    }
    changeIsLoading(true)
    const data = {
      bet: diceBet,
      range: range,
      isMore: isMore
    }
    await createGame(data)
      .then((res) => {
        updateBalance(res.data.newBalance)
      })
      .catch((e) => {
        getError(e.response.data.message)
      })
    changeIsLoading(false)
  }

  const openHistoryPopup = () => {
    if (!auth.isAuth) {
      return toggleRegistration(true)
    }
    toggleHistory(true)
    getCategory('dice')
  }

  useEffect(() => {
    const a = 1000000 / 100 * range
    const b = a - 1
    const c = 1000000 - a
    setFromTo({ less: b, more: c })
    const createCoeff = 100 / range - 0.01
    setCoeff(createCoeff.toFixed(2))
  }, [range])

  return (<>
    {
      <section className="dice__game">
        <div onClick={openHistoryPopup} className='dice__history'>
          <div>
            <svg className='dice__history-button' viewBox="0 0 62.246 62.246"><path d="M57.548,45.107H19.965c-2.595,0-4.699,2.105-4.699,4.701c0,2.594,2.104,4.699,4.699,4.699h37.583c2.594,0,4.698-2.105,4.698-4.699C62.246,47.213,60.142,45.107,57.548,45.107z" /><path d="M57.548,26.402H19.965c-2.595,0-4.699,2.104-4.699,4.7c0,2.595,2.104,4.699,4.699,4.699h37.583c2.594,0,4.698-2.104,4.698-4.699S60.142,26.402,57.548,26.402z" /><path d="M19.965,17.096h37.583c2.594,0,4.698-2.104,4.698-4.7s-2.104-4.699-4.698-4.699H19.965c-2.595,0-4.699,2.104-4.699,4.699C15.266,14.991,17.37,17.096,19.965,17.096z" /><circle cx="4.77" cy="12.439" r="4.77" /><circle cx="4.77" cy="31.102" r="4.769" /><circle cx="4.77" cy="49.807" r="4.77" /></svg>
          </div>
        </div>
        <div className='dice__game-container'>
          <div className='dice__game-reward'>
            <div className='dice__game-reward-item'>
              <div className='dice__game-reward-coeff'>{coeff}x</div>
              <span className='dice__game-reward-description'>Коэфф.</span>
            </div>
            <div className='dice__game-reward-item'>
              <div className='dice__game-reward-reward'>{Number(coeff) * diceBet}</div>
              <span className='dice__game-reward-description'>Выигрыш</span>
            </div>
          </div>
          <div className='dice__game-content'>
            <div className='dice__game-dropped-number'>{!droppedNumber ? '000 000' : droppedNumber}</div>
            <div className='dice__game-items'>
              <div className='dice__game-item'>
                <button
                  style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
                  onClick={() => startGame(false)}
                  className='dice__game-select dice__game-select-less'
                >
                  МЕНЬШЕ
                </button>
                <div className='dice__game-fromto'>от 0 до {fromTo.less}</div>
              </div>
              <div className='dice__game-item'>
                <button
                  style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
                  onClick={() => startGame(true)}
                  className='dice__game-select dice__game-select-more'
                >
                  БОЛЬШЕ
                </button>
                <div className='dice__game-fromto'>от {fromTo.more} до 999999</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    }
  </>)
}

export default DiceGame