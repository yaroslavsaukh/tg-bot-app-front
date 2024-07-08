import { User } from './users.interfaces';

export interface Leaderboard {
  id: number;
  updated_at: string;
  users: User[];
}

export interface LeaderboardResponse {
  leaderboard: Leaderboard;
  position: number;
}
