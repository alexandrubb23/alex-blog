import { useLayoutEffect } from "react";

const useLazyLoadInjector = (parent = "content-container") => {
  useLayoutEffect(() => {
    const handleImageLoading = () => {
      const images = document.querySelectorAll(`#${parent} img`);

      images.forEach((img) => {
        const imageElement = img as HTMLImageElement;

        // Skip if already processed
        if (imageElement.dataset.lazyProcessed) return;

        // Mark as processed
        imageElement.dataset.lazyProcessed = "true";

        // Store original src
        const originalSrc = imageElement.src;

        // Create a temporary image to get dimensions
        const tempImg = new Image();
        tempImg.onload = () => {
          // Calculate aspect ratio and set container styles to prevent layout shift
          const aspectRatio = tempImg.naturalWidth / tempImg.naturalHeight;
          const containerWidth =
            imageElement.offsetWidth || imageElement.clientWidth || 800; // fallback width
          const calculatedHeight = containerWidth / aspectRatio;

          // Set container dimensions to prevent layout shift
          imageElement.style.width = "100%";
          imageElement.style.height = `${calculatedHeight}px`;
          imageElement.style.objectFit = "cover";
          imageElement.style.display = "block";

          // Set initial loading styles
          imageElement.style.opacity = "0";
          imageElement.style.transform = "scale(0.98)";
          imageElement.style.transition =
            "opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out, height 0.3s ease-out";
          imageElement.style.filter = "blur(20px) brightness(1.1)";
          imageElement.style.willChange = "opacity, transform, filter";
          imageElement.style.backgroundColor = "#f3f4f6"; // subtle placeholder bg

          // Create intersection observer for lazy loading
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const target = entry.target as HTMLImageElement;

                  // Show the element immediately with blur
                  target.style.opacity = "1";

                  // Create a new image to preload
                  const preloadImg = new Image();
                  preloadImg.onload = () => {
                    // Image is fully loaded, now animate to sharp and adjust height
                    requestAnimationFrame(() => {
                      target.style.objectFit = "contain";
                      target.style.transform = "scale(1)";
                      target.style.filter = "blur(0px) brightness(1)";
                      target.style.backgroundColor = "transparent";
                    });
                  };

                  preloadImg.onerror = () => {
                    // Handle error case - show with reduced opacity
                    target.style.opacity = "0.7";
                    target.style.filter = "blur(0px) brightness(0.8)";
                    target.style.transform = "scale(1)";
                    target.style.backgroundColor = "#fee2e2"; // light red for error
                  };

                  // Start loading the full image
                  preloadImg.src = originalSrc;

                  observer.unobserve(target);
                }
              });
            },
            {
              threshold: 0.1,
              rootMargin: "100px 0px", // Start loading when image is 100px away from viewport
            },
          );

          observer.observe(imageElement);
        };

        tempImg.onerror = () => {
          // If we can't determine dimensions, use a reasonable default
          imageElement.style.minHeight = "200px";
          imageElement.style.backgroundColor = "#fee2e2";
          imageElement.style.display = "block";
          imageElement.style.opacity = "0.7";
        };

        // Load the image to get its natural dimensions
        tempImg.src = originalSrc;
      });
    };

    // Run immediately for already loaded content
    handleImageLoading();

    // Also run when new content might be injected
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          handleImageLoading();
        }
      });
    });

    const contentContainer = document.getElementById("content-container");
    if (contentContainer) {
      observer.observe(contentContainer, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useLazyLoadInjector;
