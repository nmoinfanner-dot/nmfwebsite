import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactCta } from "@/components/ContactCta";
import { blogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: post ? post.title : "Blog" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-background px-6 py-10 sm:px-10 lg:px-[100px] lg:py-12">
      <SiteNav />

      <article className="mx-auto max-w-3xl">
        <header className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-button-background px-3 py-1 font-sans text-xs font-bold text-foreground">
            {post.category}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl">{post.title}</h1>
          <p className="font-sans text-sm text-foreground/60">{formattedDate}</p>
        </header>

        {post.coverImage && (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 48rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-10 flex flex-col gap-6 font-sans text-foreground/80">
          {post.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      <div className="mx-auto mt-20 max-w-5xl lg:mt-24">
        <ContactCta />
      </div>

      <SiteFooter />
    </div>
  );
}
