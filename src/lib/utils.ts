import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SCRAPER_CARDS_DB = [
  {
    id: '1',
    title: 'Concerts in Malaga',
    description: 'Scraping concerts from Mas Malaga website',
    running: true,
    web: 'https://www.malagamas.com/events',
    script: '<script> const el = document.querySelector(".concert")</script>',
    path: '/api/malaga-concert',
    output:
      "[{'date': '01/01/2026', 'name':'Bryan Adams'}, {'date': '02/01/2026', 'name':'El Kanka'}]",
  },
  {
    id: '2',
    title: 'Tech Events Madrid',
    description: 'Crawling Meetup for tech events in Madrid area',
    running: false,
    web: 'https://www.meetup.com/es/tech-madrid/events',
    script: '<script>const el = document.querySelector(".event-card")</script>',
    path: '/api/madrid-tech',
    output:
      "[{'date': '03/01/2026', 'name':'AI & ML Meetup'}, {'date': '04/01/2026', 'name':'Frontend Night'}]",
  },
  {
    id: '3',
    title: 'Art Exhibitions Barcelona',
    description: 'Parsing museum sites for current exhibitions',
    running: true,
    web: 'https://www.artbarcelona.es/exhibitions',
    script: '<script>const el = document.querySelector(".exhibition")</script>',
    path: '/api/barcelona-art',
    output:
      "[{'date': '05/01/2026', 'name':'Picasso Retrospective'}, {'date': '06/01/2026', 'name':'Modern Art Now'}]",
  },
  {
    id: '4',
    title: 'Startup Pitches Valencia',
    description: 'Fetching startup pitch events from eventbrite.es',
    running: false,
    web: 'https://www.eventbrite.es/d/spain--valencia/startup/',
    script: '<script>const el = document.querySelector(".event-card__title")</script>',
    path: '/api/valencia-startups',
    output:
      "[{'date': '07/01/2026', 'name':'HealthTech Demo'}, {'date': '08/01/2026', 'name':'Green Startups Pitch'}]",
  },
  {
    id: '5',
    title: 'Outdoor Yoga Seville',
    description: 'Collecting park yoga sessions from local blogs',
    running: true,
    web: 'https://sevillayoga.blog/sessions',
    script: '<script>const el = document.querySelector(".yoga-session")</script>',
    path: '/api/seville-yoga',
    output:
      "[{'date': '09/01/2026', 'name':'Sunrise Yoga'}, {'date': '10/01/2026', 'name':'Evening Flow in the Park'}]",
  },
]
