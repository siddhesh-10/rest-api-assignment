const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  isCompleted: {
    type: Boolean,
    default: false
  }
});

const PlanSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true
    },
    activities: [ActivitySchema],
    program: {
      type: String,
      default: 'Prodigy 5-Minute Daily Plan'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Plan', PlanSchema);
