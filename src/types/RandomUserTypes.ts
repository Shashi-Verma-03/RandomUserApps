export interface RandomUserApiResponse {
  results: {
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
  }[];
}
