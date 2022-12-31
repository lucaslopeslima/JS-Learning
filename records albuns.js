// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    let objId = records[id]
    let checkProp = objId.hasOwnProperty(prop)

        if(prop != "tracks" && value != ""){
              objId[prop] = value
          } else if (prop == "tracks" && checkProp == false){
            objId[prop] = []
            objId[prop].push(value)
          } else if (prop == "tracks" && value != ""){
            objId[prop].push(value)
          } else if (value == ""){
            delete objId[prop]
          } 
    console.log(objId.hasOwnProperty(prop))
    console.log(records[id]);
  }
  
  //updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
  //updateRecords(recordCollection, 2548, "artist", "")
  //updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
  //updateRecords(recordCollection, 2468, "tracks", "Free")
  //updateRecords(recordCollection, 2548, "tracks", "")
  //updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
  
  
  