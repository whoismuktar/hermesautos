import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
// import utils from './modules/utils'

Vue.use(Vuex)

export default new Vuex.Store({
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
        name: "Olumide Adewale",
        location: "Nigeria",
        review: "It was an incredibly simple and easy procedure! I wish I had another vehicle to offer for sale.",
        highlight: "It was a remarkably quick and painless procedure!",
        star: 4,
      },
      {
        name: "Abdullah Yusuf",
        location: "California",
        review: "From start to finish, your customer service, communication updates, and overall procedure are all 5 stars. Thank you very much!",
        highlight: "From start to finish, the entire procedure is 5 stars!",
        star: 5,
      },
      {
        name: "Cynthia Nwoke",
        location: "Boston",
        review: "The procedure was easy to follow, and the delivery was quick. It was easy and straightforward to get rid of my old car.",
        highlight: "The procedure was easy to follow, and the delivery was quick.",
        star: 5,
      },
      {
        name: "Tunde Peters",
        location: "Austria",
        review: "My experience with Hermes Autos was as easy as it could be. They provided me with a quote fast, and once I accepted it, the process proceeded along quickly and smoothly. If you're wanting to sell your car, I highly recommend using the service!",
        highlight: "My experience with Hermes Autos was as easy as it could be.",
        star: 4.5,
      },
      {
        name: "Chuka Nnamdi",
        location: "Nigeria",
        review: "Excellent experience, no hassles, no lengthy lines in dealer showrooms, friendly employees, and a fantastic vehicle.",
        highlight: "Excellent service, no hassles, and no big lines...",
        star: 5,
      },
      {
        name: "Andrew Anthony",
        location: "USA",
        review: "It's so simple! It was an amazing experience! I adore my car and would tell my family and friends about how I got it.",
        highlight: "It's so simple! It was an amazing experience! I adore my automobile and would do anything to keep it...",
        star: 5,
      },
      {
        name: "Segun Oni",
        location: "USA",
        review: "The experience was fantastic. No hassles!! I will never sell my car in a different way.... The way to go is with Hermes Autos!!!",
        highlight: "The experience was fantastic. No hassles!!",
        star: 5,
      },
      {
        name: "Sandra Olamide",
        location: "USA",
        review: "It was a quick and painless transaction, and I received a fair amount for my automobile. I strongly advise you to use Hermesautos.com for your next purchase and/or sale.",
        highlight: "It was a painless transaction, and I was offered a reasonable price.",
        star: 5,
      },
      {
        name: "Boniface Sanagogo",
        location: "USA",
        review: "Hermesautos paid me well for my trade-in, and I also received a good deal on the vehicle I purchased. Vehicles were delivered and picked up on schedule and with ease. Overall, it was a nice time.",
        highlight: "For my trade, Hermesautos paid me handsomely.",
        star: 5,
      },
      {
        name: "Ibrahim Mohamed",
        location: "USA",
        review: "Hermes Autos purchased a vehicle from us. I was given the finest deal. The website was simple and quick to navigate. I would suggest it. AWESOME JOB",
        highlight: "Hermes Autos purchased a vehicle from us. I was given the finest deal.",
        star: 5,
      },
      {
        name: "Femi Oludele",
        location: "USA",
        review: "My time with you was fantastic! It was a simple process, and I'm enjoying my new vehicle! Thank you a lot.",
        highlight: "My time with you was fantastic! It was a simple process.",
        star: 5,
      },
      {
        name: "Nathaniel George",
        location: "USA",
        review: "It was a really simple and quick process. Everything went according to plan. The service was outstanding. The following day, payment was received. The best experience ever.",
        highlight: "It was a really simple and quick process. Everything went according to plan.",
        star: 5,
      },
      {
        name: "Ifeanyi Odume",
        location: "USA",
        review: "I would absolutely use Hermesautos again because they are easy to work with and respond quickly!! The best dealership I've ever worked with!!",
        highlight: "I would use Hermesautos again in a heartbeat.",
        star: 5,
      },
      {
        name: "Ismaila Babarawa",
        location: "USA",
        review: "Hermesautos is to be thanked. I was able to sell my automobile promptly and painlessly. Overall, it was a fantastic experience.",
        highlight: "Hermesautos is to be thanked. I was able to immediately sell my car.",
        star: 4.5,
      },
      {
        name: "Fola Anjorin",
        location: "USA",
        review: "It was a much better experience than selling it through a dealer or on my own.",
        highlight: "It was a far superior experience than dealing with a dealer.",
        star: 5,
      },
      {
        name: "Remilade Adetunde",
        location: "USA",
        review: "It was a breeze to sell my car to Hermesautos. Strongly suggested.",
        highlight: "It was a breeze to sell my car to Hermesautos. Hermesautos is a great place to purchase and sell cars.",
        star: 4.5,
      },
      {
        name: "Rosemary Giyang",
        location: "USA",
        review: "It was unbelievably easy to sell my automobile to HermesAutos! I've never had such an easy time in my life. The truck was picked up swiftly, the money was distributed quickly, and the customer service was outstanding.",
        highlight: "It was unbelievably easy to sell my automobile to HermesAutos!",
        star: 5,
      },
      {
        name: "Bola Johnson",
        location: "USA",
        review: "The procedure went off without a hitch. Constant communication and feedback kept me informed and prepared for the upcoming month of September. All promises were kept, and the check arrived on time. Excellent communication and workflow.",
        highlight: "The procedure went off without a hitch.",
        star: 5,
      },
      {
        name: "Jude Nwobodo",
        location: "USA",
        review: "In an uncertain time, Hermesautos.com provides peace of mind and certainty. As promised, Hermesautos.com picked up the vehicle and delivered payment to my bank account. I'd never sell a car any other way. Thank you very much!!!",
        highlight: "Hermesautos.com offers assurance and peace of mind.",
        star: 4.5,
      },
      {
        name: " Seyi Lawnrence",
        location: "USA",
        review: "This is the third time I've used Hermesautos. It's very simple, and they always pay me a fair price for my vehicles. They also provide a wide selection of autos for sale.",
        highlight: "This is the third time I've used Hermesautos. So simple.",
        star: 5,
      },
    ]
  },
  getters: {
    getReviews(state) {
      // console.log(11)
      // console.log(state.reviews)
      return state.reviews
    },
    avgRating(state) {
      const reviews = state.reviews
      const stars = []
      reviews.forEach(review => stars.push(review.star))
      const reducer = (acc, item) => acc + item
      const avg = stars.reduce(reducer, 0) / reviews.length
      return avg

    }
  },
  modules: {
    api
    // utils
  }
})
