import Prompt from "@models/prompt";
import { connectTODB } from "@utils/database";


export const GET = async (request, { params }) => {
    try {
        await connectTODB();
        const prompt = await Prompt.findById(params.id).populate("creator");
        if (!prompt) {
            return new Response("Prompt not found", { status: 404 });
        }
        return new Response(JSON.stringify(prompt),)
    } catch (error) {
        return new Response("Internal server error", { status: 500 })
    }
}

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectTODB();

        const existingPrompt = await Prompt.findById(params.id);
        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();
        return new Response("successfully update the prompts", { status: 200 })
    } catch (error) {
        return new Response("Error updating Prompt", { status: 500 });
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectTODB();
        let x = await Prompt.findByIdAndDelete(params.id)
        console.log("error in deleting prompt", x); // todo : need to delete this
        return new Response("Prompt deleted successfully", { status: 200 })
    } catch (error) {
        return new Response("Error deleting Prompt", { status: 500 })
    }
}