import { error } from "@sveltejs/kit";
import { projects } from "$lib/projects";
import type { PageLoad } from "./$types";

export const entries = () => projects.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) {
        throw error(404, `No project named "${params.slug}"`);
    }
    return { project };
};
