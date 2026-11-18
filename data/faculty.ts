export type FacultyMember = {
  name: string;
  designation: string;
  department: string;
  qualification: string;
  image: string;
  bio: string;
};

// Placeholder faculty data — replace with actual school faculty information.
export const faculty: FacultyMember[] = [
  {
    name: 'Dr. [Name Placeholder]',
    designation: 'Principal',
    department: 'Administration',
    qualification: 'Ph.D. in Education',
    image: 'https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop',
    bio: 'A visionary educator with over two decades of experience in school leadership, committed to fostering a nurturing and excellence-driven learning environment.',
  },
  {
    name: 'Ms. [Name Placeholder]',
    designation: 'Vice Principal',
    department: 'Administration',
    qualification: 'M.A., B.Ed.',
    image: 'https://images.pexels.com/photos/5212702/pexels-photo-5212702.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop',
    bio: 'Dedicated to student welfare and academic quality, with a strong focus on curriculum development and teacher mentorship.',
  },
  {
    name: 'Mr. [Name Placeholder]',
    designation: 'Senior Teacher',
    department: 'Mathematics',
    qualification: 'M.Sc., B.Ed.',
    image: 'https://images.pexels.com/photos/5212654/pexels-photo-5212654.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop',
    bio: 'Passionate about making mathematics accessible and engaging, with expertise in building strong conceptual foundations.',
  },
  {
    name: 'Ms. [Name Placeholder]',
    designation: 'Senior Teacher',
    department: 'English',
    qualification: 'M.A. (English), B.Ed.',
    image: 'https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop',
    bio: 'An enthusiastic language educator who inspires a love for literature and effective communication in every student.',
  },
  {
    name: 'Mr. [Name Placeholder]',
    designation: 'Science Coordinator',
    department: 'Science',
    qualification: 'M.Sc. (Physics), B.Ed.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop',
    bio: 'Encourages scientific curiosity through hands-on experiments and inquiry-based learning that connects theory to the real world.',
  },
  {
    name: 'Ms. [Name Placeholder]',
    designation: 'Primary Coordinator',
    department: 'Primary',
    qualification: 'B.A., D.Ed.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop',
    bio: 'Specialises in early childhood and primary education, creating a joyful and nurturing classroom for our youngest learners.',
  },
  {
    name: 'Mr. [Name Placeholder]',
    designation: 'Sports Instructor',
    department: 'Physical Education',
    qualification: 'B.P.Ed.',
    image: 'https://images.pexels.com/photos/5212655/pexels-photo-5212655.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop',
    bio: 'Promotes fitness, teamwork and sportsmanship through a diverse programme of athletics, team sports and indoor games.',
  },
  {
    name: 'Ms. [Name Placeholder]',
    designation: 'Arts Teacher',
    department: 'Arts & Music',
    qualification: 'M.F.A.',
    image: 'https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop',
    bio: 'Nurtures creativity and self-expression through visual arts, music and performance, helping students discover their artistic voice.',
  },
];

export type Department = {
  name: string;
  description: string;
  subjects: string[];
  facultyCount: number;
};

export const departments: Department[] = [
  {
    name: 'Mathematics',
    description:
      'Building logical reasoning, problem-solving and analytical skills through a structured and engaging curriculum.',
    subjects: ['Algebra', 'Geometry', 'Mensuration', 'Statistics'],
    facultyCount: 4,
  },
  {
    name: 'Science',
    description:
      'Encouraging curiosity and scientific temper through theory, experiments and project-based learning.',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
    facultyCount: 5,
  },
  {
    name: 'Languages',
    description:
      'Developing strong communication, reading and writing skills across multiple languages.',
    subjects: ['English', 'Hindi', 'Sanskrit', 'Regional Language'],
    facultyCount: 6,
  },
  {
    name: 'Social Studies',
    description:
      'Helping students understand history, geography, civics and their role in society.',
    subjects: ['History', 'Geography', 'Civics', 'Economics'],
    facultyCount: 3,
  },
  {
    name: 'Arts & Music',
    description:
      'Nurturing creativity and self-expression through visual arts, music, dance and drama.',
    subjects: ['Drawing & Painting', 'Vocal Music', 'Instrumental Music', 'Dance'],
    facultyCount: 3,
  },
  {
    name: 'Physical Education',
    description:
      'Promoting fitness, teamwork and sportsmanship through structured physical activities and games.',
    subjects: ['Athletics', 'Team Sports', 'Yoga', 'Indoor Games'],
    facultyCount: 2,
  },
];
