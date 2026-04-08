import { VideoCard, type VideoCardItem } from './VideoCard';

type VideoRowCarouselProps = {
  title: string;
  items: VideoCardItem[];
  compact?: boolean;
};

export function VideoRowCarousel({ title, items, compact = true }: VideoRowCarouselProps) {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <div className="flex gap-4 min-w-max pb-2">
          {items.map((item) => (
            <VideoCard key={`${item.title}-${title}`} item={item} compact={compact} className="w-[320px]" />
          ))}
        </div>
      </div>
    </section>
  );
}
