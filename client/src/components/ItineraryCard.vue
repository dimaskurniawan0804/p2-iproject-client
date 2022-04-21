<template>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img class="rounded-t-lg h-48" :src="item.imageUrl" alt="" />
            </a>
            <div class="p-6 text-center">
                <h5 class="text-gray-900 text-2xl font-medium mb-2 text">{{item.title}}</h5>
                <h1>{{item.location}}</h1>
                <div class="flex justify-evenly mt-5">
                    <button type="button"
                        @click.prevent="doRemove(item.itineraryId)"
                        style="background-color:#4D4C7D ;"
                        class=" w-28 inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
        mapActions,
        mapState,
        mapWritableState
    } from "pinia";
    import {
        useDestinationStore
    } from "../stores/destination"
export default{
    props: ["item"],
    methods: {
        ...mapActions(useDestinationStore,["removeItinerary"]),
        async doRemove(id){
            try {
                await this.removeItinerary(id)
                this.$router.push("/itinerary")
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>

</style>