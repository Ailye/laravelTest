<template>
    <div>
        <h2>Game on</h2>
        <div id="cards">
            <div
                id="card"
                v-for="(card, index) in arrayOfCards"
                :key="`${index}`"
                @click="checkingMatch(card)"
            >
                <Card
                    :source="card.uri"
                    :hide="card.hidden"
                    @hideState="dealWithHideStateEmitted"
                />
            </div>
        </div>
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

#cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#card {
    margin: auto;
}
</style>
<script>
import Card from "./Card";
import fred from "../../../images/fred.jpg";
import juliette from "../../../images/juliette.jpg";
import kevin from "../../../images/kevin.jpg";
import killian from "../../../images/killian.jpg";
import laurent from "../../../images/laurent.jpg";
import paul from "../../../images/paul.jpg";
import romain from "../../../images/romain.jpg";
import sylvain from "../../../images/sylvain.jpg";
import tony from "../../../images/tony.jpg";

export default {
    name: "App",
    components: {
        Card
    },
    data: function() {
        return {
            arrayOfCards: require("lodash").shuffle([
                { uri: fred, hidden: true },
                { uri: fred, hidden: true },
                { uri: juliette, hidden: true },
                { uri: juliette, hidden: true },
                { uri: kevin, hidden: true },
                { uri: kevin, hidden: true },
                { uri: killian, hidden: true },
                { uri: killian, hidden: true },
                { uri: laurent, hidden: true },
                { uri: laurent, hidden: true },
                { uri: paul, hidden: true },
                { uri: paul, hidden: true },
                { uri: romain, hidden: true },
                { uri: romain, hidden: true },
                { uri: sylvain, hidden: true },
                { uri: sylvain, hidden: true },
                { uri: tony, hidden: true },
                { uri: tony, hidden: true }
            ]),
            arrayOfMatchs: [],
            toMatch: []
        };
    },
    methods: {
        dealWithHideStateEmitted(card) {
            this.toMatch.push(card.uri);
        },
        checkingMatch(card) {
            if (this.arrayOfMatchs.length === 9) {
                alert("You won !");
            }
            if (this.toMatch.length > 1) {
                if (this.toMatch[0] === card.uri) {
                    this.toMatch = [];
                    this.arrayOfMatchs.push(true);
                } else this.toMatch = [];
            }
        }
    }
};
</script>
