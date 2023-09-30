import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { CreateAdBanner } from '../../components/CreateAdBanner';
import { CreateAdModal } from '../../components/CreateAdModal';
import { GameBanner } from '../../components/GameBanner';

import logoImg from '../../assets/logo-nlw-esports.svg';

import '../../styles/main.css';
import axios from 'axios';
interface Game {
  id: string;
  title: string;
  bannerUrls: string;
  _count: {
    ads: number;
  } 
}


export function Home() {
  const [games, setGames] = useState<Game[]>([])
  
  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className='max-w-[1304px] mx-auto px-6 flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-titleClamp text-white font-black mt-20 '>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 '>

        {games.map(game => {
          return(
            <GameBanner 
            key={game.id}
            id={game.id}
            title={game.title} 
            bannerUrl={game.bannerUrls}
            adsCount={game._count.ads}
            />
          );
        })}
            
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
      
    </div>
  );
}