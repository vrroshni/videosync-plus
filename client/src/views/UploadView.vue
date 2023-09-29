<script setup>
import UploadVideo from '../components/videoupload/UploadVideo.vue';
import VideoForm from '../components/videoupload/VideoForm.vue';
</script>
<template>
    <div class="h-full w-screen sm:px-8 md:px-16 sm:py-8 z-0 ">
        <main class="container mx-auto max-w-screen-md h-full">
            <article aria-label="File Upload Modal" class="relative h-full flex flex-col bg-white shadow-xl rounded-md">
                <section class="h-full p-8 w-full flex flex-col">
                    <VideoForm />
                    <UploadVideo />
                </section>
            </article>
        </main>
    </div>
</template>




<!-- const submitFile = async () => {
  const reader = new FileReader();
  reader.readAsDataURL(file.value);
  reader.onload = async () => {
    const encodedFile = reader.result.split(",")[1];
    const data = {
      file: encodedFile,
      fileName: fileName.value,
      fileExtension: fileExtension.value,
      fileMimeType: fileMimeType.value,
    };
    try {
      const endpoint = "https://example.com/upload";
      const response = await axios.post(endpoint, data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}; -->