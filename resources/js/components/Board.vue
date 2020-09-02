<template>
    <div>
        <h2>Page pour le tableau des scores</h2>

        <router-link
                    :to="{ name: 'game' }"
                    class="button"
                    >Go !</router-link
                >
    </div>
</template>
<style scoped>
.card {
    border: 0;
    border-radius: 0.5rem;
}
.transit-1 {
    transition: all 1s;
}
.small-card {
    padding: 1rem;
    background: #f5f8fa;
    margin-bottom: 5px;
    border-radius: 0.25rem;
}
.card-body-dark {
    background-color: #ccc;
}
textarea {
    overflow: visible;
    outline: 1px dashed black;
    border: 0;
    padding: 6px 0 2px 8px;
    width: 100%;
    height: 100%;
    resize: none;
}
</style>
<script>
export default {};
</script>
