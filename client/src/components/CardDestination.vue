<template>
    <div class="flex justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img class="rounded-t-lg h-48" :src="destination.imageUrl"
                            alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2 text">{{destination.title}}</h5>
                        <p  
                            class="text-gray-700 text-base mb-4">
                            {{destination.description.split(" ")[0]}}
                            {{destination.description.split(" ")[1]}}
                            {{destination.description.split(" ")[2]}}
                            {{destination.description.split(" ")[3]}}
                            {{destination.description.split(" ")[4]}}
                            {{destination.description.split(" ")[5]}}
                            {{destination.description.split(" ")[6]}}
                            {{destination.description.split(" ")[7]}}
                            {{destination.description.split(" ")[8]}}
                            {{destination.description.split(" ")[9]}}
                            {{destination.description.split(" ")[10]}}
                            ...
                        </p>
                        <div class="flex justify-evenly">
                        <button type="button"
                            style="background-color:#4D4C7D ;"
                            class=" w-28 inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add
                        </button>
                        <button type="button"
                            style="background-color:#4D4C7D ;"
                            class="w-28 inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See Detail
                        </button>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    props: ["destination"]
}
</script>

<style>

</style>