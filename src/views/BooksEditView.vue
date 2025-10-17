<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>
    <pre>
        {{ route.params.id }}
    </pre>
</template>