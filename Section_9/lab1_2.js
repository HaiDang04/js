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
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
for(const [i, player] of game.scored.entries())
console.log(`goal ${i + 1}: ${player}`);

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3
for(const [team, odd] of Object.entries(game.odds)){
    const team5tr = team === 'x' ? 'draw' : `victory ${game[team]}`;

console.log(`Odd of ${team5tr} ${odd}`);
}




