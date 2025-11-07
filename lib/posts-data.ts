// Type declaration for global posts data
declare global {
  var __POSTS_DATA__: {
    id: string;
    creatorName: string;
    creatorAvatar: string;
    content: string;
    imageUrl: string;
    likes: number;
    timestamp: string;
    isLiked: boolean;
  }[];
}

// Mock data generator
const generateMockPosts = (count: number) => {
  const posts = [];
  const creators = [
    { name: "Alex Chen", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Sarah Johnson", avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "Mike Williams", avatar: "https://i.pravatar.cc/150?img=3" },
    { name: "Emma Davis", avatar: "https://i.pravatar.cc/150?img=4" },
    { name: "Chris Martinez", avatar: "https://i.pravatar.cc/150?img=5" },
  ];

  const contentTemplates = [
    "Just dropped a new video! Check it out 🎥",
    "Behind the scenes of my latest photoshoot 📸",
    "Excited to share this with you all! ✨",
    "Working on something special... stay tuned! 👀",
    "Thank you all for the amazing support! 💙",
    "New content alert! Hope you enjoy this one 🔥",
    "Sharing some of my favorite moments from this week 🌟",
  ];

  for (let i = 0; i < count; i++) {
    const creator = creators[i % creators.length];

    posts.push({
      id: `post-${i + 1}`,
      creatorName: creator.name,
      creatorAvatar: creator.avatar,
      content: contentTemplates[i % contentTemplates.length],
      imageUrl: `https://picsum.photos/seed/${i}/400/300`,
      likes: 0,
      timestamp: new Date(
        Date.UTC(2025, 10, 1) - i * 24 * 60 * 60 * 1000
      ).toISOString(),
      isLiked: false,
    });
  }

  return posts;
};

// In-memory data store (replace with real database in production)
// Use globalThis to persist across hot reloads in development
if (!globalThis.__POSTS_DATA__) {
  globalThis.__POSTS_DATA__ = generateMockPosts(500);
}

export const posts = globalThis.__POSTS_DATA__;

// Simulate network delay
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
