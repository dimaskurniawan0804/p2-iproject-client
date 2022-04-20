<template>

    <!-- <form>
        <input v-on:change="onFileSelected" name="image" type="file">
        <p>location</p>
        <input v-model="location" type="text" class="bg-slate-400">
        <button type="submit" @click.prevent="hitUpload">Submit</button>
    </form> -->
    <Navbar></Navbar>
    <div style="background-color: #E9D5DA;" class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
        mapActions
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
                allDestination : []
            }
        },
        methods: {
            ...mapActions(useDestinationStore, ["fetchAllDestination"]),
            async onFileSelected(event) {
                console.log(event);
                this.selectedFile = event.target.files[0]

            },
            async getDestination(){
                const response = await this.fetchAllDestination()
                this.allDestination = response.data
                console.log(this.allDestination,"<<<<<<<");
            },
            // async hitUpload(){
            //     console.log(this.selectedFile);
            //     const fd = new FormData()
            //     fd.append('image',this.selectedFile,this.selectedFile.name)
            //     try {
            //         console.log('aaa');
            //         console.log(localStorage.getItem("user_token"));
            //         const response = await axios({
            //         url: "gallery/post",
            //         method: "POST",
            //         headers: {
            //             access_token : localStorage.getItem("user_token")
            //         },
            //         data: {
            //             image: fd,
            //             location: this.location
            //         }
            //     })
            //     console.log(response,"<<<<,");
            //     } catch (error) {
            //         console.log(error)
            //     }
            // }
        },
        mounted(){
            this.getDestination()
            
        }
    }
</script>

<style>

</style>