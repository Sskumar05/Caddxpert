-- Migration: Add sub_course column to enquiries table
-- Idempotent script to add sub_course safely

ALTER TABLE enquiries
ADD COLUMN IF NOT EXISTS sub_course TEXT;
