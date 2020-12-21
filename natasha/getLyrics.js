
    const div1 = document.querySelector;
    const url = 'https://api.lyrics.ovh/v1/john+newman/love+me+again';

    //document.write(fetch(link))

    fetch(url).then((response)=>{
        return response.json();
    }).then(data=>{
        //const {title, artist} = data;
        var lyrics = data["lyrics"];
        console.log(lyrics);
    })
