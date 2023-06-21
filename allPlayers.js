// *FETCHING THE DATA

const getAllPlayers = () => {
  const url = "https://www.balldontlie.io/api/v1/stats?seasons[]=2022";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const playersData = result.data;
      console.log("games :>> ", playersData);
      controller(playersData);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

// *PLAYER TABLE DATA
const createPlayerTable = (playersData) => {
  let table = document.getElementById("playerTable");

  console.log("players data table", playersData);

  playersData.forEach((player) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerText = player.player.first_name;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = player.player.last_name;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    column3.innerText = player.player.position;
    row.appendChild(column3);

    let column4 = document.createElement("td");
    column4.innerText = player.team.full_name;
    row.appendChild(column4);

    let column5 = document.createElement("td");
    const showMoreBtn = document.createElement("Button");
    showMoreBtn.classList.add("showMoreBtn");
    // console.log(showMoreBtn);
    // console.log(
    //   "here is the value of the player.player.id nested property which varies for each iteration of our loop",
    //   player.player.id
    // );
    showMoreBtn.value = player.player.id;
    console.log("showMoreBtn.value =", showMoreBtn.value);
    showMoreBtn.innerText = "Show More";
    showMoreBtn.addEventListener("click", handClick);

    column5.appendChild(showMoreBtn);
    row.appendChild(column5);
  });
};
const btn = document.getElementsByClassName("showMoreBtn");
console.log("Player ID :>> ", btn);

//* 3 GENERATE DROP DOWN
// const createDropDown = (playersData) => {
//   //   console.log("games in CreateDropdownFunction", playersData);
//   const dropdown = document.getElementById("leagueDropdown");

//   const competitionsArray = playersData.map((playersData) => {
//     return playersData.last_name;
//   });
// };

//* 4 MAKE CONTROLLER FUNCTION

function controller(playersData) {
  console.log("controllers", playersData);
  //get the data
  //we call fetchData outside of this function
  // build table with all data
  createPlayerTable(playersData);
  addEventListeners(playersData);
  console.count;
  //generate DropDown filter options
  //   createDropDown(playersData);
  //create filter functions
  //   setEventListeners(playersData);
  // set event listeners
}

getAllPlayers();

// !getting season average with event
// *Adding player id into quea
// create button in ID column - DOM manipulation
// ID of the button is ID of Player (player.player.id)
// create handleButtonClick(event) function (what we want to happen when click happens) - have console log (event) to see if it recognized
// add eventlisteners to each button - onlcick event.pass hanlde function as callback
// this is what i will pass as a callback
// from here, event.target.value must be made into variable which is then placed at the end of the season average URL

// *URL FOR PLAYERS SEASON AVERAGE
// let averagesUrl = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`;
// let id = 117;

const handClick = (event) => {
  console.log("event", event);
};

// *event listener added for show more
const addEventListeners = (playersData) => {
  console.log("in event listener", playersData);
  const showMoreBtn = document.getElementsByClassName("showMoreBtn");
  console.log(showMoreBtn);
};
