import { NextResponse } from "next/server";

const array = [
    {
        "id": 1,
        "name": "Pizza de Calabresa G",
        "description": "Pizza de calabresa com muçarela e molho de tomate",
        "price": 45,
        "createdAt": "2023-04-08T03:18:43.054Z",
        "updatedAt": "2023-04-08T03:18:43.054Z"
    },
    {
        "id": 2,
        "name": "Pizza de Calabresa P",
        "description": "Pizza de calabresa com muçarela e molho de tomate",
        "price": 25,
        "createdAt": "2023-04-08T03:18:43.054Z",
        "updatedAt": "2023-04-08T03:18:43.054Z"
    },
    {
        "id": 3,
        "name": "Pizza de Mussarela P",
        "description": "Pizza de mussarela com molho de tomate",
        "price": 20,
        "createdAt": "2023-04-08T03:18:43.054Z",
        "updatedAt": "2023-04-08T03:18:43.054Z"
    },
    {
        "id": 4,
        "name": "Pizza de Calabresa M",
        "description": "Pizza de calabresa com muçarela e molho de tomate",
        "price": 35,
        "createdAt": "2023-04-08T03:18:43.055Z",
        "updatedAt": "2023-04-08T03:18:43.055Z"
    },
    {
        "id": 5,
        "name": "Pizza de Mussarela G",
        "description": "Pizza de mussarela com molho de tomate",
        "price": 40,
        "createdAt": "2023-04-08T03:18:43.055Z",
        "updatedAt": "2023-04-08T03:18:43.055Z"
    },
    {
        "id": 6,
        "name": "Pizza de Frango P",
        "description": "Pizza de frango com muçarela e molho de tomate",
        "price": 27,
        "createdAt": "2023-04-08T03:18:43.055Z",
        "updatedAt": "2023-04-08T03:18:43.055Z"
    },
    {
        "id": 7,
        "name": "Pizza de Frango G",
        "description": "Pizza de frango com muçarela e molho de tomate",
        "price": 47,
        "createdAt": "2023-04-08T03:18:43.055Z",
        "updatedAt": "2023-04-08T03:18:43.055Z"
    },
    {
        "id": 8,
        "name": "Pizza de Calabresa G",
        "description": "Pizza de calabresa com muçarela e molho de tomate",
        "price": 45,
        "createdAt": "2023-04-08T03:18:56.483Z",
        "updatedAt": "2023-04-08T03:18:56.483Z"
    },
    {
        "id": 9,
        "name": "Pizza de Calabresa P",
        "description": "Pizza de calabresa com muçarela e molho de tomate",
        "price": 25,
        "createdAt": "2023-04-08T03:18:56.483Z",
        "updatedAt": "2023-04-08T03:18:56.483Z"
    },
    {
        "id": 10,
        "name": "Pizza de Calabresa M",
        "description": "Pizza de calabresa com muçarela e molho de tomate",
        "price": 35,
        "createdAt": "2023-04-08T03:18:56.483Z",
        "updatedAt": "2023-04-08T03:18:56.483Z"
    },
    {
        "id": 11,
        "name": "Pizza de Mussarela M",
        "description": "Pizza de mussarela com molho de tomate",
        "price": 30,
        "createdAt": "2023-04-08T03:18:56.483Z",
        "updatedAt": "2023-04-08T03:18:56.483Z"
    },
    {
        "id": 12,
        "name": "Pizza de Frango P",
        "description": "Pizza de frango com muçarela e molho de tomate",
        "price": 27,
        "createdAt": "2023-04-08T03:18:56.483Z",
        "updatedAt": "2023-04-08T03:18:56.483Z"
    },
    {
        "id": 13,
        "name": "Pizza de Frango M",
        "description": "Pizza de frango com muçarela e molho de tomate",
        "price": 37,
        "createdAt": "2023-04-08T03:18:56.484Z",
        "updatedAt": "2023-04-08T03:18:56.484Z"
    },
    {
        "id": 14,
        "name": "Pizza de Frango G",
        "description": "Pizza de frango com muçarela e molho de tomate",
        "price": 47,
        "createdAt": "2023-04-08T03:18:56.484Z",
        "updatedAt": "2023-04-08T03:18:56.484Z"
    },
    {
        "id": 15,
        "name": "Pizza de Mussarela P",
        "description": "Pizza de mussarela com molho de tomate",
        "price": 20,
        "createdAt": "2023-04-08T03:18:56.483Z",
        "updatedAt": "2023-04-08T03:18:56.483Z"
    },
    {
        "id": 16,
        "name": "Pizza de Mussarela G",
        "description": "Pizza de mussarela com molho de tomate",
        "price": 40,
        "createdAt": "2023-04-08T03:18:56.483Z",
        "updatedAt": "2023-04-08T03:18:56.483Z"
    }
]


export async function GET(request: Request) {
    return NextResponse.json(array);
  }
  