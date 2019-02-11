// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages(channel) {
  // TODO: Api call! For now, simulate a DB
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  // return fetch(url)
  //   .then(response => response.json())
  //   .then((data) => {
  //     return {
  //       type: FETCH_MESSAGES,
  //       payload: data.messages
  //     };
  //   });
  const promise = fetch(url).then(r => r.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}
