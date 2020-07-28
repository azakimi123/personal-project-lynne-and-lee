module.exports = {
    getReviews: (req, res) => {
        const db = req.app.get('db');

        db.reviews.get_reviews()
        .then(reviews => res.status(200).send(reviews))
        .catch(err => {res.status(500).send(console.log(err))})
    }
}