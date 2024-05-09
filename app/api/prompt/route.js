import Prompt from "@models/prompt";
import { connectTODB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectTODB();
        const prompt = await Prompt.find().populate('creator');
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}