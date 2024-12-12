const mainText = [];
let currentPage = 0;

mainText[0] = `Are you ready to fight and slay the ogre that has been killing people around your town? Here's how it'll work: every time you choose 
        to do something, the computer will roll a 20 sided dice.. Just hope to get 10 or more and you'll be fine! So... Where were we? Yes... 
        Nestled deep within the ancient Whispering Woods, the village of Timberbrook is a settlement known for its hardworking inhabitants. The village 
        is surrounded by the Whispering Woods: a forest both beautiful and treacherous. Legends say that the deeper one ventures into the woods, 
        the darker and more ominous it becomes. Lately, an ogre, known as Gruk has taken up residence in a cave not far from the village. He has been 
        terrorizing the villagers, attacking anyone who strays too far from the safety of the village.`;

mainText[1] = `The village elder, a wise and respected figure named Elara, has called upon brave adventurers to rid Timberbrook of this menace. 
        You were the chosen one. She decides to tell the village that they have a brave hero ready to slay the monster that has been terrorizing the village.
        Elara says: “Our beloved village is in grave danger. The ogre has already claimed the lives of several villagers, and his attacks grow bolder by the 
        day. Our hero is ready to venture into the Whispering Woods and put an end to his reign of terror.”`;

mainText[2] = `Choose your hero!`

let heroes = [];

function allHeroes (name, Class, race, background, abilities, equipment, description) {
    this.name = name;
    this.Class = Class;
    this.race = race;
    this.background = background;
    this.abilities = abilities;
    this.equipment = equipment;
    this.description = description;
}

const heroesSheet = () => {
    heroes.push(new allHeroes(`Sir Cedric The Brave`,`Paladin`, `Human`, `Noble`, `High Strength and Charisma`, `Longsword, Shield, Chain Mail`, 
        `Sir Cedric is a valiant knight dedicated to protecting the innocent. His divine powers allow him to deal extra radiant damage to Gruk, and his 
        healing abilities can keep him in the fight.` ))
    heroes.push(new allHeroes(`Elara The Wise`,))
    heroes.push(new allHeroes(`Darpas The Starving One`,))
    heroes.push(new allHeroes(`Bruna The Bold`,))
}

heroesSheet();

$( () => { 
    $("h1").text(`The Titan's Fall`)
    $(".buttons--page__next").text(`Next`)
    $(".text").text(mainText[currentPage]);
    $(".buttons--characters").hide();

    $(".buttons--page__next").on("click", () => {
        if (currentPage < mainText.length -1) {
            currentPage++;
            $(".text").text(mainText[currentPage])
        }

        if (currentPage > 0) {
            $(".buttons--page__previous").show();
        }

        if (currentPage === mainText.length -1) {
            $(".buttons--page__next").hide();
        }

        if (currentPage === 2) { 
            $(".buttons--characters").show(); 
            $(".buttons--characters__name").each((index, element) => {
                $(element).text(heroes[index].name)
            });
            $(".buttons--characters__name").on("click", (event) => {
                const clickedElement = $(event.target)
                $(".buttons--characters").hide(); 
                $(".text").text(`You chose: ${clickedElement.text()}
                Class: ${clickedElement.Class}
                Race: ${clickedElement.race}
                Background: ${clickedElement.background}
                Abilities: ${clickedElement.abilities}
                Equipment: ${clickedElement.equipment}
                Description: ${clickedElement.description}`)        
            })
        } else { 
            $(".buttons--characters").hide(); 
        }
    })
})