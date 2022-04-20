import { defineStore } from "pinia";
import axios from "../../axios/axios"

export const useLoginRegisterStore = defineStore({
    id: "loginRegister",
    state: () => ({

    }),
    getters: {

    },
    actions: {
        doLogin(data) {
            console.log(data);
            return axios({
                url: `/customer/login`,
                method: "POST",
                data: {
                    email: data.email,
                    password: data.password
                }
            })
        },
        doRegister(data) {
            console.log(data);
            return axios({
                url: "/customer/register",
                method: "POST",
                data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password,
                    phoneNumber: data.phoneNumber,
                    address: data.address,
                }
            })
        }
    }

});
