const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');

// Get all plans
router.get('/', planController.getAllPlans);

// Get a single plan by ID
router.get('/:id', planController.getPlanById);

// Create a new plan
router.post('/', planController.createPlan);

// Update a plan (e.g., modify activities)
router.put('/:id', planController.updatePlan);

// Mark an activity as completed within a plan
router.patch('/:planId/activities/:activityId/complete', planController.markActivityComplete);

module.exports = router;
