import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  workshops: [
    {
      type: {
        type: String,
        enum: ["Djembe", "Dance", "Balafon"],
        required: true,
      },
      level: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        required: true,
      },
    },
  ],
  accommodation: {
    type: {
      type: String,
      enum: ["tent", "family_room", "single_room"],
      required: true,
    },
    nights: {
      type: Number,
      required: true,
    },
    checkIn: Date,
    checkOut: Date,
  },
  food: {
    plan: {
      type: String,
      enum: ["full_board", "single_meals"],
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
    specialRequirements: String,
  },
  children: [
    {
      ageGroup: {
        type: String,
        enum: ["under_5", "5_10", "10_17"],
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  payment: {
    status: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "EUR",
    },
    transactionId: String,
    paidAt: Date,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["active", "cancelled", "completed"],
    default: "active",
  },
  notes: String,
});

export const Registration =
  mongoose.models.Registration ||
  mongoose.model("Registration", RegistrationSchema);
