import React from 'react'
import { nanoid } from 'nanoid'
import { toggleTopUp } from '../../../../effector/togglePopup/togglePopup'
import { useClose } from '../../../../hooks/useClose'
import $api, { API_URL } from '../../../../http'
import './TopUpPopup.scss'


const TopUpPopup = () => {
    const { value } = useClose(toggleTopUp)
    const transferId = nanoid()
    const cardNumber = "4444 4444 4444 4444"

    const createTransfer = async () => {
        try {

            const data = {
                transferId: transferId
            }
            await $api.post(`${API_URL}/transfer/add`, data)
        } catch (e) {
            console.log(e);
        }
        toggleTopUp(false)
    }

    return (
        <div className='topup'>
            <div ref={value} className='topup__inner'>
                <div className='topup__top'>
                    <h2 className='topup__title'>ПОПОЛНИТЬ БАЛАНС</h2>
                    <span onClick={() => toggleTopUp(false)} className='topup__close'>+</span>
                </div>
                <div className="topup__bottom">
                    <div className="topup__methods">
                        <div className="topup__methods-item">
                            <span className='topup__methods-item-title'>Перевод на карту</span>
                        </div>
                    </div>
                    <div className="topup__form">
                        <h3 className='topup__form-title'>Перевод на карту</h3>
                        <div className='topup__form-item'>
                            <label className='topup__label'>Номер карты</label>
                            <textarea spellCheck="false" className='topup__input' value={cardNumber} />
                        </div>
                        <div className='topup__form-item'>
                            <label className='topup__label'>Код</label>
                            <textarea spellCheck="false" className='topup__input' value={transferId} />
                        </div>
                        <p className='topup__text'>Скопируйте этот код и вставьте в сообщение перевода.</p>
                        <p className='topup__text topup__text-description'>Обработка происходит вручную, поэтому время обработки вашего запроса зависит от того чем я щас занимаюсь...</p>
                        <div className='topup__rate'>
                            100.00 руб. = 100 голды.
                        </div>
                        <button onClick={createTransfer} className='topup__send'>ОТПРАВИТЬ!</button>
                        <p className='topup__help'>Если вам нужна помощь, вы можете связаться<a className='contact__link' target="_blank" href='https://t.me/JustNeich'> здесь.</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopUpPopup