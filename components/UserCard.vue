<template>
    <div class="relative user-card flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div
            class="relative user mx-[10px] mt-[10px] overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img :src="item?.profile_image" alt="card-image" class="object-cover  w-full h-full" />
        </div>
        <div class="p-[10px] flex flex-col " style="flex-grow: 1;">
            <div class="flex items-center justify-between mb-2">
                <h4 class="block font-sans text-[16px] antialiased font-medium leading-relaxed text-blue-gray-900"
                    v-html="item?.full_name">

                </h4>
            </div>
            <p
                class="block font-sans text-[12px] mt-auto capitalize antialiased font-normal leading-normal text-gray-700 opacity-75">
                {{ item?.position }}
            </p>
        </div>
        <div class="p-[10px] pt-0 mt-auto">
            <NuxtLink @click="staffPage(item.id)" :to="`/staff/${item?.slug}`"
                class="user-button align-middle flex items-center justify-center select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                {{ $t('More') }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { item } = defineProps(['item'])
function staffPage(id) {
    localStorage.setItem('teacherId', id)
}
</script>

<style lang="scss" scoped></style>