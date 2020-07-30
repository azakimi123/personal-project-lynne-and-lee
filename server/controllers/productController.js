module.exports = {
    allProducts: (req, res) => {
        const db = req.app.get('db');
        // console.log('getting products')
        db.product.get_all_products()
        .then(products => res.status(200).send(products))
        .catch(err => {res.status(500).send(console.log(err))})
    },

    getOneProduct: (req, res) => {
        const db = req.app.get('db');

        const {id} = req.params;

        db.product.get_one_product({id})
        .then(product => res.status(200).send(product))
        .catch(err => {res.status(500).send(console.log(err))})
    },

    addItem: (req, res) => {
        const db = req.app.get('db');

        const {amount} = req.body;
        const {id} = req.params;

        console.log(id, amount)

        db.product.add_item({id, amount})
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err))
    },

    editProduct: (req, res) => {
        const db = req.app.get('db')

        const {name, price, description, image1, image2, image3} = req.body;
        const {id} = req.params;

        console.log(req.body)
        db.product.edit_product({name, price, description, image1, image2, image3, id})
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err))
    },

    addNewProduct: (req, res) => {
        const db = req.app.get('db')

        const {name, price, description, image1, image2, image3} = req.body;
        db.product.add_new_product({name, price, description, image1, image2, image3})
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err))
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const{id} = req.params;

        console.log('delete function hit')
        db.product.delete_product({id})
        .then( () => res.sendStatus(200))
        .catch(err => console.log(err))
    }


}