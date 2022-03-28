//Button Changes
let firststart = 0;
let startbutton = document.getElementById("contractbuttonright");
let failbutton = document.getElementById("contractbuttonleft");

//Bloodbook text
let test = document.getElementById("tester");
let employer = document.getElementById("title");
let story = document.getElementById("story");
let requirements = document.getElementById("requirements");
let payments = document.getElementById("payments");

//Money mechanic
let goldcounter = document.getElementById("goldcounter");
let money = 0;
var payout = 0;
let globalchng = "";

function check(number) {
    var checkBox = document.getElementById(`challenge${number}`);
    if (checkBox.checked == true) {
        payout = payout + globalchng[number];
        console.log(payout);
    } else {
        console.log(globalchng[number]);
        payout = payout - globalchng[number];
        console.log(payout);
    }
}

function payday() {
    if (firststart == 0) {
        firststart = 1;
        startbutton.innerHTML = "<b>Contract Completed<b>";
        failbutton.innerHTML = "<b>Contract Failed<b>";
        randomContract()
    } else {
        money = money + payout;
        goldcounter.innerHTML = `Gold: ${money}`;
        randomContract()
    }
}

function failed() {
    if (firststart == 0) {
        firststart = 1;
        startbutton.innerHTML = "<b>Contract Completed<b>";
        failbutton.innerHTML = "<b>Contract Failed<b>";
        randomContract()
    } else {
        payout = 0;
        randomContract();
    }
}

function randomContract() {
    employers = ["Gideon's Contract", "D's Summons", "Seluvis Request", "Tanith's Orders", "Blaidd's Favor", "Jerren's Appeal", "Diallos' Plea", "Dung Eater's Call"];
    locations = ["East Limgrave", "West Limgrave", "the Weeping Peninsula", "East Liurnia", "West Liurna", "Raya Lucaria", "Leyndell", "Caelid", "the Altus Plateau", "Mt. Gelmir", "the Mountaintop", "the Snowfields", "Miquella's Haligtree", "Ordina"];

    rndlocation = Math.floor(Math.random() * locations.length);

    storytype = [
        [
            //Gideon
            `Recent news has told me there is a Tarnished warrior roaming ${locations[rndlocation]}. This Tarnished is killing my eyes and ears. Find him and take him out under the guise of a recusant, poison ought to do the job. Make sure no one can recognize you.`,
            `Rumors have told me that a Tarnished warrior located in ${locations[rndlocation]} is planning to overthrow me. Rumors also tell me that he has enemies along the bloody fingers. Take the guise of a Bloody Finger and use their trademark attire and weapons to take him out.`
        ],
        [
            //D
            `I have heard of a Tarnished that has been touched by death roaming around in ${locations[rndlocation]}. Make no mistake, this is a dangerous individual afflicted by blight. As such I advice you use fire to burn out this Tarnished and anyone that might roam with him.`,
            `Deathroot has been spotted near ${locations[rndlocation]}. Unfortunately enough, it is guarded by Tarnished that follow Those Who Live in Death. Take them out, and use holy weapons to do so. Do not allow them to recover.`
        ],
        [
            //Seluvis
            `Word is that there is a Tarnished roaming ${locations[rndlocation]} of particular beauty and skill. I would like you to find them and bring them to me. I advise you use something to put them to sleep as well as some perfumers arts if you have them. Do not break them too much or burn them, I want them in pristine condition.`,
            `I have put my sight upon a Tarnished of particular strength in ${locations[rndlocation]}. Poison should bring them low with relative ease. Do not lacerate or burn the skin, I cannot work with a broken product.`
        ],
        [
            //Tanith
            `The Volcano Manor desires that you hunt down a Tarnished roaming around ${locations[rndlocation]}, they have eluded our reach for far too long. Be quick, be efficient. And once the deed is done you will be compensated for your efforts.`,
            `A Tarnished formerly associated with the Volcano Manor family has betrayed us, now plotting against us they are a threat. You will take care of this issue, and you will do so at once. This Tarnished was last seen in ${locations[rndlocation]}. Grant them no mercy.`,
            `A Tarnished located in ${locations[rndlocation]} has been helping those aligned to the Two Fingers. I want you to hunt them down efficiently and without mercy. Keep in mind, your target is likely a phantom but if a Host of Fingers happens to be alone, feel free to dispatch them.`
        ],
        [
            //Blaid
            `I have some work for you. A Tarnished located in ${locations[rndlocation]} has recently lost their way, I would like you to challenge them and give them a warrior's death. Be honorable.`,
            `A Tarnished in ${locations[rndlocation]} has given challenged me, but unfortunately I cannot answer it due to a mission of my mistress. As a favor I would like you to go in my stead. Be honorable but be wary too, he might have brought backup.`
        ],
        [
            //Jerren
            `I've heard word that a witch or witch-sympathizer roams ${locations[rndlocation]}. Be very careful as witches can use powerful magic, so I suggest you prepare for this.`,
            `Traces of forbidden magic have been found around ${locations[rndlocation]}, these traces lead to a particular Tarnished. Find this Tarnished and dispose of them, their knowledge should not spread.`
        ],
        [
            //Diallos
            `My friend, I have heard of bandits roaming ${locations[rndlocation]} with rather violent intent. Can you go and take care of them in the name of House Hoslow? You will be well compensated for your efforts.`,
            `My friend, word is that dangerous savages have been claiming ${locations[rndlocation]} as their territory, slaughtering anyone who even dares to set foot there. Kill their leader and they should scatter and leave.`
        ],
        [
            //Dung Eater
            `There is a Tarnished roaming ${locations[rndlocation]} that is still stranger to defilement. I want you to find them, and defile them. Make them rot.`,
            `Tarnished in ${locations[rndlocation]} have spoiled my quietude. Find them, kill them, and defile his remains. Make them feel the curse.`,
        ]
    ];

    let challengelist = "";

    challenges = [
        [
            //Gideon
            [
                [
                    "Target Slain: 150gold",
                    "Gankers: +200gold",
                    "First hit: +20 gold",
                    "Daggers used: +20 gold",
                    "Killed with poison: +50 gold",
                    "Witnesses left?: -50 gold"
                ],
                [150, 200, 20, 20, 50, -50]
            ],
            [
                [
                    "Target Slain: 150gold",
                    "Gankers: +200gold",
                    "First hit: +20gold",
                    "Bleed Weapons Used: +50gold",
                    "Bloody Helice used: +50gold",
                    "Riposted?: -50gold",
                    "Target Healed?: -25gold"
                ],
                [150, 200, 20, 50, 50, -50, -25]
            ]
        ],
        [
            //D
            [
                [
                    "Target Slain: 200gold",
                    "Gankers: +100gold",
                    "Fire used: +75gold",
                    "Taken a hit?: -25gold",
                    "Phantoms alive?: -50gold"
                ],
                [200, 100, 75, -25, -50]
            ],
            [
                [
                    "Target Slain: 200gold",
                    "Gankers: +100gold",
                    "Holy used: +75gold",
                    "Target healed?: -50gold",
                    "Phantoms alive?: -50gold"
                ],
                [200, 100, 75, -50, -50]
            ]
        ],
        [
            //Seluvis
            [
                [
                    "Target Slain: 100gold",
                    "Gankers: +50gold",
                    "Sleep used: +150gold",
                    "Perfumer bottles used: +50gold",
                    "Heavy weapons used?: -100gold",
                    "Fire used?: -75gold"
                ],
                [100, 50, 150, 50, -100, -75]
            ],
            [
                [
                    "Target Slain: 150gold",
                    "Gankers: +50gold",
                    "Poison used: +50gold",
                    "Perfumer bottles used: +50gold",
                    "Bleed weapons used?: -75gold",
                    "Fire used?: -75gold"
                ],
                [100, 50, 150, 50, -100, -75]
            ]
        ],
        [
            //Tanith
            [
                [
                    "Target Slain: 250gold",
                    "Gankers: +100gold",
                    "Environment used: +50gold",
                    "Target healed?: -100gold",
                    "Phantoms alive?: -75gold"
                ],
                [250, 100, 50, -100, -75]
            ],
            [
                [
                    "Target Slain: 250gold",
                    "Gankers: +100gold",
                    "Environment used: +50gold",
                    "Target healed?: -100gold",
                    "Phantoms alive?: -75gold"
                ],
                [250, 100, 50, -100, -75]
            ],
            [
                [
                    "Target Phantom Slain: 250gold",
                    "Host Slain: +50gold",
                    "Throwing Knife Kill: +50gold",
                    "Target healed?: -50gold",
                    "Target survives?: <b>Contract Failed<b>"
                ],
                [250, 50, 50, -50, "Fail"]
            ]
        ],
        [
            //Blaidd
            [
                [
                    "Target Slain: 100gold",
                    "Gankers: +100gold",
                    "Bowed: +50gold",
                    "Phantoms before host:+100gold",
                    "Healed?: -50gold",
                    "Ran away?: -100gold"
                ],
                [100, 100, 50, 100, -50, -100]
            ],
            [
                [
                    "Target Slain: 150gold",
                    "Gankers: +100gold",
                    "Bowed: +50gold",
                    "Phantoms before host:+100gold",
                    "Healed?: -50gold",
                    "Ran away?: -100gold"
                ],
                [150, 100, 50, 100, -50, -100]
            ]
        ],
        [
            //Jerren
            [
                [
                    "Target Slain: 75gold",
                    "Gankers: +75gold",
                    "Target uses magic: +75gold",
                    "Phantoms use magic:+75gold",
                    "Spell-parry: +100gold",
                    "You used magic?: -75gold"
                ],
                [75, 75, 75, 75, 100, -75]
            ],
            [
                [
                    "Target Slain: 75gold",
                    "Gankers: +75gold",
                    "Target uses magic: +75gold",
                    "Phantoms use magic:+75gold",
                    "Spell-parry: +100gold",
                    "You used magic?: -75gold"
                ],
                [75, 75, 75, 75, 100, -75]
            ]
        ],
        [
            //Diallos
            [
                [
                    "Target Slain: 150gold",
                    "Gankers: +100gold",
                    "Hoslow's Oath: +50gold",
                    "Rot used?: -100gold"
                ],
                [150, 100, 50, -100]
            ],
            [
                [
                    "Target Slain: 150gold",
                    "Gankers: +100gold",
                    "Hoslow's Oath: +50gold",
                    "Phantoms left alive: +50gold"
                ],
                [150, 100, 50, 50]
            ]
        ],
        [
            //Dung Eater
            [
                [
                    "Target Slain: 100gold",
                    "Gankers: +100gold",
                    "Rot used: +50gold"
                ],
                [100, 100, 50]
            ],
            [
                [
                    "Target Slain: 100gold",
                    "Gankers: +100gold",
                    "Rot used: +50gold"
                ],
                [100, 100, 50]
            ]
        ]
    ]

    rndrequirements = [
        [
            //Gideon
            `Invade in ${locations[rndlocation]}<br>Invade as Recusant<br>Kill phantoms first<br>Kill target`,
            `Invade in ${locations[rndlocation]}<br>Invade as Bloody Finger<br>Disguise as Blood Worshipper<br>Kill target`
        ],
        [
            //D
            `Invade in ${locations[rndlocation]}<br>Use Fire Weapons<br>Kill phantoms first<br>Kill target`,
            `Invade in ${locations[rndlocation]}<br>Use holy Weapons<br>Kill everyone`
        ],
        [
            //Seluvis
            `Invade in ${locations[rndlocation]}<br>Apply sleep to target<br>Kill target`,
            `Invade in ${locations[rndlocation]}<br>Apply poison to target<br>Kill target`
        ],
        [
            //Tanith
            `Invade in ${locations[rndlocation]}<br>Invade as Recusant<br>Kill phantoms<br>Kill target`,
            `Invade in ${locations[rndlocation]}<br>Invade as Recusant<br>Kill phantoms<br>Kill target`,
            `Invade in ${locations[rndlocation]}<br>Invade as Recusant<br>Kill phantom<br>Escape`
        ],
        [
            //Blaidd
            `Invade in ${locations[rndlocation]}<br>Hunt the target and phantoms<br>Kill phantoms first<br>Kill target`,
            `Invade in ${locations[rndlocation]}<br>Duel phantoms and target<br>Kill target`
        ],
        [
            //Jerren
            `Invade in ${locations[rndlocation]}<br>Kill mages first<br>Kill target`,
            `Invade in ${locations[rndlocation]}<br>Kill mages first<br>Kill everyone`
        ],
        [
            //Diallos
            `Invade in ${locations[rndlocation]}<br>Use Hoslow's Oath<br>Kill everyone`,
            `Invade in ${locations[rndlocation]}<br>Use Hoslow's Oath<br>Ignore phantoms<br>Kill target`
        ],
        [
            //Dung Eater
            `Invade in ${locations[rndlocation]}<br>Apply rot<br>Kill everyone`,
            `Invade in ${locations[rndlocation]}<br>Apply rot<br>Kill target`
        ]
    ]

    let randomizer = Math.floor(Math.random() * employers.length);
    globalrnd = randomizer;
    let randomizer2 = Math.floor(Math.random() * this.storytype[randomizer].length);
    globalrnd2 = randomizer2;
    let newstory = storytype[randomizer][randomizer2];
    let newemployer = employers[randomizer];
    let newchallenges = challenges[randomizer][randomizer2][0];
    globalchng = challenges[randomizer][randomizer2][1];
    let newrequirements = rndrequirements[randomizer][randomizer2];

    requirements.innerHTML = newrequirements
    employer.innerHTML = newemployer;
    story.innerHTML = newstory;
    //payments.innerHTML = newchallenges;

    challengelist = "<ul>";
    // for (var i = 0; i < challenges[randomizer][randomizer2][0].length; i++) {
    //     challengelist = challengelist + `<li>` + challenges[randomizer][randomizer2][0][i] + `<input type="checkbox" id="challengecheck" onclick="check(${challenges[randomizer][randomizer2][1][i]})"></li>`;
    // }
    const iterator = newchallenges.keys();
    for (const value of iterator) {
        challengelist = challengelist + `<li>` + newchallenges[value] + `<input type="checkbox" id="challenge${value}" onclick="check(${value})"></li>`;
    }
    challengelist = challengelist + "</ul>"
    payments.innerHTML = challengelist;
}