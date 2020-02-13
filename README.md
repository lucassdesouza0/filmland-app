# FilmLand

O app que tem todos os seus filmes preferidos

## Print do app

![Print 1](https://i.ibb.co/d4GN3y0/Whats-App-Image-2020-02-13-at-02-19-15.jpg) ![Print 2](https://i.ibb.co/zswcZrv/Whats-App-Image-2020-02-13-at-02-18-23.jpg)

## Instalação

### Após clonar o projeto, instalar as dependências

```
yarn
```

### Então rodar o camando para iniciar o aplicativo no emulador ou Smartphone

- Android:

```
yarn android
```

- IOS:

```
yarn ios
```

## Estrutura do Projeto

- src
  - **assets**: imagens, logos, etc
  - **components**: componentes isolados
  - **config**: arquivos de configuração
  - **pages**: páginas da aplicação
  - **routes**: rotas da aplicação
  - **services**: comunicação com a api
  - **shared**: pedaços de código reaproveitáveis
  - **store**: store com sagas e redux
    - **ducks**: reducers para controlar o estado da aplicação
    - **sagas**: sagas para lidar com efeitos colaterais
  - **index.js**: arquivo principal

## API Utilizadas

- [Google Maps API](https://cloud.google.com/maps-platform/)
- [The Movie DB](https://www.themoviedb.org/?language=pt-BR)
