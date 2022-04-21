<template>
    <Navbar></Navbar>
    <div style="background-color: #E9D5DA;" class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 h-full">
        <h2 class="text-4xl tracking-widest text-black text-center uppercase">
            <span v-if="this.itineraryList.length === 0"  class="block">You don't have any itinerary yet</span>
            <span v-if="this.itineraryList.length > 0" class="block">Your Itinerary</span>
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <!-- Destination Card -->
            <ItineraryCard v-for="item in itineraryList" :item="item"></ItineraryCard>
        </div>
        <div class="flex justify-center mt-5">
        <button v-if="this.itineraryList.length > 0 " @click.prevent="handlerSendItinerary" style="background-color: #4D4C7D;" type="button" class="rounded-md mb-5 p-4 font-semibold text-white">Send Itinerary to My Email</button>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import ItineraryCard from "../components/ItineraryCard.vue"
import { mapActions, mapState } from "pinia"
import { useDestinationStore } from "../stores/destination"

export default{
    components:{
        Navbar,
        ItineraryCard
    }, 
    computed: {
        ...mapState(useDestinationStore,["itineraryList"])
    },
    methods: {
        ...mapActions(useDestinationStore,["getMyItinerary","sendItinerary"]),
        async handlerSendItinerary(){
            try {
                const response = await this.sendItinerary()
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted(){
        this.getMyItinerary()
        console.log(this.itineraryList)
    }
}

</script>

<style>

</style>