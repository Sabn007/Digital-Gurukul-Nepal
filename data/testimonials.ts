export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  school: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I finally get how websites are built. The lessons feel like a game, not homework.",
    name: "Aisha K.",
    role: "Grade 8",
    school: "Kathmandu Valley School",
  },
  {
    id: "t2",
    quote:
      "Scratch week was my favorit. It was a great experience and I learned a lot.",
    name: "Saroj Gurung",
    role: "Grade 10",
    school: "Himalaya Secondary",
  },
  
];
