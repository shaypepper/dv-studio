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

export const classifiedStatements = {
  callToAction: 'productive',
  acknowledgingInjustice: 'productive',
  blackLivesMatter: 'productive',
  commendingTheDemonstrators: 'productive',
  denouncingTheMovement: 'problematic',
  inflammatory: 'problematic',
  invalidating: 'problematic',
  expectingForgiveness: 'problematic',
  violentProtestorsAreTheProblem: 'problematic',
  sanctimoniousTrivialities: 'problematic',
  goodCopsBadCops: 'problematic',
  theAnswerIsJesus: 'problematic',
  fightAgainstInjustice: 'productive',
  passTheMic: 'productive',
  importanceOfDiversity: 'productive',
  encouragingEmpathy: 'productive',
  absenceOfTension: 'problematic',
}

export const sentimentLabels = {
  callToAction: 'Call to action',
  acknowledgingInjustice: 'Acknowledging injustice',
  blackLivesMatter: 'Saying Black Lives Matter',
  commendingTheDemonstrators: 'Commending demonstrators',
  denouncingTheMovement: 'Denouncing the BLM movement',
  inflammatory: 'Inflammatory',
  invalidating: 'Invalidating',
  expectingForgiveness: 'Expecting forgiveness',
  violentProtestorsAreTheProblem: 'Violent protesters are the problem',
  sanctimoniousTrivialities: 'Sanctimonious trivialities',
  goodCopsBadCops: 'Most cops are good',
  theAnswerIsJesus: 'The only answer is Jesus',
  fightAgainstInjustice: 'Call to fight against injustice',
  passTheMic: 'Passing the mic',
  importanceOfDiversity: 'Call out the importance of diversity',
  encouragingEmpathy: 'Encouraging empathy',
  absenceOfTension: 'Calling for the absence of tension',
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
    minutes: [
      { type: 'sermon', length: 45 },
      { type: 'funeral', length: 25 },
      { type: 'youtube', length: 7.5 },
    ],
    denomination: 'Non-denominational',
    fastFacts: {
      'JIST OF THE SERMON':
        'Reduce violence by having an empathetic ear and inviting people to know Jesus',
      'TOP SENTIMENT': 'Invalidation',
      CONNECTION: 'Also preached at the memorial for the slain officer Michael Smith',
      'ALSO NOTABLE':
        'Spent time explaining the meaning of "Black Lives Matter" in both sermon and eulogy with a room full of police',
      'TASTELESS & INFALMMATORY':
        'When speaking of the shooter that killed five police, he went out of his way to emphatically say "I\'m glad police used deadly force on him." ',
    },
    sentiments: {
      callToAction: 1,
      acknowledgingInjustice: 5,
      blackLivesMatter: 3,
      commendingTheDemonstrators: 1,
      denouncingTheMovement: 1,
      inflammatory: 1,
      invalidating: 1,
      expectingForgiveness: 1,
      violentProtestorsAreTheProblem: 1,
      sanctimoniousTrivialities: 2,
      goodCopsBadCops: 1,
      theAnswerIsJesus: 2,
      fightAgainstInjustice: 1,
    },
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
    minutes: [{ type: 'panel', length: 58 }],
    denomination: 'SBC',
    fastFacts: {
      'JIST OF THE PANEL': 'Racism is real. Racism is instiutional. Listen to black people.',
      'TOP SENTIMENTS':
        'Majority of the time was spent either literally listening to black people from the congregation and imploring people to acknowledge systemic racism that benefits white Americans and harms black Americans.',
      NOTABLE: 'Expressed that this would make the congregation uncomfortable',
      INFLUENCE:
        "Chandler is the head of a large network of reformed churches. So many people listen to his sermons that he has a disclaimer reminding people that listening to sermonns doesn't replace membership in a local church.",
    },
    sentiments: {
      acknowledgingInjustice: 7,
      passTheMic: 37,
      importanceOfDiversity: 1,
      encouragingEmpathy: 1,
      invalidating: 1,
    },
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
    minutes: [{ type: 'sermon', length: 36 }],
    denomination: 'Non-denominational',
    fastFacts: {
      'JIST OF THE SERMON': 'Jesus is the answer to stop the violence',
      'TOP SENTIMENTS': 'As MLK would say, "Pious irrelevancies and sanctimonious trivialities."',
      NOTABLE:
        'Covenant Church is the only one of our list that has a majority BIPOC people in senior leadership. Speaking of the diversity within the congregation, Hayes said, "...The church remains, for the most part, stodgy and segregated covenant. You are the exception. You are the one out of thousands where this happens that you see around you."',
      INFLUENCE:
        'Mike Hayes has since left Covenant Church to begin a new denomination called Churches in Covenant',
      STRANGE:
        'Hayes spent a strangely long part of the intro talking about the dream vacation he had left to be at the church that morning. He also said, "Almost 50 years ago, President Kennedy was assassinated in the streets of Dallas. Why? Because the devil wants to mark a city of destiny with a smear of shame."',
    },
    sentiments: {
      sanctimoniousTrivialities: 1,
      callToAction: 3,
      encouragingEmpathy: 1,
      goodCopsBadCops: 1,
      absenceOfTension: 1,
      importanceOfDiversity: 1,
    },
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
    fastFacts: {
      'JIST OF THE PANEL':
        'Healing America requires strong leadership ("As the leader goes, so goes the people") and prayer.',
      'TOP SENTIMENTS': 'As MLK would say, "Pious irrelevancies and sanctimonious trivialities."',
      NOTABLE: 'Two of the police officers killed were honored in memorials at Prestonwood',
      INFLUENCE:
        'Prestonwood is so large that it is affectionately called "Six Flags over Jesus" in Dallas',
      SUBSTANCE:
        'This sermon said nothing. It was meant to be about the state of the country after the tragedies and it was so generic it could have been preached at any time. ',
    },
    sentiments: { theAnswerIsJesus: 3, encouragingEmpathy: 1 },
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
    minutes: [{ type: 'video', length: 2.5 }],
    denomination: 'SBC',
    fastFacts: {
      'JIST OF THE VIDEO': 'Pray for healing',
      'TOP SENTIMENTS': 'As MLK would say, "Pious irrelevancies and sanctimonious trivialities."',
      CONTEXT:
        'That Sunday was one of the few times that the Sunday sermon did not make it onto YouTube. A short video with a prayer is the only publicaly available video Young published at that time.',
      INFLUENCE:
        'Fellowship Church is the largest church of these six. Ed Young also runs an organization where he sells sermon outlines and other ministry resources.',
    },
    sentiments: { theAnswerIsJesus: 1, absenceOfTension: 3 },
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
    minutes: [{ type: sermon, length: 0 }],
    denomination: 'SBC',
    fastFacts: {
      'JIST OF THE SERMON': "Jeffress chose not to give a sermon about the week's events.",
      NOTABLE: 'First Baptist Dallas is about half a mile from the shooting.',
      INFLUENCE: 'Robert Jeffress is a frequent contributor on Fox and often praises Donald Trump.',
    },
    sentiments: {},
  },
}

export default churches
