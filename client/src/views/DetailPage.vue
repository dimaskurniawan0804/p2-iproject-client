<template>
    <Navbar></Navbar>
    <div style="background-color: #E9D5DA;" class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-4xl tracking-widest text-black text-center uppercase">
            <span class="block">Destination Info</span>
        </h2>
        <div class="mt-10">
            <!-- Destination Card -->
            <div class="rounded overflow-hidden shadow-lg bg-white">
                <div class="w-full">
                    <img :src="this.imageUrl" class="w-full h-500px">
                </div>
                <div class="px-2 pb-5">
                    <h1 class="text-4xl justify-between font-bold">{{this.title}}</h1>
                    
                </div>
                <div class="flex items-center pb-5 px-5">
                    <div class="w-full flex">
                    <p>
                        {{this.description}}
                    </p>
                    </div>
                    
                </div>
                <div class="flex justify-center">
                <button @click.prevent="backHome" style="background-color: #4D4C7D;" type="button" class="rounded-md mb-5 p-4 font-semibold text-white">Back To Home</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
    import {
        mapActions,mapState
    } from "pinia"
    import {
        useDestinationStore
    } from "../stores/destination"
    export default {
        data(){
            return{
                id: "",
                title: "",
                imageUrl: "",
                description: ""
            }
        },
        components: {
            Navbar
        },
        computed: {
            ...mapState(useDestinationStore,["destinationInfo"])
        },
        methods: {
            ...mapActions(useDestinationStore,["destinationDetail"]),
            async getDestinationDetail(id){
                try {
                    const response = await this.destinationDetail(id)
                    console.log(response);
                    this.id = response.data.id,
                    this.title = response.data.title,
                    this.imageUrl = response.data.imageUrl,
                    this.description = response.data.description
                } catch (error) {
                    
                }
            },
            backHome(){
                this.$router.push('/')
            }
        },
        mounted(){
            this.getDestinationDetail()
        }
    }
</script>

<style>

</style>