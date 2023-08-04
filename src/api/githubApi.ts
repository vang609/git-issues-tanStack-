import axios from 'axios'

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      'Bearer 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',
  },
});