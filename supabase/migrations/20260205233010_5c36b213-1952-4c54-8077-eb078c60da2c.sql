-- Drop the broken view
DROP VIEW IF EXISTS public.booking_slots;

-- Create SECURITY DEFINER function to expose only date/time
CREATE OR REPLACE FUNCTION public.get_booked_slots(p_date DATE DEFAULT NULL)
RETURNS TABLE(booking_date DATE, booking_time TEXT)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT b.booking_date, b.booking_time
  FROM public.bookings b
  WHERE (p_date IS NULL OR b.booking_date = p_date)
    AND b.status != 'cancelled';
$$;

-- Grant execute permission to anonymous and authenticated users
GRANT EXECUTE ON FUNCTION public.get_booked_slots(DATE) TO anon, authenticated;