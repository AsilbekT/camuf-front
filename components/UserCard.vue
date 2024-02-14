<template>
    <div class="relative user-card flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div class="relative user mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img :src="item?.profile_image"
                alt="card-image" class="object-cover  w-full h-full" />
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between mb-2">
                <h4 class="block font-sans text-2xl antialiased font-medium leading-relaxed text-blue-gray-900">
                    {{ item?.full_name }}
                </h4>
            </div>
            <p class="block font-sans text-base capitalize antialiased font-normal leading-normal text-gray-700 opacity-75">
               {{ item?.position }}
            </p>
        </div>
        <div class="p-6 pt-0">
            <NuxtLink :to="`/staff/${item?.id}`" 
                class="user-button align-middle flex items-center justify-center select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                Batafsil
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const {item} = defineProps(['item'])
</script>

<style lang="scss" scoped></style>