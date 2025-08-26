"use client";
import React from "react";
import { motion } from "framer-motion";

const categories = ["All", "Construction", "Execution", "Delivery", "Planning"];

const articles = [
    {
      id: 1,
      date: "Jan 01, 2025",
      readTime: "5 minutes",
      title: "Lorem Ipsum Dolor Sit Amet",
      tags: ["Tag1", "Tag2", "Tag3"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 2,
      date: "Jan 05, 2025",
      readTime: "6 minutes",
      title: "Consectetur Adipiscing Elit",
      tags: ["TagA", "TagB", "TagC"],
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 3,
      date: "Jan 10, 2025",
      readTime: "7 minutes",
      title: "Sed Do Eiusmod Tempor",
      tags: ["Design", "UI", "UX"],
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image:
        "https://images.unsplash.com/photo-1529429612778-cff98e3ba7e7?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 4,
      date: "Jan 15, 2025",
      readTime: "5 minutes",
      title: "Ut Labore Et Dolore Magna",
      tags: ["Tech", "Web", "React"],
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 5,
      date: "Jan 20, 2025",
      readTime: "8 minutes",
      title: "Aliqua Enim Ad Minim Veniam",
      tags: ["Code", "Next.js", "Frontend"],
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 6,
      date: "Jan 25, 2025",
      readTime: "6 minutes",
      title: "Quis Nostrum Exercitationem",
      tags: ["TagX", "TagY", "TagZ"],
      description:
        "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 7,
      date: "Feb 01, 2025",
      readTime: "5 minutes",
      title: "Corporis Suscipit Laboriosam",
      tags: ["Tag1", "Tag2", "Tag3"],
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      image:
        "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 8,
      date: "Feb 05, 2025",
      readTime: "7 minutes",
      title: "Ut Aliquid Ex Ea Commodi",
      tags: ["Modern", "Architecture", "Design"],
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 9,
      date: "Feb 10, 2025",
      readTime: "6 minutes",
      title: "Magnam Aliquam Quaerat",
      tags: ["UI", "UX", "Inspiration"],
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 10,
      date: "Feb 15, 2025",
      readTime: "5 minutes",
      title: "Voluptates Repudiandae Sint",
      tags: ["TagOne", "TagTwo", "TagThree"],
      description:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80&auto=format&fit=crop",
    },
  ];

const BlogPage = () => {
  return (
    <section className="bg-secondary min-h-screen px-6 md:px-12 lg:px-20 py-12">
      {/* Sticky Categories */}
      <div className="sticky top-0 z-20 bg-secondary py-4">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                cat === "All"
                  ? "bg-button text-white"
                  : "bg-[#f2f0e9] text-gray-800 hover:bg-orange-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sticky Cards */}
      <div className="space-y-10">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            className="sticky top-0 h-screen flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
           <div
  className="group h-[75vh] w-full rounded-[28px] md:rounded-[32px] 
             bg-[#f4f3e6] text-black
             hover:bg-background hover:text-white
             border border-gray-200 hover:border-white/20
             shadow-sm hover:shadow-2xl
             transition-all duration-500
             px-6 sm:px-10 md:px-14 py-8 md:py-10
             flex flex-col md:flex-row gap-8 md:gap-10"
>

              {/* LEFT COLUMN */}
              <div className="md:basis-[58%] flex flex-col justify-center">
                {/* Date • Time */}
                <div className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-white/70 mb-5 transition-colors">
                  <span>{article.date}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-light inline-block" />
                  <span>{article.readTime}</span>
                </div>

                {/* Index + Title */}
                <div className="flex items-start gap-6 md:gap-7">
                  <span className="text-button font-extrabold leading-none
                                   text-[72px] sm:text-[96px] lg:text-[112px]">
                    {article.id}
                  </span>
                  <h2 className="font-semibold leading-tight
                                 text-3xl sm:text-4xl lg:text-5xl">
                    {article.title}
                  </h2>
                </div>

                {/* Divider */}
                <div className="h-px bg-black/15 group-hover:bg-white/15 my-8 w-full md:w-[85%] transition-colors" />

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full border 
                                 border-black/30 text-black/90 text-sm
                                 group-hover:border-white/30 group-hover:text-white/90
                                 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-700 group-hover:text-white/70 max-w-[720px] transition-colors">
                  {article.description}
                </p>
              </div>

              {/* RIGHT COLUMN (Image) */}
              {/* RIGHT COLUMN (Image) */}
<div className="md:basis-[42%]">
  <motion.img
    src={article.image}
    alt={article.title}
    className="w-full h-[58vh] md:h-[60vh] object-cover rounded-[24px] md:rounded-[24px]
               shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
    whileHover={{
      scale: 1.05,
      rotate: 1,
      brightness: 1.15,
    }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  />
</div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
