import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
export async function GET(context) {
  const projects = await getCollection("work");
  return rss({
    title: "Matt Kane's projects",
    description: "Things I've made",
    site: context.site,
    items: projects.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/projects/${post.slug}/`,
    })),
  });
}
