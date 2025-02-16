const planService = require('../services/planService');

exports.getAllPlans = async (req, res, next) => {
  try {
    const plans = await planService.getAllPlans();
    res.status(200).json(plans);
  } catch (error) {
    next(error);
  }
};

exports.getPlanById = async (req, res, next) => {
  try {
    const plan = await planService.getPlanById(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    res.status(200).json(plan);
  } catch (error) {
    next(error);
  }
};

exports.createPlan = async (req, res, next) => {
  try {
    console.log("sid ");
    const plan = await planService.createPlan(req.body);
    res.status(201).json(plan);
  } catch (error) {
    console.log("error :",error);
    next(error);
  }
};

exports.updatePlan = async (req, res, next) => {
  try {
    const plan = await planService.updatePlan(req.params.id, req.body);
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    res.status(200).json(plan);
  } catch (error) {
    next(error);
  }
};

exports.markActivityComplete = async (req, res, next) => {
  try {
    const { planId, activityId } = req.params;
    const plan = await planService.markActivityComplete(planId, activityId);
    if (!plan) {
      return res.status(404).json({ message: 'Plan or Activity not found' });
    }
    res.status(200).json(plan);
  } catch (error) {
    next(error);
  }
};
