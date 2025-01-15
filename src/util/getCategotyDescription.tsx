import { galleryCategories } from "@/types/images";

// Utility to get category description
export const getCategoryDescription = (
    category: string
  ): string | undefined => {
    return galleryCategories.find((cat) => cat.category === category)
      ?.description;
  };