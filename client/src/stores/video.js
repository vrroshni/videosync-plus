import { defineStore } from 'pinia';
import { generateUniqueId, secondsToTimestamp, toast } from '../config/helpers';
import { getallVideos, uploadVideo } from '../api/videoApi';


export const useVideoStore = defineStore('videos', {
    state: () => ({
        newVideo: {
            videoTitle: '',
            videoDescription: '',
            videoFile: '',
            videoThumbnail:'',
            subtitles: []
        },
    

        uploadProgress:0,
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


            time = secondsToTimestamp(time)


            if (this.hasDuplicateTimestamps(time)) {
                
                toast.error("Subtitle for this timestamp already exist",
                { position: "bottom-center"}
            )
                return
            }

            if (this.active === "starting timestamp") {
                this.timeStamp = time
                this.newSubtitle.startingTimestamp = time
            }
            if (this.active === "ending timestamp") {
                console.log(time, this.newSubtitle.startingTimestamp)
                if (time < this.newSubtitle.startingTimestamp) {
                    toast.error("Ending timestamp must be greater than the starting timestamp.",
                        { position: "bottom-center"}
                    )
                    return
                }
                console.log("hello")
                this.timeStamp = time
                this.newSubtitle.endingTimestamp = time
                console.log("hello")
            }

        },




        // Check if any subtitle in the array has the same start and end timestamps
        hasDuplicateTimestamps(timestamp) {
            const { subtitles } = this.newVideo;
            return subtitles.some((subtitle) => timestamp >= subtitle.startingTimestamp && timestamp <= subtitle.endingTimestamp);
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

                if (!this.newVideo.videoTitle.trim() || !this.newVideo.videoDescription.trim() || !this.newVideo.videoFile ||  !this.newVideo.videoThumbnail) {
                    throw new Error('Video title, description , thumbnail and Video file are required.');
                }

                // Validate subtitles if there are any
                if (this.newVideo.subtitles.length > 0) {
                    console.log(this.newVideo.subtitles)
                    const subtitlesValid = this.newVideo.subtitles.every(subtitle => subtitle.startingTimestamp && subtitle.endingTimestamp && subtitle.subtitle.trim());

                    if (!subtitlesValid) {
                        throw new Error('Subtitles must have non-empty starting timestamp, ending timestamp, and subtitle.');
                    }
                }

                this.previewVideo = ''
                const newVideo = await uploadVideo(this.newVideo,(progress) => {
                    this.uploadProgress = progress; // Update uploadProgress in the store
                })
                this.newVideo = {
                    videoTitle: '',
                    videoDescription: '',
                    videoFile: '',
                    subtitles: []
                }
                this.uploadProgress=0
                this.allVideos.push(newVideo)
            } catch (error) {
                this.uploadProgress=0
                throw error

            }

        },

        async getallVideos() {
            try {

                const data = await getallVideos()
                this.allVideos = data
                console.log(this.allVideos, "videosssssss")

            } catch (error) {
                throw error

            }
        }
    },


},

)