import '../../styles/main.css';
import { CaretLeft} from 'phosphor-react'
import { Link, useParams } from 'react-router-dom';

import logoImg from '../../assets/logo-nlw-esports.svg';
import { useEffect, useState } from 'react';

interface Duo {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel?: boolean;
}

export function Game() {
  const [ duos, setDuos ] = useState<Duo[]>([])

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://192.168.2.145:3333/games/${id}/ads`)
    .then(response => response.json())
    .then(data => console.log(data))
  })

  return (
    <div className='max-w-[1304px] mx-auto px-6 h-screen'>

      <div className=' flex justify-center my-5 items-center relative'>
        <Link to="/" className='flex items-center gap-2 text-zinc-400 hover:brightness-150 absolute left-1'>
          <CaretLeft size={24}/>
        </Link>
        <img src={logoImg} alt="" className='w-44 h-44'/>
      </div>

      <div className='flex flex-col items-center'>
        <div className='w-[311px] h-[160px] rounded my-8 bg-[url(https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg)] bg-no-repeat bg-cover bg-center'>
        </div>

        <h1 className='text-white text-2xl font-bold self-start'>
        League of Legends
        </h1>
        <p className='text-zinc-400 self-start'>Conecte-se e comece a jogar!</p>
      </div>

    </div>
  );
}