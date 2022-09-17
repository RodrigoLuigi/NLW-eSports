# Back-end

## Entidades

### Game

id
title
bannerUrl

### Ad

id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

para trabalhar Datas/ horários trabalhamos com numeros inteiros para facilitar manipulação destes no DB.
ex.
1:30h -> 90min

## Casos de uso

- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio