import React, { useState } from 'react'
import { login } from '../../../../effector/auth'
import { updateBalance } from '../../../../effector/balance'
import { toggleLogin, toggleRegistration } from '../../../../effector/togglePopup/togglePopup'
import { useClose } from '../../../../hooks/useClose'
import './LoginPopup.scss'

const LoginPopup = () => {
  const [userData, setUserData] = useState({ email: '', password: '' })
  const { value } = useClose(toggleLogin)

  const swapForm = () => {
    toggleLogin(false)
    toggleRegistration(true)
  }

  const sendForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const res = await login(userData)
    updateBalance(res.data.userData.balance)
    toggleLogin(false)
  }

  return (
    <div className='login'>
      <div ref={value} className='login__inner'>
        <div className='login__top'>
          <h2 className='login__title'>Вход</h2>
          <span onClick={() => toggleLogin(false)} className='login__close'>+</span>
        </div>
        <form className='login__form'>
          <input value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} placeholder='E-mail' type="email" className='login__input' />
          <input value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} placeholder='Пароль' type="password" className='login__input' />
          <button onClick={(e) => sendForm(e)} className='login__button'>Войти</button>
          <button onClick={swapForm} className='login__create login__button'>Создать аккаунт</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPopup