import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: `${post.title} | AlterMundi`,
        description: post.excerpt,
    };
}

// Simple markdown-ish renderer
function renderContent(content: string) {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) {
            key++;
            continue;
        }
        if (trimmed.startsWith("## ")) {
            elements.push(
                <h2 key={key++} className="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-[#00c896] pl-4">
                    {trimmed.slice(3)}
                </h2>
            );
        } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
            elements.push(
                <p key={key++} className="font-bold text-white mb-4">{trimmed.slice(2, -2)}</p>
            );
        } else if (trimmed.startsWith("> ")) {
            elements.push(
                <blockquote key={key++} className="border-l-4 border-[#00c896]/50 pl-6 py-2 my-6 bg-[#00c896]/5 rounded-r-xl">
                    <p className="text-[#8ea8c3] italic">{trimmed.slice(2)}</p>
                </blockquote>
            );
        } else if (trimmed.startsWith("- ")) {
            elements.push(
                <li key={key++} className="text-[#8ea8c3] ml-4 mb-2 flex gap-2">
                    <span className="text-[#00c896] mt-1">›</span>
                    <span dangerouslySetInnerHTML={{ __html: trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                </li>
            );
        } else {
            elements.push(
                <p key={key++} className="text-[#8ea8c3] leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}
                />
            );
        }
    }
    return elements;
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) notFound();

    const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-4 gap-12">
                {/* Main content */}
                <article className="lg:col-span-3">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-[#8ea8c3] mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-white truncate max-w-xs">{post.title}</span>
                    </nav>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-[#8ea8c3] mb-10 pb-6 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00c896" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <span>{post.author}</span>
                        </div>
                        <span>·</span>
                        <span>{post.dateDisplay}</span>
                    </div>

                    {/* Excerpt / Lead */}
                    <p className="text-xl text-white/80 leading-relaxed mb-8 font-medium">
                        {post.excerpt}
                    </p>

                    {/* Body */}
                    <div className="prose-custom">
                        {renderContent(post.content)}
                    </div>

                    {/* Back */}
                    <div className="mt-16 pt-8 border-t border-white/5">
                        <Link href="/blog" className="btn-secondary">
                            ← Volver al Blog
                        </Link>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        <div className="card p-6">
                            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Otros artículos</h3>
                            <ul className="space-y-4">
                                {related.map((p) => (
                                    <li key={p.slug}>
                                        <Link href={`/blog/${p.slug}`} className="group">
                                            <p className="text-[#8ea8c3] text-sm leading-snug group-hover:text-white transition-colors line-clamp-2 mb-1">
                                                {p.title}
                                            </p>
                                            <span className="text-[#00c896] text-xs">{p.dateDisplay}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card p-6 bg-gradient-to-br from-[#00c896]/5 to-transparent border-[#00c896]/20">
                            <h3 className="text-white font-bold mb-3">¿Querés armar tu red?</h3>
                            <p className="text-[#8ea8c3] text-sm mb-4">AlterMundi acompaña proyectos colectivos de redes comunitarias.</p>
                            <Link href="/formacion" className="btn-primary text-xs px-4 py-2.5 w-full justify-center">
                                Ver Formación
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
