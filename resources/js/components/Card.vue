<template>
    <div class="card">
        <img
            v-if="!hidden && !this.cardInfo.found"
            @click="emitHideState"
            :src="cardInfo.uri"
        />
        <img
            v-if="hidden && !this.cardInfo.found"
            @click="emitHideState"
            :src="dos"
        />
        <img v-if="this.cardInfo.found" :src="cardInfo.uri" />
    </div>
</template>
<style scoped>
textarea {
    overflow: visible;
    outline: 1px dashed black;
    border: 0;
    padding: 6px 0 2px 8px;
    width: 100%;
    height: 100%;
    resize: none;
}

.card {
    height: 100px;
    width: 200px;
    display: flex;
    margin: 5px;
}

img {
    max-height: 100%;
    max-width: 100%;
}
</style>
<script>
import dos from "../../../images/dos.jpg";

export default {
    props: {
        cardInfo: {
            type: Object,
            required: true
        }
    },
    data: function() {
        return {
            dos: dos,
            hidden: true
        };
    },
    computed: {
        toHide() {
            if (this.hidden) {
                return this.cardInfo.hide;
            } else {
                return !this.cardInfo.hide;
            }
        }
    },
    methods: {
        emitHideState() {
            this.hidden = !this.hidden;
            this.$emit("hideState", this.cardInfo);
            setTimeout(() => {
                this.hidden = !this.hidden;
            }, 3000);
        }
    }
};
</script>
