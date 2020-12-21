const div2 = document.querySelector;
const linkk = 'http://musicbrainz.org/ws/2/artist/?query=arid:589ef702-7f3a-4a1c-8f2c-4727005cfc0e&fmt=json';


//document.write(fetch(link))

fetch(linkk).then((response)=>{
        return response.json();
    }).then(data=>{
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


