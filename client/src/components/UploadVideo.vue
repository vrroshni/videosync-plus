<template>
        <div  class="  h-full w-screen sm:px-8 md:px-16 sm:py-8">
      <main class="container mx-auto max-w-screen-lg h-full">
        <article
          aria-label="File Upload Modal"
          class="relative h-full flex flex-col bg-white shadow-xl rounded-md">
          <section class="h-full p-8 w-full flex flex-col">
            <header
              class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center"
            > 
            <label class="cursor-pointer">
              <ul id="gallery" class="flex flex-1 flex-wrap -m-1">
                <li
                  id="empty"
                  class="h-full w-full text-center flex flex-col justify-center items-center"
                >
                  <img
                    class="mx-auto w-32"
                    src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                    alt="no data"
                  />
                  <span class="text-small text-gray-500"
                    >No files selected</span
                  >
                </li>
              </ul>
              <p
                class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center px-2 py-2 mt-4 bg-gray-300"
              >
                <span>Upload a Video</span>
              </p>
              <input  type="file"  class="hidden" />
            </label>

            </header>
          </section>

         
          <!-- <footer class="flex justify-end px-8 pb-8 pt-4">
            <button
              id="submit"
              class="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
            >
              Upload now
            </button>
            <button
              id="cancel"
              class="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
            >
              Cancel
            </button>
          </footer> -->
        </article>
      </main>
    </div>

</template>