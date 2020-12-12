import { sermon } from './Sections/watermarkSermon'

export enum ChurchKeys {
  Watermark = 'watermark',
  TVC = 'tvc',
  FBC = 'fbc',
  Prestonwood = 'prestonwood',
  Covenant = 'covenant',
  Fellowship = 'fellowship',
}
export const churches = {
  [ChurchKeys.Watermark]: {
    name: 'Watermark Church',
    key: ChurchKeys.Watermark,
    pastor: 'Todd Wagner',
    twitterFollowers: 19000,
    attendees: 8876,
    city: 'Dallas, TX',
    podcastReviews: 254,
    problematicStatements: {
      radical: true,
    },
    notAsProblematicStatements: {
      blackLivesMatter: true,
    },
    minutes: [
      { type: 'sermon', length: 30 },
      { type: 'funeral', length: 15 },
    ],
    denomination: 'Non-denominational',
  },
  [ChurchKeys.TVC]: {
    name: 'The Village Church',
    key: ChurchKeys.TVC,
    pastor: 'Matt Chandler',
    twitterFollowers: 417500,
    attendees: 10156,
    city: 'Dallas, TX',
    podcastReviews: 2200,
    problematicStatements: {
      radical: true,
    },
    notAsProblematicStatements: {
      blackLivesMatter: true,
    },
    minutes: [
      { type: 'panel', length: 42 },
      { type: 'sermon', length: 30 },
    ],
    denomination: 'SBC',
  },
  [ChurchKeys.FBC]: {
    key: ChurchKeys.FBC,
    name: 'First Baptist Dallas',
    pastor: 'Robert Jeffress',
    twitterFollowers: 114300,
    attendees: 2632,
    city: 'Dallas, TX',
    podcastReviews: 200,
    problematicStatements: {
      radical: true,
    },
    notAsProblematicStatements: {
      blackLivesMatter: true,
    },
    minutes: [{ type: sermon, length: 0 }],
    denomination: 'SBC',
  },
  [ChurchKeys.Covenant]: {
    key: ChurchKeys.Covenant,
    name: 'Covenant Church',
    pastor: 'Mike Hayes',
    twitterFollowers: 11500,
    attendees: 11000,
    city: 'Carrollton, TX',
    podcastReviews: 45,
    problematicStatements: {
      radical: true,
    },
    notAsProblematicStatements: {
      blackLivesMatter: true,
    },
    minutes: [{ type: 'sermon', length: 33 }],
    denomination: 'Non-denominational',
  },
  [ChurchKeys.Fellowship]: {
    key: ChurchKeys.Fellowship,
    name: 'Fellowship Church',
    pastor: 'Ed Young',
    twitterFollowers: 287600,
    attendees: 24162,
    city: 'Grapevine, TX',
    podcastReviews: 9,
    problematicStatements: {
      radical: true,
    },
    notAsProblematicStatements: {
      blackLivesMatter: true,
    },
    minutes: [{ type: 'video', length: 2.5 }],
    denomination: 'SBC',
  },
  [ChurchKeys.Prestonwood]: {
    key: ChurchKeys.Prestonwood,
    name: 'Prestonwood Baptist Church',
    pastor: 'Jarrett Stephens',
    twitterFollowers: 51700,
    attendees: 15815,
    city: 'Plano, TX',
    podcastReviews: 24,
    problematicStatements: {
      radical: true,
    },
    notAsProblematicStatements: {
      blackLivesMatter: true,
    },
    minutes: [{ type: sermon, length: 32 }],
    denomination: 'SBC',
  },
}

export default churches
