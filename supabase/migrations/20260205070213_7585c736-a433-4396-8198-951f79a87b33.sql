-- Create bookings table for the reservation system
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow public insert (anyone can create a booking)
CREATE POLICY "Anyone can create a booking"
ON public.bookings
FOR INSERT
WITH CHECK (true);

-- Allow public read for their own bookings by email (optional, for future features)
CREATE POLICY "Public can read all bookings"
ON public.bookings
FOR SELECT
USING (true);