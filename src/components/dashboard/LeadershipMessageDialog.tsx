import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LeadershipMessageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadershipMessageDialog({ open, onOpenChange }: LeadershipMessageDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Message from Leadership</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="flex items-start gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
              alt="Chancellor"
              className="w-20 h-20 rounded-xl object-cover shadow-md border border-border/30"
            />
            <div>
              <h3 className="font-bold text-lg">Prof. Dr. Mohammed Al Qasimi</h3>
              <p className="text-sm text-muted-foreground">Chancellor, Sharjah Education Academy</p>
            </div>
          </div>
          
          <h4 className="font-bold text-lg mb-4">Welcome to the New Academic Year</h4>
          
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              Dear Colleagues,
            </p>
            <p>
              As we embark on another exciting academic year, I am delighted to welcome our dedicated educators, 
              staff, and partners to the Sharjah Education Academy community. Together, we continue to shape 
              the future of education in the region through innovation, collaboration, and unwavering commitment 
              to excellence.
            </p>
            <p>
              This year, we have set ambitious goals to further enhance our programs, expand our research 
              initiatives, and strengthen our partnerships with educational institutions worldwide. Our focus 
              remains on developing world-class educators who will inspire and transform the lives of learners 
              across the Emirates.
            </p>
            <p>
              I am particularly proud of our recent achievements, including the launch of the Leadership Lab 
              initiative and our acceptance as institutional members of the World Education Research Association. 
              These milestones reflect our growing influence and recognition in the global education landscape.
            </p>
            <p>
              As we move forward, I encourage each of you to embrace new challenges, seek opportunities for 
              growth, and continue to uphold the values that make SEA a beacon of educational excellence. 
              Your dedication and passion are the driving forces behind our success.
            </p>
            <p>
              Together, let us make this academic year our most impactful yet.
            </p>
            <p className="font-medium text-foreground">
              Warm regards,<br />
              Prof. Dr. Mohammed Al Qasimi<br />
              Chancellor
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
