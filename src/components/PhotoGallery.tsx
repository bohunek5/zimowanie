import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface GalleryPhoto {
  readonly src: string;
  readonly alt: string;
  readonly title: string;
  readonly category: string;
  readonly featured: boolean;
}

interface PhotoGalleryProps {
  readonly photos: readonly GalleryPhoto[];
  readonly compact?: boolean;
}

export function PhotoGallery({ photos, compact = false }: Readonly<PhotoGalleryProps>) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visiblePhotos = compact ? photos.filter((photo) => photo.featured).slice(0, 6) : photos;

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') setActiveIndex((current) => current === null ? null : (current - 1 + visiblePhotos.length) % visiblePhotos.length);
      if (event.key === 'ArrowRight') setActiveIndex((current) => current === null ? null : (current + 1) % visiblePhotos.length);
    };
    document.body.classList.add('lightbox-open');
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeIndex, visiblePhotos.length]);

  const move = (step: number) => setActiveIndex((current) => current === null ? null : (current + step + visiblePhotos.length) % visiblePhotos.length);

  return (
    <>
      <div className={`photo-gallery ${compact ? 'photo-gallery--compact' : ''}`}>
        {visiblePhotos.map((photo, index) => (
          <button className="photo-gallery__item" type="button" key={photo.src} onClick={() => setActiveIndex(index)} aria-label={`Powiększ zdjęcie: ${photo.title}`}>
            <img src={`${import.meta.env.BASE_URL}${photo.src.replace(/^\//, '')}`} alt={photo.alt} loading={index > 1 ? 'lazy' : 'eager'}/>
            <Maximize2/>
          </button>
        ))}
      </div>
      {activeIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Podgląd zdjęcia" onClick={() => setActiveIndex(null)}>
        <button className="lightbox__close" type="button" onClick={() => setActiveIndex(null)} aria-label="Zamknij"><X/></button>
        <button className="lightbox__arrow lightbox__arrow--left" type="button" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Poprzednie zdjęcie"><ChevronLeft/></button>
        <figure onClick={(event) => event.stopPropagation()}>
          <img src={`${import.meta.env.BASE_URL}${visiblePhotos[activeIndex].src.replace(/^\//, '')}`} alt={visiblePhotos[activeIndex].alt}/>
        </figure>
        <button className="lightbox__arrow lightbox__arrow--right" type="button" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Następne zdjęcie"><ChevronRight/></button>
      </div>}
    </>
  );
}
