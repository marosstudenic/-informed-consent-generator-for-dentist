import { action } from "./_generated/server";
import { api } from "./_generated/api";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

const testData = {
    "convertTo": "pdf",
    "data": {
        "patient": {
            "name": "Jozef",
            "birthday": "10.2.2023"
        },
        "pzs": {
            "name": "Moja ambulancia",
            "address": "Malacky 36",
            "ico": "123456"
        },
        "doctor": {
            "name": "Viktoria Lisicka",
            "code": "ABC1234"
        },
        "treatment": {
            "isAnesthesia": true,
            "isCofferdam": true
        }
    }
}

const CAVITY_ID = "d4fc135b6fd10c13b0aaedbe51098170c46bf015653f32f4b4447561bdcf8087";

export const handleCreateConsent = action({
    args: {
        type: v.string(),
        options: v.optional(v.array(v.string())),
        tooth: v.optional(v.string()),
        name: v.string(),
        birthdate: v.string(),
        email: v.string(),
    },

    handler: async (ctx, args) => {
        // send post to this endpoint
        // https://render.carbone.io/render/:templateID
        // with data from testData
        // and get the pdf back

        const consentId = await ctx.runMutation(api.consents.createConsent, {
            type: args.type,
            options: args.options,
            tooth: args.tooth,
            name: args.name,
            birthdate: args.birthdate,
            email: args.email,
        });

        console.log(consentId, "consoleId");

        try {
            const response = await fetch(`https://render.carbone.io/render/${CAVITY_ID}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `${process.env.CARBONE_API_KEY}`,
                    "carbone-version": "4"
                },
                body: JSON.stringify(testData),
            });

            const content = await response.json();
            console.log(content, "content");


            let filename = content.data.renderId;


            const file = await fetch(`https://render.carbone.io/render/${filename}`);

            const pdf = await file.blob();
            const storageId: Id<"_storage"> = await ctx.storage.store(pdf);

            console.log(storageId, "storageId");

            await ctx.runMutation(api.consents.setConsentPdf, {
                consentId: consentId,
                pdfId: storageId,
            });

        } catch (error) {
            console.error(error);
        }


        // if (response.ok) {
        //     // Mark the plan as "professional" in the Convex DB
        //     await ctx.runMutation(internal.plans.markPlanAsProfessional, {
        //         planId: args.planId,
        //     });
        // }
    },
});

