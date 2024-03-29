export default {
    namespaced: true,
    state: {
        reviewAmount: 4,
        reviews: [
            {
                name: "Agbaja Jacob",
                location: "Ireland",
                review: "The experience I had with Hermes Autos was about as seamless as possible. They got back to me with a quote very quickly and upon accepting, the process moved forward quickly and with ease. I'd highly recommend using the service if you are looking to sell your car!",
                highlight: "The experience I had with Hermes Autos was about as seamless as possible.",
                star: 5,
            },
            {
                name: "John Doe",
                location: "Nigeria",
                review: "Hermes Autos is a fast, easy and hassle free way of buying a vehicle. They gave me all the tools needed to view, research and make my decision at the comfort of my home. I can honestly say that I had an unbelievable buying experience.",
                highlight: "Fast, easy and hassle free way of buying a vehicle!",
                star: 4,
            },
            {
                name: "White Bread",
                location: "California",
                review: "Process was painless, delivery was fast. Getting rid of my old car simple and painless as well.",
                highlight: "Super fast with the entire transaction and paperwork.",
                star: 4.5,
            },
            {
                name: "JK Rowling",
                location: "Boston",
                review: "Your customer service, communication updates and the whole process is 5 stars from beginning to end. Thank you!",
                highlight: "The whole process is 5 stars from beginning to end!",
                star: 5,
            },
            {
                name: "George Clooney",
                location: "The customer service was outstanding.",
                review: "The customer service was outstanding, right from my expressing interest in the vehicle all the way through delivery. I knew exactly what was happening and what I needed to do every step of the way. The car itself looks brand new even though it's 4 years old. I highly recommend Hermes Autos!",
                highlight: "An amazingly quick and painless process!",
                star: 4.5,
            },
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        avgRating: state => {
            console.log("avg1:", state.reviews);
            const reviews = state.reviews
            console.log("avg2:", reviews);
            const reducer = (acc, item) => acc + item
            const ratings = reviews.map(review => { console.log(review); review.star })
            const avg = reviews.reduce(reducer, 0) // reviews.length
            console.log("avg:", ratings);

            return avg
        },
    }
};
