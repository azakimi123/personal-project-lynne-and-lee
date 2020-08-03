module.exports = { 
    createOrder: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.body;
        console.log('order handler hit')

        db.order.add_order({id})
        .then(order => res.status(200).send(order))
        .catch(err => {res.status(500).send(console.log(err))})

    }
}