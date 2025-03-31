/**
 * Helper function to load Lottie JSON files properly
 */
export const loadLottieAnimation = async (path: string) => {
  try {
    // Ensure path starts with / for public directory
    const publicPath = path.startsWith('/') ? path : `/${path}`;
    
    const response = await fetch(publicPath);
    
    if (!response.ok) {
      throw new Error(`Failed to load animation: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error loading Lottie animation:", error);
    return null;
  }
};
