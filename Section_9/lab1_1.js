const game = {
    team1: 'Real Madrid',
    team2: 'Barcelona fc',
    players: [
        [
            'Thibaut Courtois',
            'Dani Carvajal',
            'Sergio Ramos',
            'Raphael Varane',
            'Marcelo',
            'Luka Modric',
            'Toni Kroos',
            'Casemiro',
            'Eden Hazard',
            'Karim Benzema',
            'Vinicius Junior',
        ],
        [
            'Marc-André ter Stegen',
            'Gerard Piqué', 
            'Jordi Alba',
            'Sergio Busquets',
            'Frenkie de Jong',
            'Antoine Griezmann',
            'Philippe Coutinho',
            'Pedri',
            'Lionel Messi',
            'Ousmane Dembélé',
            'Neymar JR',
        ],

    ],
    score: '4:0',
    scored: ['Vinicius Junior', 'Toni Kroos', 'Vinicius Junior', 'Karim Benzema'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 11.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1 đặt tên<Phân rã> các phần tử
const [players1, players2] = game.players;
console.log(players1, players2);
// cách 2
//const {team1, team2} = game



// 2
const [gk, ...fieldPlayers1] = players1;
console.log(gk, players1);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4 
const players1Final = [...players1, 'Ronaldo', 'essien', 'Varane'];

//5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//6
const printGoals = function(...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
}

// printGoals('Vinicius Junior', 'Toni Kroos', 'Vinicius Junior', 'Karim Benzema');
// printGoals('Vinicius Junior', 'Toni Kroos');
printGoals(...game.scored);

// 7
team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');