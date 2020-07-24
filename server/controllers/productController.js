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
    }

}