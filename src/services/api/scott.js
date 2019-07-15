import axios from "axios"

export default {

    getTrending() {

        return axios.get('https://scot-api.steem-engine.com/get_discussions_by_trending?token=BLQ&limit=20&tag=bloque64')
            .then(response => {

                return(response.data)
            })
    }
}