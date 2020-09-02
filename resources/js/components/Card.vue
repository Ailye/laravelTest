<template>
    <div class="card">
        <img v-if="!hidden" @click="emitHideState" :src="source" />
        <img v-if="hidden" @click="emitHideState" :src="dos" />
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
        hide: {
            type: Boolean,
            required: true
        },
        source: {
            type: String,
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
                return this.hide;
            } else {
                return !this.hide;
            }
        }
    },
    methods: {
        emitHideState() {
            this.hidden = !this.hidden;
            this.$emit("hideState", { uri: this.source, hidden: this.hidden });
        }
    }
};
</script>
