
let products = [
    {id :1 , title:'HP', description:'Good', price:99},
    {id :2 , title:'DELL', description:'Very-Good', price:99},
    {id :3 , title:'TOSHIBA', description:'bad', price:99}
    //{id :1 , title:'APPLE', description:'Excellent', price:99}
];
const counter = 4;

module.exports = class product {
    constructor(id,title,description,price){
        this.id=id;
        this.title=title;
        this.description=description;
        this.price=price;
    }

    static getAllProduct(){
        return products;
    }

    static getProductById(id){
        return products.find(p=>p.id == id);
    }

    save(){
        this.id=counter++;
        products.push(this);
    }

    updateById(id){
        const index = products.findIndex(p=>p.id == id);
        if(index > -1){
            products[index]=this;
        }
        else{
           throw new Error(`product with ID: ${id} is not found`);
        }
    }

    static deleteById(id){
        const index = products.findIndex(p=>p.id == id);
        if(index > -1){
            products.splice(index,1);
        }else{
            throw new Error('product Id can not be find');
        }
    }
}