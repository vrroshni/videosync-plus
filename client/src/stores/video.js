import { defineStore } from 'pinia';
import { generateUniqueId } from '../config/helpers';
import { getallVideos, uploadVideo } from '../api/videoApi';



export const useVideoStore = defineStore('videos', {
    state: () => ({
        newVideo: {
            videoTitle: '',
            videoDescription: '',
            videoFile: '',
            subtitles: []
        },
        allVideos: [],

        newSubtitle: {
            startingTimestamp: '',
            endingTimestamp: '',
            subtitle: ''
        },
        previewVideo: '',
        timeStamp: '',
        active: ''
    }),

    actions: {
        chooseTimestamp(time) {
            if (this.hasDuplicateTimestamps(time)) {
                alert("choose different timestamps")
                return
            }

            if (this.active === "starting timestamp") {
                this.timeStamp = time
                this.newSubtitle.startingTimestamp = time
            }
            if (this.active === "ending timestamp") {
                this.timeStamp = time
                this.newSubtitle.endingTimestamp = time
            }

        },




        // Check if any subtitle in the array has the same start and end timestamps
        hasDuplicateTimestamps(timestamp) {
            const { subtitles } = this.newVideo;
            return subtitles.some((subtitle) => subtitle.startingTimestamp === timestamp || subtitle.endingTimestamp === timestamp);
        },


        addSubtitleData(step) {
            this.active = step
            this.newSubtitle.id = generateUniqueId();
            this.newVideo.subtitles.push(this.newSubtitle)
            this.newSubtitle = {}
            this.timeStamp = ''
        },



        reset(step) {
            this.active = step
            this.timeStamp = ''

        },

        deleteSubtitleById(subtitleId) {
            const index = this.newVideo.subtitles.findIndex(
                (subtitle) => subtitle.id === subtitleId
            );
            if (index !== -1) {
                this.newVideo.subtitles.splice(index, 1);
            }
        },




        async uploadNewVideo() {
            try {

                if (!this.newVideo.videoTitle.trim() || !this.newVideo.videoDescription.trim() || !this.newVideo.videoFile) {
                    throw new Error('Video title, description, and file are required.');
                }

                // Validate subtitles if there are any
                if (this.newVideo.subtitles.length > 0) {
                    const subtitlesValid = this.newVideo.subtitles.every(subtitle => (
                        subtitle.startingTimestamp.trim() && subtitle.endingTimestamp.trim() && subtitle.subtitle.trim()
                    ));

                    if (!subtitlesValid) {
                        throw new Error('Subtitles must have non-empty starting timestamp, ending timestamp, and subtitle.');
                    }
                }
                this.previewVideo = ''
                const newVideo = await uploadVideo(this.newVideo)
                this.newVideo = {
                    videoTitle: '',
                    videoDescription: '',
                    videoFile: '',
                    subtitles: []
                }
                this.allVideos.push(newVideo)

            } catch (error) {
                throw error
            }

        },

        async getallVideos() {
            try {

                const data =await getallVideos()
                this.allVideos=data
                console.log(this.allVideos,"videosssssss")
                
            } catch (error) {
                throw error

            }
        }
    },


},

)