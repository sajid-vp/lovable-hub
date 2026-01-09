import { Heart, ThumbsUp, PartyPopper, MessageCircle, Award, Send } from "lucide-react";
import { SocialPost } from "@/data/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SocialPostDialogProps {
  post: SocialPost | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SocialPostDialog({ post, open, onOpenChange }: SocialPostDialogProps) {
  if (!post) return null;

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 overflow-hidden bg-card/95 backdrop-blur-xl border-border/50">
        <DialogHeader className="sr-only">
          <DialogTitle>Social Post by {post.author.name}</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[80vh]">
          <div className="p-6">
            {/* Kudos Badge */}
            {post.type === "kudos" && (
              <div className="mb-4 flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--gold))]/20 to-[hsl(var(--coral))]/20 border border-[hsl(var(--gold))]/30 w-fit">
                <Award className="h-4 w-4 text-[hsl(var(--gold))]" />
                <span className="text-sm font-semibold text-[hsl(var(--gold))]">Recognition Post</span>
              </div>
            )}

            {/* Author Header */}
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-12 w-12 border-2 border-[hsl(var(--turquoise))]/30">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] text-white font-semibold">
                  {post.author.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {post.author.department} • {getTimeAgo(post.createdAt)}
                </p>
              </div>
            </div>

            {/* Kudos Recipient */}
            {post.type === "kudos" && post.kudosRecipient && (
              <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-[hsl(var(--gold))]/10 to-[hsl(var(--coral))]/10 border border-[hsl(var(--gold))]/20">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-[hsl(var(--gold))]/30">
                    <AvatarImage src={post.kudosRecipient.avatar} alt={post.kudosRecipient.name} />
                    <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--coral))] text-white text-sm font-semibold">
                      {post.kudosRecipient.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-semibold text-[hsl(var(--gold))] uppercase tracking-wide">Kudos to</p>
                    <p className="font-medium">{post.kudosRecipient.name}</p>
                    <p className="text-xs text-muted-foreground">{post.kudosRecipient.department}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Content */}
            <p className="text-foreground/90 leading-relaxed mb-4">
              {post.content}
            </p>

            {/* Image */}
            {post.imageUrl && (
              <div className="mb-4 rounded-xl overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt="Post image"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Reactions Bar */}
            <div className="flex items-center gap-4 py-3 border-y border-border/30 mb-4">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/50 hover:bg-[hsl(var(--teal))]/10 text-muted-foreground hover:text-[hsl(var(--teal))] transition-all group">
                <ThumbsUp className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{post.reactions.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/50 hover:bg-[hsl(var(--coral))]/10 text-muted-foreground hover:text-[hsl(var(--coral))] transition-all group">
                <Heart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{post.reactions.hearts}</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/50 hover:bg-[hsl(var(--gold))]/10 text-muted-foreground hover:text-[hsl(var(--gold))] transition-all group">
                <PartyPopper className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{post.reactions.celebrates}</span>
              </button>
            </div>

            {/* Comments Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-semibold text-muted-foreground">
                  {post.comments.length} {post.comments.length === 1 ? "Comment" : "Comments"}
                </span>
              </div>

              {post.comments.length > 0 ? (
                <div className="space-y-3">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3 p-3 rounded-xl bg-background/50">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                        <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] text-white text-xs font-semibold">
                          {comment.author.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold">{comment.author.name}</p>
                          <span className="text-xs text-muted-foreground">
                            {getTimeAgo(comment.createdAt)}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/80 mt-0.5">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No comments yet. Be the first to comment!
                </p>
              )}

              {/* Add Comment Input */}
              <div className="flex gap-2 pt-2">
                <Input 
                  placeholder="Write a comment..." 
                  className="flex-1 bg-background/50 border-border/50 focus:border-[hsl(var(--turquoise))]/50"
                />
                <Button size="icon" className="bg-[hsl(var(--turquoise))] hover:bg-[hsl(var(--teal))]">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}