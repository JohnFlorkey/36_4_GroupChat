const axios = require('axios');

const headers = {
    headers: {
        "Accept": "application/json",
        "User-Agent": "36_4_GroupChat (https://github.com/JohnFlorkey/36_4_GroupChat.git)"
    }
};
async function getJoke() {
    try {
        const response = await axios.get('https://icanhazdadjoke.com', headers);

        if (response.status !== 200)
            return "Error: No jokes right now";
    
        return response.data.joke;
    } catch {
        return "Error: No jokes right now";
    }
}

module.exports = getJoke;