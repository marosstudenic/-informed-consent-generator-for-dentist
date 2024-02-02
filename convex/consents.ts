import { mutation } from './_generated/server';
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