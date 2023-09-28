import axiosClient, { config, mediaconfig } from "../config/axios"


export const uploadVideo = async (video) => {
    try {
        const { videoTitle, videoDescription, videoFile, subtitles } = video

        const apidata = {
            video_title: videoTitle,
            video_description: videoDescription,
            video_file: videoFile,
            sub_titles: JSON.stringify(subtitles)
        }

        const { data } = await axiosClient.post('videosync/', apidata, mediaconfig)
        return data
    } catch (error) {
        throw error
    }
}
export const getallVideos = async () => {
    try {
        const { data } = await axiosClient.get('videosync/', config)
        return data
    } catch (error) {
        throw error
    }
}
export const getVideo = async (id) => {
    try {
        const { data } = await axiosClient.get('', config)
        return data
    } catch (error) {
        throw error
    }
}