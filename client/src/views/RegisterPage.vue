<template>
<div class="min-h-screen bg-no-repeat bg-cover bg-center"
        style="background-image: url('https://bidukkece08.files.wordpress.com/2018/04/sunrise-di-biduk-biduk.jpg')">
        <div class="flex justify-center">
            <div class="bg-transparent min-h-screen w-1/2 flex justify-center items-center">
                <div x-show="isLoginPage" class="space-y-4">
                    <header class="mb-3 text-white text-4xl font-bold">Create your profile</header>
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                        <input
                        v-model="firstName"
                         type="text" placeholder="First Name"
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                    </div>
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                        <input 
                        v-model="lastName"
                        type="text" placeholder="Last Name"
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                    </div>
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                        <input 
                        v-model="email"
                        type="text" placeholder="Email"
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                    </div>
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                        <input 
                        v-model="password"
                        type="password" placeholder="Password"
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                    </div>
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                        <input 
                        v-model="phoneNumber"
                        type="text" placeholder="Phone Number (optional)"
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                    </div>
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                        <input 
                        v-model="address"
                        type="text" placeholder="Address (optional)"
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                    </div>
                    <button
                        @click.prevent="hitRegister"
                        class="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                        CREATE ACCOUNT
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia"
import { useLoginRegisterStore } from "../../src/stores/loginRegister.js"
export default {
    data(){
        return{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            address: "",
        }
    },
    methods:{
        ...mapActions(useLoginRegisterStore,["doRegister"]),
        async hitRegister(){
            console.log({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                phoneNumber: this.phoneNumber,
                address: this.address,
            });
            try {
                const response = await this.doRegister({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                phoneNumber: this.phoneNumber,
                address: this.address,
            })
                this.$router.push('/login')
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>