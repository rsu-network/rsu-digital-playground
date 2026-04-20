-- Whitelist applications table
CREATE TABLE public.whitelist_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  minecraft_username TEXT NOT NULL,
  class_grade TEXT,
  reason TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

ALTER TABLE public.whitelist_applications ENABLE ROW LEVEL SECURITY;

-- Users can view only their own application
CREATE POLICY "Users can view own application"
  ON public.whitelist_applications FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Users can insert only their own application, and only with school email
CREATE POLICY "Users can submit own application with school email"
  ON public.whitelist_applications FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id
    AND lower(email) LIKE '%@rsu-germering.de'
    AND lower((auth.jwt() ->> 'email')) LIKE '%@rsu-germering.de'
  );

-- Users can update their own pending application
CREATE POLICY "Users can update own pending application"
  ON public.whitelist_applications FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id AND status = 'pending')
  WITH CHECK (auth.uid() = user_id);

-- Trigger to keep updated_at fresh
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER whitelist_applications_set_updated_at
  BEFORE UPDATE ON public.whitelist_applications
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();