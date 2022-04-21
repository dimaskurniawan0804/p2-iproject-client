<template>

    <div style="background-color: #E9D5DA;"
        class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 h-screen">
        <div class="flex justify-center mt-10">
            <!-- Destination Card -->
            <div x-show="isLoginPage" class="space-y-4">
            <form action="">
            
                <header class="mb-3 text-2xl font-bold text-center">Post your travel picture</header>
                <div class="w-full border-2 border-violet-300 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                    <input @change.prevent="onFileSelected" type="file" placeholder="Image"
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                <div class="w-full border-2 border-violet-300 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                    <input v-model="captions" type="text" placeholder="Picture story"
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                <div class="w-full border-2 border-violet-300 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                    <input v-model="location" type="text" placeholder="Where your photo was taken"
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                <button 
                    @click.prevent="onUpload"
                    style="background-color: #4D4C7D;"
                    class="w-full rounded-2xl border-b-4 border-b-black py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                    Add Post
                </button>
            </form>
                <button 
                    @click.prevent="backToGallery"
                    style="background-color: #4D4C7D;"
                    class="w-full rounded-2xl border-b-4 border-b-black py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                    Back
                </button>
            </div>
        </div>
        <div class="flex justify-center mt-5">
        </div>
    </div>
</template>

<script>
import axios from "../../axios/axios.js"
import {useGalleryStore} from "../stores/galleryStore"
import { mapActions,mapState } from "pinia"
export default {
    data(){
        return{
            imageUrl : "",
            captions: "",
            location: "",
            selectedFile : null
        }
    },
    methods: {
        ...mapActions(useGalleryStore,["hitUpload"]),
            onFileSelected(event) {
            console.log(event);
            this.selectedFile = event.target.files[0]
            // console.log(this.selectedFile);
            // const fd = new FormData()
            // fd.append('image', this.selectedFile, this.selectedFile.name)
            // try {
            //     console.log('aaa');
            //     console.log(localStorage.getItem("user_token"));
            //     const response = await axios({
            //         url: "gallery/post",
            //         method: "POST",
            //         headers: {
            //             access_token: localStorage.getItem("user_token")
            //         },
            //         data: {
            //             image: fd,
            //             location: this.location
            //         }
            //     })
            //     console.log(response, "<<<<,");
            // } catch (error) {
            //     console.log(error)
            // }
        },
        async onUpload(){
            const fd = new FormData()
            fd.append('image', this.selectedFile)
            fd.append('location', this.location)
            fd.append('captions', this.captions)
            try {
                console.log('aaa');
                console.log(localStorage.getItem("user_token"));
                const response = await axios({
                    url: "gallery/post",
                    method: "POST",
                    headers: {
                        access_token: localStorage.getItem("user_token")
                    },
                    data: fd
                    
                })
                console.log(response, "<<<<,");
            } catch (error) {
                console.log(error)
            }
        },
        backToGallery(){
            this.$router.push('/gallery')
        },
    },
    
}
</script>

<style>

</style>