import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    patients: defineTable({
        name: v.string(),
        birthdate: v.string(),
        userId: v.string(),
    }),
    users: defineTable({
        userId: v.string(),
        email: v.string(),
        credits: v.number(),
        endsOn: v.optional(v.number()),
        subscriptionId: v.optional(v.string()),
    }).index("by_userId", ["userId"])
        .index("by_subscriptionId", ["subscriptionId"]),
    consents: defineTable({
        type: v.string(),
        options: v.optional(v.array(v.string())),
        tooth: v.optional(v.string()),
        name: v.string(),
        birthdate: v.string(),
        userId: v.string(),
    }),
});