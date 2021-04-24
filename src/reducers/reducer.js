export const inititalState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE AFTER DEVELOPING
  //token:
  //"BQBYrF3mQmymNR2M2Ia1IZ20mXJlXTe_JrgyLeL3zjozw3ytmCSw9vW2EOvQhacvmqg2wOwuQxgsUi2rYJhUEbiIdJZv-LzbxGFUQcpxTi6qhC8EsaL89N2hhw17QgfVSH4PPlXFElmZGkRVIwOjBSo446imVdhhKbdK9AHnkuEC7TNt",
};
//elmir-spotify-clone.netlify.app/#access_token=BQBYrF3mQmymNR2M2Ia1IZ20mXJlXTe_JrgyLeL3zjozw3ytmCSw9vW2EOvQhacvmqg2wOwuQxgsUi2rYJhUEbiIdJZv-LzbxGFUQcpxTi6qhC8EsaL89N2hhw17QgfVSH4PPlXFElmZGkRVIwOjBSo446imVdhhKbdK9AHnkuEC7TNt&token_type=Bearer&expires_in=3600

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER__WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
