import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const createConsent = mutation({
    args: {
        name: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert('consents', {
            name: args.name,
        })
    }
})

export const getConsents = query({
    args: {},
    handler: async (ctx, args) => {
        const consents = await ctx.db.query('consents').order("desc").take(10);
        return consents;
    }
})