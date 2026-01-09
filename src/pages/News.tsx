import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { mockNews } from "@/data/mockData";
import { PageLayout } from "@/components/layouts/PageLayout";

export default function News() {
  return (
    <PageLayout title="Latest News">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNews.map((news) => (
          <Link
            key={news.id}
            to={`/news/${news.id}`}
            className="group relative rounded-2xl bg-card border border-border/50 shadow-md overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                  {news.category}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5">
              <p className="text-sm font-medium text-primary mb-2">
                {new Date(news.date).toLocaleDateString("en-US", { 
                  day: "numeric", 
                  month: "long", 
                  year: "numeric" 
                })}
              </p>
              <h3 className="font-bold text-base line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                {news.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {news.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read more
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
