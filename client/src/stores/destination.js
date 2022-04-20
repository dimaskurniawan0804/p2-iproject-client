import { defineStore } from "pinia";
import axios from "../../axios/axios"

export const useDestinationStore = defineStore({
    id: "loginRegister",
    state: () => ({
        destinationInfo: "",
        destinationId: ""
    }),
    getters: {

    },
    actions: {
        fetchAllDestination() {
            return axios({
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
        }
    }

});
