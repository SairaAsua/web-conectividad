import Link from "next/link";
import { posts } from "@/lib/data";

export const metadata = {
    title: "Blog | AlterMundi",
    description: "Novedades, proyectos y aprendizajes del equipo de AlterMundi sobre redes comunitarias libres.",
};

export default function BlogPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00c896]/10 border border-[#00c896]/20 text-[#00c896] text-xs font-medium mb-6">
                    📰 Blog
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Novedades</h1>
                <p className="text-[#8ea8c3] text-lg max-w-2xl">
                    Proyectos, aprendizajes y avances del equipo de AlterMundi y las comunidades con las que trabajamos.
                </p>
            </div>

            {/* Featured post */}
            <Link href={`/blog/${posts[0].slug}`} className="block card p-8 md:p-12 mb-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00c896]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 grid md:grid-cols-5 gap-8 items-center">
                    <div className="md:col-span-3">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="tag bg-[#00c896]/20 text-[#00c896]">⭐ Destacado</span>
                            {posts[0].tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                        <h2 className="text-white font-black text-2xl md:text-3xl leading-tight mb-4 group-hover:text-[#00c896] transition-colors">
                            {posts[0].title}
                        </h2>
                        <p className="text-[#8ea8c3] leading-relaxed mb-6">
                            {posts[0].excerpt}
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-[#8ea8c3] text-sm">{posts[0].dateDisplay}</span>
                            <span className="text-[#00c896] font-medium group-hover:translate-x-1 transition-transform inline-block">
                                Leer artículo →
                            </span>
                        </div>
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                        <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-[#00c896]/20 to-[#4fc3f7]/20 border border-[#00c896]/20 flex items-center justify-center">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#00c896" strokeWidth="1.5" strokeOpacity="0.6">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Post grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.slice(1).map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="card p-6 group flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                        <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#00c896] transition-colors flex-1">
                            {post.title}
                        </h2>
                        <p className="text-[#8ea8c3] text-sm leading-relaxed line-clamp-2 mb-4">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-[#8ea8c3] text-xs">{post.dateDisplay}</span>
                            <span className="text-[#00c896] text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                                Leer →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
