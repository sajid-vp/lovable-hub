import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Heart, ThumbsUp, PartyPopper, MessageCircle, Award, Image } from "lucide-react";
import { mockSocialPosts, SocialPost } from "@/data/mockData";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialPostDialog } from "./SocialPostDialog";

const filters = ["All", "Posts", "Kudos", "Photos"];

export function SocialFeed() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPost, setSelectedPost] = useState<SocialPost | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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

  const getTotalReactions = (reactions: SocialPost["reactions"]) => {
    return reactions.likes + reactions.hearts + reactions.celebrates;
  };

  return (
    <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
          Social Feed
        </h2>
        <div className="flex-1 h-[1.5px] bg-[hsl(var(--light-blue))]/50 rounded-full" />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 sm:gap-2 mb-4 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeFilter === filter
                ? "bg-[hsl(var(--light-blue))] text-white shadow-md"
                : "bg-card border border-border/50 text-muted-foreground hover:border-[hsl(var(--turquoise))]/50 hover:text-foreground"
            }`}
          >
            {filter === "Kudos" && <Award className="h-3 w-3" />}
            {filter === "Photos" && <Image className="h-3 w-3" />}
            {filter}
          </button>
        ))}
      </div>

      {/* Glass Container */}
      <div className="relative p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5">

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 sm:gap-4">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="flex-[0_0_280px] sm:flex-[0_0_300px] min-w-0"
              >
                {/* Post Card */}
                <div 
                  onClick={() => setSelectedPost(post)}
                  className={`relative rounded-2xl bg-background/80 border shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer ${
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
                  <div className="px-4 pb-2 flex-1">
                    <p className="text-sm text-foreground/90 line-clamp-3 leading-relaxed">
                      {post.content}
                    </p>
                  </div>

                  {/* Image (if present) */}
                  {post.imageUrl && (
                    <div className="px-4 pb-3">
                      <div className="relative h-36 rounded-xl overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt="Post image"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )}

                  {/* Reactions & Comments Bar */}
                  <div className="px-4 py-3 border-t border-border/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-[hsl(var(--teal))] transition-colors group/reaction">
                        <ThumbsUp className="h-4 w-4 group-hover/reaction:scale-110 transition-transform" />
                        <span className="text-xs font-medium">{post.reactions.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-[hsl(var(--coral))] transition-colors group/reaction">
                        <Heart className="h-4 w-4 group-hover/reaction:scale-110 transition-transform" />
                        <span className="text-xs font-medium">{post.reactions.hearts}</span>
                      </button>
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors group/reaction">
                        <PartyPopper className="h-4 w-4 group-hover/reaction:scale-110 transition-transform" />
                        <span className="text-xs font-medium">{post.reactions.celebrates}</span>
                      </button>
                    </div>
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-xs font-medium">{post.comments.length}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-muted-foreground" />
        </button>
        
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[hsl(var(--turquoise))] shadow-lg hover:bg-[hsl(var(--teal))] transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>

        {/* View All Link */}
        <div className="flex justify-end mt-4">
          <Link 
            to="/social" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 group"
          >
            View all
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Post Detail Dialog */}
      <SocialPostDialog 
        post={selectedPost} 
        open={!!selectedPost} 
        onOpenChange={(open) => !open && setSelectedPost(null)} 
      />
    </section>
  );
}