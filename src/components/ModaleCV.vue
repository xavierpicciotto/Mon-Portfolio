<template>
    <div class="bloc-modale" v-if="showCV">
        <div class="overlay" v-on:click="toggleCV"></div>
        <div class="modale card">
            <div v-on:click="toggleCV" class="btn-close">X</div>
            <img src="../assets/CV.jpg" alt="CV de Xavier picciotto">
        </div>
    </div>
</template>


<script>
    export default {
        name: "CV",
        props: ["showCV", "toggleCV"],
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {

        }
    }
</script>


<style lang="scss" scoped>
    .bloc-modale {
        z-index: 2;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 300px;
        height: auto;
    }
    .overlay {
        background: rgba(0, 0, 0, 0.5);
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .modale {
        background: #f1f1f1;
        color: #333;
        padding: 50px;
        position: fixed;
    }

    .agree {
        margin-top: 25px;
        padding: 4%;
        font-size: 1.5em;
    }

    .btn-close {
        box-shadow: inset 0px 39px 0px -24px #e67a73;
        background-color: #e4685d;
        border-radius: 4px;
        border: 1px solid #ffffff;
        display: inline-block;
        cursor: pointer;
        color: #ffffff;
        font-family: Arial;
        font-size: 20px;
        padding: 6px 15px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #b23e35;
    }
</style>