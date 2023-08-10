import axios from 'axios'

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});