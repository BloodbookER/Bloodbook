let test = document.getElementById("tester");
let employer = document.getElementById("title");
let story = document.getElementById("story");
let requirements = document.getElementById("requirements");
let payments = document.getElementById("payments");

function randomContract() {
    employers = ["Gideon's Contract", "D's Call", "Seluvis Request", "Tanith's Orders", "Blaidd's Favor", "Jerren's Appeal", "Diallos' Plea"];
    locations = ["East Limgrave", "West Limgrave", "the Weeping Peninsula", "East Liurnia", "West Liurna", "Raya Lucaria", "Leyndell", "Caelid", "the Altus Plateau", "Mt. Gelmir", "the Mountaintop of the Giants", "the Consecrated Snowfields", "Miquella's Haligtree", "Ordina"];

    rndlocation = Math.floor(Math.random() * employers.length);

    storytype = [
        [
            `Recent news has told me there is a Tarnished warrior roaming ${locations[rndlocation]}. This Tarnished is killing my eyes and ears. Find him and take him out under the guise of a recusant, poison ought to do the job. Make sure no one can recognize you.`,
            `Rumors have told me that a Tarnished warrior located in ${locations[rndlocation]} is planning to overthrow me. Rumors also tell me that he has enemies along the bloody fingers. Take the guise of a Bloody Finger and use their trademark attire and weapons to take him out.`
        ],
        [
            `I have heard of a Tarnished that has been touched by death roaming around in ${locations[rndlocation]}. Make no mistake, this is a dangerous individual afflicted by blight. As such I advice you use fire to burn out this Tarnished and anyone that might roam with him.`,
            `Deathroot has been spotted near ${locations[rndlocation]}. Unfortunately enough, it is guarded by Tarnished that follow Those Who Live in Death. Take them out, and use holy weapons to do so. Do not allow them to recover.`
        ],
        [
            `Word is that there is a Tarnished roaming ${locations[rndlocation]} of particular beauty and skill. I would like you to find them and bring them to me. I advise you use something to put them to sleep as well as some perfumers arts if you have them. Do not break them too much or burn them, I want them in pristine condition.`,
            `I have put my sight upon a Tarnished of particular strength in ${locations[rndlocation]}. Poison should bring them low with relative ease. Do not lacerate or burn the skin, I cannot work with a broken product.`
        ],
        [
            `The Volcano Manor desires that you hunt down a Tarnished roaming around ${locations[rndlocation]}, they have eluded our reach for far too long. Be quick, be efficient. And once the deed is done you will be compensated for your efforts.`,
            `A Tarnished formerly associated with the Volcano Manor family has betrayed us, now plotting against us they are a threat. You will take care of this issue, and you will do so at once. This Tarnished was last seen in ${locations[rndlocation]}. Grant them no mercy.`
        ],
        [
            `I have some work for you. A Tarnished located in ${locations[rndlocation]} has recently lost their way, I would like you to challenge them and give them a warrior's death. Be honorable.`,
            `A Tarnished in ${locations[rndlocation]} has given challenged me, but unfortunately I cannot answer it due to a mission of my mistress. As a favor I would like you to go in my stead. Be honorable but be wary too, he might have brought backup.`
        ],
        [
            `I've heard word that a witch or witch-sympathizer roams ${locations[rndlocation]}. Be very careful as witches can use powerful magic, so I suggest you prepare for this.`,
            `Traces of forbidden magic have been found around ${locations[rndlocation]}, these traces lead to a particular Tarnished. Find this Tarnished and dispose of them, their knowledge should not spread.`
        ],
        [
            `My friend, I have heard of bandits roaming ${locations[rndlocation]} with rather violent intent. Can you go and take care of them in the name of House Hoslow? You will be well compensated for your efforts.`,
            `My friend, word is that dangerous savages have been claiming ${locations[rndlocation]} as their territory, slaughtering anyone who even dares to set foot there. Kill their leader and they should scatter and leave.`
        ]
    ];

    challenges = [
        [
            //Gideon
            "Target Slain: 150gold<br>Gankers: +200gold<br>First hit: +20gold<br>Daggers used: +20gold<br>Killed with poison: +50gold<br>Witnesses left?: -50gold",
            "Target Slain: 150gold<br>Gankers: +200gold<br>First hit: +20gold<br>Bleed Weapons Used: +50gold<br>Bloody Helice used: +50gold<br>Dynasty Attire: +25gold<br>Riposted?: -50gold<br>Target Healed?: -25gold"
        ],
        [
            //D
            "Target Slain: 200gold<br>Gankers: +100gold<br>Fire used: +75gold<br>Taken a hit?: -25gold<br>Phantoms alive?: -50gold",
            "Target Slain: 200gold<br>Gankers: +100gold<br>Holy used: +75gold<br>Target healed?: -50gold<br>Phantoms alive?: -50gold"
        ],
        [
            //Seluvis
            "Target Slain: 100gold<br>Gankers: +50gold<br>Sleep used: +150gold<br>Perfumer bottles used: +50gold<br>Heavy weapons used?: -100gold<br>Fire used?: -75gold",
            "Target Slain: 150gold<br>Gankers: +50gold<br>Poison used: +50gold<br>Perfumer bottles used: +50gold<br>Bleed weapons used?: -75gold<br>Fire used?: -75gold"
        ],
        [
            //Tanith
            "Target Slain: 250gold<br>Gankers: +100gold<br>Recusant: +100gold<br>Environment used: +50gold<br>Target healed?: -100gold<br>Phantoms alive?: -75gold",
            "Target Slain: 250gold<br>Gankers: +100gold<br>Recusant: +100gold<br>Environment used: +50gold<br>Target healed?: -100gold<br>Phantoms alive?: -75gold"
        ],
        [
            //Blaidd
            "Target Slain: 100gold<br>Gankers: +100gold<br>Bowed: +50gold<br>Phantoms before host:+100gold<br>Healed?: -50gold<br>Ran away?: -100gold",
            "Target Slain: 150gold<br>Gankers: +100gold<br>Bowed: +50gold<br>Phantoms before host:+100gold<br>Healed?: -50gold<br>Ran away?: -100gold"
        ],
        [
            //Jerren
            "Target Slain: 75gold<br>Gankers: +75gold<br>Target uses magic: +75gold<br>Phantoms use magic:+75gold<br>Spell-parried: +100gold<br>You used magic?: -75gold",
            "Target Slain: 75gold<br>Gankers: +75gold<br>Target uses magic: +75gold<br>Phantoms use magic:+75gold<br>Spell-parried: +100gold<br>You used magic?: -75gold"
        ],
        [
            //Diallos
            "Target Slain: 150gold<br>Gankers: +100gold<br>Hoslow's Oath: +50gold<br>Rot used?: -100gold",
            "Target Slain: 150gold<br>Gankers: +100gold<br>Hoslow's Oath: +50gold<br>Phantoms left alive: +50gold"
        ]
    ]

    newrequirements = [`Invade in ${locations[rndlocation]}<br>Kill Target`];

    let randomizer = Math.floor(Math.random() * employers.length);
    let randomizer2 = Math.floor(Math.random() * this.storytype[randomizer].length);
    let newstory = storytype[randomizer][randomizer2];
    let newemployer = employers[randomizer];
    let newchallenges = challenges[randomizer][randomizer2];

    requirements.innerHTML = newrequirements
    employer.innerHTML = newemployer;
    story.innerHTML = newstory;
    payments.innerHTML = newchallenges;
}