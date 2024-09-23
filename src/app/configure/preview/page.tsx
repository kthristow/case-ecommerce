import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignPreview from "./DesignPreview";

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const Page = async ({ searchParams }: PageProps) => {
    const { id } = searchParams;

    if (!id || typeof id !== "string") {
        return notFound();
    }

    const cofiguration = await db.configuration.findUnique({
        where: { id }
    });

    if (!cofiguration) {
        return notFound();
    }

    return <DesignPreview configuration={cofiguration}/>
}

export default Page;