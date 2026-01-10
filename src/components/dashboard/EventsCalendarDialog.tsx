import { useState } from "react";
import { format, isSameDay, isSameMonth } from "date-fns";
import { ChevronLeft, ChevronRight, Clock, MapPin, Calendar as CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { mockEvents, type Event } from "@/data/mockData";

interface EventsCalendarDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EventsCalendarDialog({ open, onOpenChange }: EventsCalendarDialogProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Get events for the selected date
  const eventsForSelectedDate = selectedDate
    ? mockEvents.filter((event) => isSameDay(new Date(event.date), selectedDate))
    : [];

  // Get all event dates for highlighting on the calendar
  const eventDates = mockEvents.map((event) => new Date(event.date));

  // Get all events in the current month for the list view
  const eventsInMonth = mockEvents.filter((event) =>
    isSameMonth(new Date(event.date), currentMonth)
  );

  const colors = [
    "from-[hsl(var(--teal))] to-[hsl(var(--turquoise))]",
    "from-primary to-[hsl(var(--light-blue))]",
    "from-[hsl(var(--turquoise))] to-[hsl(var(--green))]",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50">
          <DialogTitle className="flex items-center gap-2 text-lg font-bold">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Events Calendar
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row">
          {/* Calendar Section */}
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-border/50">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              className="rounded-xl pointer-events-auto"
              modifiers={{
                hasEvent: eventDates,
              }}
              modifiersClassNames={{
                hasEvent: "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-[hsl(var(--teal))]",
              }}
              classNames={{
                day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground font-bold",
              }}
            />
          </div>

          {/* Events List Section */}
          <div className="flex-1 flex flex-col min-h-[300px] md:min-h-[400px]">
            {/* Header showing selected date or month */}
            <div className="px-4 md:px-6 py-3 bg-muted/30 border-b border-border/50">
              <h3 className="font-semibold text-sm text-foreground/80">
                {selectedDate
                  ? format(selectedDate, "EEEE, MMMM d, yyyy")
                  : format(currentMonth, "MMMM yyyy")}
              </h3>
            </div>

            <ScrollArea className="flex-1 px-4 md:px-6 py-4">
              {selectedDate ? (
                // Events for selected date
                eventsForSelectedDate.length > 0 ? (
                  <div className="space-y-3">
                    {eventsForSelectedDate.map((event, index) => (
                      <EventCard key={event.id} event={event} colorClass={colors[index % colors.length]} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CalendarIcon className="h-12 w-12 text-muted-foreground/30 mb-3" />
                    <p className="text-sm text-muted-foreground">No events scheduled</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      Select another date or browse the month
                    </p>
                  </div>
                )
              ) : (
                // All events in month
                eventsInMonth.length > 0 ? (
                  <div className="space-y-3">
                    {eventsInMonth.map((event, index) => (
                      <EventCard key={event.id} event={event} colorClass={colors[index % colors.length]} showDate />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CalendarIcon className="h-12 w-12 text-muted-foreground/30 mb-3" />
                    <p className="text-sm text-muted-foreground">No events this month</p>
                  </div>
                )
              )}
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface EventCardProps {
  event: Event;
  colorClass: string;
  showDate?: boolean;
}

function EventCard({ event, colorClass, showDate }: EventCardProps) {
  return (
    <div className="flex gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 border border-transparent hover:border-[hsl(var(--turquoise))]/20 hover:shadow-md group">
      <div className={cn(
        "flex flex-col items-center justify-center bg-gradient-to-br text-white rounded-xl px-3 py-2 min-w-[56px] group-hover:scale-105 transition-transform shadow-lg",
        colorClass
      )}>
        <span className="text-xs font-medium opacity-90">
          {format(new Date(event.date), "MMM")}
        </span>
        <span className="text-xl font-bold">
          {format(new Date(event.date), "d")}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm truncate group-hover:text-[hsl(var(--teal))] transition-colors">
          {event.title}
        </h4>
        <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-[hsl(var(--teal))]" />
            {event.time}
          </span>
          <span className="flex items-center gap-1 truncate">
            <MapPin className="h-3 w-3 text-[hsl(var(--turquoise))]" />
            <span className="truncate">{event.location}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
