import React, { useEffect, useState } from 'react';
import './App.scss';
import Menu from './components/always/menu/Menu';
import Popups from './components/popups/Popups';
import { checkAuth } from './effector/auth';
import Profile from './pages/profile/Profile';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Ladder from './pages/games/ladder/Ladder';
import Coin from './pages/games/coin/Coin';
import { updateBalance } from './effector/balance';
import ProfileMenu from './components/always/profileMenu/ProfileMenu';
import MessagePanel from './components/messagePanel/MessagePanel';
import HowGame from './pages/howGame/HowGame';
import Contact from './pages/contact/Contact';
import Footer from './components/always/footer/Footer';
import HeaderBottom from './components/always/headerBottom/HeaderBottom';
import Dice from './pages/games/dice/Dice';
import SlotDice from './pages/games/slotDice/SlotDice';
import PlayerStatistics from './components/always/playerStatistics/PlayerStatistics';
import Header from './components/always/header/Header';

function App() {
  const [visibleAside, setVisibleAside] = useState<boolean>(false)

  useEffect(() => {
    const fetchChekcAuth = async () => {
      const res = await checkAuth()
      updateBalance(res?.data.userData?.balance)
    }
    fetchChekcAuth()
  }, [])

  const q = 1
  return (
    <div className="dungeon-app">
      <Header setVisibleAside={setVisibleAside}/>
      <Menu />
      <Popups />
      <MessagePanel />
      <ProfileMenu visibleAside={visibleAside} setVisibleAside={setVisibleAside} />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<HowGame />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/ladder' element={<Ladder />} />
        <Route path='/coin' element={<Coin />} />
        <Route path='/dice' element={<Dice />} />
        <Route path='/slots' element={<SlotDice />} />
        <Route path='/ladder' element={<Ladder />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <div className='dungeon-app-bottom'>
        <PlayerStatistics />
        <Footer />
      </div>
      <HeaderBottom visibleAside={visibleAside} setVisibleAside={setVisibleAside} />
    </div>
  );
}

export default App;
