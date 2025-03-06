// src/data/eventData.js
export const eventData = [
    {
      id: 1,
      title: "Opening Ceremony",
      date: "April 14, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "Main Auditorium",
      description: "Grand Inauguration of TECH FEST. Welcome address by University Leadership, Speech by Sponsors and Collaborators, Event Timeline Reveal.",
      category: "Ceremony",
      color: "#00BFFF", // Blue
      status: "Upcoming",
      registration: false,
      icon: "🏁",
      expectations: [
        "Official launch of Tech Fest '25",
        "Welcome addresses from department leadership",
        "Insights into upcoming events and schedule",
        "Networking opportunity with industry partners",
        "Introduction to all CSIT clubs and their initiatives"
      ]
    },
    {
      id: 2,
      title: "Koderz Kombat Round 1",
      date: "April 14-18, 2025",
      time: "Various Times",
      venue: "CSIT Labs",
      description: "All students of CS&IT Department will Participate in Koderz Kombat Round 1. Winners from each Batch will Qualify for Final Round.",
      category: "Competition",
      color: "#EB5757", // Red
      status: "Upcoming",
      registration: true,
      organizer: "Koderz Club",
      icon: "💻",
      expectations: [
        "Challenging algorithmic problems to solve",
        "Competitive coding environment",
        "Opportunity to showcase programming skills",
        "Chance to qualify for the final round",
        "Recognition among peers and department faculty"
      ]
    },
    {
      id: 9,
      title: "Web Kode",
      date: "April 22, 2025",
      time: "9:00 AM - 5:00 PM",
      venue: "CSIT Labs",
      description: "Website Development and Idea Pitching Competition.",
      category: "Competition",
      color: "#2D9CDB", // Blue
      status: "Upcoming",
      registration: true,
      icon: "🌐",
      expectations: [
        "Create responsive and innovative websites",
        "Learn modern web development technologies",
        "Pitch your web application idea to judges",
        "Work in teams to solve real-world problems",
        "Gain feedback from industry professionals"
      ]
    },
    {
      id: 13,
      title: "Closing Ceremony",
      date: "April 25, 2025",
      time: "4:00 PM - 6:00 PM",
      venue: "Main Auditorium",
      description: "Closing and Award Distribution Ceremony of TECH FEST. Welcome address by University Leadership, Thank you Video for Sponsors and Collaborators, Event Highlights.",
      category: "Ceremony",
      color: "#00BFFF", // Blue
      status: "Upcoming",
      registration: false,
      icon: "🎉",
      expectations: [
        "Award distribution for all competitions",
        "Recognition of outstanding participants",
        "Closing addresses from faculty and sponsors",
        "Highlights reel from all Tech Fest events",
        "Networking opportunity with industry professionals"
      ]
    }
  ];
  
  // Categories for filtering
  export const eventCategories = [
    { label: "All", value: "all" },
    { label: "Ceremony", value: "Ceremony" },
    { label: "Competition", value: "Competition" }
  ];