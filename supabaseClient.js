// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://szriiwywxbeugfcrqnyz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6cmlpd3l3eGJldWdmY3Jxbnl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjEyMzEsImV4cCI6MjA2NDEzNzIzMX0.qHob8-wTygI1NOKq7sFuirm9ZB1e1Y9MwSNvuDa5XkY'
)