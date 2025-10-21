// app/resources/insights/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FadeIn from "../../../../components/FadeIn";
import { POSTS } from "../_data";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post | Chang Energy" };
  return { title: `${post.title} | Chang Energy`, description: post.summary };
}

export default function PostPage({ params }: Params) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const { title, date, tags, Content } = post;

  return (
    <main className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {tags?.map((t) => (
              <span key={t} className="badge-brand">{t}</span>
            ))}
            <span className="ml-auto">{new Date(date).toLocaleDateString()}</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
        </FadeIn>

        <article className="prose prose-gray mt-6 max-w-none">
          <Content />
        </article>

        <div className="mt-10 border-t pt-6 text-sm text-gray-600">
          Want help applying this to your sites?{" "}
          <a href="/contact" className="link-brand font-medium">Request a consultation →</a>
        </div>
      </div>
    </main>
  );
}
