let catalog = [
    { 
        "title":"Orange",
        "category": "fruits",
        "price": 12.99,
        "image":"Orange.jpeg",
        "id":"1",
    },
    { 
        "title":"Banana",
        "category": "fruits",
        "price": 11.99,
        "image":"banana.png",
        "id":"2",
    },
    { 
        "title":"Steak",
        "category": "farm",
        "price": 8.99,
        "image":"Steak.jpeg",
        "id":"3",
    },
    { 
        "title":"Strawberry",
        "category": "fruits",
        "price": 12.99,
        "image":"strawberry.jpeg",
        "id":"4",
    },
    { 
        "title":"Milk",
        "category": "groseries",
        "price": 8.99,
        "image":"milk.jpg",
        "id":"5",
    },
    { 
        "title":"Eegs",
        "category": "farm",
        "price": 8.99,
        "image":"Eegs.jpeg",
        "id":"6",
    },
    { 
        "title":"Coffee",
        "category": "groseries",
        "price": 12.99,
        "image":"coffee.jpg",
        "id":"7",
    },
    { 
        "title":"Capsules",
        "category": "merchandise",
        "price": 15.99,
        "image":"Organika.jpg",
        "id":"8",
    },
];
//a component its only a fancy name that react gives to functions

class DataService {

    getProducts() {
        return catalog;
    }
}

export default DataService;