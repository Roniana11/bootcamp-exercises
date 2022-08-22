
const SongsManager = function () {
  const URL = "https://www.youtube.com/watch?v=";
  const _songs ={
  }

  const addSong = function (song,url) {
    _songs[song] = url.split('').splice(32).join('');
  };

  const getSong = function (name) {
    return `${URL}${_songs[name]}`;
  };

  return {
    addSong,
    getSong,
  };
};


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ