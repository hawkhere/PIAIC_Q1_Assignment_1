let album: {
    artistName: string,
    albumTitle: string,
    numberOfTracks?: number,
}
function make_album(name: string, title: string, numberOfTracks?: number) {
    album = {
        artistName: name,
        albumTitle: title,
        numberOfTracks: numberOfTracks,
    };
    return album;
}

console.log(make_album("Hadiqa Kiayni", "Roshni"));
console.log(make_album("Hadiqa Kiayni", "Roshni", 3));
