import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo-nlw-esports.png';


import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games'
import { styles } from './styles';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrls}: GameCardProps){
    navigation.navigate('game', { id, title, bannerUrls });
  }

  useEffect(() => {
    fetch('http://192.168.2.145:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  })
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
          source={logoImg}
          style={styles.logo}
        />

        <Heading 
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList 
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item })=> (
            <GameCard 
              data={item}
              onPress={() => handleOpenGame(item)} 
            />
          )}

          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}