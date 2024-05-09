import Prompt from "@models/prompt";
import { connectTODB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectTODB();
        const prompt = await Prompt.find({ creator: params.id }).populate("creator");

        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompt create by user", { status: 500 })
    }
}