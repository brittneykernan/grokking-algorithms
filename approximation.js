const states = ['fl', 'ny', 'dc', 'ga', 'ca', 'mn', 'ma', 'nv', 'nc', 'nd'];
const statesToCover = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const stations = {
  k95fm: [0, 1, 2, 3],
  k69la: [4, 5, 6],
  k92dc: [7, 8],
  k1071: [5, 9],
  k1011: [0, 7, 11],
};

const getUncoveredStatesForStation = (statesForStation) => {
  const neededStatesForStation = statesToCover.filter((state) =>
    statesForStation.includes(state)
  );
  return neededStatesForStation.filter(
    (state) => !statesCoveredByBestStations.includes(state)
  );
};

const stationsForBestCoverage = [];
let statesCoveredByBestStations = [];

while (statesCoveredByBestStations < statesToCover) {
  let bestStationName;
  let bestStationUncoveredStates = [];

  Object.entries(stations).map(([stationName, states]) => {
    const uncoveredStatesForStation = getUncoveredStatesForStation(states);

    if (uncoveredStatesForStation.length > bestStationUncoveredStates.length) {
      bestStationName = stationName;
      bestStationUncoveredStates = uncoveredStatesForStation;
    }
  });

  stationsForBestCoverage.push(bestStationName);
  statesCoveredByBestStations = [
    ...statesCoveredByBestStations,
    ...bestStationUncoveredStates,
  ];
}

console.log('stationsForBestCoverage', stationsForBestCoverage);
console.log('statesCoveredByBestStations', statesCoveredByBestStations);
