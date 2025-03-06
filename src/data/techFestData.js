// src/data/techFestData.js
export const techFestData = {
  upcoming: {
    year: 2025,
    date: "April 15-22, 2025",
    status: "Coming Soon",
    description: "Get ready for the biggest tech event of 2025! Tech Fest '25 will showcase cutting-edge technology, innovations, and competitions from all CSIT clubs. This year's fest will feature hackathons, workshops, seminars, and exciting tech challenges."
  },
  past: [
    {
      year: 2024,
      theme: "Celebration of Technology & Innovation",
      description: "Tech Fest '24 brought together tech enthusiasts for two weeks of workshops, seminars, hands-on training, and competitions. Over 1,000 participants from various universities attended the event.",
      highlights: [
        "24-hour Hackathon with 50+ teams",
        "AI and ML Workshops",
        "Blockchain Development Competition",
        "Industry talks from leading tech companies"
      ],
      galleryImages: [
        "/placeholder-techfest-24-1.jpg",
        "/placeholder-techfest-24-2.jpg"
      ]
    },
    {
      year: 2023,
      theme: "Digital Transformation",
      description: "The inaugural Tech Fest showcased the talents and innovations of CSIT students across various technology domains. It laid the foundation for what would become an annual tradition of excellence.",
      highlights: [
        "Web Development Challenge",
        "Cybersecurity CTF Competition",
        "Startup Pitch Competition",
        "Gaming Tournament"
      ],
      galleryImages: [
        "/placeholder-techfest-23-1.jpg",
        "/placeholder-techfest-23-2.jpg"
      ]
    }
  ]
};

// Sample upcoming events data
export const upcomingEvents = [
  {
    id: 1,
    title: "Hackathon 2025",
    organizer: "Koderz Club",
    date: "April 15-16, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "CSIT Auditorium",
    description: "A 24-hour coding competition where teams will develop innovative solutions to real-world problems.",
    registration: "https://forms.example.com/hackathon2025",
    category: "Competition",
    status: "Coming Soon"
  },
  {
    id: 2,
    title: "AI Workshop Series",
    organizer: "AI Alliance",
    date: "April 17, 2025",
    time: "2:00 PM - 4:00 PM",
    venue: "Lab 3, CSIT Building",
    description: "Learn about the latest advancements in AI and machine learning through hands-on exercises.",
    registration: "https://forms.example.com/aiworkshop",
    category: "Workshop",
    status: "Coming Soon"
  },
  {
    id: 3,
    title: "Industry Talk: Future of Web3",
    organizer: "Ledger League",
    date: "April 18, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Seminar Hall",
    description: "Join industry experts as they discuss the future of blockchain technology and Web3 development.",
    registration: "https://forms.example.com/web3talk",
    category: "Seminar",
    status: "Coming Soon"
  }
];

// Sample organizing team data
export const organizingTeam = [
  {
    id: 1,
    name: "John Smith",
    role: "Chief Organizer",
    club: "CSIT Executive",
    photo: "/placeholder-person.png",
    linkedin: "https://linkedin.com/in/john-smith"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Events Coordinator",
    club: "Koderz Club",
    photo: "/placeholder-person.png",
    linkedin: "https://linkedin.com/in/sarah-johnson"
  },
  {
    id: 3,
    name: "Michael Zhang",
    role: "Technical Lead",
    club: "AI Alliance",
    photo: "/placeholder-person.png",
    linkedin: "https://linkedin.com/in/michael-zhang"
  },
  {
    id: 4,
    name: "Jessica Patel",
    role: "Marketing Head",
    club: "CyberSENTS",
    photo: "/placeholder-person.png",
    linkedin: "https://linkedin.com/in/jessica-patel"
  }
];