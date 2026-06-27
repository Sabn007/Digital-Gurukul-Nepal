export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "m1",
    name: "Susan Adhikari",
    role: "Lead Educator, CS",
    bio: "Former classroom teacher; designs age-appropriate projects for grades 4–10.",
  },
  {
    id: "m2",
    name: "Aakash Koirala",
    role: "Curriculum Engineer",
    bio: "Builds interactive pathways from block coding to text-based languages.",
  },
  {
    id: "m3",
    name: "Rajat Upreti",
    role: "Student Success Coach",
    bio: "Hosts live help sessions and keeps pacing friendly for busy school weeks.",
  },
];
