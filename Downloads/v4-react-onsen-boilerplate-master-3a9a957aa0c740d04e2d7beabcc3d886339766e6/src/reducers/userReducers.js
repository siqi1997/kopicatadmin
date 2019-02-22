export default function reducer(
  state = {
    token: ''
  },
  action
) {
  switch (action.type) {
    case 'AUTHENTICATE': {
      return {
        ...state,
        token: action.payload
      };
    }
    default:
      return state;
  }
}
