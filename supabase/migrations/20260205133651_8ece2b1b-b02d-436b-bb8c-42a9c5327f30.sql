-- Create a secure view that only exposes booking slots (no PII)
CREATE VIEW public.booking_slots
WITH (security_invoker = on) AS
SELECT booking_date, booking_time
FROM public.bookings;

-- Drop the overly permissive public read policy
DROP POLICY IF EXISTS "Public can read bookings for availability" ON public.bookings;

-- Create a new policy that denies direct SELECT access to the base table for anonymous users
-- Only admins can read the full bookings table
CREATE POLICY "Only admins can read bookings"
ON public.bookings
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));