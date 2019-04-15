

window.getRestaurants = () => {
    fetch('data_melp.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            paintDates(data);
        })
}

document.getElementById("btnAll").addEventListener("click", getRestaurants);


const paintDates = (data) => {
    document.getElementById("title").style.display = "none";
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].id);


        document.getElementById("cards").innerHTML += `

        <div class="col-md-4 card border-danger" style="max-width: 18rem;">
        <div class="card-header" style="font-weight: bolder;">${data[i].name}</div>
        <div class="card-body">
            <p class="card-text-info">${data[i].contact.site}</p>
            <p class="card-text-info">${data[i].contact.phone}</p>
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#${data[i].id}">More Info</button>
        </div>
        </div> 
        
        <!-- Modal -->
        <div class="modal fade" id="${data[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"  style="font-weight: bolder;">${data[i].name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>RATING: ${data[i].rating}</p>
                <p>EMAIL: ${data[i].contact.email}</p>
                <p>STREET: ${data[i].address.street}</p>
                <p>CITY: ${data[i].address.city}</p>
                
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        `;
    }

    document.getElementById("btnAll").style.display="none";

}


