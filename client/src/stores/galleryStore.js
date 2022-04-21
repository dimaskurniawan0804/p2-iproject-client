import { defineStore } from "pinia";
import axios from "../../axios/axios"

export const useGalleryStore = defineStore({
    id: "gallery",
    state: () => ({

    }),
    getters: {

    },
    actions: {
        getAllGallery() {
            return axios({
                url: "gallery/get",
                method: "GET",
            })
        },
        async hitUpload() {
            console.log(this.selectedFile);
            const fd = new FormData()
            fd.append('image', this.selectedFile, this.selectedFile.name)
            try {
                console.log('aaa');
                console.log(localStorage.getItem("user_token"));
                const response = await axios({
                    url: "gallery/post",
                    method: "POST",
                    headers: {
                        access_token: localStorage.getItem("user_token")
                    },
                    data: {
                        image: fd,
                        location: this.location
                    }
                })
                console.log(response, "<<<<,");
            } catch (error) {
                console.log(error)
            }
        }
    }

});
