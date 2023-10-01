import { defineStore } from 'pinia';
import { generateSRT, generateUniqueId, parseTimestamp, secondsToTimestamp, toast } from '../config/helpers';
import { getallVideos, uploadVideo } from '../api/videoApi';


export const useVideoStore = defineStore('videos', {
    state: () => ({
        newVideo: {
            videoTitle: '',
            videoDescription: '',
            videoFile: '',
            videoThumbnail: '',
            subtitles: []
        },

        srtFile: '',
        uploadProgress: 0,
        allVideos: [],

        newSubtitle: {
            startingTimestamp: '',
            endingTimestamp: '',
            subtitle: ''
        },
        previewVideo: '',
        previewThumbnail: '',
        timeStamp: '',
        active: ''
    }),

    actions: {

        /**
     * Choose a timestamp for subtitles.
     * @param {number} time - The selected timestamp.
     */
        chooseTimestamp(time) {

            time = secondsToTimestamp(time)


            if (this.hasDuplicateTimestamps(time)) {

                toast.error("Subtitle for this timestamp already exist",
                    {
                        position: "bottom-center",
                        autoClose: 1000,
                    }
                )
                return
            }

            if (this.active === "starting timestamp") {
                this.timeStamp = time
                this.newSubtitle.startingTimestamp = time
            }
            if (this.active === "ending timestamp") {
                if (parseTimestamp(time) < parseTimestamp(this.newSubtitle.startingTimestamp)) {
                    toast.error("Ending timestamp must be greater than the starting timestamp.",
                        {
                            position: "bottom-center",
                            autoClose: 1000,
                        }
                    )
                    return
                }
                this.timeStamp = time
                this.newSubtitle.endingTimestamp = time

            }

        },




    /**
     * Check if any subtitle in the array has the same start and end timestamps.
     * @param {string} timestamp - The timestamp to check.
     * @returns {boolean} True if there are duplicates, otherwise false.
     */        hasDuplicateTimestamps(timestamp) {
            const { subtitles } = this.newVideo;
            return subtitles.some((subtitle) => timestamp >= subtitle.startingTimestamp && timestamp <= subtitle.endingTimestamp);
        },


        /**
        * Synchronize subtitles with the video and generate an SRT file.
        */
        syncWithVideo() {
            this.srtFile = generateSRT(this.newVideo.subtitles)
            const a = document.createElement('a');
            a.href = this.srtFile;
            a.download = 'subtitles.srt';
            a.click();
        },


        /**
         * Add subtitle data to the new video.
         * @param {string} step - The current step (e.g., 'starting timestamp').
         */
        addSubtitleData(step) {
            this.active = step
            this.newSubtitle.id = generateUniqueId();
            this.newVideo.subtitles.push(this.newSubtitle)
            this.newSubtitle = {}
            this.timeStamp = ''
        },



        /**
         * Reset the active step and timestamp.
         * @param {string} step - The step to reset.
         */
        reset(step) {
            this.active = step
            this.timeStamp = ''

        },

        /**
         * Update the view count for a video.
         * @param {string} videoId - The ID of the video.
         */
        async viewCount(videoId) {
            try {
                const video = await watchedVideo(videoId)
                const videoIndex = this.allVideos.findIndex((video) => video.id === videoId);
                if (videoIndex !== -1) {
                    this.allVideos[videoIndex].view_count = video.view_count;
                }

            } catch (error) {
                console.error(error)
            }


        },

        /**
         * Delete a subtitle by its ID.
         * @param {string} subtitleId - The ID of the subtitle to delete.
         */
        deleteSubtitleById(subtitleId) {
            const index = this.newVideo.subtitles.findIndex(
                (subtitle) => subtitle.id === subtitleId
            );
            if (index !== -1) {
                this.newVideo.subtitles.splice(index, 1);
            }
        },



        /**
         * Upload a new video and validate its data.
         */
        async uploadNewVideo() {
            try {

                if (!this.newVideo.videoTitle.trim() || !this.newVideo.videoDescription.trim() || !this.newVideo.videoFile || !this.newVideo.videoThumbnail) {
                    throw new Error('Video title, description , thumbnail and Video file are required.');
                }

                // Validate subtitles if there are any
                if (this.newVideo.subtitles.length > 0) {
                    const subtitlesValid = this.newVideo.subtitles.every(subtitle => subtitle.startingTimestamp && subtitle.endingTimestamp && subtitle.subtitle.trim());

                    if (!subtitlesValid) {
                        throw new Error('Subtitles must have non-empty starting timestamp, ending timestamp, and subtitle.');
                    }
                }

                this.previewVideo = ''
                const newVideo = await uploadVideo(this.newVideo, (progress) => {
                    this.uploadProgress = progress; // Update uploadProgress in the store
                })
                this.newVideo = {
                    videoTitle: '',
                    videoDescription: '',
                    videoFile: '',
                    subtitles: []
                }
                this.uploadProgress = 0
                this.allVideos.push(newVideo)
            } catch (error) {
                this.uploadProgress = 0
                throw error

            }

        },

        /**
         * Get all videos and update the store's state.
         */
        async getallVideos() {
            try {

                const data = await getallVideos()
                this.allVideos = data

            } catch (error) {
                
                console.error("Something went wrong")

            }
        }
    },


},

)