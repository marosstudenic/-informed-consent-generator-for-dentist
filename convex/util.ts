import { ActionCtx, MutationCtx, QueryCtx } from "./_generated/server";

export const getUserId = async (ctx: QueryCtx | MutationCtx | ActionCtx) => {
    console.log('getUserId');
    console.log(ctx.auth, 'ctx.auth');
    console.log(ctx.auth.getUserIdentity(), 'ctx.auth.getUserIdentity()');
    return (await ctx.auth.getUserIdentity())?.subject;
};

export const getUser = async (ctx: QueryCtx | MutationCtx | ActionCtx) => {
    return await ctx.auth.getUserIdentity();
};