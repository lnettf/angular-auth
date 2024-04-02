export interface ResponseAuth {
  success: boolean;
  data: AuthData;
  message: string;
}

export interface AuthData {
  token: string;
  user: UserAuth;
}

export interface UserAuth {
  name: string;
  email: string;
  id: number;
}
