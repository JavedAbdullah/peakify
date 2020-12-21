const formArtist = document.getElementById('formArtist');
const formSong = document.getElementById('formSong');
const search = document.getElementById('search');
const result = document.getElementById('result');
const YTVid = document.getElementById('YTVid');
const YTRedirect = document.getElementById('YTRedirect');

const lyricsApiURL = 'https://api.lyrics.ovh/v1/'
const songApiURL = 'https://theaudiodb.com/api/v1/json/1/searchtrack.php?s='
const artistApiURL = 'http://musicbrainz.org/ws/2/artist/?query=arid:'

function getYoutube(song, artist){
    song.replace(" ", "+");
    artist.replace(" ", "+");
    var link = "https://www.youtube.com/results?search_query="+song+"+"+artist;
    return link;
}

function getSongInfo(songTitle, artist) {
    const div = document.querySelector;
    songTitle.replace(" ", "+");
    artist.replace(" ", "+");
    var link = songApiURL + artist + '&t=' + songTitle;

    fetch(link).then((response) => {
        return response.json();
    }).then(data => {

        try{
            var trackName = data["track"][0]["strTrack"];
            var albumName = data["track"][0]["strAlbum"];
            var artistName = data["track"][0]["strArtist"];
            var genreName = data["track"][0]["strGenre"];
            var linkYt = data["track"][0]["strMusicVid"];

            if (linkYt != null){
                linkYt = linkYt.replace("watch?v=", "embed/");
                document.getElementById('YTVid').src=linkYt;
                document.getElementById('YTVid').width = 720;
                document.getElementById('YTVid').height = 480;
                document.getElementById('YTRedirect').style = "display:none; align-self:center";
                document.getElementById('YTRedirect').href = linkYt;
            }
            else
            {
                document.getElementById('YTVid').width = 0;
                document.getElementById('YTVid').height = 0;
                document.getElementById('YTRedirect').style = "display:block; align-self:center";
            }

            var artistID = data["track"][0]["strMusicBrainzArtistID"];
            var image = data["track"][0]["strTrack3DCase"];

            document.getElementById("trackName").innerHTML = "Track: "+trackName;
            document.getElementById("albumName").innerHTML = "Album: "+albumName;
            document.getElementById("artistName").innerHTML = "Artist: "+artistName;
            if (genreName != null){
                document.getElementById("genreName").innerHTML = "Genre: "+genreName;
            }

            getArtistInfo(artistID);

            if (image == null){
                document.getElementById("myImage").src="peakylogo.png";
            }else{
                document.getElementById("myImage").src=image;
            }
            
            getLyrics(trackName, artistName);
        }
        catch (e) 
        {
            alert("song not found");
        }

    })
}

function getLyrics(songTitle, artist) {
    songTitle.replace(" ", "+");
    artist.replace(" ", "+");
    const div1 = document.querySelector;
    var url = lyricsApiURL + artist + "/" + songTitle

    fetch(url).then((response) => {
        return response.json();
    }).then(data => {
        var lyrics = data["lyrics"];
        lyrics = lyrics.replaceAll("\n\n", "<br/>");
        console.log(lyrics);
        document.getElementById("lyrics").innerHTML = lyrics;
    })

}

function getAge (birthday){
    birthday = new Date(birthday);
    var today = new Date();

    var years = (today.getFullYear() - birthday.getFullYear());

    if(today.getMonth()<birthday.getMonth() || today.getMonth()==birthday.getMonth() && today.getDate()<birthday.getDate()) {
        years--;
    }
    return years;
}

function getArtistInfo(artistID) {
    const div2 = document.querySelector;
    var linkk = artistApiURL + artistID + "&fmt=json";

    fetch(linkk).then((response) => {
        return response.json();
    }).then(data => {

        var name = data["artists"][0]["name"];
        var birthDay = data["artists"][0]["life-span"]["begin"];
        var adress = data["artists"][0]["area"]["name"];
        var birthPlace = data["artists"][0]["begin-area"]["name"];
        var deathDay = data["artists"][0]["life-span"]["end"];

        console.log("nome: " + name);
        console.log("nascita" + birthDay);
        console.log("residenza" + adress);
        console.log("luogoDiNascita" + birthPlace);

        document.getElementById("artistNameInfo").innerHTML = "Info about: "+name;
        document.getElementById("artistBirthday").innerHTML = "Birthday: "+birthDay;
        document.getElementById("artistResidence").innerHTML = "Residence: "+adress;
        document.getElementById("artistBirthplace").innerHTML = "Birthplace: "+birthPlace;
        if(deathDay != null){
            console.log("death day" + deathDay);
            document.getElementById("artistExtraInfo").innerHTML = "Deathday: "+deathDay;
        }
        else{
            var age = getAge(birthDay);
            document.getElementById("artistExtraInfo").innerHTML = "Age: "+age;
        }
    })
}

