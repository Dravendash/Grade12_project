fetch('shoes.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('shoe-collection');
        
        data.forEach(shoe => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <img src="images/${shoe.image}" alt="${shoe.name}">
                <h2>${shoe.name}</h2>
                <p>${shoe.description}</p>
                <p class="price">$${shoe.price}</p>
            `;
            
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
