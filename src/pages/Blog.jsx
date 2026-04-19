import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import "../styles/page-css/Blog.css";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

export default function Blog() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("newest");
  const [filterTag, setFilterTag] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Blog posts array with timestamps
  const blogPosts = useMemo(() => {
    const posts = [
      {
        id: "understanding-react-hooks",
        title: "Understanding React Hooks",
        subtitle: "Tanner Ordonez",
        content: "A deep dive into useState, useEffect, and custom hooks...",
        readTime: "12min",
        timestamp: new Date("2026-01-25").getTime(),
        image: "https://picsum.photos/300/200",
        imageAlt: "React Hooks",
        tags: ["react", "tutorial"],
      },
      {
        id: "modern-css-techniques",
        title: "Modern CSS Techniques",
        subtitle: "Tanner Ordonez",
        content:
          "Explore container queries, cascade layers, and more modern CSS...",
        readTime: "10min",
        timestamp: new Date("2026-01-22").getTime(),
        image: "https://picsum.photos/300/201",
        imageAlt: "Modern CSS",
        tags: ["css", "design"],
      },
      {
        id: "typescript-best-practices",
        title: "TypeScript Best Practices",
        subtitle: "Tanner Ordonez",
        content:
          "Level up your TypeScript code with these essential patterns...",
        readTime: "15min",
        timestamp: new Date("2026-01-20").getTime(),
        image: "https://picsum.photos/300/202",
        imageAlt: "TypeScript",
        tags: ["typescript", "tutorial"],
      },
      {
        id: "node-security-guide",
        title: "Node.js Security Guide",
        subtitle: "Tanner Ordonez",
        content:
          "Protect your Node applications from common security vulnerabilities...",
        readTime: "18min",
        timestamp: new Date("2026-01-18").getTime(),
        image: "https://picsum.photos/300/203",
        imageAlt: "Node Security",
        tags: ["nodejs", "security"],
      },
      {
        id: "web-performance-optimization",
        title: "Web Performance Optimization",
        subtitle: "Tanner Ordonez",
        content:
          "Make your websites lightning fast with these optimization tips...",
        readTime: "14min",
        timestamp: new Date("2026-01-15").getTime(),
        image: "https://picsum.photos/300/204",
        imageAlt: "Performance",
        tags: ["performance", "tutorial"],
      },
      {
        id: "graphql-vs-rest",
        title: "GraphQL vs REST APIs",
        subtitle: "Tanner Ordonez",
        content: "Compare GraphQL and REST to choose the right approach...",
        readTime: "11min",
        timestamp: new Date("2026-01-13").getTime(),
        image: "https://picsum.photos/300/205",
        imageAlt: "GraphQL vs REST",
        tags: ["api", "backend"],
      },
      {
        id: "docker-for-developers",
        title: "Docker for Developers",
        subtitle: "Tanner Ordonez",
        content:
          "Containerize your applications and streamline your development workflow...",
        readTime: "16min",
        timestamp: new Date("2026-01-10").getTime(),
        image: "https://picsum.photos/300/206",
        imageAlt: "Docker",
        tags: ["docker", "devops"],
      },
      {
        id: "javascript-array-methods",
        title: "JavaScript Array Methods Masterclass",
        subtitle: "Tanner Ordonez",
        content:
          "Master map, filter, reduce, and other essential array methods...",
        readTime: "13min",
        timestamp: new Date("2026-01-08").getTime(),
        image: "https://picsum.photos/300/207",
        imageAlt: "JavaScript Arrays",
        tags: ["javascript", "tutorial"],
      },
      {
        id: "nextjs-app-router",
        title: "Next.js App Router Guide",
        subtitle: "Tanner Ordonez",
        content: "Learn the new Next.js App Router and server components...",
        readTime: "17min",
        timestamp: new Date("2026-01-05").getTime(),
        image: "https://picsum.photos/300/208",
        imageAlt: "Next.js",
        tags: ["nextjs", "react"],
      },
      {
        id: "git-workflow-tips",
        title: "Git Workflow Tips",
        subtitle: "Tanner Ordonez",
        content:
          "Improve your Git workflow with these essential commands and strategies...",
        readTime: "9min",
        timestamp: new Date("2026-01-03").getTime(),
        image: "https://picsum.photos/300/209",
        imageAlt: "Git",
        tags: ["git", "workflow"],
      },
      {
        id: "responsive-design-2026",
        title: "Responsive Design in 2026",
        subtitle: "Tanner Ordonez",
        content: "Build websites that look great on any device with modern...",
        readTime: "12min",
        timestamp: new Date("2025-12-30").getTime(),
        image: "https://picsum.photos/300/210",
        imageAlt: "Responsive Design",
        tags: ["css", "design"],
      },
      {
        id: "async-javascript-guide",
        title: "Async JavaScript Guide",
        subtitle: "Tanner Ordonez",
        content:
          "Master promises, async/await, and handle asynchronous operations like a pro...",
        readTime: "14min",
        timestamp: new Date("2025-12-27").getTime(),
        image: "https://picsum.photos/300/211",
        imageAlt: "Async JavaScript",
        tags: ["javascript", "tutorial"],
      },
      {
        id: "mongodb-schema-design",
        title: "MongoDB Schema Design",
        subtitle: "Tanner Ordonez",
        content:
          "Design efficient MongoDB schemas for scalable applications...",
        readTime: "15min",
        timestamp: new Date("2025-12-24").getTime(),
        image: "https://picsum.photos/300/212",
        imageAlt: "MongoDB",
        tags: ["mongodb", "database"],
      },
      {
        id: "testing-react-components",
        title: "Testing React Components",
        subtitle: "Tanner Ordonez",
        content: "Write effective tests for your React components with Jest...",
        readTime: "16min",
        timestamp: new Date("2025-12-21").getTime(),
        image: "https://picsum.photos/300/213",
        imageAlt: "React Testing",
        tags: ["react", "testing"],
      },
      {
        id: "webpack-configuration",
        title: "Webpack Configuration Deep Dive",
        subtitle: "Tanner Ordonez",
        content:
          "Configure Webpack for optimal build performance and developer experience...",
        readTime: "19min",
        timestamp: new Date("2025-12-18").getTime(),
        image: "https://picsum.photos/300/214",
        imageAlt: "Webpack",
        tags: ["webpack", "tooling"],
      },
      {
        id: "authentication-patterns",
        title: "Authentication Patterns",
        subtitle: "Tanner Ordonez",
        content:
          "Implement secure authentication with JWT, OAuth, and session management...",
        readTime: "20min",
        timestamp: new Date("2025-12-15").getTime(),
        image: "https://picsum.photos/300/215",
        imageAlt: "Authentication",
        tags: ["security", "backend"],
      },
      {
        id: "tailwind-productivity",
        title: "Tailwind CSS Productivity Hacks",
        subtitle: "Tanner Ordonez",
        content:
          "Speed up your styling workflow with these Tailwind CSS tips...",
        readTime: "10min",
        timestamp: new Date("2025-12-12").getTime(),
        image: "https://picsum.photos/300/216",
        imageAlt: "Tailwind CSS",
        tags: ["css", "tailwind"],
      },
      {
        id: "api-design-principles",
        title: "API Design Principles",
        subtitle: "Tanner Ordonez",
        content:
          "Design intuitive and maintainable APIs that developers will love...",
        readTime: "13min",
        timestamp: new Date("2025-12-09").getTime(),
        image: "https://picsum.photos/300/217",
        imageAlt: "API Design",
        tags: ["api", "backend"],
      },
      {
        id: "vscode-extensions-2026",
        title: "Essential VS Code Extensions 2026",
        subtitle: "Tanner Ordonez",
        content:
          "Boost your productivity with these must-have VS Code extensions...",
        readTime: "8min",
        timestamp: new Date("2025-12-06").getTime(),
        image: "https://picsum.photos/300/218",
        imageAlt: "VS Code",
        tags: ["tooling", "productivity"],
      },
      {
        id: "react-state-management",
        title: "React State Management in 2026",
        subtitle: "Tanner Ordonez",
        content:
          "Compare Redux, Zustand, Jotai, and Context API for state management...",
        readTime: "17min",
        timestamp: new Date("2025-12-03").getTime(),
        image: "https://picsum.photos/300/219",
        imageAlt: "State Management",
        tags: ["react", "architecture"],
      },
    ];

    // Sort by timestamp descending (newest first)
    return posts.sort((a, b) => b.timestamp - a.timestamp);
  }, []);

  const latestPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);
  const allPosts = blogPosts.slice(4);

  // Get all unique tags from posts
  const availableTags = useMemo(() => {
    const tags = new Set();
    allPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [allPosts]);

  // Filter and sort all posts
  const filteredAndSortedPosts = useMemo(() => {
    let posts = [...allPosts];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter((post) => 
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      );
    }

    // Filter by tag
    if (filterTag !== "all") {
      posts = posts.filter((post) => post.tags.includes(filterTag));
    }

    // Sort
    if (sortBy === "newest") {
      posts.sort((a, b) => b.timestamp - a.timestamp);
    } else if (sortBy === "oldest") {
      posts.sort((a, b) => a.timestamp - b.timestamp);
    } else if (sortBy === "title") {
      posts.sort((a, b) => a.title.localeCompare(b.title));
    }

    return posts;
  }, [allPosts, filterTag, sortBy, searchQuery]);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog | LyOPix Coding</title>
        <meta
          name="description"
          content="A developer news blog covering what's happening in tech, what actually matters, and what's worth ignoring."
        />
        <link rel="canonical" href="https://lyopix.com/blog" />
        <meta property="og:title" content="LyOPix Dev Blog" />
        <meta
          property="og:description"
          content="A developer news blog covering what's happening in tech, what actually matters, and what's worth ignoring."
        />
        <meta property="og:url" content="https://lyopix.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="blogtop">
        <div className="blogtopcontent">
          <div className="left">
            <h1>LyOPix Dev Blog</h1>
            <p>
              Welcome to the LyOPix Coding Blog! I post almost every week about
              the recently popular libraries, hacks, and more! Stay tuned!
            </p>
          </div>
          {latestPost && (
            <Card
              title={latestPost.title}
              subtitle={latestPost.subtitle}
              content={latestPost.content}
              tags={[latestPost.readTime, formatDate(latestPost.timestamp)]}
              onClick={() => navigate(`/blog/${latestPost.id}`)}
              image={latestPost.image}
              imageAlt={latestPost.imageAlt}
            />
          )}
        </div>
      </div>
      <div className="blogmain">
        <h1>Recent Posts</h1>
        <div className="postline">
          {recentPosts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              subtitle={post.subtitle}
              content={post.content}
              tags={[post.readTime, formatDate(post.timestamp)]}
              onClick={() => navigate(`/blog/${post.id}`)}
              image={post.image}
              imageAlt={post.imageAlt}
            />
          ))}
        </div>
          <hr />
        {allPosts.length > 0 && (
          <>
            <div className="all-posts-header">
              <h1>All Posts</h1>
              <div className="filter-sort-controls">
                <div className="search-control">
                  <label htmlFor="search">Search: </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="filter-control">
                  <label htmlFor="filter">Filter: </label>
                  <select
                    id="filter"
                    value={filterTag}
                    onChange={(e) => setFilterTag(e.target.value)}
                  >
                    <option value="all">All Tags</option>
                    {availableTags.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sort-control">
                  <label htmlFor="sort">Sort: </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="title">Title (A-Z)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="postline">
              {filteredAndSortedPosts.length > 0 ? (
                filteredAndSortedPosts.map((post) => (
                  <Card
                    key={post.id}
                    title={post.title}
                    subtitle={post.subtitle}
                    content={post.content}
                    tags={[post.readTime, formatDate(post.timestamp)]}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    image={post.image}
                    imageAlt={post.imageAlt}
                  />
                ))
              ) : (
                <p className="no-posts">
                  No posts found with the selected filter.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}