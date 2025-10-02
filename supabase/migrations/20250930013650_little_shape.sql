/*
  # Add INSERT policy for users table

  1. Security
    - Add policy for authenticated users to insert their own data during registration
    - This allows new users to create their profile after successful authentication

  2. Changes
    - Create policy "Users can insert own data" on users table
    - Policy allows INSERT operations where auth_id matches the authenticated user's ID
*/

-- Add INSERT policy for users table to allow profile creation during registration
CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth_id = auth.uid());