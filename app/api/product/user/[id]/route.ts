import { NextResponse } from "next/server";

const items = [
    [
        {
            "id": 1,
            "image": "https://www.sabornamesa.com.br/media/k2/items/cache/513d7a0ab11e38f7bd117d760146fed3_XL.jpg",
            "name": "Pizza de Calabresa G",
            "description": "Pizza de calabresa com muçarela e molho de tomate",
            "price": 45,
            "createdAt": "2023-05-28T17:46:20.545Z",
            "updatedAt": "2023-05-28T17:46:20.545Z",
            "userId": 1
        },
        {
            "id": 2,
            "image": null,
            "name": "Pizza de Calabresa M",
            "description": "Pizza de calabresa com muçarela e molho de tomate",
            "price": 35,
            "createdAt": "2023-05-28T17:46:20.545Z",
            "updatedAt": "2023-05-28T17:46:20.545Z",
            "userId": 1
        },
        {
            "id": 3,
            "image": "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-mussarela-1.jpg",
            "name": "Pizza de Mussarela P",
            "description": "Pizza de mussarela com molho de tomate",
            "price": 20,
            "createdAt": "2023-05-28T17:46:20.545Z",
            "updatedAt": "2023-05-28T17:46:20.545Z",
            "userId": 1
        },
        {
            "id": 4,
            "image": null,
            "name": "Pizza de Calabresa P",
            "description": "Pizza de calabresa com muçarela e molho de tomate",
            "price": 25,
            "createdAt": "2023-05-28T17:46:20.545Z",
            "updatedAt": "2023-05-28T17:46:20.545Z",
            "userId": 1
        },
        {
            "id": 5,
            "image": null,
            "name": "Pizza de Frango P",
            "description": "Pizza de frango com muçarela e molho de tomate",
            "price": 27,
            "createdAt": "2023-05-28T17:46:20.545Z",
            "updatedAt": "2023-05-28T17:46:20.545Z",
            "userId": 1
        },
        {
            "id": 6,
            "image": null,
            "name": "Pizza de Mussarela G",
            "description": "Pizza de mussarela com molho de tomate",
            "price": 40,
            "createdAt": "2023-05-28T17:46:20.545Z",
            "updatedAt": "2023-05-28T17:46:20.545Z",
            "userId": 1
        },
        {
            "id": 7,
            "image": null,
            "name": "Pizza de Frango M",
            "description": "Pizza de frango com muçarela e molho de tomate",
            "price": 37,
            "createdAt": "2023-05-28T17:46:20.545Z",
            "updatedAt": "2023-05-28T17:46:20.545Z",
            "userId": 1
        },
        {
            "id": 12,
            "image": null,
            "name": "Pizza de Mussarela M",
            "description": "Pizza de mussarela com molho de tomate",
            "price": 30,
            "createdAt": "2023-05-28T17:46:20.545Z",
            "updatedAt": "2023-05-28T17:46:20.545Z",
            "userId": 1
        }
    ],
    [
        {
            "id": 8,
            "image": "/paofrances.jpg",
            "name": "Pão Francês",
            "description": "Pão tradicional da padaria",
            "price": 1.5,
            "createdAt": "2023-05-28T17:46:20.545Z",
            "updatedAt": "2023-05-28T17:46:20.545Z",
            "userId": 2
        },
        {
            "id": 9,
            "image": "/bolodechocolate.jpg",
            "name": "Bolo de Chocolate",
            "description": "Bolo de chocolate fofinho e saboroso",
            "price": 20,
            "createdAt": "2023-05-28T17:46:20.550Z",
            "updatedAt": "2023-05-28T17:46:20.550Z",
            "userId": 2
        },
        {
            "id": 10,
            "image": null,
            "name": "Sonho de Creme",
            "description": "Sonho recheado com creme de baunilha",
            "price": 2,
            "createdAt": "2023-05-28T17:46:20.551Z",
            "updatedAt": "2023-05-28T17:46:20.551Z",
            "userId": 2
        },
        {
            "id": 11,
            "image": null,
            "name": "Croissant",
            "description": "Croissant folhado e crocante",
            "price": 3.5,
            "createdAt": "2023-05-28T17:46:20.551Z",
            "updatedAt": "2023-05-28T17:46:20.551Z",
            "userId": 2
        },
        {
            "id": 13,
            "image": null,
            "name": "Torta de Frango",
            "description": "Torta salgada de frango com catupiry",
            "price": 15,
            "createdAt": "2023-05-28T17:46:20.551Z",
            "updatedAt": "2023-05-28T17:46:20.551Z",
            "userId": 2
        },
        {
            "id": 14,
            "image": null,
            "name": "Pão de Queijo",
            "description": "Delicioso pão de queijo mineiro",
            "price": 2.5,
            "createdAt": "2023-05-28T17:46:20.551Z",
            "updatedAt": "2023-05-28T17:46:20.551Z",
            "userId": 2
        },
        {
            "id": 15,
            "image": null,
            "name": "Pão Integral",
            "description": "Pão integral com grãos e sementes",
            "price": 2,
            "createdAt": "2023-05-28T17:46:20.551Z",
            "updatedAt": "2023-05-28T17:46:20.551Z",
            "userId": 2
        },
        {
            "id": 16,
            "image": "https://ribeirao.emporiotartufo.com.br/image/cache/catalog/Irani-Maggiore/125523-COXINHA-FRANGO-SEM-GLUTEN-200G-IRANI-MAGGIORE-a-550x367w.jpg",
            "name": "Coxinha de Frango",
            "description": "Coxinha de frango com massa sequinha",
            "price": 2.5,
            "createdAt": "2023-05-28T17:46:20.552Z",
            "updatedAt": "2023-05-28T17:46:20.552Z",
            "userId": 2
        },
        {
            "id": 17,
            "image": null,
            "name": "Pão de Hambúrguer",
            "description": "Pão especial para hambúrgueres",
            "price": 1.8,
            "createdAt": "2023-05-28T17:46:20.552Z",
            "updatedAt": "2023-05-28T17:46:20.552Z",
            "userId": 2
        },
        {
            "id": 18,
            "image": null,
            "name": "Pastel de Carne",
            "description": "Pastel frito recheado com carne moída",
            "price": 3,
            "createdAt": "2023-05-28T17:46:20.552Z",
            "updatedAt": "2023-05-28T17:46:20.552Z",
            "userId": 2
        }
    ]
]


export async function GET(request: Request, { params } : { params: { id: number } }) {
    const array = items[params.id - 1];
    
    if (!array) {
        return new Response(null, { status: 404 });
    }
    
    return NextResponse.json(array);
}
