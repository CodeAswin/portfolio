import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useModalStore } from '../store/modalStore';

const Modal = () => {
  const { isOpen, content, closeModal } = useModalStore();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/90" onClick={closeModal} />
      <div className="relative z-10 w-full max-w-5xl bg-black/80 rounded-lg overflow-hidden backdrop-blur-sm border border-white/10">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white/80 hover:text-white"
        >
          <X size={24} />
        </button>
        <div className="p-4">
          {content.type === 'video' ? (
            <div className="relative pt-[56.25%]">
              <iframe
                src={content.url}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={content.url}
              alt={content.title}
              className="w-full h-auto rounded-lg"
            />
          )}
          <h3 className="text-white font-medium mt-4">{content.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Modal