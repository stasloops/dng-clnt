import React, { FC } from 'react'
import { useStore } from 'effector-react'
import Cookies from 'js-cookie'
import { $authStore, logout } from '../../../effector/auth'
import { updateBalance } from '../../../effector/balance'
import { getCategory } from '../../../effector/game/game'
import { toggleHistory, toggleOut, toggleTopUp } from '../../../effector/togglePopup/togglePopup'
import { useClose } from '../../../hooks/useClose'
import { User } from '../../../types/userTypes'
import './ProfileMenu.scss'

type ProfileMenuProps = {
    visibleAside: boolean
    setVisibleAside: (state: boolean) => void
}

const ProfileMenu: FC<ProfileMenuProps> = ({ visibleAside, setVisibleAside }) => {
    const { value } = useClose(setVisibleAside)
    const auth = useStore($authStore)
    const user:User = auth?.user

    const exit = () => {
        logout()
        updateBalance(0)
        setVisibleAside(false)
        Cookies.remove('refreshToken')
    }

    const openHistoryPopup = () => {
        toggleHistory(true)
        setVisibleAside(false)
        getCategory('all')
    }

    const openTopUp = () => {
        setVisibleAside(false)
        toggleTopUp(true)
    }

    const openOut = () => {
        setVisibleAside(false)
        toggleOut(true)
    }

    return (
        <aside style={{ right: visibleAside ? '0px' : '-450px'}} className='aside' ref={value}>
            <div className='aside__container'>
                <div onClick={() => setVisibleAside(false)} className='aside__close'>
                    +
                </div>
                <div className='aside__inner'>
                    <div className='aside__profile'>
                        <div className='aside__avatar'>
                            <span>
                                ?
                            </span>
                            <span className='aside__id'>
                                ID:{user?.id}
                            </span>
                        </div>
                        <div className='aside__name'>
                        </div>
                    </div>
                    <div className='aside__item' onClick={openHistoryPopup} >
                        <div className='aside__icon'>
                            <svg className='aside__icon-history' viewBox="0 0 62.246 62.246"><path d="M57.548,45.107H19.965c-2.595,0-4.699,2.105-4.699,4.701c0,2.594,2.104,4.699,4.699,4.699h37.583c2.594,0,4.698-2.105,4.698-4.699C62.246,47.213,60.142,45.107,57.548,45.107z" /><path d="M57.548,26.402H19.965c-2.595,0-4.699,2.104-4.699,4.7c0,2.595,2.104,4.699,4.699,4.699h37.583c2.594,0,4.698-2.104,4.698-4.699S60.142,26.402,57.548,26.402z" /><path d="M19.965,17.096h37.583c2.594,0,4.698-2.104,4.698-4.7s-2.104-4.699-4.698-4.699H19.965c-2.595,0-4.699,2.104-4.699,4.699C15.266,14.991,17.37,17.096,19.965,17.096z" /><circle cx="4.77" cy="12.439" r="4.77" /><circle cx="4.77" cy="31.102" r="4.769" /><circle cx="4.77" cy="49.807" r="4.77" /></svg>
                        </div>
                        История
                    </div>
                    <div className='aside__item' onClick={openTopUp}>
                        <div className='aside__icon'><span className='icon__plus'>+</span></div>
                        <span className='aside__title'>Пополнить</span>
                    </div>
                    <div className='aside__item' onClick={openOut}>
                        <div className='aside__icon'><span className='icon__minus'>-</span></div>
                        <span className='aside__title'>Вывод</span>
                    </div>
                    <div className='aside__item' onClick={exit}>
                        <div className='aside__icon icon__delete'><span className='icon__delete-x'>+</span></div>
                        <span className='aside__title'>Выход</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default ProfileMenu