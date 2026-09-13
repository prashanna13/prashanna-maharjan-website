const withBaseUrl = (path) => {
  if (!path) {
    return ''
  }

  // Keep external URLs unchanged
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  // Remove leading slashes
  const cleanPath = path.replace(/^\/+/, '')

  // Get Vite base path
  const baseUrl = import.meta.env.BASE_URL || '/'

  // Encode each folder/file name separately
  const encodedPath = cleanPath
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/')

  // Remove trailing slash from base path
  const cleanBaseUrl = baseUrl.replace(/\/+$/, '')

  // Build final URL without a template literal
  return cleanBaseUrl + '/' + encodedPath
}

const projectData = [
  {
    slug: 'glam-by-madhusa',
    title: 'Glam by Madhusa',
    category: 'Web Experience',
    discipline: 'Build',
    year: '2026',
    summary:
      'A polished beauty and glam experience designed for discovery and conversion.',
    description:
      'A live web experience created for Glam by Madhusa, combining expressive presentation with a clear booking journey.',
    image: 'glambymadhusa.png',
    externalUrl: 'https://glam-by-madhusa.vercel.app/',
    gallery: [],
    technologies: [
      'React',
      'Interface Design',
      'Frontend Development'
    ],
    credits: [
      {
        label: 'Role',
        value: 'Frontend Developer'
      }
    ]
  },

  {
    slug: 'aroco-fitness',
    title: 'Aroco Fitness',
    category: 'Web Experience',
    discipline: 'Build',
    year: '2026',
    summary:
      'A focused fitness platform built around energy, clarity and action.',
    description:
      'A live fitness website designed to make the brand, services and next step feel immediate and motivating.',
    image: 'aroco.jpg',
    externalUrl: 'https://aroco-fitness.vercel.app/',
    gallery: [],
    technologies: [
      'React',
      'UX Design',
      'Frontend Development'
    ],
    credits: [
      {
        label: 'Role',
        value: 'Frontend Developer'
      }
    ]
  },

  {
    slug: 'wedding',
    title: 'Sailesh Weds Rusha',
    category: 'Wedding Photography',
    discipline: 'Frame',
    year: '2026',
    summary:
      'A wedding story told through candid gestures, celebration and quiet in-between moments.',
    description:
      'A collection of wedding photographs focused on connection, movement and the atmosphere of the day.',
    image: 'sailesh weds rusha/sailesh weds rusha (1).jpg',
    gallery: [
      'sailesh weds rusha/sailesh weds rusha (2).jpg',
      'sailesh weds rusha/sailesh weds rusha (3).jpg',
      'sailesh weds rusha/sailesh weds rusha (6).jpg',
      'sailesh weds rusha/sailesh weds rusha (8).jpg',
      'sailesh weds rusha/sailesh weds rusha (9).jpg',
      'sailesh weds rusha/sailesh weds rusha (10).jpg'
    ],
    landscapeGallery: [
      'sailesh weds rusha/sailesh weds rusha (4).jpg',
      'sailesh weds rusha/sailesh weds rusha (5).jpg',
      'sailesh weds rusha/sailesh weds rusha (7).jpg',
      'sailesh weds rusha/sailesh weds rusha (11).jpg'
    ],
    technologies: [
      'Photography',
      'Wedding',
      'Visual Storytelling'
    ],
    credits: [
      {
        label: 'Role',
        value: 'Photographer'
      }
    ]
  },

  {
    slug: 'analog',
    title: 'Analog',
    category: 'Analog Photography',
    discipline: 'Frame',
    year: '2026',
    summary:
      'Unscripted frames gathered from streets, corners and everyday movement.',
    description:
      'A street photography series observing light, people and the small scenes that shape a city.',
    image: 'analog/1.JPG',
    gallery: [
      'analog/2.JPG'
    ],
    landscapeGallery: [
      'analog/3.JPG',
      'analog/4.JPG',
      'analog/5.JPG',
      'analog/6.JPG'
    ],
    technologies: [
      'Photography',
      'Street',
      'Analog'
    ],
    credits: [
      {
        label: 'Role',
        value: 'Photographer'
      }
    ]
  },

  {
    slug: 'street',
    title: 'Street',
    category: 'Street Photography',
    discipline: 'Frame',
    year: '2026',
    summary:
      'Ritual, place and living heritage documented with a patient eye.',
    description:
      'A visual record of cultural spaces, gestures and traditions rooted in the places where they live.',
    image: 'bhaktapur/1.jpg',
    gallery: [
      'bhaktapur/3.jpg',
      'bhaktapur/4.jpg',
      'bhaktapur/5.jpg',
      'bhaktapur/7.jpg',
      'bhaktapur/8.jpg',
      'bhaktapur/9.jpg'
    ],
    landscapeGallery: [
      'bhaktapur/2.jpg',
      'bhaktapur/6.jpg',
      'bhaktapur/10.jpg',
      'bhaktapur/11.jpg'
    ],
    technologies: [
      'Photography',
      'Street',
      'Documentary'
    ],
    credits: [
      {
        label: 'Role',
        value: 'Photographer'
      }
    ]
  },

  {
    slug: 'mato',
    title: 'Mato',
    category: 'Brand',
    discipline: 'Motion',
    year: '2026',
    summary:
      'A quiet documentary about clay, labor, ritual and the rhythm of making.',
    description:
      'A filmic study of clay, process and the hands that turn raw earth into something useful.',
    image: 'mato/DSC09487 copy.jpg',
    gallery: [
      'mato/_DSC6510.jpg',
      'mato/_DSC6515.jpg',
      'mato/_DSC6519.jpg',
      'mato/_DSC6522.jpg',
      'mato/_DSC6528.jpg',
      'mato/_DSC6532.jpg',
      'mato/_DSC6536.jpg',
      'mato/_DSC6540.jpg',
      'mato/_DSC7935.jpg',
      'mato/_DSC7998.jpg',
      'mato/_DSC8106.jpg'
    ],
    landscapeGallery: [
      'mato/_DSC7928.jpg'
    ],
    technologies: [
      'Photography',
      'Videography',
      'Editing'
    ],
    credits: [
      {
        label: 'Role',
        value: 'Videographer / Editor'
      }
    ]
  },

  {
    slug: 'ashapuri',
    title: 'Ashapuri',
    category: 'Brand Series',
    discipline: 'Frame',
    year: '2026',
    summary:
      'A portrait series shaped by place, expression and the feeling of a shared moment.',
    description:
      'An intimate portrait collection made around natural light, honest gestures and a strong sense of place.',
    image: 'ashapuri/DSC09575.jpg',
    gallery: [
      'ashapuri/_DSC8231.jpg',
      'ashapuri/_DSC8259.jpg',
      'ashapuri/_DSC8267.jpg',
      'ashapuri/_DSC9600.jpg'
    ],
    landscapeGallery: [
      'ashapuri/_DSC9593.jpg'
    ],
    technologies: [
      'Brand',
      'Editor'
    ],
    credits: [
      {
        label: 'Role',
        value: 'Photographer'
      }
    ]
  },

  {
    slug: 'culture',
    title: 'Culture',
    category: 'Cultural Photography',
    discipline: 'Frame',
    year: '2026',
    summary:
      'A documentary series shaped by ritual, place and the people who keep culture moving.',
    description:
      'A cultural photography collection observing tradition, community and the details that give each place its character.',
    image: 'culture/DSC_1764.jpg',
    gallery: [
      'culture/DSC_1773.jpg',
      'culture/DSC_1781.jpg',
      'culture/DSC_2248.jpg',
      'culture/DSC_2276.jpg',
      'culture/DSC_2299.jpg',
      'culture/DSC_2326.jpg',
      'culture/DSC_2370.jpg',
      'culture/DSC_2482.jpg',
      'culture/DSC_2495.jpg',
      'culture/DSC_2509.jpg',
      'culture/DSC_8834.jpg',
      'culture/DSC_8859.jpg'
    ],
    technologies: [
      'Photography',
      'Culture',
      'Documentary'
    ],
    credits: [
      {
        label: 'Role',
        value: 'Photographer'
      }
    ]
  },

  {
    slug: 'sanish-weds-shahista',
    title: 'Sanish Weds Shahista',
    category: 'Wedding Photography',
    discipline: 'Frame',
    year: '2026',
    summary:
      'A celebration captured through family, ceremony and the energy of a wedding day.',
    description:
      'A wedding photography collection focused on candid emotion, traditional details and joyful celebration.',
    image: 'sanish weds shahista/sanish weds shahista (1).jpg',
    gallery: [
      'sanish weds shahista/sanish weds shahista (2).jpg',
      'sanish weds shahista/sanish weds shahista (4).jpg',
      'sanish weds shahista/sanish weds shahista (5).jpg',
      'sanish weds shahista/sanish weds shahista (6).jpg',
      'sanish weds shahista/sanish weds shahista (7).jpg'
    ],
    landscapeGallery: [
      'sanish weds shahista/sanish weds shahista (3).jpg',
      'sanish weds shahista/sanish weds shahista (8).jpg'
    ],
    technologies: [
      'Photography',
      'Wedding',
      'Visual Storytelling'
    ],
    credits: [
      {
        label: 'Role',
        value: 'Photographer'
      }
    ]
  }
]

export const projects = projectData.map((project) => ({
  ...project,

  image: withBaseUrl(project.image),

  gallery: Array.isArray(project.gallery)
    ? project.gallery.map(withBaseUrl)
    : [],

  landscapeGallery: Array.isArray(project.landscapeGallery)
    ? project.landscapeGallery.map(withBaseUrl)
    : []
}))

export const disciplines = [
  {
    id: 'build',
    label: '01 — BUILD',
    title: 'Frontend Development',
    blurb:
      'React, JavaScript, HTML, CSS interface systems and immersive web experiences.',
    image:
      'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80'
  },

  {
    id: 'frame',
    label: '02 — FRAME',
    title: 'Photography',
    blurb:
      'Portraiture, weddings, culture, documentary, editorial and event work with a human-centered eye.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
  },

  {
    id: 'motion',
    label: '03 — MOTION',
    title: 'Videography',
    blurb:
      'Commercials and documentaries shaped by rhythm, atmosphere and story. Wedding shoots and events.',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80'
  }
]