export interface User {
  name: string;
  username: string;
  imageUrl: string;
  comments: string[];
}

export interface FeedbackProperties {
  users: User[];
}
