import { defineStore } from 'pinia'

export const useTweetStore = defineStore({
  id: 'tweet-store',
  state: () => {
    return {
      items: [
          {
            _id: 1,
            numberPlate: 'VC1234',
            tweet: 'Your brake light is spoilt',
            date: '2020-05-12'
          },
          {
            _id: 1,
            numberPlate: 'VC1234',
            tweet: 'Your brake light is spoilt',
            date: '2020-05-12'
          }
      ]
    }
  },
  actions: {
    tweet(tweetObj) {
      tweetObj.date = new Date()
      this.items.unshift(tweetObj)
    }
  },
  getters: {
  }
})
