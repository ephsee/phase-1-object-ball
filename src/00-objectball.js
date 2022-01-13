function gameObject() {
    const theData = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { "number": 0, "shoe": 16, "points": 22,
                    "rebounds": 12, "assists": 12, "steals": 3, "blocks": 1, 
                    "slamDunks": 1 },
                "Reggie Evans": { "number": 30, "shoe": 14, "points": 12, 
                    "rebounds": 12, "assists": 12, "steals": 12, "blocks": 12, 
                    "slamDunks": 7 },
                "Brook Lopez": { "number": 11, "shoe": 17, "points": 17,
                    "rebounds": 19, "assists": 10, "steals": 3, "blocks": 1,
                    "slamDunks": 15 },
                "Mason Plumlee": { "number": 1, "shoe": 19, "points": 26,
                    "rebounds": 12, "assists": 6, "steals": 3, "blocks": 8,
                    "slamDunks": 5 },
                "Jason Terry": { "number": 31, "shoe": 15, "points": 19,
                    "rebounds": 2, "assists": 2, "steals": 4, "blocks": 11,
                    "slamDunks": 1 }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": { "number": 4, "shoe": 18, "points": 10,
                    "rebounds": 1, "assists": 1, "steals": 2, "blocks": 7,
                    "slamDunks": 2 },
                "Bismak Biyombo": {  "number": 0, "shoe": 16, "points": 12,
                    "rebounds": 4, "assists": 7, "steals": 7, "blocks": 15,
                    "slamDunks": 10 },
                "DeSagna Diop": { "number": 2, "shoe": 14, "points": 24,
                    "rebounds": 12, "assists": 12, "steals": 4, "blocks": 5,
                    "slamDunks": 5 },
                "Ben Gordon": { "number": 8, "shoe": 15, "points": 33,
                    "rebounds": 3, "assists": 2, "steals": 1, "blocks": 1,
                    "slamDunks": 0 },
                "Brendan Haywood": { "number": 33, "shoe": 15, "points": 6,
                    "rebounds": 12, "assists": 12, "steals": 22, "blocks": 5,
                    "slamDunks": 12 }
            }
        }
    }
    return theData
}

function locatePlayer(playerName) {
    const gameData = gameObject()
    for (let key in gameData) {
        const theTeam = gameData[key].players
        for (let player in theTeam) {
            if (playerName === player) {
                return theTeam[player]
            }
        }
    }
}

const numPointsScored = ( playerName ) => {
    //cool rabbithold!  :)
    //locatePlayer(playerName) && locatePlayer(playerName).points 

    const found = locatePlayer(playerName)
    if (found) {
        return found.points
    } 
    return 'player not found'
}

function shoeSize( playerName ) {
    const found = locatePlayer(playerName)
    if (found) {
        return found.shoe
    } 
    return 'player not found'
}

function teamColors(nameOfTeam) {
    const gameData = gameObject()
    for (let key in gameData) {
       if (gameData[key].teamName === nameOfTeam) {
           return gameData[key].colors
       }
    }
}

function teamNames() {
    const gameData = gameObject()
    return Object.keys(gameData).map(team => {
        return gameData[team].teamName
    })
}

function playerNumbers(nameOfTeam) {
    // returns an array of the jersey number's for that team.
    const gameData = gameObject()

    // our first for loop, to iterate through both "home" and "away" keys
    for (let key in gameData) {

        // decare a variable for readability
        const theTeam = gameData[key]

        // check to see if this is the team we are looking for
        if (theTeam.teamName === nameOfTeam) {

            /* if yes, return a new array of the players' numbers
               First, Object.keys makes an array we can call map on,
               then map just returns the player's number
               */
            return Object.keys(theTeam.players).map(player => {
                const playerObject = theTeam.players[player]
                return playerObject.number
            })
        }
    }
}

function playerStats(nameOfPlayer) {
    return locatePlayer(nameOfPlayer)
}

/*
- Build a function, `bigShoeRebounds`, that will return the number of rebounds
  associated with the player that has the largest shoe size. Break this one
  down into steps:
  - First, find the player with the largest shoe size
  - Then, return that player's number of rebounds
  - Remember to think about return values here. Use `debugger` to drop into
    your function and understand what it is returning and why.
*/

function bigShoeRebounds() {
    const gameData = gameObject()

    const memory = {shoesize: 0}

    // this first for lets us look at both "home" and "away" key values
    for (let key in gameData) {
        const theTeam = gameData[key]

        const thePlayers = theTeam.players
        for (let playerName in thePlayers) {
            const player = thePlayers[playerName]

            if (player.shoe > memory.shoesize) {
                memory.shoesize = player.shoe
                memory.rebounds = player.rebounds
            }
        }
    }
    return memory.rebounds
}