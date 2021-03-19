<template>
    <div id="app-layout"
        class="flex flex-col min-h-screen w-screen select-none">
        <div>
            <app-header v-show="showHeader"/>
        </div>

        <main>
            <nuxt />
        </main>

        <div>
            <app-footer v-show="showFooter"/>
        </div>

    </div>    
</template>

<script>
import AppHeader from '@/components/global/Header/AppHeader.vue';
import AppFooter from '@/components/global/Footer/AppFooter.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        AppHeader,
        AppFooter
    }
}
</script>