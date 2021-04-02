export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectuUri = "https://elmir-spotify-clone.netlify.app/";

const clientId = "28a54bf7fb744aab9b4ce820dea8e7a7";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessToken=mysupersecretkey&name=sonny
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectuUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
