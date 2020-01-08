export default class AdModel {
    id;
    name;
    description;
    price;
    type;
    photo;
    createdAt;
    updatedAt;
    tags;

    constructor(value) {
        this.id = value._id;
        this.name = value.name;
        this.description = value.description;
        this.price = value.price;
        this.type = value.type;
        this.photo = value.photo.startsWith('/images/') ? `http://localhost:3001${value.photo}` : value.photo;
        this.createdAt = value.createdAt;
        this.updatedAt = value.updatedAt;
        this.tags = value.tags;
    }
}