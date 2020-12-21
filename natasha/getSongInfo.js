const div = document.querySelector;
var link = 'https://theaudiodb.com/api/v1/json/1/searchtrack.php?s=john+newman&t=love+me+again';

document.write(fetch(link))

fetch(link).then((response)=>{
    return response.json();
  }).then(data=>{
    //const {title, artist} = data;
    var trackName = data["track"][0]["strTrack"];
    var albumName = data["track"][0]["strAlbum"];
    var artistName = data["track"][0]["strArtist"];
    var genreName = data["track"][0]["strGenre"];
    var linkYt = data["track"][0]["strMusicVid"];
    var artistID = data["track"][0]["strMusicBrainzArtistID"];
    console.log(trackName);
    console.log(albumName);
    console.log(artistName);
    console.log(genreName);
    console.log(linkYt);
    console.log(artistID);
  })

