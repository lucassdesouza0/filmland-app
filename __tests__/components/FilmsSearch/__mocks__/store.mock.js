export const storeEmpty = {
  films: {
    search: '',
    films: [],
    filmsSaved: [],
    loading: false,
    fail: false,
    modal: false,
    modalData: [],
  },
};

export const storeWithOneFilm = {
  films: {
    search: '',
    films: [
      {
        popularity: 35.273,
        vote_count: 13502,
        video: false,
        poster_path: '/dr6x4GyyegBWtinPBzipY02J2lV.jpg',
        id: 272,
        adult: false,
        backdrop_path: '/9myrRcegWGGp24mpVfkD4zhUfhi.jpg',
        original_language: 'en',
        original_title: 'Batman Begins',
        genre_ids: [28, 80, 18],
        title: 'Batman Begins',
        vote_average: 7.6,
        overview:
          'Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.',
        release_date: '2005-06-10',
      },
      {
        popularity: 20.915,
        vote_count: 4374,
        video: false,
        poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
        id: 268,
        adult: false,
        backdrop_path: '/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg',
        original_language: 'en',
        original_title: 'Batman',
        genre_ids: [28, 14],
        title: 'Batman',
        vote_average: 7.1,
        overview:
          "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
        release_date: '1989-06-23',
      },
    ],
    filmsSaved: [],
    loading: false,
    fail: false,
    modal: false,
    modalData: [],
  },
};

export const storeLoadingList = {
  films: {
    search: '',
    films: [],
    filmsSaved: [],
    loading: true,
    fail: false,
    modal: false,
    modalData: [],
  },
};

export const storeSavedFilms = {
  films: {
    search: '',
    films: [],
    filmsSaved: [
      {
        popularity: 35.273,
        vote_count: 13502,
        video: false,
        poster_path: '/dr6x4GyyegBWtinPBzipY02J2lV.jpg',
        id: 272,
        adult: false,
        backdrop_path: '/9myrRcegWGGp24mpVfkD4zhUfhi.jpg',
        original_language: 'en',
        original_title: 'Batman Begins',
        genre_ids: [28, 80, 18],
        title: 'Batman Begins',
        vote_average: 7.6,
        overview:
          'Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.',
        release_date: '2005-06-10',
      },
      {
        popularity: 20.915,
        vote_count: 4374,
        video: false,
        poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
        id: 268,
        adult: false,
        backdrop_path: '/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg',
        original_language: 'en',
        original_title: 'Batman',
        genre_ids: [28, 14],
        title: 'Batman',
        vote_average: 7.1,
        overview:
          "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
        release_date: '1989-06-23',
      },
    ],
    loading: false,
    fail: false,
    modal: false,
    modalData: [],
  },
};
