import { mutation, query } from './_generated/server';
import { v } from 'convex/values';
import { getUserId } from './util';

export const createConsent = mutation({
    args: {
        type: v.string(),
        options: v.optional(v.array(v.string())),
        tooth: v.optional(v.string()),
        name: v.string(),
        birthdate: v.string(),
    },
    handler: async (ctx, args) => {
        const userId = await getUserId(ctx);
        if (!userId) {
            throw new Error('User is not logged in');
        }
        const consentId = await ctx.db.insert('consents', {
            type: args.type,
            options: args.options,
            tooth: args.tooth,
            userId: userId,
            name: args.name,
            birthdate: args.birthdate,
        })

        return consentId;
    }
})

export const getConsent = query({
    args: {
        id: v.id('consents'),
    },
    handler: async (ctx, args) => {
        const userId = await getUserId(ctx);
        // if (!userId) {
        //     throw new Error('User is not logged in');
        // }
        const consent = await ctx.db.get(args.id);
        if (!consent) {
            throw new Error('Consent not found');
        }
        return consent;
    }
})

export const getConsents = query({
    args: {},
    handler: async (ctx, args) => {
        const userId = await getUserId(ctx);
        if (!userId) {
            throw new Error('User is not logged in');
        }
        const consents = await ctx.db.query('consents').order("desc").take(10);
        return consents;
    }
})