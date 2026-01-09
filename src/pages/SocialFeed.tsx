import { useState } from "react";
import { Heart, ThumbsUp, PartyPopper, MessageCircle, Award, Image } from "lucide-react";
import { mockSocialPosts, SocialPost } from "@/data/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialPostDialog } from "@/components/dashboard/SocialPostDialog";
import { PageLayout } from "@/components/layouts/PageLayout";

const filters = ["All", "Posts", "Kudos", "Photos"];

export default function SocialFeedPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPost, setSelectedPost] = useState<SocialPost | null>(null);

  // Filter posts
  const filteredPosts = activeFilter === "All" 
    ? mockSocialPosts 
    : activeFilter === "Kudos"
      ? mockSocialPosts.filter(post => post.type === "kudos")
      : activeFilter === "Photos"
        ? mockSocialPosts.filter(post => post.imageUrl)
        : mockSocialPosts.filter(post => post.type === "post" && !post.imageUrl);

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return "Yesterday";
    return `${diffDays}d ago`;
  };

  return (
    <PageLayout title="Social Feed">
      <div className="space-y-6">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                activeFilter === filter
                  ? "bg-[hsl(var(--gold))] text-white shadow-md"
                  : "bg-card border border-border/50 text-muted-foreground hover:border-[hsl(var(--gold))]/50 hover:text-foreground"
              }`}
            >
              {filter === "Kudos" && <Award className="h-4 w-4" />}
              {filter === "Photos" && <Image className="h-4 w-4" />}
              {filter}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className={`relative rounded-2xl bg-card/80 backdrop-blur-sm border shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer ${
                post.type === "kudos" 
                  ? "border-[hsl(var(--gold))]/40 hover:border-[hsl(var(--gold))]/60" 
                  : "border-border/50 hover:border-[hsl(var(--turquoise))]/40"
              }`}
            >
              {/* Kudos Badge */}
              {post.type === "kudos" && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--coral))] text-white text-xs font-semibold shadow-lg">
                  <Award className="h-3 w-3" />
                  Kudos
                </div>
              )}

              {/* Author Header */}
              <div className="p-4 pb-2 flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-[hsl(var(--turquoise))]/30">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] text-white text-sm font-semibold">
                    {post.author.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.author.department} • {getTimeAgo(post.createdAt)}
                  </p>
                </div>
              </div>

              {/* Kudos Recipient */}
              {post.type === "kudos" && post.kudosRecipient && (
                <div className="mx-4 mb-2 p-2 rounded-lg bg-gradient-to-r from-[hsl(var(--gold))]/10 to-[hsl(var(--coral))]/10 border border-[hsl(var(--gold))]/20">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 border border-[hsl(var(--gold))]/30">
                      <AvatarImage src={post.kudosRecipient.avatar} alt={post.kudosRecipient.name} />
                      <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--coral))] text-white text-xs font-semibold">
                        {post.kudosRecipient.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs font-semibold text-[hsl(var(--gold))]">Kudos to</p>
                      <p className="text-sm font-medium">{post.kudosRecipient.name}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="px-4 pb-2">
                <p className="text-sm text-foreground/90 line-clamp-3 leading-relaxed">
                  {post.content}
                </p>
              </div>

              {/* Image */}
              {post.imageUrl && (
                <div className="px-4 pb-3">
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt="Post image"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              )}

              {/* Reactions Bar */}
              <div className="px-4 py-3 border-t border-border/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-xs font-medium">{post.reactions.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    <span className="text-xs font-medium">{post.reactions.hearts}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <PartyPopper className="h-4 w-4" />
                    <span className="text-xs font-medium">{post.reactions.celebrates}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs font-medium">{post.comments.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Detail Dialog */}
      <SocialPostDialog 
        post={selectedPost} 
        open={!!selectedPost} 
        onOpenChange={(open) => !open && setSelectedPost(null)} 
      />
    </PageLayout>
  );
}