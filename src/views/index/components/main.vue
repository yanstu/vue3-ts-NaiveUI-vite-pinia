<template>
    <div class="neirong">
        <n-space :size="24" align="center">
            <n-badge :value="value" :max="15">
                <n-avatar />
            </n-badge>
            <n-badge :value="value" dot>
                <n-avatar />
            </n-badge>
            <n-button-group>
                <n-button @click="value = Math.min(16, value + 1)">
                    +
                </n-button>
                <n-button @click="value = Math.max(0, value - 1)">
                    -
                </n-button>
            </n-button-group>
        </n-space>
    </div>
</template>

<script lang="ts" setup>
const value = ref<number>(5)
</script>

<style lang="scss">
.neirong {
    margin-top: 1rem !important;
}
</style>