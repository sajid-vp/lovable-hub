import { useParams, Link } from "react-router-dom";
import { Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PageLayout } from "@/components/layouts/PageLayout";
import { mockNews } from "@/data/mockData";

export default function NewsDetail() {
  const { id } = useParams();
  const news = mockNews.find((n) => n.id === id);

  if (!news) {
    return (
      <PageLayout title="Article not found">
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {news.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{news.title}</h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="gradient-primary text-primary-foreground">
                  {news.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{news.author}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(news.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </header>

        {/* Featured image */}
        <div className="aspect-video rounded-xl overflow-hidden mb-8">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-6">{news.excerpt}</p>
          
          {/* Placeholder content - in real app, this would come from news.content */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2>Key Highlights</h2>
          <ul>
            <li>Important point about the announcement</li>
            <li>Another significant detail to note</li>
            <li>Additional information for context</li>
          </ul>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </article>
    </PageLayout>
  );
}
