let currentPage = 0;
const MINOR_DAMAGE = 2;
const MAJOR_DAMAGE = 4;
let rolls = [];
let userRoll;
let userHealth = 20;

const mainText = []

mainText[0] = `Are you ready to fight and slay the ogre that has been killing people around your town? Here's how it'll work: every time you choose 
        to do something, the computer will roll a 20 sided dice.. Just hope to get 10 or more and you'll be fine! So... Where were we? Yes... 
        Nestled deep within the ancient Whispering Woods, the village of Timberbrook is a settlement known for its hardworking inhabitants. The village 
        is surrounded by the Whispering Woods: a forest both beautiful and treacherous. Legends say that the deeper one ventures into the woods, 
        the darker and more ominous it becomes. Lately, an ogre, known as Gruk has taken up residence in a cave not far from the village. He has been 
        terrorizing the villagers, attacking anyone who strays too far from the safety of the village.`

mainText[1] = `The village elder, a wise and respected figure named Elara, has called upon brave adventurers to rid Timberbrook of this menace. 
        You were the chosen one. She decides to tell the village that they have a brave hero ready to slay the monster that has been terrorizing the village.
        Elara says: “Our beloved village is in grave danger. The ogre has already claimed the lives of several villagers, and his attacks grow bolder by the 
        day. Our hero is ready to venture into the Whispering Woods and put an end to his reign of terror.”`

mainText[2] = `Choose your hero!`

mainText[3] = `You venture into the forest knowing that your village counts on you even though you're not too sure of what awaits for you or what you can do to defeat the ogre. 
    Suddenly, you see him. You see the ogre right outside his cave eating God-knows-what. You decide to strike him by surprise in order to have the upper hand. Let's see how it goes... Roll the dice!`

mainText[5] = `Now that you know how it works we can get into the action! Remember that after each action the dice will roll and we'll see what happens from there.`
let heroes = [

    {
        name: `Sir Cedric The Brave`,
        Class:`Paladin`,
        race: `Human`,
        background: `Noble`,
        abilities: `High Strength and Charisma`,
        equipment: `Longsword, Shield, Chain Mail`,
        description: `Sir Cedric is a valiant knight dedicated to protecting the innocent. His divine powers allow him to deal extra radiant damage to Gruk, 
        and his healing abilities can keep him in the fight.`
    },

    {
        name: `Elara the Wise`,
        Class:`Wizard`,
        race: `Elf`,
        background: `Sage`,
        abilities: `High Intelligence and Dexterity`,
        equipment: `Spellbook, Staff`,
        description: `Elara is a knowledgeable wizard with a vast array of spells at her disposal. Her powerful offensive spells can deal significant damage 
        to Gruk, while her defensive spells can protect her from harm.`
    },

    {
        name: `Darpas the Starving one`,
        Class:`Rogue`,
        race: `Halfling`,
        background: `Criminal`,
        abilities: `High Dexterity and Wisdom`,
        equipment: `Daggers, Thieves' Tools, Leather Armor`,
        description: `Darpas is a stealthy rogue who excels at striking from the shadows. His ability to deal extra damage with sneak attacks makes him a 
        formidable opponent for Gruk, and his agility allows him to avoid the ogre's powerful blows.`
    },

    {
        name: `Bruna the Bold`,
        Class:`Barbarian`,
        race: `Half-Orc`,
        background: `Outlander`,
        abilities: `High Strength and Constitution`,
        equipment: `Greataxe, Javelins, Hide Armor`,
        description: `Bruna is a fierce barbarian with unmatched strength and resilience. When she enters a rage, she can deal massive damage to Gruk and 
        withstand his attacks. Her intimidating presence can also demoralize the ogre.`
    }

];

const rollAndSave = () => {
    userRoll = Math.floor(Math.random() * 20) + 1;
    rolls.unshift(userRoll);
}

$( () => { 
    $("h1").text(`The Titan's Fall`);
    $(".buttons--page__next").text(`Next`);
    $(".text").text(mainText[currentPage]);
    $(".buttons--characters").hide();
    $(".healthBars").hide();

    $(".buttons--page__next").on("click", () => {
        if (currentPage < mainText.length - 1) {
            currentPage++;
            $(".text").text(mainText[currentPage]);
        }

        if (currentPage > 0) {
            $(".buttons--page__previous").show();
        }

        if (currentPage < mainText.length - 1) {
            $(".buttons--page__next").show();
        } else {
            $(".buttons--page__next").hide();
        }

        if (currentPage === 2) { 
            $(".buttons--characters").show(); 
            $(".buttons--page__next").hide();

            $(".buttons--characters__name").each((index, element) => { 
                $(element).text(heroes[index].name); 
            }); 
            
            $(".buttons--characters__name").on("click", (event) => { 
                $(".buttons--characters").hide(); 
                const clickedElement = $(event.target); 
                const index = $(".buttons--characters__name").index(clickedElement); 
                const hero = heroes[index]; 
                if (hero) { 
                    $(".text").html(`You chose: ${hero.name}<br> 
                        Class: ${hero.Class}<br> 
                        Race: ${hero.race}<br> 
                        Background: ${hero.background}<br> 
                        Abilities: ${hero.abilities}<br> 
                        Equipment: ${hero.equipment}<br> 
                        Description: ${hero.description}`);
                    $(".buttons--page__next").show();
                } 
            }); 
        }
        
        if (currentPage === 4) {
            $(".healthBars").show();

            rollAndSave();

            if (userRoll <= 10) {
                mainText[4] = `You rolled a ${userRoll}... You sneak behind the ogre, ready to use your knife but while you're walking behind him, you step on a tree branch. The ogre hears you, turns around, sees you holding your knife and says: "HAHAHAHAHAHA that's not a knoife", he then grabs his, looks at you and says: "That's a knoife".
                Before you can react, the ogre’s massive knife comes down towards you. You try to dodge, but the knife catches you on the shoulder! You can hear the ogre laughing at you and then he says: "Next time, bring a real knoife mate."`;
                userHealth -= MINOR_DAMAGE;
                $(".userHealth").text(`YOUR HEALTH: ${userHealth}/20`);
        
            } else {
                mainText[4] = `You rolled a ${userRoll}! With a determined glint in your eye, you grip your weapon tightly and charge at the ogre. You aim for its big ugly face. The ogre stumbles backward, clutching its face and shouts: "OW!!! My nose! Do you even know how hard it is to find a good ogre plastic surgeon?"`;
                $(".userHealth").text(`YOUR HEALTH: ${userHealth}/20`);    
            }

            $(".text").text(mainText[4]);
        }
    });
});

