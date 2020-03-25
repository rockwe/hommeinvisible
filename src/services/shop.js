import _games from './data.json'

const TIMEOUT = 100

export default {
  getGames: (cb, timeout) => setTimeout(() => cb(_games), timeout || TIMEOUT),
  buyGames: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
