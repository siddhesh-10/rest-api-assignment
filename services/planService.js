const Plan = require('../models/planModel');

exports.getAllPlans = async () => {
  return await Plan.find({});
};

exports.getPlanById = async (id) => {
  return await Plan.findById(id);
};

exports.createPlan = async (planData) => {
  const plan = new Plan(planData);
  return await plan.save();
};

exports.updatePlan = async (id, updateData) => {
  return await Plan.findByIdAndUpdate(id, updateData, { new: true });
};

exports.markActivityComplete = async (planId, activityId) => {
  const plan = await Plan.findById(planId);
  if (!plan) {
    return null;
  }
  const activity = plan.activities.id(activityId);
  if (!activity) {
    return null;
  }
  activity.isCompleted = true;
  await plan.save();
  return plan;
};
