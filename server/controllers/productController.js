module.exports = {
    allProducts: (req, res) => {
        const db = req.app.get('db');
        // console.log('getting products')
        db.product.get_all_products()
        .then(products => res.status(200).send(products))
        .catch(err => {res.status(500).send(console.log(err))})
    }
}