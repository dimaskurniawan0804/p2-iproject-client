import {
    defineStore
} from "pinia";
import axios from "../../axios/axios"

export const useDestinationStore = defineStore({
    id: "destination",
    state: () => ({
        destinationInfo: "",
        destinationId: "",
        itineraryList: [],
        allDestination: []
    }),
    actions: {
        async fetchAllDestination() {
            console.log('masuk store <<<<<<')
            return await axios({
                url: "/destination/all",
                method: "GET",
            })

        },
        async destinationDetail() {
            const id = this.destinationId
            return await axios({
                url: `/destination/${id}`,
                method: "GET",
            })
        },
        addItinerary(id) {
            console.log(id, "<<<<<<<");
            return axios({
                url: `/cusdest/add/${id}`,
                method: "POST",
                headers: {
                    access_token: localStorage.getItem("user_token")
                }
            })
        },
        async getMyItinerary() {
            const { data } = await axios({
                url: "/customer/myitinerary",
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("user_token")
                }
            })
            // console.log(data);
            let result = []
            data.forEach(el => {
                let temp = {
                    destinationId: el.id,
                    itineraryId: el.id,
                    description: el.Destination.description,
                    imageUrl: el.Destination.imageUrl,
                    title: el.Destination.title,
                    location: el.Destination.location,
                    customerId: el.customerId,
                }
                result.push(temp)
            })
            this.itineraryList = result
            // console.log(this.itineraryList), "<<<<";
        },
        sendItinerary() {
            return axios({
                url: "/cusdest/print",
                method: "GET",
                headers: {
                    access_token: localStorage.getItem('user_token')
                }
            })
        },
        removeItinerary(id) {
            console.log(id, "<<<<<<<");
            return axios({
                url: `cusdest/delete/${id}`,
                method: "DELETE",
                headers: {
                    access_token: localStorage.getItem("user_token")
                }
            })
        }
    }

});
