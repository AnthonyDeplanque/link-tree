import axios, { AxiosRequestConfig } from "axios";

export const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
export const CLIENT_SECRET = process.env.TWITCH_SECRET;


export const getAccessToken = (): Promise<any> => {
  const clientId = CLIENT_ID;
  const clientSecret = CLIENT_SECRET;
  if (!clientId || !clientSecret) return Promise.reject(() => console.log("No clientId or clientSecret retrieved"));

  const twitchUrl: string = "https://id.twitch.tv/oauth2/token";
  const requestOptions: AxiosRequestConfig = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  }
  const requestBody: string = `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`

  return axios.post(twitchUrl, requestBody, requestOptions)
    .then(data => data.data.access_token)
    .catch(err => { throw new Error(`failed to retrieve data, ${err}`) })
}

export const getIdByUserName = (userName: string, token: string) => {
  const clientId = CLIENT_ID;
  return axios.get(`https://api.twitch.tv/helix/users?login=${userName}`, {
    headers: {
      'Client-ID': clientId,
      'Authorization': `Bearer ${token}` // Assure-toi d'avoir un jeton d'accès valide
    }
  }).then(data => data.data.data[0].id)

};

export const fetchClips = (broadcasterId: string, token: string): Promise<any> => {
  const clientId = CLIENT_ID;
  if (!clientId) return Promise.reject();


  const config = {
    headers: {
      'Client-ID': clientId,
      'Authorization': `Bearer ${token}`
    }
  };

  return axios.get(`https://api.twitch.tv/helix/clips?broadcaster_id=${broadcasterId}`, config)
    .then(data => data.data)
    .catch(err => { throw new Error(`failed to retrieve clips, ${err}`) })

}