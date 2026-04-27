"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectTechStack from "./ProjectTechStack";
import { FaGithub, FaLink } from "react-icons/fa";

type TProps = {
    title: string;
    description: string;
    logo: string;
    repoLink: string;
    technologies: {
        icon: React.ReactNode;
        name: string;
    }[];
    link: string;
};

export default function ProjectCard({
    title,
    description,
    logo,
    technologies,
    link,
    repoLink,
}: TProps) {
    return (
        <div className="lg:hover:bg-[rgb(255,255,255,0.05)] pl-0 lg:pl-2 p-2 rounded-lg transition-all duration-300 group relative">
            {/* Title and logo */}
            {link && link !== "" && link !== "https://" ? (
                <Link href={link} target="_blank">
                    <div className="flex items-center gap-2 mb-3 -translate-x-1 lg:translate-x-0">
                        <Image src={logo} alt={title} width={32} height={32} />
                        <h2 className="text-slate-100 text-sm font-bold group-hover:text-orange-500 transition-all duration-300">
                            {title}
                        </h2>
                    </div>
                </Link>
            ) : (
                <div className="flex items-center gap-2 mb-3 -translate-x-1 lg:translate-x-0">
                    <Image src={logo} alt={title} width={32} height={32} />
                    <h2 className="text-slate-100 text-sm font-bold group-hover:text-orange-500 transition-all duration-300">
                        {title}
                    </h2>
                </div>
            )}

            {/* Description */}
            <p className="text-slate-350 text-xs lg:text-sm lg:px-2 mb-3">
                {description}
            </p>

            {/* Tech stack */}
            <ProjectTechStack technologies={technologies} />

            {/* Visit buttons */}
            <div className="mt-4 flex gap-2 lg:px-2">
                {link && link !== "https://" && (
                    <Link
                        href={link}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-violet-600/80 hover:bg-violet-700 text-white rounded transition-colors text-xs font-medium"
                    >
                        <FaLink size={12} />
                        Visit Website
                    </Link>
                )}
                {repoLink && repoLink !== "https://github.com/" && (
                    <Link
                        href={repoLink}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#333]/50 hover:bg-[#333] text-white rounded transition-colors text-xs font-medium"
                    >
                        <FaGithub size={12} />
                        View Code
                    </Link>
                )}
            </div>
        </div>
    );
}
