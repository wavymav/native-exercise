import { Platform } from "react-native";

export interface Post {
  id: string;
  creatorName: string;
  creatorAvatar: string;
  content: string;
  imageUrl: string | null;
  likes: number;
  timestamp: string;
  isLiked: boolean;
}

// Determine the API base URL based on platform
const getApiBaseUrl = () => {
  if (Platform.OS === "android") {
    return "http://10.0.2.2:8081/api"; // Android emulator
  } else if (Platform.OS === "ios") {
    return "http://localhost:8081/api"; // iOS simulator
  }
  return "http://localhost:8081/api"; // Web/default
};

const API_BASE_URL = getApiBaseUrl();

export const apiClient = {
  // Fetch posts with pagination
  getPosts: async (offset: number = 0, limit: number = 20): Promise<Post[]> => {
    const response = await fetch(
      `${API_BASE_URL}/posts?offset=${offset}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  },

  // Like a post
  likePost: async (id: string): Promise<Post> => {
    const response = await fetch(`${API_BASE_URL}/posts/${id}/like`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Failed to like post");
    }
    return response.json();
  },

  // Unlike a post
  unlikePost: async (id: string): Promise<Post> => {
    const response = await fetch(`${API_BASE_URL}/posts/${id}/unlike`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Failed to unlike post");
    }
    return response.json();
  },
};

