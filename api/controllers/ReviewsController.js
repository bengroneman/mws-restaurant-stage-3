/**
 * ReviewsController
 *
 * @description :: Server-side logic for managing reviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getReviews: function(req, res) {

    ReviewService.getReviews(function(reviews) {
      res.json(reviews);
    });

  },
  addReview: function(req, res) {

    let reviewValue = (req.body.value) ? req.body.value : undefined

    ReviewService.addReview(reviewValue, function(success) {
      res.json(success);
    });

  },
  removeReview: function(req, res) {

    let reviewValue = (req.body.value) ? req.body.value : undefined

    ReviewService.removeReview(reviewValue, function(success) {
      res.json(success);
    });

  };
};
