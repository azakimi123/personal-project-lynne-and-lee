module.exports = { 
    createOrder: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.body;
        console.log('order handler hit')

        db.order.add_order({id})
        .then(order => res.status(200).send(order))
        .catch(err => {res.status(500).send(console.log(err))})

    },

    addOrderItem: async (req, res) => {
        const db = req.app.get('db');
        const {productId} = req.body;

        console.log('count handler hit')

        const count = await db.order.count();
        let num = (count[0].count) - 1;
        
        
        const limit = await db.order.limit({num})
        let newOrderId = limit[0].order_id;

        const order = await db.order.order_items({newOrderId, productId})
        
        if(order) {
            return res.sendStatus(200)
        } else {
            return res.sendStatus(500)
        }
    },

    orderItemData: (req, res) => {
        const db = req.app.get('db');

        console.log(`data handler hit`)
        db.order.order_item_data()
        .then( data => {
            res.status(200).send(data)})
        .catch( err => res.status(500).send(console.log(err)))
    },

    orderTotal: (req, res) => {
        const db = req.app.get('db');

        console.log(`order totals hit`)
        db.order.order_totals()
        .then( data => {
            res.status(200).send(data)})
        .catch( err => res.status(500).send(console.log(err)))
    }
}