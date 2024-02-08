import { mutation, query } from './_generated/server';
import { v } from 'convex/values';
import { getUser, getUserId } from './util';
import { Id } from './_generated/dataModel';

export const createPatient = mutation({
    args: {
        name: v.string(),
        birthdate: v.string(),
    },
    handler: async (ctx, args) => {
        // check if the user is logged in
        const userId = await getUserId(ctx);
        if (!userId) {
            throw new Error('User is not logged in');
        }

        await ctx.db.insert('patients', {
            name: args.name,
            birthdate: args.birthdate,
            userId: userId,
        })
    }
})

export const getPatients = query({
    args: {},
    handler: async (ctx, args) => {
        const userId = await getUserId(ctx) as Id<"users"> | undefined;
        console.log(userId)
        if (!userId) {
            throw new Error('User is not logged in');
        }

        const patients = await ctx.db.query('patients').filter((q) => q.eq(q.field("userId"), userId)).order("desc").take(10);
        return patients;
    }
})