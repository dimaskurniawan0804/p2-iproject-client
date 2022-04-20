<template>
    <div class="min-h-screen bg-no-repeat bg-cover bg-center"
        style="background-image: url('https://www.pesonaindo.com/wp-content/uploads/2016/04/Paket-Wisata-Pulau-Derawan-Kalimantan-Indonesia-derawan-island-3.jpg')">
        <div class="flex justify-end">
            <div class="bg-transparent min-h-screen w-1/2 flex justify-center items-center">
                <div>
                    <form>
                        <div>
                            <span class="text-sm text-gray-900">Welcome, to Malaban Itinerary</span>
                            <h1 class="text-2xl font-bold">Login to your account</h1>
                        </div>
                        <div class="my-3">
                            <label class="block text-md mb-2" for="email">Email</label>
                            <input v-model="email" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                                type="email" name="password" placeholder="email">
                        </div>
                        <div class="mt-5">
                            <label class="block text-md mb-2" for="password">Password</label>
                            <input v-model="password" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                                type="password" name="password" placeholder="password">
                        </div>
                        <div class="">
                            <button @click.prevent="hitLogin"
                                class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login
                                now
                            </button>

                        </div>
                    </form>
                    <p class="mt-8"> Dont have an account? <span @click.prevent="toRegisterPage"
                            class="cursor-pointer text-sm text-white">
                            Join free
                            today</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        useLoginRegisterStore
    } from "../stores/loginRegister"
    import {
        mapActions,
        mapState
    } from "pinia"
    export default {
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            ...mapActions(useLoginRegisterStore, ["doLogin"]),
            async hitLogin() {
                try {
                    const response = await this.doLogin({
                        email: this.email,
                        password: this.password
                    })
                    console.log(response.data);
                    localStorage.setItem("user_id", response.data.id)
                    localStorage.setItem("user_token", response.data.access_token)
                    localStorage.setItem("name", response.data.fullName)
                    this.$router.push("/")
                } catch (error) {
                    console.log(error);
                }
            },
            toRegisterPage() {
                this.$router.push("/register")
            }
        },
    }
</script>

<style>

</style>