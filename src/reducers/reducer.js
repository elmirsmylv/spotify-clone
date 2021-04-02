export const inititalState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE AFTER DEVELOPING
  //token:
  //"BQBKI51wFWAIwPtuTBGJqF7odQOJxdvXOLoi5brsccUSD4aTpfAQ7okpbjc6P6iXmZPlBnHreOfKzqjomnZsgyXgXr5QUens-yL2aHWNNs4woBRSgmpSS53nfuDEj3IKZD-blBU65BBwueFT5MT5tS-nRjnI-gNKTfg4ZQk8-eh4dZop",
};

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
