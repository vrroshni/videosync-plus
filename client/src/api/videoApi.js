import axiosClient, { config, mediaconfig } from "../config/axios"


export const uploadVideo = async (video, onProgressCallback) => {
    try {
        const { videoTitle, videoDescription, videoFile, subtitles, videoThumbnail } = video
        const apidata = {
            video_title: videoTitle,
            video_description: videoDescription,
            video_file: videoFile,
            video_thumbnail: videoThumbnail,
            sub_titles: JSON.stringify(subtitles)
        }

        const { data } = await axiosClient.post('videosync/',
            apidata,
            {
                ...mediaconfig,
                onUploadProgress: (progressEvent) => {
                    if (onProgressCallback) {
                        onProgressCallback(Math.round((progressEvent.loaded / progressEvent.total) * 100));
                    }
                },
            }
        )

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
        const { data } = await axiosClient.get(`videosync/video/${id}/`, config)
        return data
    } catch (error) {
        throw error
    }
}
export const searchVideos = async (search) => {
    try {
        console.log(search,"search")
        console.log(search,"search")
        const { data } = await axiosClient.get(`videosync/search/${search}/`, config)
        return data
    } catch (error) {
        throw error
    }
}