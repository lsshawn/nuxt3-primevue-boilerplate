<template>
  <div class="container mx-auto">
    <h1>Tweet</h1>
    <div class="field">
      <InputText
        type="text"
        class="p-inputtext-lg"
        placeholder="Plate Number"
        v-model="newTweet.numberPlate"
        :class="numberPlateError ? 'p-invalid' : ''"
      />
      <small id="numberplate-error" class="p-error" v-if="numberPlateError"
        >Number plate required</small
      >
    </div>

    <div class="field">
      <Textarea
        v-model="newTweet.tweet"
        rows="5"
        cols="30"
        :class="tweetError ? 'p-invalid' : ''"
      />
      <small id="tweet-error" class="p-error" v-if="tweetError"
        >Write something!</small
      >
    </div>

    <Button label="Submit" @click="tweet()" class="p-mt-5" />
    <Card v-for="(tweet, i) in tweets" :key="i" class="m-mb-2">
      <template #content>
        <div class="p-mb-2">{{ tweet.date }}</div>
        <div>
          <strong>{{ tweet.numberPlate }}</strong> {{ tweet.tweet }}
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useTweetStore } from '~/store/tweet'

const newTweet = reactive({ numberPlate: '', tweet: '' })
let numberPlateError = ref(false)
let tweetError = ref(false)

const tweetStore = useTweetStore()

const tweets = tweetStore.items

function tweet() {
  const plateInput = newTweet.numberPlate
  const tweetInput = newTweet.tweet

  numberPlateError.value = !!!plateInput
  tweetError.value = !!!tweetInput

  if (!!!plateInput || !!!tweetInput) {
    return
  }

  tweetStore.tweet({ ...newTweet })
  newTweet.numberPlate = ''
  newTweet.tweet = ''
}
</script>
