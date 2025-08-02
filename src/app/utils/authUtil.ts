import { createClient } from '@/app/supabase/supabaseClient';
import { TableNameType } from '../supabase/tableInfo';

/**
 * Supabaseに接続するクライアントインスタンス
 */
const supabase = createClient();

export const selectAll = async <T>(tableName: TableNameType): Promise<T[]> => {
  const { data, error } = await supabase
    .from(tableName)
    .select();

  // ロギング
  console.log(`selectAll('${tableName}'):`, data);
  if (error) {
    throw new Error(`Failed to fetch data from ${tableName}: ${error.message}`);
  }

  return data as T[];
};
