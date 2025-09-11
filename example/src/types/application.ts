/**
 * Application data structure for Firebase
 * This interface defines the schema for storing application submissions
 */

export interface Application {
  // Unique identifier
  id: string;
  
  // Basic Information (Step 2)
  name: string;
  date_of_birth: string; // ISO date string
  country: string;
  city?: string;
  social_link: string;
  
  // Your Story (Step 3)
  story: string;
  profession: string;
  group_type: 'builder' | 'designer' | 'business' | 'founder' | 'investor' | 'student' | 'other';
  
  // Projects & Interests (Step 4)
  has_project: 'yes' | 'ideas' | 'learning';
  project_description?: string;
  looking_for: string[]; // Array of selected options
  can_offer: string[]; // Array of selected options
  
  // Participation (Step 5)
  discord_username: string;
  communication_style: 'active' | 'weekly' | 'lurker' | 'events';
  time_commitment: '1-2' | '3-5' | '5-10' | '10+';
  additional_notes?: string;
  
  // System fields
  status: 'pending' | 'approved' | 'rejected';
  submitted_at: string; // ISO timestamp
  reviewed_at?: string; // ISO timestamp
  reviewed_by?: string; // Admin user ID
}

/**
 * Create initial application object
 */
export const createEmptyApplication = (): Partial<Application> => ({
  status: 'pending',
  submitted_at: new Date().toISOString(),
  looking_for: [],
  can_offer: [],
});