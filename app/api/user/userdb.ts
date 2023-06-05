const users = [
    {
        "id": 1,
        "email": "admin@email.com",
        "slug": "pizzaria-bom-viver",
        "name": "Pizzaria Bom Viver",
        "createdAt": "2023-05-28T17:10:40.618Z",
        "updatedAt": "2023-05-28T17:10:40.618Z",
        "profile": {
            "id": 1,
            "profilePicture": "/pizzaria.png",
            "phone": "5584991956417",
            "address": "Rua Mariza Bitencourt, 41 - Centro",
            "description": "Delícias quentinhas e saborosas na palma da sua mão! Experimente as pizzas artesanais da Pizzaria Bom Viver e tenha uma explosão de sabores! 🍕🔥",
            "deliveryPrice": 5,
            "paymentMethods": "pix,dinheiro,crédito",
            "color": "#f7812e",
            "userId": 1
        },
        "timetables": [
            {
                "id": 1,
                "day": 1,
                "start": "1970-01-01T18:00:00.000Z",
                "end": "1970-01-01T22:00:00.000Z",
                "userId": 1
            },
            {
                "id": 3,
                "day": 3,
                "start": "1970-01-01T18:00:00.000Z",
                "end": "1970-01-01T22:00:00.000Z",
                "userId": 1
            },
            {
                "id": 4,
                "day": 5,
                "start": "1970-01-01T17:00:00.000Z",
                "end": "1970-01-01T18:00:00.000Z",
                "userId": 1
            },
            {
                "id": 2,
                "day": 7,
                "start": "1970-01-01T18:00:00.000Z",
                "end": "1970-01-01T23:00:00.000Z",
                "userId": 1
            }
        ]
    },
    {
        "id": 2,
        "email": "padarianova@gmail.com",
        "slug": "padaria-nova",
        "name": "Padaria Nova",
        "createdAt": "2023-05-28T17:46:20.533Z",
        "updatedAt": "2023-05-28T17:46:20.533Z",
        "profile": {
            "id": 2,
            "profilePicture": "/padaria.png",
            "phone": "5584994071801",
            "address": "Rua Derônimo Tâmara, 354",
            "description": "Pães fresquinhos e doces irresistíveis! Sinta o aroma e o sabor da tradição na Padaria Nova. Venha provar nossas delícias que vão adoçar seu dia. 🥖🥐🍰",
            "deliveryPrice": 4,
            "paymentMethods": "pix,dinheiro,credito",
            "color": "#600e09",
            "userId": 2
        },
        "timetables": []
    }
]

export default users;