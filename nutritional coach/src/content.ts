// All public-site copy lives here so it can be edited without touching layout code.
// Anything wrapped in [square brackets] is a placeholder: replace it with real details
// before publishing. Never publish invented credentials. UK spelling throughout.

export const coach = {
  name: 'Brianna Gauna',
  firstName: 'Brianna',
  brand: 'Brianna Gauna Coaching',
  postNominals: 'MA, AT, ATC, PN1-NC',
  tagline: 'Nutrition coaching for people who train',
  location: 'Based in Cambridge · Coaching online across the UK',
  email: '[hello@yourdomain.co.uk]',
  // Paste a Calendly / Cal.com / Acuity link here. Empty = the contact form is used instead.
  bookingUrl: '',
  // Files in /public are served from the site root.
  headshot: '/brianna.jpg',
  photo: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
  linkedIn: 'https://www.linkedin.com/in/brianna-gauna/',
}

export const hero = {
  kicker: 'Habit-based nutrition coaching',
  title: 'Fuel that fits your training,',
  titleAccent: 'and the rest of your life.',
  lede: 'Practical, one-to-one coaching from a Precision Nutrition certified coach and certified athletic trainer with 8+ years in sports medicine. For athletes and active people who want steadier energy, better recovery, and eating habits that hold up through busy weeks, shift work, and setbacks.',
  primaryCta: 'Book a free discovery call',
  secondaryCta: 'How coaching works',
}

// Source: LinkedIn profile (Oct 2026). Keep in sync if roles change.
export const about = {
  heading: `Hi, I'm Brianna.`,
  paragraphs: [
    `I'm a certified athletic trainer: a sports medicine professional trained in injury prevention, emergency care, and rehabilitation for active people. I've spent more than eight years keeping people healthy and performing, from university athletes to professional footballers to military personnel.`,
    `I started as a graduate assistant athletic trainer at Wayne State University, then worked with Henry Ford Health as the athletic trainer for Detroit City Football Club. Since 2022 I've been a tactical athletic trainer with a human performance team in Europe, supporting people whose jobs depend on staying fit, resilient, and ready.`,
    `Across all of it, I kept seeing the same thing: training plans are carefully built, but fuelling is left to chance. That's why I trained as a Precision Nutrition certified nutrition coach. I coach nutrition the way I'd approach a return-to-play plan. We start where you are, pick one meaningful focus each week, practise a few small actions that fit your schedule, and adjust based on how things actually go. No meal plans, no rules. And when something needs clinical input, I'll work with your clinician rather than guess.`,
  ],
  credentials: [
    { label: 'Precision Nutrition Level 1 Certified Nutrition Coach', detail: 'Precision Nutrition, 2026' },
    { label: 'Certified Athletic Trainer (ATC)', detail: 'Board of Certification for the Athletic Trainer, 2017' },
    { label: 'Licensed Athletic Trainer (AT)', detail: 'State of Michigan, 2017' },
    { label: 'Performance Enhancement Specialist (PES)', detail: 'National Academy of Sports Medicine, 2021' },
    { label: 'CrossFit Level 2 Trainer', detail: 'CrossFit, 2024' },
    { label: 'MA, Sports Administration', detail: 'Wayne State University, 2019' },
    { label: 'BS, Athletic Training', detail: 'Western Michigan University, 2016' },
    { label: 'Project Management Professional (PMP)', detail: 'Project Management Institute, 2024' },
    { label: 'Basic Life Support (BLS)', detail: 'American Red Cross, 2022' },
  ],
  experience: [
    { role: 'Tactical Athletic Trainer', org: 'Human performance programme, Europe', dates: '2022 – present' },
    { role: 'Athletic Trainer, Detroit City FC', org: 'Henry Ford Health', dates: '2019 – 2020' },
    { role: 'Graduate Assistant Athletic Trainer', org: 'Wayne State University', dates: '2017 – 2019' },
  ],
}

export const audiences = [
  { title: 'Athletes in training', body: 'Fuel sessions, recover between them, and stop guessing what to eat before match day or a big lift.' },
  { title: 'Active adults', body: 'You train consistently, but meals are an afterthought. Build a routine that keeps up with you.' },
  { title: 'Shift and irregular schedules', body: 'Flexible options instead of a fixed meal clock, for weeks that never look the same twice.' },
  { title: 'Returning from injury', body: 'Nutrition habits that support your rehab, coordinated with your physio or treating clinician.' },
]

export const steps = [
  { number: '01', title: 'Free discovery call', body: '20 minutes to talk about your training, your week, and what you want to change. No pressure to sign up.' },
  { number: '02', title: 'First session', body: 'We map your schedule, sport, and current habits, then agree on one "big rock" to focus on first.' },
  { number: '03', title: 'Weekly actions', body: 'Two or three small, specific actions each week, written up so you always know what you are practising.' },
  { number: '04', title: 'Check-ins', body: 'Short regular conversations about what worked and what got in the way. The programme adjusts to you, not the other way round.' },
]

// PRICING: set real prices before publishing. Leave `price` as '' to show "Pricing discussed on your discovery call".
export const packages = [
  {
    name: 'Foundations',
    length: '12-week programme',
    price: '[£000]',
    unit: 'total',
    summary: 'A structured start for building your core fuelling habits.',
    features: ['60-minute first session', 'Weekly 30-minute check-ins', 'Written weekly focus and actions', 'Message support between sessions'],
    featured: true,
  },
  {
    name: 'Ongoing coaching',
    length: 'Rolling monthly',
    price: '[£000]',
    unit: 'per month',
    summary: 'Steady accountability once the foundations are in place.',
    features: ['Fortnightly 30-minute check-ins', 'Updated weekly actions', 'Message support', 'Cancel any time'],
    featured: false,
  },
]

export const foundingOffer = {
  title: 'Founding client spots',
  body: `I'm taking on a small number of founding clients at a reduced rate. In return, I'll ask for honest feedback along the way and, if you're happy, a short testimonial at the end.`,
  spots: '[5] spots available',
}

export const principles = [
  { title: 'Person first', body: 'Your sport, schedule, preferences, and history shape the programme.' },
  { title: 'Small and specific', body: 'Actions small enough to do this week, meaningful enough to matter.' },
  { title: 'Evidence-informed', body: 'Grounded in sports medicine and behaviour-change research, not trends.' },
  { title: 'Within scope', body: 'Coaching supports habits. It does not diagnose or treat medical conditions.' },
]

export const faqs = [
  { q: 'What is an athletic trainer?', a: `In the US, athletic trainers are licensed healthcare professionals who specialise in preventing, recognising, and rehabilitating injuries in active people. It's the closest thing to a sports therapist and physio rolled into one, and it means I understand how training, recovery, and injury fit together.` },
  { q: 'Do you give meal plans?', a: `No. Rigid plans rarely survive a real week. Instead you get a clear weekly focus and a few practical actions, adjusted as we learn what works for you.` },
  { q: 'Is coaching online or in person?', a: `Sessions are by video call, so you can work with me from anywhere in the UK. [Add in-person availability around Cambridge if you offer it.]` },
  { q: 'I have an injury or medical condition. Can you help?', a: `I can help you build supportive nutrition habits, and I'll work alongside your GP, physio, or dietitian. I don't diagnose or treat medical conditions, and I'll always tell you when something needs a clinician.` },
  { q: 'Do I need to track calories or macros?', a: `Not unless it genuinely helps you. Most clients make progress by focusing on routines: what to eat around training, how to plan for busy days, and how to recover well.` },
  { q: 'What happens on the free discovery call?', a: `We talk about your training and what you'd like to change, I explain how coaching works, and you decide whether it feels like a good fit. That's it.` },
]

export const closing = {
  title: 'Ready to make fuelling the easy part?',
  body: 'Book a free 20-minute discovery call. Tell me about your training and your week, and we will work out a sensible first step together.',
}

// Short introductions shown at the top of each page.
export const pageIntros = {
  about: {
    kicker: 'About',
    title: 'Sports medicine experience, applied to everyday fuelling.',
    lede: 'Eight years as an athletic trainer taught me how people actually change their habits: one small, well-chosen step at a time.',
  },
  offer: {
    kicker: 'What I offer',
    title: 'Coaching that fits around your training.',
    lede: 'One-to-one nutrition coaching by video call. Clear weekly focus, practical actions, and regular check-ins to keep things moving.',
  },
  testimonials: {
    kicker: 'Testimonials',
    title: 'What clients say.',
    lede: 'Real feedback from real clients, shared with their permission.',
  },
  faq: {
    kicker: 'FAQ',
    title: 'Good questions.',
    lede: `If yours isn't here, ask it on a free discovery call.`,
  },
  discovery: {
    kicker: 'Free discovery call',
    title: `Let's talk about your training.`,
    lede: 'A relaxed 20-minute video call to see whether coaching is right for you. No preparation needed and no pressure to sign up.',
  },
}

export const homeIntro = {
  body: `Certified athletic trainer, Precision Nutrition coach, and former athletic trainer to professional footballers. I help active people build fuelling habits that actually last.`,
}

// TESTIMONIALS: add real ones only, with the client's written permission.
// Use first name + initial (or initials only) unless the client asks otherwise.
// e.g. { quote: '...', name: 'Sarah K.', context: 'Amateur triathlete, Foundations programme' }
export const testimonials: { quote: string; name: string; context: string }[] = []

export const discoveryCall = {
  expect: [
    { title: 'Your training and your week', body: 'What you do, when you do it, and what a normal day of eating looks like.' },
    { title: 'What you want to change', body: 'Energy, recovery, performance, routine. Whatever matters most to you right now.' },
    { title: 'How coaching would work', body: 'What a first session looks like, the coaching options, and pricing.' },
    { title: 'Whether it feels right', body: 'You decide afterwards. No hard sell, no follow-up pressure.' },
  ],
}

// DESIGN: the look visitors see. Options: 'sage' | 'performance' | 'clinical' | 'earth'.
// Preview the others with the switcher (shown in `npm run dev`, or add ?designs to the live URL).
export const siteDesign = 'sage'
