
var oldcycles = {'Apr 10': {"Beachside": "3", "Hillside": "2", "Parkside": "1"},
          'Apr 17': {"Beachside": "4", "Hillside": "3", "Parkside": "2"},
          'Apr 24': {"Beachside": "5", "Hillside": "4", "Parkside": "3"},
          'May 1': {"Beachside": "1", "Hillside": "5", "Parkside": "4"}
        };
var cycles = {'5/15': {"Beachside": "3", "Hillside": "2", "Parkside": "1"},
          '5/22': {"Beachside": "4", "Hillside": "3", "Parkside": "2"},
          '5/29': {"Beachside": "5", "Hillside": "4", "Parkside": "3"},
          '6/5': {"Beachside": "1", "Hillside": "5", "Parkside": "4"}
        };


function get_cycle(date, place) {
            // console.log(cycles[date][place]);
            return cycles[date][place];
}
module.exports = {
  get_cycle
};

