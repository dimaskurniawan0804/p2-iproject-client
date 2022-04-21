<template>

    <!-- <form>
        <input v-on:change="onFileSelected" name="image" type="file">
        <p>location</p>
        <input v-model="location" type="text" class="bg-slate-400">
        <button type="submit" @click.prevent="hitUpload">Submit</button>
    </form> -->
    <Navbar></Navbar>
    <div style="background-color: #E9D5DA;" class="h-screen max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-4xl tracking-widest text-black text-center uppercase">
            <span class="block">Wellcome,{{userName}} </span>
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <!-- Destination Card -->
            <DestinationCard 
            v-for="destination in allDestination" 
            :destination="destination"

            ></DestinationCard>
        </div>
    </div>

</template>

<script>
    import axios from "../../axios/axios"
    import Navbar from "../components/Navbar.vue"
    import DestinationCard from "../components/CardDestination.vue"
    import {
        mapActions, mapWritableState
    } from "pinia"
    import {
        useDestinationStore
    } from "../stores/destination"
    export default {
        components: {
            Navbar,
            DestinationCard
        },
        data() {
            return {
                image: "",
                location: "",
                selectedFile: null,
                userName : localStorage.getItem("name"),
                
            }
        },
        computed:{
            ...mapWritableState(useDestinationStore,["allDestination"])
        },
        methods: {
            ...mapActions(useDestinationStore, ["fetchAllDestination"]),
            async onFileSelected(event) {
                console.log(event);
                this.selectedFile = event.target.files[0]

            },
            async getDestination(){
                try {
                    const response = await this.fetchAllDestination()
                    console.log(response)
                    this.allDestination = response.data
                } catch (error) {
                    console.log(error);
                }
            },
        },
        created(){
            this.getDestination()
        }
    }
</script>

<style>

</style>