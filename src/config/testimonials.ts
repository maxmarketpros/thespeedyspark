import type { TestimonialItem } from "@/types";
import { homepageReviews } from "@/config/reviews";

// Homepage testimonials are fed from real Google reviews (see reviews.ts).
export const testimonials: TestimonialItem[] = homepageReviews.map(
  (review) => ({
    name: review.name,
    title: `Google Review · ${review.relativeDate}`,
    quote: review.text,
    rating: review.rating,
  }),
);
