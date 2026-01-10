import { useState } from "react";
import { format, isSameDay, isSameMonth, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isToday, isSameDay as isDaySame } from "date-fns";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { mockEvents, type Event } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface EventsCalendarDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EventsCalendarDialog({ open, onOpenChange }: EventsCalendarDialogProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Get events for the selected date or current month
  const eventsToShow = selectedDate
    ? mockEvents.filter((event) => isSameDay(new Date(event.date), selectedDate))
    : mockEvents.filter((event) => isSameMonth(new Date(event.date), currentMonth));

  // Get all event dates for highlighting on the calendar
  const eventDates = mockEvents.map((event) => new Date(event.date));

  // Generate calendar days starting from Monday
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleDateClick = (date: Date) => {
    if (selectedDate && isDaySame(selectedDate, date)) {
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
    }
  };

  const hasEventOnDate = (date: Date) => {
    return eventDates.some((eventDate) => isDaySame(eventDate, date));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] p-0 gap-0 overflow-hidden">
        <div className="p-6 pb-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground/80">
            Events Calendar
          </h2>
        </div>

        <div className="flex flex-col md:flex-row px-6 pb-6 gap-8">
          {/* Calendar Section */}
          <div className="flex-1">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6 bg-muted/50 rounded-lg px-2 py-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevMonth}
                className="h-10 w-10 rounded-full bg-[hsl(var(--light-blue))] hover:bg-[hsl(var(--light-blue))]/80 text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <span className="text-lg font-semibold text-foreground">
                {format(currentMonth, "MMMM yyyy")}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNextMonth}
                className="h-10 w-10 rounded-full bg-[hsl(var(--light-blue))] hover:bg-[hsl(var(--light-blue))]/80 text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  className="text-center text-sm font-semibold text-foreground/70 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => {
                const isCurrentMonth = isSameMonth(day, currentMonth);
                const isTodayDate = isToday(day);
                const isSelected = selectedDate && isDaySame(day, selectedDate);
                const hasEvent = hasEventOnDate(day);

                return (
                  <button
                    key={index}
                    onClick={() => handleDateClick(day)}
                    className={cn(
                      "relative h-10 w-full flex items-center justify-center text-sm rounded-full transition-all",
                      !isCurrentMonth && "text-muted-foreground/40",
                      isCurrentMonth && "text-foreground hover:bg-muted/50",
                      isTodayDate && !isSelected && "border-2 border-[hsl(var(--light-blue))] text-[hsl(var(--light-blue))] font-semibold",
                      isSelected && "bg-primary text-primary-foreground font-semibold",
                      hasEvent && !isSelected && !isTodayDate && "font-semibold text-[hsl(var(--teal))]"
                    )}
                  >
                    {format(day, "dd")}
                    {hasEvent && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[hsl(var(--teal))]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Events List Section */}
          <div className="flex-1 min-w-[280px]">
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground/80 mb-4">
              Upcoming Events
            </h3>

            <ScrollArea className="h-[350px]">
              {eventsToShow.length > 0 ? (
                <div className="space-y-3 pr-4">
                  {eventsToShow.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-sm text-muted-foreground">Sorry No Events</p>
                </div>
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
}

function EventCard({ event }: EventCardProps) {
  return (
    <div className="flex gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 border border-border/50 group">
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] text-white rounded-xl px-3 py-2 min-w-[56px] shadow-sm">
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
