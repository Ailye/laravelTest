<template>
    <div id="main">
        <div id="rules">
            <h4>Règles :</h4>
            <p>
                Le but est de trouver les 9 paires cachées dans les cartes
                ci-dessous. Cliquez sur une carte pour la découvrir pendant 3s,
                retenez sa position et sa figure. Pour valider une paire il vous
                faudra découvrir les 2 cartes associées à la suite. Une message
                d'alerte apparaîtra pour prouver la validation de la paire.
            </p>
        </div>
        <div id="cards">
            <div
                id="card"
                v-for="(card, index) in arrayOfCards"
                :key="`${index}`"
                @click="checkingMatch(card)"
            >
                <Card :cardInfo="card" @hideState="dealWithHideStateEmitted" />
            </div>
        </div>
        <div class="flex-center">
            <h2>Votre score : {{ score }}</h2>
        </div>
    </div>
</template>
<style scoped>
p {
    overflow: visible;
    border: 0;
    padding: 6px 0 2px 8px;
    width: 100%;
    height: 100%;
    resize: none;
    font-size: 18px;
}

.flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

#cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#card {
    margin: auto;
}

#rules {
    margin-left: 5%;
    margin-right: 5%;
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
                {
                    uri: fred,
                    name: "fred",
                    hidden: true,
                    twin: true,
                    found: false
                },
                {
                    uri: fred,
                    name: "fred",
                    hidden: true,
                    twin: false,
                    found: false
                },
                {
                    uri: juliette,
                    name: "juliette",
                    hidden: true,
                    twin: true,
                    found: false
                },
                {
                    uri: juliette,
                    name: "juliette",
                    hidden: true,
                    twin: false,
                    found: false
                },
                {
                    uri: kevin,
                    name: "kevin",
                    hidden: true,
                    twin: true,
                    found: false
                },
                {
                    uri: kevin,
                    name: "kevin",
                    hidden: true,
                    twin: false,
                    found: false
                },
                {
                    uri: killian,
                    name: "killian",
                    hidden: true,
                    twin: true,
                    found: false
                },
                {
                    uri: killian,
                    name: "killian",
                    hidden: true,
                    twin: false,
                    found: false
                },
                {
                    uri: laurent,
                    name: "laurent",
                    hidden: true,
                    twin: true,
                    found: false
                },
                {
                    uri: laurent,
                    name: "laurent",
                    hidden: true,
                    twin: false,
                    found: false
                },
                {
                    uri: paul,
                    name: "paul",
                    hidden: true,
                    twin: true,
                    found: false
                },
                {
                    uri: paul,
                    name: "paul",
                    hidden: true,
                    twin: false,
                    found: false
                },
                {
                    uri: romain,
                    name: "romain",
                    hidden: true,
                    twin: true,
                    found: false
                },
                {
                    uri: romain,
                    name: "romain",
                    hidden: true,
                    twin: false,
                    found: false
                },
                {
                    uri: sylvain,
                    name: "sylvain",
                    hidden: true,
                    twin: true,
                    found: false
                },
                {
                    uri: sylvain,
                    name: "sylvain",
                    hidden: true,
                    twin: false,
                    found: false
                },
                {
                    uri: tony,
                    name: "tony",
                    hidden: true,
                    twin: true,
                    found: false
                },
                { uri: tony, name: "tony", hidden: true, twin: 2, found: false }
            ]),
            arrayOfMatchs: [],
            toMatch: [],
            score: 0
        };
    },
    methods: {
        dealWithHideStateEmitted(card) {
            this.toMatch.push(card);
        },
        checkingMatch(card) {
            this.score++;
            if (this.toMatch.length > 1) {
                if (
                    this.toMatch[0].name === card.name &&
                    this.toMatch[0].twin !== card.twin
                ) {
                    this.toMatch = this.toMatch.slice(1, 1);
                    if (this.arrayOfMatchs.indexOf(card.name) === -1) {
                        this.arrayOfMatchs.push(card.name);
                        alert(`Bien joué, vous avez trouvé ${card.name}`);
                        const indexOfFound = [];
                        this.arrayOfCards.forEach((element, index) => {
                            if (element.name === card.name) {
                                indexOfFound.push(index);
                            }
                        });
                        this.arrayOfCards[indexOfFound[0]].found = true;
                        this.arrayOfCards[indexOfFound[1]].found = true;
                    }
                } else {
                    this.toMatch = this.toMatch.slice(1, 1);
                }
            }
            if (this.arrayOfMatchs.length === 9) {
                alert("You won !");
            }
        }
    }
};
</script>
