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
    }


}