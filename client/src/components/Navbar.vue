<template>
    <nav style="background-color: #363062;"  class="py-3 navbar-color">
        <div class="flex-1 flex items-center justify-between">
            <div class="flex-shrink-0 flex items-center ml-5">
                <span class="text-white opacity-80 text-2xl uppercase">Malaban Itinerary</span>
            </div>
            <div class="hidden sm:block sm:ml-6 mr-5">
                <div class="flex space-x-4 align-middle">
                    <a @click.prevent="toHome" href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2">Home</a>
                    <a @click.prevent="toGallery" href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2">Gallery</a>
                    <a @click.prevent="toMyItinerary" href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2">My Itinerary</a>
                    <a v-if="flag === true" href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2" @click.prevent="doLogout"
                    >Logout
                    </a>
                    <a v-if="flag === false" href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                    @click.prevent="toLogin"
                    >Login</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>import { mapActions } from "pinia"
import { useDestinationStore } from "../stores/destination"

export default {
    data(){
        return{
            flag: ""
        }
    },
    methods: {
        ...mapActions(useDestinationStore,["getMyItinerary"]),
        toGallery(){
            this.$router.push('/gallery')
        },
        toHome(){
            this.$router.push('/')
        },
        toMyItinerary(){
            this.getMyItinerary()
            this.$router.push('/itinerary')
        },
        doLogout(){
            localStorage.removeItem("user_token")
            localStorage.removeItem("user_id")
            localStorage.removeItem("name")
            this.flag = false
            this.$router.push("/login")
        },
        toLogin(){
            this.$router.push('/login')
        }
    },
    created(){
        if(localStorage.getItem("user_token")){
            this.flag = true
        } else {
            this.flag = false
        }
    }
}
</script>

<style>

</style>