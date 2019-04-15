

window.getMovies = (api, search) => {
    fetch('data_melp.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))
};








