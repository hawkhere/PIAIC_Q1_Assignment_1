let album;
function make_album(name, title, numberOfTracks) {
    album = {
        artistName: name,
        albumTitle: title,
        numberOfTracks: numberOfTracks,
    };
    return album;
}
console.log(make_album("Hadiqa Kiayni", "Roshni"));
console.log(make_album("Hadiqa Kiayni", "Roshni", 3));
export {};
