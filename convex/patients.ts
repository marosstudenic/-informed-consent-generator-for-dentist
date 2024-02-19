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

export const getPatient = query({
    args: {
        id: v.id('patients'),
    },
    handler: async (ctx, args) => {
        const userId = await getUserId(ctx) as Id<"users"> | undefined;
        if (!userId) {
            throw new Error('User is not logged in');
        }

        const patient = await ctx.db.get(args.id);
        if (!patient) {
            throw new Error('Patient not found');
        }

        if (patient.userId !== userId) {
            throw new Error('Patient not found');
        }
        return patient;
    }
})

export const getPatients = query({
    args: {},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("UnAuthorized");
        }
        const userId = identity.subject;

        const patients = await ctx.db.query('patients').filter((q) => q.eq(q.field("userId"), userId)).order("desc").take(10);
        return patients;
    }
})