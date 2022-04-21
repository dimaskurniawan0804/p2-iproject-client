<template>
   <Navbar></Navbar>
   <div style="background-color: #E9D5DA;" class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-4xl tracking-widest text-black text-center uppercase">
            <button @click.prevent="toFormPost" style="background-color: #4D4C7D;" type="button" class="rounded-md mb-5 p-4 font-semibold text-white">Post a Picture</button>
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <!-- Destination Card -->
            <GalleryCard v-for="item in this.galleryData" :item="item"></GalleryCard>
        </div>
        <div class="flex justify-center mt-5">
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia"
import {useGalleryStore} from "../stores/galleryStore"
import Navbar from "../components/Navbar.vue"
import GalleryCard from "../components/GalleryCard.vue"
export default {
    components:{
        Navbar,
        GalleryCard,
    },
    data(){
        return{
            galleryData : []
        }
    },
    methods: {
        ...mapActions(useGalleryStore,["getAllGallery"]),
        toFormPost(){
            this.$router.push('/formGallery')
        },
        async handlergetAllGallery(){
            try {
                const response = await this.getAllGallery()
                this.galleryData = response.data
                console.log(response.data);
            } catch (error) {
                console.log(error)
            }
        }
    },
    created(){
        this.handlergetAllGallery()
    }
}
</script>

<style>

</style>