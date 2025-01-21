export const getCats = async() => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_bWS51P6s8kSm4oaqWsd4EG09fXiqKNJC6JZkyuZVdexqsxPVKOthy5td7izuGGTP`;

    try {
        const response = await fetch(url, {
            headers: {
              'content-type': 'application/json',
            },
          });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка получения:", error);
    }
}

export default getCats;