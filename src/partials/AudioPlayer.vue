<template>
  <section>
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 pt-16 md:pb-10 md:pt-40">
        <div class="relative">
          <!-- Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl -mx-20 -z-10 overflow-hidden" aria-hidden="true">
            <img class="w-full h-full object-cover rounded-3xl" src="../images/WYM3.png" width="1270" height="408" alt="Podcast image">
          </div>
  
          <!-- Content -->
          <div class="py-12 md:py-20 -mx-20 px-20">
            <div class="md:flex justify-between items-center text-center md:text-left">
              <!-- Left content -->
              <div class="max-w-3xl">
                <!-- Copy -->
                <h1 class="h2 font-hkgrotesk text-slate-100 mb-4" v-if="podcast">{{podcast.title}}</h1>
                <div class="font-hkgrotesk text-white font-medium opacity-80 mb-8" v-if="podcast">{{formattedDate(podcast.created_at)}}</div>

                <!-- Player -->
                <div class="relative px-4 py-5" aria-label="Audio Player" role="region">

                  <!-- Background -->
                  <div class="absolute inset-0 rounded-3xl opacity-25 bg-gradient-to-tr from-white to-white/50 pointer-events-none -z-10" aria-hidden="true"></div>

                  <!-- Controls -->
                  <div class="sm:flex items-center sm:space-x-3">

                    <div class="flex items-center space-x-3 mb-3 sm:mb-0">

                      <!-- Play / Pause button -->
                      <button class="block rounded-full" aria-controls="audiofile" :aria-label="playing ? 'Pause' : 'Play'" @click="togglePlaying">
                        <!-- Play icon -->
                        <svg :class="{ 'hidden': playing }" xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true">
                          <defs>
                            <linearGradient id="play-a" x1="87.87%" x2="12.333%" y1="20.647%" y2="76.5%">
                              <stop offset="0%" stop-color="#FFF" stop-opacity=".64" />
                              <stop offset="100%" stop-color="#FFF" />
                            </linearGradient>
                          </defs>
                          <path fill="url(#play-a)" fill-rule="evenodd" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20Zm-2.217-25.912A.5.5 0 0 0 17 14.5v11a.5.5 0 0 0 .783.412l8-5.5a.5.5 0 0 0 0-.824l-8-5.5Z" />
                        </svg>
                        <!-- Pause icon -->
                        <svg :class="{ 'hidden': !playing }" xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true">
                          <defs>
                            <linearGradient id="pause-a" x1="87.87%" x2="12.333%" y1="20.647%" y2="76.5%">
                              <stop offset="0%" stop-color="#FFF" stop-opacity=".64" />
                              <stop offset="100%" stop-color="#FFF" />
                            </linearGradient>
                          </defs>
                          <path fill="url(#pause-a)" fill-rule="evenodd" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20Zm-2.8-26h-2.4c-.48 0-.8.343-.8.857v10.286c0 .514.32.857.8.857h2.4c.48 0 .8-.343.8-.857V14.857c0-.514-.32-.857-.8-.857Zm8 0h-2.4c-.48 0-.8.343-.8.857v10.286c0 .514.32.857.8.857h2.4c.48 0 .8-.343.8-.857V14.857c0-.514-.32-.857-.8-.857Z" />
                        </svg>
                      </button>

                      <!-- Rewind / Forward 10 secs buttons -->
                      <div class="flex space-x-2">
                        <button aria-label="Rewind 10 seconds" @click="rewind">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true">
                            <path class="fill-white" fill-rule="nonzero" d="m5.21 5.492 2.033-.566.536 1.927L1.258 8.67l.213-1.694-.04-.026.053-.08L2.097 2l1.984.25-.222 1.761a8.945 8.945 0 0 1 14.49 8.146l-.133.99-1.982-.266.133-.991A6.943 6.943 0 0 0 5.211 5.492Zm10.008 9.392.564-.826 1.652 1.127-.564.826c-.342.5-.734.965-1.17 1.387l-.718.695-1.39-1.438.719-.695c.338-.327.642-.688.907-1.076ZM4.91 11.929v5.09H3.681v-3.942h-.03l-1.138.696V12.71l1.255-.78H4.91Zm3.161 5.215c-1.332 0-2.155-.987-2.15-2.662.003-1.673.818-2.623 2.15-2.623 1.333 0 2.155.952 2.153 2.623-.003 1.68-.82 2.665-2.153 2.662Zm0-1.007c.532 0 .89-.532.888-1.655-.003-1.101-.358-1.623-.888-1.623-.527 0-.882.522-.885 1.623-.005 1.123.356 1.655.885 1.655Z" />
                          </svg>
                        </button>

                        <button aria-label="Fast-forward 10 seconds" @click="forward">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true">
                            <path class="fill-white" fill-rule="nonzero" d="M10.47 11.929v5.09H9.24v-3.942h-.03l-1.138.696V12.71l1.255-.78h1.141Zm3.16 5.215c-1.332 0-2.155-.987-2.15-2.662.003-1.673.818-2.623 2.15-2.623 1.333 0 2.156.952 2.153 2.623-.002 1.68-.82 2.665-2.153 2.662Zm0-1.007c.532 0 .89-.532.888-1.655-.003-1.101-.358-1.623-.888-1.623-.527 0-.882.522-.884 1.623-.005 1.123.355 1.655.884 1.655Zm.59-10.645A6.944 6.944 0 0 0 3.062 11.89l.133.991-1.982.267-.134-.991A8.943 8.943 0 0 1 15.57 4.01L15.35 2.25 17.333 2l.613 4.87.052.08-.039.026.213 1.694-6.522-1.817.537-1.927 2.032.566ZM4.211 14.884c.265.388.569.749.907 1.076l.72.695-1.39 1.438-.72-.695a8.932 8.932 0 0 1-1.17-1.387l-.563-.826 1.652-1.127.564.826Z" />
                          </svg>
                        </button>
                      </div>

                      <!-- Playback speed -->
                      <button aria-label="Playback speed" @click="toggleSpeed">
                        <div class="flex items-center justify-center h-5 w-6 bg-white bg-opacity-30 rounded text-center text-[10px] text-white font-bold">{{speedOutput[speedIndex]}}</div>
                      </button>

                    </div>

                    <div class="grow flex items-center space-x-3">

                      <!-- Seek bar -->
                      <div class="grow bg-white bg-opacity-50 overflow-hidden"
                        ref="slider"
                        tabIndex="0"
                        role="slider"
                        aria-valuetext="Seek audio bar"
                        aria-valuemin="0"
                        :aria-valuemax="duration.value"
                        :aria-valuenow="Math.floor(currentTime.value)"
                        @keydown="keyControl"
                      >
                        <div class="h-2 bg-gradient-to-bl from-white pointer-events-none" :style="`width: ${progress.value}%`"></div>
                      </div>

                      <!-- Time -->
                      <div class="flex items-center text-xs font-medium text-white space-x-1.5 tabular-nums">
                        <span>{{outputCurrentTime.value}}</span>
                        <span class="w-px h-4 bg-white bg-opacity-30" aria-hidden="true"></span>
                        <span>{{outputDuration.value}}</span>
                      </div>

                    </div>

                  </div>

                  <audio v-if="podcast" id="audiofile" :src="podcast.podcast_url" ref="audio" @loadedmetadata="loadedMetadata" @timeupdate="timeUpdate" @ended="ended"></audio>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>                
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { getPodcastUrl } from "../api/resources.js";

import AudioFile from '../audio/audio.mp3'



export default {
  name: 'AudioPlayer',
  data(){
    return {
      podcast: null
    }
  },
  methods: {
    formattedDate(time) {
      const el = new Date(time);
      return el.toLocaleDateString() + " " + el.toLocaleTimeString();
    },
  },
  async created() {
    try {
      const { data } = await getPodcastUrl(this.$route.params.slug);
    this.podcast = data

    } catch (e){

    }
    

  },

  
  setup(props, context) {
    const audio = ref(null)
    const slider = ref(null)
    let playing = ref(false)
    let wasPlaying = ref(false)
    const duration = reactive({ value: 0 })
    const outputDuration = reactive({value: '0:00'})
    const currentTime = reactive({ value: 0 })
    const outputCurrentTime = reactive({ value: '0:00' })
    const progress = reactive({ value: 0 })
    let isDownEvent = ref(false)
    const speedOptions = [1, 1.5, 2]
    const speedOutput = ref(['1x', '1.5', '2x'])
    let speedIndex = ref(0)
    

    // Handle slider events
    onMounted(() => {
      window.addEventListener('mousedown', downEvent)
      window.addEventListener('touchstart', downEvent);     
      window.addEventListener('mousemove', moveEvent)
      window.addEventListener('touchmove', moveEvent)
      window.addEventListener('mouseup', upEvent)
      window.addEventListener('touchend', upEvent)
    })
    onUnmounted(() => {
      window.removeEventListener('mousedown', downEvent)
      window.removeEventListener('touchstart', downEvent);
      window.removeEventListener('mousemove', moveEvent)
      window.removeEventListener('touchmove', moveEvent)
      window.removeEventListener('mouseup', upEvent)
      window.removeEventListener('touchend', upEvent)      
    })    

    const loadedMetadata = () => {
      duration.value = Math.floor(audio.value.duration) || 0
      outputDuration.value = formatTime(duration.value)
    }
    
    const formatTime = (seconds) => {
      const pad = num => num < 10 ? `0${num}` : num
      const H = pad(Math.floor(seconds / 3600))
      const i = pad(Math.floor(seconds % 3600 / 60))
      const s = pad(Math.floor(seconds % 60))
      let result = ''
      if (H > 0) result += `${+H}:`
      result += `${H > 0 ? i : +i}:${s}`
      return result
    }
    
    const playAudio = () => {
      audio.value.play()
      playing.value = true
    }
    
    const pauseAudio = () => {
      audio.value.pause()
      playing.value = false
    }
    
    const togglePlaying = () => {
      playing.value ? pauseAudio() : playAudio()
    }

    const keepRange = (value) => {
      if (value < 0) return 0
      if (value > 1) return 1
      return value
    }

    const updateBarPosition = (e) => {
      const x = e.pageX || e.touches[0].pageX
      const pos = (x - (slider.value.getBoundingClientRect().x || slider.value.getBoundingClientRect().left)) / slider.value.getClientRects()[0].width
      //progress.value = keepRange(pos) * 100
      audio.value.currentTime = duration.value * keepRange(pos)
    }

    const downEvent = (e) => {
      if(e.target !== slider.value) return
      isDownEvent.value = true
      wasPlaying.value = playing.value
      pauseAudio()
      updateBarPosition(e)
    }

    const moveEvent = (e) => {
      if (!isDownEvent.value) return
      if (e.type !== 'touchmove') e.preventDefault()
      updateBarPosition(e)
    }

    const upEvent = () => {
      isDownEvent.value && wasPlaying.value && playAudio()
      isDownEvent.value = false
    }

    const toggleSpeed = () => {
      speedIndex.value = (speedIndex.value + 1) % speedOptions.length
      audio.value.playbackRate = speedOptions[speedIndex.value]
    }

    const rewind = () => {
      audio.value.currentTime = currentTime.value - 10
    }

    const forward = () => {
      audio.value.currentTime = currentTime.value + 10
    }

    const keyControl = (e) => {
      if (e.defaultPrevented) return
      if (e.key === 'ArrowLeft') audio.value.currentTime = currentTime.value - 1
      if (e.key === 'ArrowRight') audio.value.currentTime = currentTime.value + 1
    }

    const goToTime = (time) => {
      const a = time.split(':').reverse()
      const seconds = (+a[0]) + (+a[1]) * 60 + (a[2] ? (+a[2]) * 3600 : 0)
      audio.value.currentTime = seconds
    }

    const timeUpdate = () => {
      currentTime.value = audio.value.currentTime
      outputCurrentTime.value = formatTime(currentTime.value)
      progress.value = currentTime.value / duration.value * 100
    }

    const ended = () => {
      audio.value.currentTime = 0
      pauseAudio()
    }
    
    context.expose({ goToTime })

    return {
      AudioFile,
      audio,
      slider,
      playing,
      wasPlaying,
      duration,
      outputDuration,
      currentTime,
      outputCurrentTime,
      progress,
      isDownEvent,
      speedOptions,
      speedOutput,
      speedIndex,
      loadedMetadata,
      togglePlaying,
      downEvent,
      moveEvent,
      upEvent,
      toggleSpeed,
      rewind,
      forward,
      keyControl,
      goToTime,
      timeUpdate,
      ended,
    }
  }
}
</script>