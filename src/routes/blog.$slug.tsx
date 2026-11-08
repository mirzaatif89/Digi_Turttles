import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { slug: post.slug, t: post.t, excerpt: post.excerpt };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.t} — Digi Turtles Blog` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.t },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Article not found — Digi Turtles" }, { name: "robots", content: "noindex" }],
  }),
  component: Post,
});

function Post() {
  const { slug } = Route.useLoaderData();
  const post = posts.find((p) => p.slug === slug)!;
  return (
    <article className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-primary">
          {post.cat} · {post.date}
        </p>
        <h1 className="animate-in fade-in slide-in-from-bottom-4 mt-3 text-4xl font-extrabold text-ink duration-700 md:text-5xl">
          {post.t}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">{post.excerpt}</p>
      </div>
      <img
        src={post.img}
        alt={post.t}
        className="animate-in fade-in zoom-in-95 mx-auto my-12 h-[420px] w-full max-w-5xl rounded-3xl object-cover px-6 duration-1000"
      />
      <div className="mx-auto max-w-3xl space-y-6 px-6 text-lg leading-relaxed text-foreground">
        {post.body.map((b, i) => (
          <p key={i}>{b}</p>
        ))}
      </div>
    </article>
  );
}
