import { defineStore } from "pinia";
import axios from "../../axios/axios"

export const useDestinationStore = defineStore({
    id: "loginRegister",
    state: () => ({

    }),
    getters: {

    },
    actions: {
        fetchAllDestination() {
            return axios({
                url: "/destination/all",
                method: "GET",
            })
        }
    }

});
