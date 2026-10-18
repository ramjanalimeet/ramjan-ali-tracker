/** "Where I work" cards on /locations: where US homeowners look, plus a note for businesses elsewhere. */
export const REGIONS = [
  {
    id: "google",
    name: "Google Maps and Search",
    text: "The map pack and organic results, where most US homeowners start looking for a contractor.",
  },
  {
    id: "apple-bing",
    name: "Apple Maps, Bing and AI assistants",
    text: "Apple Business Connect and Bing Places, which feed Siri, Apple Maps and Microsoft Copilot, kept accurate alongside Google.",
  },
  {
    id: "directories",
    name: "US directories",
    text: "Yelp, Angi, BBB, Nextdoor, Houzz and your trade's own directories, with the same details everywhere.",
  },
  {
    id: "outside-us",
    name: "Outside the US",
    text: "My focus is US home service businesses. If you work in Canada, the UK or Australia, the same playbook applies with local directories. Ask on a call.",
  },
] as const;
