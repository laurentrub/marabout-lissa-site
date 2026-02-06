-- Create rate limiting trigger for bookings to prevent spam
CREATE OR REPLACE FUNCTION public.check_booking_rate_limit()
RETURNS TRIGGER AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO recent_count
  FROM public.bookings
  WHERE email = NEW.email
    AND created_at > NOW() - INTERVAL '1 hour';
  
  IF recent_count >= 3 THEN
    RAISE EXCEPTION 'Rate limit exceeded: Maximum 3 bookings per hour per email address';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for rate limiting
DROP TRIGGER IF EXISTS enforce_booking_rate_limit ON public.bookings;
CREATE TRIGGER enforce_booking_rate_limit
  BEFORE INSERT ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.check_booking_rate_limit();