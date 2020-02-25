<!--|== Template =============================================================================== -->
<template>
    <section class="home">
        <div class="home__logo">
            <img src="@/assets/img/logo.svg" alt="VueKC Logo" />
        </div>
        <div class="home__content">
            <p>Website is currently under development.</p>
            <p>Until it is ready, please join us on..</p>
            <a href="https://www.meetup.com/vue-kc/" target="_blank">
                <img class="home__meetup" src="@/assets/img/meetup.jpg" alt="MeetUp" />
            </a>
        </div>
    </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {
    name: "home-page",

    components: {},

    data() {
        return {};
    },

    beforeCreate() {},

    created() {},

    beforeMount() {},

    mounted() {},

    beforeUpdate() {},

    updated() {},

    beforeDestroy() {},

    destroyed() {},

    computed: {},

    methods: {},

    watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.home {
    margin-top: 75px;

    &__logo {
        margin-bottom: 25px;
        img {
            width: 200px;
            margin: 0 auto;
        }
    }

    &__content {
    }

    &__meetup {
        width: 200px;
    }
}
</style>
