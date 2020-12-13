import { watermark as sermon } from './sermons'

export enum ChurchKeys {
  Watermark = 'watermark',
  TVC = 'tvc',
  FBC = 'fbc',
  Prestonwood = 'prestonwood',
  Covenant = 'covenant',
  Fellowship = 'fellowship',
  None = 'no-church',
}

export const churches = {
  [ChurchKeys.Watermark]: {
    name: 'Watermark Church',
    key: ChurchKeys.Watermark,
    pastor: 'Todd Wagner',
    twitterFollowers: 19000,
    churchTwitterFollowers: 16800,
    attendees: 8876,
    city: 'Dallas, TX',
    podcastReviews: 254,
    problematicStatements: {
      radical: 5,
    },
    notAsProblematicStatements: {
      blackLivesMatter: 2,
    },
    minutes: [
      { type: 'sermon', length: 45 },
      { type: 'funeral', length: 25 },
      { type: 'youtube', length: 7.5 },
    ],
    denomination: 'Non-denominational',
    fastFacts: [
      'The jist: Reduce violence by having an empathetic ear and inviting people to know Jesus',
      'Also preached at the memorial for the slain officer Michael Smith',
      'Notable: Spent time explaining the meaning of "Black Lives Matter" in both sermon and eulogy',
    ],
  },
  [ChurchKeys.TVC]: {
    name: 'The Village Church',
    key: ChurchKeys.TVC,
    pastor: 'Matt Chandler',
    twitterFollowers: 417500,
    churchTwitterFollowers: 16800,
    attendees: 10156,
    city: 'Dallas, TX',
    podcastReviews: 2200,
    problematicStatements: {
      radical: 3,
    },
    notAsProblematicStatements: {
      blackLivesMatter: 15,
    },
    minutes: [{ type: 'panel', length: 58 }],
    denomination: 'SBC',
  },
  [ChurchKeys.Covenant]: {
    key: ChurchKeys.Covenant,
    name: 'Covenant Church',
    pastor: 'Mike Hayes',
    twitterFollowers: 11500,
    churchTwitterFollowers: 5560,
    attendees: 11000,
    city: 'Carrollton, TX',
    podcastReviews: 45,
    problematicStatements: {
      radical: 7,
    },
    notAsProblematicStatements: {
      blackLivesMatter: 2,
    },
    minutes: [{ type: 'sermon', length: 36 }],
    denomination: 'Non-denominational',
  },

  [ChurchKeys.Prestonwood]: {
    key: ChurchKeys.Prestonwood,
    name: 'Prestonwood Baptist Church',
    pastor: 'Jarrett Stephens',
    twitterFollowers: 51700,
    churchTwitterFollowers: 11400,
    attendees: 15815,
    city: 'Plano, TX',
    podcastReviews: 24,
    problematicStatements: {
      radical: 1,
    },
    notAsProblematicStatements: {
      blackLivesMatter: 4,
    },
    minutes: [{ type: sermon, length: 32 }],
    denomination: 'SBC',
  },
  [ChurchKeys.Fellowship]: {
    key: ChurchKeys.Fellowship,
    name: 'Fellowship Church',
    pastor: 'Ed Young',
    twitterFollowers: 287600,
    churchTwitterFollowers: 12200,
    attendees: 24162,
    city: 'Grapevine, TX',
    podcastReviews: 9,
    problematicStatements: {
      radical: 4,
    },
    notAsProblematicStatements: {
      blackLivesMatter: 10,
    },
    minutes: [{ type: 'video', length: 2.5 }],
    denomination: 'SBC',
  },
  [ChurchKeys.FBC]: {
    key: ChurchKeys.FBC,
    name: 'First Baptist Dallas',
    pastor: 'Robert Jeffress',
    twitterFollowers: 114300,
    churchTwitterFollowers: 10900,
    attendees: 2632,
    city: 'Dallas, TX',
    podcastReviews: 200,
    problematicStatements: {},
    notAsProblematicStatements: {},
    minutes: [{ type: sermon, length: 0 }],
    denomination: 'SBC',
  },
}

export default churches
