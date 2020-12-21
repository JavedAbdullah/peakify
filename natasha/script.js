function getSongInfo(songTitle, artist) {
    const div = document.querySelector;
    songTitle.replace(" ", "+");
    artist.replace(" ", "+");
    var link = 'https://theaudiodb.com/api/v1/json/1/searchtrack.php?s={artist}&t={songTitle}';
    link.replace("{artist}", artist);
    link.replace("{title}", songTitle);
    document.write(fetch(link))

    fetch(link).then((response) => {
        return response.json();
    }).then(data => {
        //const {title, artist} = data;
        var trackName = data["track"][0]["strTrack"];
        var albumName = data["track"][0]["strAlbum"];
        var artistName = data["track"][0]["strArtist"];
        var genreName = data["track"][0]["strGenre"];
        var linkYt = data["track"][0]["strMusicVid"];
        var artistID = data["track"][0]["strMusicBrainzArtistID"];
        // console.log(trackName);
        // console.log(albumName);
        // console.log(artistName);
        // console.log(genreName);
        // console.log(linkYt);
        // console.log(artistID);
        var stringa_da_oggetto = JSON.stringify(trackName)
        document.getElementById("demo").innerHTML = stringa_da_oggetto;



    })
}

function getLyrics(songTitle, artist) {
    songTitle.replace(" ", "+");
    artist.replace(" ", "+");
    const div1 = document.querySelector;
    var url = 'https://api.lyrics.ovh/v1/{artist}/{songTitle}';
    url.replace("{artist}", artist);
    url.replace("{title}", songTitle);
    //document.write(fetch(link))

    fetch(url).then((response) => {
        return response.json();
    }).then(data => {
        //const {title, artist} = data;
        var lyrics = data["lyrics"];
        // console.log(lyrics);


    })
}

function getArtistInfo(artistID) {
    const div2 = document.querySelector;
    var linkk = 'http://musicbrainz.org/ws/2/artist/?query=arid:{artistID}&fmt=json';
    linkk.replace('{artistID}', artistID)

    //document.write(fetch(link))

    fetch(linkk).then((response) => {
        return response.json();
    }).then(data => {
        //const {title, artist} = data;
        var nome = data["artists"][0]["name"];
        var nascita = data["artists"][0]["life-span"]["begin"];
        var alias = data["artists"][0]["aliases"][0]["sort-name"];
        var residenza = data["artists"][0]["area"]["name"];
        var luogoDiNascita = data["artists"][0]["begin-area"]["name"];

        console.log("nome: " + nome);
        console.log("nascita" + nascita);
        console.log("alias" + alias);
        console.log("residenza" + residenza);
        console.log("luogoDiNascita" + luogoDiNascita);
    })
}

function myFunction() {
    console.log("ciaooooo funziono")
}

// function printdate() {
//     document.write("coapp");
//     document.getElementById("test").innerHTML = "fskjdsfjkndsfnjkdsfjdsfjjsdjfds";

// }